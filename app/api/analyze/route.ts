// app/api/analyze/route.ts
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { image } = await req.json();

    if (!image || typeof image !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid image field." },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction:
        'Analyze this image of a speaker. Return ONLY a valid JSON object with the structure: { "sentiment": "String", "score": Number, "advice": "String" }. No markdown.',
    });

    const result = await model.generateContent([
      {
        inlineData: {
          mimeType: "image/jpeg",
          data: image,
        },
      },
    ]);

    const rawText = result.response.text();
    const cleanText = rawText.replace(/```json/g, "").replace(/```/g, "").trim();

    let parsed: { sentiment: string; score: number; advice: string };

    try {
      parsed = JSON.parse(cleanText);
    } catch {
      return NextResponse.json(
        { error: "Gemini returned non-parseable JSON.", raw: rawText, clean: cleanText },
        { status: 502 }
      );
    }

    return NextResponse.json(parsed);
  } catch (err: unknown) {
    // 🔥 THIS WILL PRINT THE EXACT REASON IT IS FAILING 🔥
    console.error("\n==== AURA CRASH REPORT ====");
    console.error(err);
    console.error("===========================\n");

    const message = err instanceof Error ? err.message : "Internal server error.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}