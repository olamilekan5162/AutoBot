# Autobot Agent

An intelligent trading agent designed for the **Autonomous Apes Hackathon**, built to execute or advise on crypto trades in a simulated DeFi environment.

Autobot interprets natural language commands like:

> “Buy me 10 USDC worth of ETH”

It evaluates real-time market data and determines whether to **execute** the trade or **advise the user to hold**, offering a rule-based, risk-aware trading experience.

🚀 Live Demo: [Autobot Agent](https://coin-scribe.netlify.app)

---

## 🧠 Features

- Accepts **natural language trade instructions**
- Uses **real-time price and SMA data**
- Only executes trades when **conditions are favorable**
- Modular and maintainable architecture with Mastra tools and workflows
- Supports **hold advisory** for less optimal trade conditions

---

## 📹 Demo Video

[AutoBot Agent video demo](https://youtu.be/f1JIoVhcK4Y?si=-PN2ryXuYm06Le1o)

---

## 🚀 Tech Stack

| Tech              | Purpose                                                                                             |
| ----------------- | --------------------------------------------------------------------------------------------------- |
| **Mastra**        | Agent framework for workflows, tools, and memory — used to build, run, and manage the trading logic |
| TypeScript        | Core language for all logic and tooling                                                             |
| Alpha Vantage API | Fetching SMA (Simple Moving Average) data                                                           |
| Recall API        | Balance, Price feeds and trade execution endpoints                                                  |

---

## 🏆 Sponsor Tech: **Mastra**

This project is **built entirely with [Mastra](https://mastra.ai) on [Recall](https://recall.network)** — Mastra powers:

- 🧠 Agent memory and state management via `@mastra/memory`
- 🔧 Tool creation via `createTool` for fetching market data and placing trades
- 🤖 Agent logic and decision-making via `Agent`
- ⚙️ Workflow orchestration using `createWorkflow` and `createStep`

> **Every major component of this agent — from conversation flow to tool execution — is powered by Mastra on Recall.**

---

## ⚙️ Setup Instructions

1. **Clone the repo**

```bash
# Clone repository
git clone https://github.com/olamilekan5162/Autobot.git
cd Autobot

# Install dependencies
npm install
```

2. **Environment Variables**

Create a .env file in the root with the following variables:

```env
GOOGLE_GENERATIVE_AI_API_KEY=your_google_generative_ai_api_key
RECALL_API_KEY=your_recall_api_key
RECALL_API_URL=your_recall_api_url
ALPHAVANTAGE_API_KEY=your_alphavantage_api_key
```

1. **Run Application**

```bash
npm run dev
```

visit `http://localhost:4111/agents/autobotAgent/chat` to access the agent dashboard

---

## 📁 Project Structure

```
src/
└── mastra/
    ├── agents/
    │   └── autobot_agent.ts       # Defines the Mastra agent logic and instructions
    ├── tools/
    │   ├── autobot_market.ts      # Tool for fetching price, SMA, and wallet balance
    │   └── autobot_trade.ts       # Tool for executing trades
    ├── workflows/
    │   └── autobot_workflow.ts    # Workflow orchestrating user-agent interaction
    └── index.ts                   # Entry point that registers the agent and workflow
```

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/name`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature/name`)
5. Open Pull Request

---

**Built for the Autonomous Apes Hackathon hosted by [Recall](https://recall.network)**
