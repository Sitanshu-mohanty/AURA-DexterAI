import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY ?? "");

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();

    const intent: string = body.intent ?? "summary";
    const transcript: string = body.transcript ?? "No context.";
    const image: string | undefined = body.image;
    const target: string = body.target ?? "face";
    const wpm: number = body.wpm ?? 0;

    // ── Dynamic task resolution ────────────────────────────────────────────
    // ── Dynamic task resolution ────────────────────────────────────────────
    let task: string;

    if (intent === "report") {
      task = "You are a communication coach. The logs provided are the real-time AI feedback notes generated during the user's live presentation. Based on these notes, write a final Performance Scorecard addressing the user directly (e.g., 'You maintained good eye contact...'). Include an overall performance score out of 100, 2 specific Strengths, and 2 precise Areas for Improvement. Do NOT review the AI's performance; review the USER.";
    } else if (target === "slides") {
      const slideTasks: Record<string, string> = {
        summary: "Analyze this presentation slide. Summarize its visual design, clarity, and impact.",
        strategy: "Give me one specific design or communication tactic to improve this slide.",
        alert: "Identify any visual red flags on this slide (e.g., clutter, bad contrast, too much text)."
      };
      task = slideTasks[intent] ?? slideTasks["summary"];
    } else {
      // default: "face" or any unrecognised target
      const faceTasks: Record<string, string> = {
        summary: "Analyze my posture and face. Summarize my vibe.",
        strategy: "Give me one advanced tactic to improve my influence based on this photo.",
        alert: "Identify any body language red flags visible here."
      };
      task = faceTasks[intent] ?? faceTasks["summary"];
    }

    // ── Prompt construction ────────────────────────────────────────────────
    const textPrompt =
      `Act as AURA AI. ` +
      `TASK: ${task} ` +
      `LOGS: "${transcript}" ` +
      `Return ONLY raw JSON: {"sentiment": "", "score": <1-100>, "advice": "<2_SENTENCES>"}`;

    // ── Build Gemini content parts ─────────────────────────────────────────
    type Part =
      | { text: string }
      | { inlineData: { mimeType: string; data: string } };

    const parts: Part[] = [];

    // Attach image only when intent is NOT "report"
    if (intent !== "report" && image) {
      parts.push({
        inlineData: {
          mimeType: "image/jpeg",
          data: image,
        },
      });
    }

    parts.push({ text: textPrompt });

    // ── Gemini API call ────────────────────────────────────────────────────
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent({ contents: [{ role: "user", parts }] });

    const rawText: string = result.response.text();

    // ── JSON extraction via regex ──────────────────────────────────────────
    const match = rawText.match(/\{[\s\S]*\}/);

    if (!match) {
      return NextResponse.json({ advice: "Analysis failed." });
    }

    const parsed = JSON.parse(match[0]);

    // Surface wpm in the response if it was supplied, for caller convenience
    if (wpm > 0) {
      parsed.wpm = wpm;
    }

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("[analyze] Gemini error:", error);

    return NextResponse.json(
      {
        sentiment: "OFFLINE",
        score: 0,
        advice: "API Quota Reached. Wait 60s.",
      },
      { status: 500 }
    );
  }
}