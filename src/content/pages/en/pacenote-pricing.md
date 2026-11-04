---
title: Pacenote pricing
lead: "The app is free. You pay only for the AI: about $7 to $13 a month for 10 calls, or $0 on your own Mac. What each provider costs and how well each model does."
parent: pacenote
facts:
  - { k: The app, v: "Free, open source" }
  - { k: One 30-min call, v: "$0.73 to $1.33" }
  - { k: 10 calls a month, v: "$7 to $13" }
  - { k: Team of 10, v: "$73 to $133 a month" }
  - { k: Prices as of, v: "4 November 2026" }
---

## In short

<div class="tiles pn-price" style="--min: 200px;">
<div class="card card--tile"><p class="card__tag">Claude API</p><p class="pn-price__big">$13</p><p class="card__text">a month for 10 calls. $1.33 a call. The best quality.</p></div>
<div class="card card--tile card--accent"><p class="card__tag">OpenAI API</p><p class="pn-price__big">$7</p><p class="card__text">a month for 10 calls. $0.74 a call. Close to Claude.</p></div>
<div class="card card--tile"><p class="card__tag">Gemini API</p><p class="pn-price__big">$7</p><p class="card__text">a month for 10 calls. $0.73 a call. Good as a plan B.</p></div>
<div class="card card--tile"><p class="card__tag">Seats you already have</p><p class="pn-price__big">~$1</p><p class="card__text">a month. Claude or ChatGPT plan, tips on a key.</p></div>
</div>

Pacenote does three jobs: **Preparation** before the call, **Live tips** during it and **After the call** (notes, follow-up, memory). Each job picks its own provider and model in Settings > AI, so a call costs the sum of three parts.

## Which to choose

<div class="tiles" style="--min: 320px;">
<div class="card card--tile"><h3 class="card__title">The best quality</h3><p class="card__text">Claude defaults: Sonnet for the brief and notes, Haiku for the tips. The fullest briefs and the best-structured notes. $13 a month.</p></div>
<div class="card card--tile card--accent"><h3 class="card__title">Almost the same, half the price</h3><p class="card__text">OpenAI defaults: Sol for the brief and notes, Luna for the tips. The judges put Sol level with Sonnet, and Luna gave the most useful tips. $7 a month.</p></div>
<div class="card card--tile"><h3 class="card__title">Already paying for seats</h3><p class="card__text">Preparation and notes come from your Claude or ChatGPT plan, tips run on a key. About $1 a month extra.</p></div>
<div class="card card--tile"><h3 class="card__title">Gemini, as a plan B</h3><p class="card__text">Cheap preparation and notes, but its briefs promise things nobody agreed and its live tips are almost silent. Turn it on as the fallback.</p></div>
</div>

## Side by side

The default models of each provider, one 30-minute call. The score is the average of two blind judges: briefs and notes out of 10, tips out of 5.

| | Claude | OpenAI | Gemini | On your Mac |
|---|---|---|---|---|
| **Preparation** | Sonnet<br>**$0.77** · 8.0 | Sol<br>**$0.40** · 8.0 | Flash<br>**$0.15** · 4.0 | Gemma<br>**$0** |
| **Live tips** | Haiku<br>**$0.11** · 3.9 | Luna<br>**$0.06** · 4.0 | Flash-Lite<br>**$0.47** · 4.7, 3 tips | **$0**, cards from your files |
| **After the call** | Sonnet<br>**$0.45** · 7.0 | Sol<br>**$0.28** · 7.0 | Flash<br>**$0.11** · 6.5 | Gemma<br>**$0** |
| **One call** | **$1.33** | **$0.74** | **$0.73** | **$0** |
| **10 calls a month** | **$13** | **$7** | **$7** | **$0** |
| **Team of 10, 10 calls each** | **$133** | **$74** | **$73** | **$0** |

## Every model, job by job

Price and score for one 30-minute call. Rows marked <code>~</code> are estimated from measured tokens; the rest is measured.

### Preparation

