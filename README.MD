# 🦾 Autobot Agent

An intelligent trading agent designed for the **Autonomous Apes Hackathon**, built to execute or advise on crypto trades in a simulated DeFi environment.

Autobot interprets natural language commands like:

> “Buy me 10 USDC worth of ETH”

It evaluates real-time market data and determines whether to **execute** the trade or **advise the user to hold**, offering a rule-based, risk-aware trading experience.

---

## 🚀 Tech Stack

| Tech              | Purpose                                                                                             |
| ----------------- | --------------------------------------------------------------------------------------------------- |
| **Mastra** 🏆     | Agent framework for workflows, tools, and memory — used to build, run, and manage the trading logic |
| TypeScript        | Core language for all logic and tooling                                                             |
| Alpha Vantage API | Fetching SMA (Simple Moving Average) data                                                           |
| Recall API        | Balance, Price feeds and trade execution endpoints                                                  |

---

## 🏆 Sponsor Tech: **Mastra**

This project is **built entirely on [Mastra](https://mastra.ai)** — Mastra powers:

- 🧠 Agent memory and state management via `@mastra/memory`
- 🔧 Tool creation via `createTool` for fetching market data and placing trades
- 🤖 Agent logic and decision-making via `Agent`
- ⚙️ Workflow orchestration using `createWorkflow` and `createStep`

> **Every major component of this agent — from conversation flow to tool execution — is powered by Mastra.**

---

## 🧠 Features

- Accepts **natural language trade instructions**
- Uses **real-time price and SMA data**
- Only executes trades when **conditions are favorable**
- Modular and maintainable architecture with Mastra tools and workflows
- Supports **hold advisory** for less optimal trade conditions

---

## 📁 Project Structure

---

├──
├── tools/
│ ├── autobot_market.ts # Tool for fetching price and SMA
│ └── autobot_trade.ts # Tool for executing trades
├── agents/
│ └── autobot_agent.ts # Mastra-powered agent definition
├── workflows/
│ └── autobot_workflow.ts # Workflow for user-agent interaction
├── index/
│ └── memory.ts # Persistent agent memory config

---

## ⚙️ Setup Instructions

1. **Clone the repo**

```bash
git clone https://github.com/olamilekan5162/autobot.git
cd autobot
```
