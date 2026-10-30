---
description: "Catalog a pile of hardware from photos with Zom's HaRM AI Assist: with any AI app by copy and paste, or straight from HaRM with Claude, ChatGPT, Gemini or a local model."
---

# AI Assist

AI Assist turns photos of your hardware into inventory: an AI identifies each item, reads its labels, looks up what it cost new and what it's worth now, and suggests next steps. You check everything before it's added.

Open it from **+ New > AI Assist: photos to inventory**, **Spare Parts > AI Assist**, or **AI Assist here** on a location or rack page (then everything goes there).

![AI Assist, with the AI's results ready to add](/img/harm/ai-assist.png)

::: tip On a phone
Open AI Assist where the hardware is (**+ New > AI Assist**, or **AI Assist here** on a location) and take the photos right there.

<div class="phone-shots">

![AI Assist on a phone](/img/harm/phone-ai-assist.png)

</div>
:::

## 1. Where is it?

Optionally pick the location, holder and spot for the whole batch, add a hint for the AI ("drives pulled from the R515s"), and choose how new devices are marked (Spare by default).

## 2. Get the AI's answer

**Send photos straight from HaRM** (if you set up a service, below): **Add photos** (up to 10; they're shrunk first to keep it quick and cheap), then **Ask**. It can take a minute while the AI searches for prices.

**Or copy and paste with any AI app:** **Copy prompt**, paste it into ChatGPT, Claude, Gemini or another app, attach your photos, and turn on web search so it can look up prices. Then paste the AI's whole reply back into HaRM and press **Read reply**.

## 3. Check and add

Each item shows what the AI found, its confidence (high, medium or low), the value it found, and its to-dos. Fix names and quantities, untick anything you don't want, and use the camera button to scan a serial the AI couldn't read. Serials already in HaRM are flagged and unticked.

**Add** creates the devices and parts where you chose. The AI's research (values, sources, labels it read) is saved as a note on each item, and its to-dos (scan the service tag, test the drives) become tasks.

Each item gets **Original price**, **Current value** and **Value checked on**, which you can update any time in its form.

## Setting up a service (optional)

**Settings > AI Assist** lets HaRM send photos to an AI service directly:

| Service | Web search for prices | What you need |
|---|---|---|
| **Claude** (Anthropic) | Yes | An API key from console.anthropic.com |
| **ChatGPT** (OpenAI) | Yes | An API key from platform.openai.com |
| **Gemini** (Google) | Yes | An API key from aistudio.google.com |
| **Other / local** | Depends on the model | The service's address: Ollama (`http://localhost:11434/v1`), LM Studio (`http://localhost:1234/v1`), or OpenRouter (`https://openrouter.ai/api/v1`) |

- Leave **Model** blank for the recommended one, or type any model your account has that can see images.
- The API key is stored encrypted in your vault, one per service. Usage is billed by the service, usually a few cents per batch of photos.
- If a model can't search the web, HaRM asks once more without it and tells you the values are the AI's own estimates.

::: tip Privacy
Only the photos you add and HaRM's prompt are sent, and only to the service you picked. A local model (Ollama, LM Studio) keeps them on your own network. Logins and other secrets are never sent.
:::

Values are estimates: check the sources saved with each item before you rely on them, and check serials against the label.

## Related

- [Parts and storage](./parts-and-storage)
- [Scanning and labels](./scanning-and-labels)
- [Settings](./settings)