| Model | One call | Score | How it does |
|---|---|---|---|
| Claude Sonnet 5.5 (default) | $0.77 | 8.0 | The fullest brief: every open item, risk and ready phrase. Long. |
| Claude Opus 5.5 | $2.57 | | Not in this test; in earlier runs the most careful brief. |
| GPT-6.1 Sol (OpenAI default) | $0.40 | 8.0 | Most careful with facts and dates, catches calendar mismatches. Wordy. |
| GPT-6 Luna | $0.02 | 7.0 | A solid checklist at almost no cost, a few wrong owners. Failed twice on a larger context. |
| Gemini 3.8 Flash (Gemini default) | $0.15 | 4.0 | Readable, but its ready-to-say lines promise things nobody agreed. |
| Gemini 3.5 Flash-Lite | $0.09 | 5.0 | Covers the main items, but turns plans into done deals. |
| Gemini 4 Argon | | | Stops at its output limit before it finishes. Not usable yet. |
| Gemma 4 26B on your Mac | $0 | | About two thirds of a Sonnet brief. |

### Live tips

| Model | One call | Score | How it does |
|---|---|---|---|
| Claude Haiku 5.5 (default) | $0.11 | 3.9 | 16 tips in 30 minutes, steady and on time; a few repeat what was just said. |
| Claude Sonnet 5.5 | $0.59 | | Not in this test. |
| Claude Opus 5.5 | $1.50 | | Not in this test. |
| GPT-6 Luna (OpenAI default) | $0.06 | 4.0 | The most tips (27 in 30 minutes), on time; one named the wrong owner. |
| GPT-6.1 Terra | ~$0.45 | | Not in this test. |
| GPT-6.1 Sol | ~$0.90 | | Not in this test. |
| Gemini 3.5 Flash-Lite (Gemini default) | $0.47 | 4.7 | Very precise but almost silent: 3 tips in 30 minutes. |
| On your Mac | $0 | | Fact cards from your files only, no model-written tips. |

### After the call

| Model | One call | Score | How it does |
|---|---|---|---|
| Claude Sonnet 5.5 (default) | $0.45 | 7.0 | The best structure and balance; missed one deadline. |
| Claude Opus 5.5 | $0.90 | | Not in this test. |
| Claude Haiku 5.5 | ~$0.02 | | Not in this test. |
| GPT-6.1 Sol (OpenAI default) | $0.28 | 7.0 | The most complete, with tables of actions; very long. |
| GPT-6 Luna | $0.02 | 5.0 | Covers almost everything, but repeated the whole note twice. |
| Gemini 3.8 Flash (Gemini default) | $0.11 | 6.5 | Clean, dated action items; overstates a few estimates as settled. |
| Gemini 3.5 Flash-Lite | $0.04 | 6.0 | Short and practical; a few wrong dates. |
| Gemini 4 Argon | | | Stops at its output limit before it finishes. |
| Gemma 4 26B on your Mac | $0 | | Not in this test. |

<details>
<summary>Token prices behind these numbers</summary>

Per 1M tokens, input / output, 4 November 2026: Claude Haiku 5.5 $0.10 / $0.50, Sonnet 5.5 $2 / $10, Opus 5.5 $4 / $20; GPT-6 Luna $0.10 / $0.50, GPT-6.1 Terra $1 / $5, GPT-6.1 Sol $2 / $10; Gemini 3.5 Flash-Lite $0.30 / $2.50, Gemini 3.8 Flash $0.75 / $3.75, Gemini 4 Argon $2 / $10. Gemini prices go up: Argon from 1 December 2026, Flash from 1 January 2027, about twice.

</details>

## Ready-made setups

On an API key, billed per token.

| Setup | One call | 10 calls | Team of 10 |
|---|---|---|---|
| **Claude, default:** Sonnet brief, Haiku tips, Sonnet notes | $1.33 | **$13** | **$133** |
| Claude, thrifty: the same, Haiku notes | $0.90 | $9 | $90 |
| Claude, best quality: Opus brief and notes, Sonnet tips | $4.06 | $41 | $406 |
| **OpenAI, default:** Sol brief, Luna tips, Sol notes | $0.74 | **$7** | **$74** |
| OpenAI, thrifty: the same, Luna notes | $0.48 | $5 | $48 |
| OpenAI, Sol for everything | ~$1.58 | ~$16 | ~$158 |
| **Gemini, default:** Flash brief, Flash-Lite tips, Flash notes | $0.73 | **$7** | **$73** |
| Gemini, thrifty: Flash-Lite for everything | $0.60 | $6 | $60 |
| Brief and notes on your Mac, Haiku tips on a key | $0.11 | $1.10 | $11 |
| Brief and notes on your Mac, Luna tips on a key | $0.06 | $0.60 | $6 |
| Everything on your Mac, no key | $0 | $0 | $0 |

