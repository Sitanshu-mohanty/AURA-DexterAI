<div align="center">

# 👁️ AURA: Adaptive Unified Response Agent
**Beyond Words. Real-Time Human Intelligence.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-Live_on_Vercel-success?style=for-the-badge&logo=vercel)](https://aura-dexter-ai.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Hackathon](https://img.shields.io/badge/Status-Hackathon_Ready-blue?style=for-the-badge&logo=google-messages)](#)

*A proactive, multimodal AI Heads-Up Display (HUD) that decodes human emotion and provides real-time strategic coaching during high-stakes digital interactions.*

<br>
</div>

## 🚀 The Vision

Digital communication is a sensory deprivation chamber. **80% of human persuasion is non-verbal**, yet current meeting AI tools are entirely reactive—they transcribe your call and tell you why you lost the deal *after* the meeting is over.

**AURA** is a navigator, not a historian. By fusing Edge-based computer vision with Cloud-based multimodal reasoning, AURA reads the room at 60FPS and feeds you live, course-correcting strategies while you are still speaking. 

---

## 🛠️ Technology Stack

We engineered a **Zero-Latency Hybrid Architecture** to maximize speed while keeping API inference costs at near-zero. 

| Category | Technology | Function |
| :--- | :--- | :--- |
| **Frontend Core** | ![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) | High-performance, SSR-capable UI deployed on Vercel. |
| **Edge AI (Vision)** | ![MediaPipe](https://img.shields.io/badge/MediaPipe-00BFFF?style=for-the-badge&logo=google&logoColor=white) ![Computer Vision](https://img.shields.io/badge/Computer_Vision-FF6F00?style=for-the-badge&logo=eye&logoColor=white) | Client-side tracking of 52 facial blendshapes at 60 FPS. |
| **Cloud Intelligence**| ![Gemini API](https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=googlebard&logoColor=white) | Multimodal fusion (WPM, Vision, Context) via **Gemini 2.5 Flash**. |
| **Deployment** | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)| Global serverless edge deployment. |

---

## ✨ Core Capabilities

### 1. ⚡ Zero-Latency Edge Tracking
AURA uses local Google MediaPipe models to track micro-expressions directly in the browser. This provides real-time emotional tracking (Interest, Receptivity, Resistance) with absolute privacy and zero server lag.

### 2. 🚨 Autonomous "Red Alert" Intervention
If the audience's "Resistance" threshold breaches **75%**, AURA's engine overrides manual controls and autonomously fires a strategic lifeline (e.g., *"Pivot to ROI-first framing now"*), saving the deal before it's lost.

### 3. 🎯 Tactical Command Center
Instead of constantly spamming the cloud AI (which is expensive and slow), AURA uses a tiered reasoning system:
* **[📊] Analyze:** Instant telemetry of the current "vibe".
* **[💡] Strategy:** Generates an immediate, actionable pivot.
* **[⚠️] Roadblocks:** Scans for hidden skepticism.

### 4. 🎙️ Rhythm of Influence (WPM Logic)
AURA constantly audits your Words Per Minute (WPM). If you rush your pitch due to nerves, AURA signals you to slow down. If you become monotonous, it advises a dynamic shift.

---

## 📈 The Business Case (SaaS Arbitrage)
AURA isn't just a prototype; it's designed with scalable unit economics. 
* **Starter Tier:** Runs locally via Edge AI + Google Gemini Free Tier (**$0 acquisition/inference cost**).
* **Pro/Elite Tiers:** Premium users tap into unlimited cloud analysis, yielding a **>99% gross margin** per interaction through API arbitrage.

---

## 💻 Running AURA Locally

Want to test the HUD on your local machine?

**1. Clone the repository**
```bash
git clone [https://github.com/Sitanshu-mohanty/AURA-DexterAI.git](https://github.com/Sitanshu-mohanty/AURA-DexterAI.git)
cd AURA-DexterAI
**2. Install dependencies**
```bash
npm install
**3. Configure Environment Variables**
Create a `.env.local` file in the root directory and add your Google Gemini API key:
```env
GEMINI_API_KEY=your_gemini_api_key_here
**4. Fire up the HUD**
```bash
npm run dev
Navigate to `http://localhost:3000` (or `http://localhost:3000/aura.html` based on routing) and grant camera permissions to initialize the Edge AI.
## 👥 Team Dexter AI
Built for the Future of AI Agents. 
* **Sitanshu sekhar Mohanty** - Backend , AI Engineer & product strategy lead
* **Subranshu** - Frontend & Intelligence Engineer

<br>

<div align="center">
  <i>"Make every word count."</i>
</div>
