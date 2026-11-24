---
description: "Optional AI help in Zom's Modzilla: setting up Claude, OpenAI, Gemini, OpenRouter, Ollama and others, what's sent, and privacy."
---

# AI help (optional)

**Ask AI…** on a profile asks an AI service about it: why a game won't start, what a crash log means, which mod to blame. It's off until you set it up, and nothing is ever sent without you pressing **Send**.

## Setting it up

**Settings › AI help**: pick a service, a model, and paste your key from that service.

| Service | Key from | Notes |
|---|---|---|
| **Claude** (Anthropic) | console.anthropic.com | Several models to choose from |
| **OpenAI** | platform.openai.com | |
| **Google Gemini** | aistudio.google.com | |
| **OpenRouter** | openrouter.ai | Many models with one key |
| **Groq**, **Mistral** | their consoles | |
| **Ollama**, **LM Studio** | no key | Runs on your own computer: nothing leaves it |
| **Anything else** | its own site | Any service with an OpenAI-style chat API: give its address |

Each service has its own prices and privacy rules. The key is kept in a file only you can read (`ai-key`), never in settings, reports or the page.

## What's sent

When you open **Ask AI…**, Zom's Modzilla gathers what it knows about the profile:

- the game, the profile's mods in load order,
- the [conflict check](./conflict-check),
- what the mod loaders logged, and how the last runs went.

Your home folder, user name and any keys are taken out first, and **you see all of it** before sending. You can add your own question.

## The answer

The answer streams in as it's written. When it suggests something the app can do (switch off a mod, find the problem mod, play without mods, check again, open mod settings), it shows as a button **you** choose to press, and switching a mod off has **Undo**.

The AI can be wrong. It's told to say when it isn't sure and to stick to what's in the data, but check what it suggests against the mod's page.