## With a plan you already have

On a Claude or ChatGPT account the plan pays for preparation and notes. Live tips still run best on a key: an hour of a call is hundreds of requests, and an account answers a few seconds later. So a plan setup is a seat plus $0.11 a call (Haiku) or $0.06 (Luna). Gemini works through a key only.

| Plan setup | Seat per person | 10 calls | Team of 10 |
|---|---|---|---|
| Claude Pro, Haiku tips on a key | $20 ($17 a year) | ~$21 | ~$211 |
| Claude Team standard seat, Haiku tips on a key | $25 ($20 a year), from 2 seats | ~$26 | ~$261 |
| ChatGPT Plus, Luna tips on a key | $20 | ~$21 | ~$206 |
| ChatGPT Business, Luna tips on a key | $25 ($20 a year), from 2 seats | ~$26 | ~$256 |
| Plan only, no key, tips through the account | the seat price | $20 and up | $200 and up |
| **Seats the team already pays for** | $0 extra | **~$1** Claude, ~$0.6 ChatGPT | **~$11** Claude, ~$6 ChatGPT |

**Account or key?** A seat costs the same however many calls you make, a key costs per call. A $20 seat plus tips is cheaper than a Claude key from about 16 calls a month, and cheaper than an OpenAI or Gemini key from about 30. At 10 calls a month the key wins, so take a seat only when you already have one. Claude and OpenAI do not publish plan limits in tokens: a very heavy month may hit the limit, and the app then switches to the key by itself.

## A longer or shorter call

The preparation costs about the same for any length; tips and notes grow with the minutes.

| Call length | Claude, default | OpenAI, default | Gemini, default |
|---|---|---|---|
| 15 minutes | $1.05 | $0.57 | $0.44 |
| 30 minutes | $1.33 | $0.74 | $0.73 |
| 60 minutes | $1.89 | $1.08 | $1.31 |

## Known limits

- **Gemini 4 Argon** stops at its output limit before finishing a brief or notes. Use Flash for now.
- **Gemini live tips** cost more than Luna or Haiku: in our test Gemini's automatic cache never kicked in, so every request paid full input price.
- **GPT-6 Luna** finished a brief on a small project and failed twice on a larger one. For preparation, Sol is the safe choice.
- **Limits in Settings:** a soft and a hard limit per call and a monthly cap, so a bad month cannot run away. At the hard limit only the local layer works.
- **Fallbacks:** if Claude does not answer, preparation and after-call jobs run on the local model. Gemini can be the plan B for every job (Settings > AI > Automatic switching).

## How we measured

<details>
<summary>Method, test call and judges</summary>

- **Claude** live tips are counted from 15 recorded calls of 25 to 52 minutes (22 to 26 October 2026), every request's tokens at current prices. The Claude preparation is measured on five runs of one real preparation; notes on Claude at about $0.19 per 15-minute call, with the follow-up and memory on top.
- **OpenAI and Gemini** ran on an invented 30-minute call (4 November 2026), every model in turn, with Claude on the same call as the yardstick. Their figures are their measured ratio to Claude applied to Claude's figures for a real call. Live tips were replayed in real time.
- **Quality:** two judges, Claude Opus 5.5 and GPT-6.1 Sol, scored every brief, note and tip without knowing which model wrote it. Two judges from two vendors, so neither favours its own models. All models caught every question asked in the call except Gemini (Flash 30 of 31, Flash-Lite 29 of 31).
- **A small test:** one call and two AI judges. Read the scores as a direction, not a ranking to the decimal. A call with many questions has more tips and costs more; the numbers keep a reserve of about a quarter.
- **Prices** change: check the vendors' pages before you budget. The app keeps its own price table and shows what each call really cost.

</details>

More on the jobs themselves: [how Pacenote works](/pacenote/details/).
