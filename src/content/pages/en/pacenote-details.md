---
title: How Pacenote works
lead: "What triggers a tip, what you see on the call and after it, what it costs and how to install it."
doc: https://github.com/bodco/live-tips/blob/main/docs/en/live-tips.md
parent: pacenote
facts:
  - { k: Runs on, v: "Mac, Apple Silicon" }
  - { k: Speech, v: "Whisper, on your Mac" }
  - { k: Fact cards, v: "1-2 s, under your camera" }
  - { k: Writes to, v: "Notion and your project folder" }
  - { k: Version, v: "0.9.2" }
---

| At a glance | |
|---|---|
| **When it speaks** | A question to you, your turn, a new request, a promised date. Silence otherwise. |
| **What you see** | One card under your camera: the fact and a phrase to say. |
| **After the call** | Decisions, what is on you, a Notion page and a follow-up draft. |
| **Sales calls** | General sales, BANT, SPICED or MEDDIC, a Deal tab, HubSpot on your click. |
| **Privacy** | Audio is transcribed on your Mac. Only text goes to Claude. |
| **Cost** | The app is free. A 30-min call on an API key is about $1.33 (brief, tips and notes), about $13 a month for 10 calls. [Full table](#ai-and-costs) |

<p class="smallprint"><b>Jump to:</b> <a href="#when-it-speaks">Tips</a> · <a href="#presenting-and-rehearsal">Presenting</a> · <a href="#after-the-call">After the call</a> · <a href="#sales-calls">Sales</a> · <a href="#ai-and-costs">Cost</a> · <a href="#privacy">Privacy</a> · <a href="#requirements">Requirements</a> · <a href="#install-about-15-minutes">Install</a></p>

## When it speaks

A tip carries a number, a date, a name, a status or a ready phrase. Or it is not shown.

<div class="tiles" style="--min: 240px;">
<div class="card card--tile"><h3 class="card__title">A question to you</h3><p class="card__text">The answer as a ready sentence, with the fact and its source.</p></div>
<div class="card card--tile"><h3 class="card__title">Your turn</h3><p class="card__text">Someone calls you by name: your update, ready to read.</p></div>
<div class="card card--tile"><h3 class="card__title">A new request</h3><p class="card__text">Looks like a change request: "do not agree now" and a phrase that buys time.</p></div>
<div class="card card--tile"><h3 class="card__title">A promised date</h3><p class="card__text">It never suggests hours. The assignee gives the estimate.</p></div>
<div class="card card--tile"><h3 class="card__title">No owner yet</h3><p class="card__text">A decision was discussed, but nobody owns it or dates it.</p></div>
<div class="card card--tile"><h3 class="card__title">A contradiction</h3><p class="card__text">Something said against a recorded decision.</p></div>
</div>

Fact cards from your prep show in 1-2 s, before Claude is even asked. Claude adds the rest.

## What you see

2 to 5 short lines: the gist first, then a phrase in the language of the call.

<div class="grid" style="--min: 280px;">
<div class="tip"><span class="card__tag">New request</span><b>New request. Do not agree now.</b><span>"Good idea. I will write it down. We will check it and come back to you."</span></div>
<div class="tip"><span class="card__tag">Inaccurate</span><b>Release is 15.10, not 10.10</b><span>"Sorry, a small correction. The release date is October 15."</span><span><i>decision of 30.09</i></span></div>
</div>

## The tips window

A small window right under the camera, so your eyes stay on the client.

<div class="tiles" style="--min: 240px;">
<div class="card card--tile"><p class="card__icon">💬</p><h3 class="card__title">One answer on top</h3><p class="card__text">The card that answers "what do I say now", in a large font.</p></div>
<div class="card card--tile"><p class="card__icon">↺</p><h3 class="card__title">Earlier tips</h3><p class="card__text">One line each. A click brings one back; Back to latest returns.</p></div>
<div class="card card--tile"><p class="card__icon">☰</p><h3 class="card__title">Agenda bar</h3><p class="card__text">Your checklist marks itself as you go. 5 min before the end: what is not raised.</p></div>
<div class="card card--tile"><p class="card__icon">⌕</p><h3 class="card__title">Ask a question</h3><p class="card__text">Typing searches your facts at once. Enter asks Claude.</p></div>
<div class="card card--tile card--accent"><p class="card__icon">🆘</p><h3 class="card__title">HELP NOW</h3><p class="card__text">Talking and cannot type? One click: the best facts, then the next sentence to say.</p></div>
<div class="card card--tile"><p class="card__icon">▭</p><h3 class="card__title">Compact mode</h3><p class="card__text">A strip with the timer and the phrase. Hidden from screen sharing (checked in Google Meet).</p></div>
</div>

<details>
<summary>Shortcuts, meeting types and reliability</summary>

- **Shortcuts:** Control-Option-H HELP NOW, -P pause, -M mic, -T compact, -L proactive tips. They work while the meeting app has the focus; change them in Settings > General > Shortcuts.
- **Reads the meeting by itself:** team, client or your manager on the other side; a discussion or you presenting. Correct it in Call settings.
- **Interviews:** observer, interviewer, or coach when you are the one being asked.
- **Tips on or off** per call, and a **Transcript** call type that only records and transcribes.
- **Recording problems are a state, not a tip:** after 30 s without audio, a red strip with the reason, Mic and Call levels and one action.
- **Bluetooth headsets:** the headset stays with the call app; Pacenote records you from the built-in mic.
- **Slow hour at Claude:** the same request goes again after 2-3 s, and the first good answer wins.
- **Stealth:** the window is hidden from screen sharing by default (checked in Google Meet; test your call app once). Switch it off to demo.

</details>

## Presenting and rehearsal

<div class="tiles" style="--min: 240px;">
<div class="card card--tile"><p class="card__tag">Prepare</p><h3 class="card__title">Your talk, slide by slide</h3><p class="card__text">Attach PDF, PowerPoint, Keynote or an outline. Each slide is a card you edit.</p></div>
<div class="card card--tile card--accent"><p class="card__tag">On the call</p><h3 class="card__title">Presentation mode</h3><p class="card__text">A timer per slide, Plan · Elapsed · Behind, one quiet advice when you run late.</p></div>
<div class="card card--tile"><p class="card__tag">Before</p><h3 class="card__title">Rehearsal</h3><p class="card__text">Run through with timers, then 4 tough questions from Claude playing the client.</p></div>
</div>

- **Fits the time?** A banner says so before the call; each slide has a budget and a one-sentence short version.
- **Follows you:** Keynote or PowerPoint (app), or your speech: "Move to slide N?"
- **Colleagues' slides:** no tips while they talk, then one "your turn" card.
- **Apply to talk:** rehearsal proposes shorter text and better answers. You review them first.

<details>
<summary>Slide owners, Prepare again and shortcuts</summary>

- **Who presents what:** click a slide or type "5-9 Ann", "1, 14 all", "10-13 me".
- **Prepare again:** Keep my edits (default) or Rewrite everything. Restore previous version and Review changes show what moved.
- **Shortcuts while presenting:** Control-Option-S presentation mode, Control-Option-Left and Right, Control-Option-= adds 30 s.
- **Skill and app** use the same timing, advice and "Move to slide N?"; following Keynote or PowerPoint is app only.
- Rehearsal records nothing.

</details>

## Before the call

<div class="tiles" style="--min: 240px;">
<div class="card card--tile"><h3 class="card__title">Your calendars</h3><p class="card__text">Google and Microsoft through macOS. A click fills the title, time and people.</p></div>
<div class="card card--tile"><h3 class="card__title">Prepare</h3><p class="card__text">A brief, fact cards and your speech, point by point, from your project files.</p></div>
<div class="card card--tile"><h3 class="card__title">Up next</h3><p class="card__text">Back-to-back calls: prepare the next one while you talk, switch with one question.</p></div>
</div>

- **Regular meetings** start from the last call's setup, with what was not raised last time.
- **No time to prepare?** Start anyway: tips when you are addressed, HELP NOW and a search over the project folder.
- **Open it early:** recording starts when the other side has spoken for about 5 s, or when you press Start.

<details>
<summary>Where the settings are</summary>

- **Calendars:** add accounts in System Settings > Internet Accounts, then Settings > Integrations > Calendars > Connect calendars and tick the ones with your calls. Read only: Pacenote never changes an event.
- **Prepare again:** once a brief is ready, Prepare becomes Prepare again and keeps the previous brief.
- **Brief freshness:** "Brief is 2 days old · 3 changes since", with Refresh for only the changed sections.
- **Start tips when a call begins:** with Zoom, Teams or a browser call on, Pacenote offers once. It never records by itself.
- **Where the preparation runs:** Settings > AI > Preparation.

</details>

## After the call

<div class="tiles" style="--min: 230px;">
<div class="card card--tile card--accent"><h3 class="card__title">After-call panel</h3><p class="card__text">Decisions, what is on you and open questions, right in the tips window.</p></div>
<div class="card card--tile"><h3 class="card__title">Notion page</h3><p class="card__text">Added to the meeting's page, or a new one. Transcript as a sub-page.</p></div>
<div class="card card--tile"><h3 class="card__title">Follow-up draft</h3><p class="card__text">Rewrite it in your words. Copy or Open in Mail, never sent for you.</p></div>
<div class="card card--tile"><h3 class="card__title">Learns from corrections</h3><p class="card__text">Fix the same thing on 2 calls, and every next prep and draft gets it.</p></div>
</div>

- **Full call notes** after every call: topics, questions and answers, numbers. The next preparation reads them.
- **Edit the call page** (Command-E): decisions, items on you and on them, open questions and risks. The call's Notion page updates at once.
- **On you:** your open promises from every call, overdue first. Your Notion tasks can join the list (off by default); a tick sets Notion, Undo for 8 s.
- **Search calls** (Command-F): ask in plain words, get a quote and jump to the moment.
- **Transcribe a recording:** a file or a link (Google Drive, YouTube, Vimeo, Dropbox) becomes a transcript on your Mac, voices told apart. Save it to a project or add it to Notion.

<details>
<summary>How the Notion page is found</summary>

- Add a Notion token in **Settings > Integrations > Notion** and choose one Meetings, Tasks and Risks database for all projects. The project is a property of each page.
- Pacenote looks in your Meetings database for a page dated within 20 minutes of the call start, so a Notion AI Meeting Notes page counts.
- Found: it appends a **Pacenote** section. Not found: it creates a page with a real date in the title.
- Missed it? **Send last call to Notion** in the menu bar.
- Ask for the follow-up in plain words: "drop the pricing line", "shorter".

</details>

## Sales calls

Sales is an option on top of any call type: Start call > Options > Sales. The default per project is in Settings > Projects.

| Method | What Pacenote follows |
|---|---|
| General sales (default) | the client's pain, the value for them, objections, a next step with a date |
| BANT | Budget, Authority, Need, Timeline |
| SPICED | Situation, Pain, Impact, Critical event, Decision |
| MEDDIC | Metrics, Economic buyer, Decision criteria, Decision process, Identify pain, Champion |

<div class="tiles" style="--min: 230px;">
<div class="card card--tile"><p class="card__tag">Before</p><h3 class="card__title">Sales brief</h3><p class="card__text">Company, from CRM, where we are, likely objections, questions to ask, the goal of this call.</p></div>
<div class="card card--tile card--accent"><p class="card__tag">During</p><h3 class="card__title">Deal tab and tips</h3><p class="card__text">Each criterion unknown, partly or known. Tips for objections, pain, next step, competitor, buying signal.</p></div>
<div class="card card--tile"><p class="card__tag">After</p><h3 class="card__title">Sales section and scorecard</h3><p class="card__text">Criteria known, your talk share, open questions. On the call page and in Notion.</p></div>
</div>

- **Answer cards:** short ready answers per project, edited in Settings > Projects.
- **Next step reminder:** 5 minutes before the end, if no dated step was agreed.
- **Company web search:** only the company's name or domain is searched. Switch it off in Settings > AI.

<details>
<summary>Connect HubSpot</summary>

- In HubSpot: Settings > Development > Keys > Service Keys > Create service key, named Pacenote, with the scopes listed in Settings > Integrations > HubSpot (Copy list).
- In Pacenote: Settings > Integrations > HubSpot, paste the key, Save, Test. The key stays in the macOS Keychain.
- **Before the call:** Refresh in Start call reads the company, its open deal, contacts, the last 10 activities and open tasks into a local snapshot next to the brief.
- **After the call:** Update HubSpot on the call page. A note, deal fields and a follow-up task, each with a checkbox; Apply writes, Undo works for 8 s.
- Nothing is written without a click. The transcript goes into the note only if you turn that on.

</details>

## Who is speaking

- A new voice gets a "Who is speaking?" card with a quote and names from your project. Nothing is named without you.
- Voices are remembered per project: your team everywhere, clients per project. Nothing is saved on a Public call.
- Similar colleagues stay apart, and Settings > Voice library merges two entries of one person.

<details>
<summary>How voices are matched</summary>

- The library learns only from a speaker you named, and only from lines that sound like that person.
- How close a voice must be grows with the number of lines behind it, so one noisy line does not decide.
- Renaming a speaker to another known person moves the old person's lines back.
- Voice prints stay on your Mac, and naming voices never delays a tip.

</details>

## AI and costs

**In short.** The app is free; you pay only for the AI. With API keys a person who makes 10 calls a month spends about **$7 to $13**, a team of 10 about **$70 to $130** a month, depending on the provider. If the team already has Claude or ChatGPT seats, preparation and notes come from the plan and the extra cost is about **$1 per person** a month (live tips on a key). Fully on your own Macs it is **$0**, with a thinner brief and no AI-written tips.

Pacenote does three jobs, and each one picks its own provider and model in Settings > AI: **Preparation** (before the call), **Live tips** (during it) and **After the call** (notes, follow-up, memory). That is why the cost is a sum of three parts.

### What each part costs

One call of 30 minutes. Preparation and notes do not depend much on the length of the call, live tips do.

| Part | Model | Price per 1M tokens, in / out | One call |
|---|---|---|---|
| Preparation | Claude Sonnet 5.5 (default) | $2 / $10 | $0.77 |
| | Claude Opus 5.5 | $4 / $20 | $2.57 |
| | GPT-6.1 Sol (OpenAI default) | $2 / $10 | $0.40 |
| | GPT-6 Luna | $0.10 / $0.50 | $0.02, unreliable on a large context |
| | Gemini 3.8 Flash (Gemini default) | $0.75 / $3.75 | $0.15 |
| | Gemini 3.5 Flash-Lite | $0.30 / $2.50 | $0.09 |
| | Gemini 4 Argon | $2 / $10 | stops at its output limit, not usable yet |
| | Gemma 4 26B on your Mac | free | $0 |
| Live tips | Claude Haiku 5.5 (default) | $0.10 / $0.50 | $0.11 |
| | Claude Sonnet 5.5 | $2 / $10 | $0.59 |
| | Claude Opus 5.5 | $4 / $20 | $1.50 |
| | GPT-6 Luna (OpenAI default) | $0.10 / $0.50 | $0.06 |
| | GPT-6.1 Terra | $1 / $5 | ~$0.45 |
| | GPT-6.1 Sol | $2 / $10 | ~$0.90 |
| | Gemini 3.5 Flash-Lite (Gemini default) | $0.30 / $2.50 | $0.47 |
| | On your Mac | free | $0, cards and facts from your files only, no model-written tips |
| After the call | Claude Sonnet 5.5 (default) | $2 / $10 | $0.45 |
| | Claude Opus 5.5 | $4 / $20 | $0.90 |
| | Claude Haiku 5.5 | $0.10 / $0.50 | ~$0.02 |
| | GPT-6.1 Sol (OpenAI default) | $2 / $10 | $0.28 |
| | GPT-6 Luna | $0.10 / $0.50 | $0.02 |
| | Gemini 3.8 Flash (Gemini default) | $0.75 / $3.75 | $0.11 |
| | Gemini 3.5 Flash-Lite | $0.30 / $2.50 | $0.04 |
| | Gemma 4 26B on your Mac | free | $0 |

Gemini prices go up: Argon from 1 December 2026, Flash from 1 January 2027 (about twice the price). Gemini live tips cost more than Luna or Haiku because in our test Gemini's automatic cache never kicked in, so every request paid full input price.

### How each model does

Scores from a blind test on one invented 30-minute call (4 November 2026). Two judges, Claude Opus 5.5 and GPT-6.1 Sol, scored every output without knowing which model wrote it; the score is their average. Briefs and notes are out of 10, live tips out of 5.

| Part | Model | Score | In short |
|---|---|---|---|
| Preparation | Claude Sonnet 5.5 | 8.0 | The fullest brief: every open item, risk and ready phrase. Long. |
| | GPT-6.1 Sol | 8.0 | Most careful with facts and dates, catches calendar mismatches. Wordy. |
| | GPT-6 Luna | 7.0 | A solid checklist at almost no cost, a few wrong owners. Failed twice on a larger context. |
| | Gemini 3.5 Flash-Lite | 5.0 | Covers the main items, but turns plans into done deals. |
| | Gemini 3.8 Flash | 4.0 | Readable, but its ready-to-say lines promise things nobody agreed. |
| | Gemini 4 Argon | n/a | Stopped at its output limit before finishing. |
| Live tips | GPT-6 Luna | 4.0 | The most tips (27 in 30 min), on time; one tip named the wrong owner. |
| | Claude Haiku 5.5 | 3.9 | Fewer tips (16), steady and timely; a few repeat what was just said. |
| | Gemini 3.5 Flash-Lite | 4.7 | Very precise but almost silent: 3 tips in 30 minutes. |
| After the call | Claude Sonnet 5.5 | 7.0 | Best structure and balance; missed one deadline. |
| | GPT-6.1 Sol | 7.0 | The most complete, with tables of actions; very long. |
| | Gemini 3.8 Flash | 6.5 | Clean, dated action items; overstates a few estimates as settled. |
| | Gemini 3.5 Flash-Lite | 6.0 | Short and practical; a few wrong dates. |
| | GPT-6 Luna | 5.0 | Covers almost everything, but repeated the whole note twice. |
| | Gemini 4 Argon | n/a | Stopped at its output limit before finishing. |

All models caught every question asked in the call except Gemini (Flash 30 of 31, Flash-Lite 29 of 31). One call and two AI judges is a small test: read the scores as a direction, not a ranking to the decimal.

### Ready-made setups

Billed per token (API key). One call, one person with 10 calls a month, and a team of 10 people with 10 calls each.

| Setup | One call | 1 person, 10 calls | 10 people, 10 calls each |
|---|---|---|---|
| **Claude API, default:** Sonnet brief, Haiku tips, Sonnet notes | $1.33 | **$13** | **$133** |
| Claude API, thrifty: the same, Haiku notes | $0.90 | $9 | $90 |
| Claude API, best quality: Opus brief and notes, Sonnet tips | $4.06 | $41 | $406 |
| **OpenAI API, default:** Sol brief, Luna tips, Sol notes | $0.74 | **$7** | **$74** |
| OpenAI API, thrifty: the same, Luna notes | $0.48 | $5 | $48 |
| OpenAI API, Sol for everything | ~$1.58 | ~$16 | ~$158 |
| **Gemini API, default:** Flash brief, Flash-Lite tips, Flash notes | $0.73 | **$7** | **$73** |
| Gemini API, thrifty: Flash-Lite for everything | $0.60 | $6 | $60 |
| Brief and notes on your Mac, Haiku tips on a key | $0.11 | $1.10 | $11 |
| Brief and notes on your Mac, Luna tips on a key | $0.06 | $0.60 | $6 |
| Everything on your Mac, no key | $0 | $0 | $0 |

With a Claude or ChatGPT account, preparation and notes are not billed per token: the plan pays. Live tips still run best on a key (an hour of a call is hundreds of requests, and an account answers a few seconds later), so a plan setup is a seat plus $0.11 per call (Haiku) or $0.06 (Luna). Gemini works through a key only.

| Plan setup | Seat per person | 1 person, 10 calls | 10 people, 10 calls each |
|---|---|---|---|
| Claude Pro, Haiku tips on a key | $20 ($17 a year) | ~$21 | ~$211 |
| Claude Team standard seat, Haiku tips on a key | $25 ($20 a year), from 2 seats | ~$26 | ~$261 |
| ChatGPT Plus, Luna tips on a key | $20 | ~$21 | ~$206 |
| ChatGPT Business, Luna tips on a key | $25 ($20 a year), from 2 seats | ~$26 | ~$256 |
| Plan only, no key, tips through the account | the seat price | $20 and up | $200 and up |
| **Seats the team already pays for** | $0 extra | **~$1** (Claude), ~$0.6 (ChatGPT) | **~$11** (Claude), ~$6 (ChatGPT) |

**Account or key?** A seat costs the same however many calls you make; a key costs per call. At about $1.33 a call, a $20 seat plus tips is cheaper than a Claude key from roughly 16 calls a month; against the OpenAI or Gemini key at about $0.74 a call, from roughly 30. At 10 calls the key is cheaper, so take a seat only when you already have one or make more calls. Claude and OpenAI do not publish plan limits in tokens, so a very heavy month on a plan may hit the limit; the app then switches to the other way by itself.

### A longer or shorter call

Preparation is about the same for any length; live tips and notes grow with the minutes.

| Call length | Claude API, default | OpenAI API, default | Gemini API, default |
|---|---|---|---|
| 15 minutes | $1.05 | $0.57 | $0.44 |
| 30 minutes | $1.33 | $0.74 | $0.73 |
| 60 minutes | $1.89 | $1.08 | $1.31 |

### How these numbers were made

- **Live tips** on Claude are counted from 15 recorded calls of 25 to 52 minutes (22 to 26 October 2026): every request's tokens, taken at the vendors' current prices. The earlier test on one 14-minute recording (Haiku $0.05, Sonnet $0.27, Opus $0.71) gives close numbers, and where the two differ the table takes the higher one.
- **Preparation** on Claude is measured (five runs of one real preparation, section "What a preparation costs" in the guide). Notes on Claude are measured at about $0.19 per 15-minute call; the follow-up and memory are added on top.
- **OpenAI and Gemini** are measured (4 November 2026) on an invented 30-minute call run through every model in turn, with Claude on the same call as the yardstick: the OpenAI and Gemini figures are their measured ratio to Claude applied to Claude's figures for a real call. Live tips were replayed in real time; OpenAI ran with its prompt cache on. Only the rows marked ~ are estimated from measured tokens.
- **A real call varies:** a call with many questions has more tips and costs more. The numbers have a reserve of about a quarter. Settings has a soft and a hard limit per call and a monthly cap, so a bad month cannot run away.
- Prices: Claude, OpenAI and Gemini API, 4 November 2026; Claude plans, 4 November 2026; ChatGPT plans, 16 October 2026. They change, so check the vendors' pricing pages before you budget. The app keeps its own price table and shows what each call really cost.

### Limits and fallbacks

- **Limits:** a soft and a hard limit per call and a monthly cap. At the hard limit only the local layer works.
- **Plan B:** if Claude does not answer, preparation and after-call jobs run on the local model. Live tips stay on Claude. Gemini can be turned on as a plan B for every job (Settings > AI > Automatic switching).
- **Auto switch:** when the key or the plan is out, the job goes the other way, then back.
- **Optional add-ons:** Ollama, the local Gemma model (about 16 GB) and the link downloader install only when you choose, never during a call.

## App or skill

<p class="cmp-legend"><span><span class="mk mk--yes" aria-hidden="true">✓</span>yes</span><span><span class="mk mk--part" aria-hidden="true">◐</span>partial</span><span><span class="mk mk--no" aria-hidden="true">✗</span>no</span></p>

| | Pacenote app | Skill in Cowork |
|---|---|---|
| Runs in | the menu bar, one click | your Cowork chat |
| Claude | ✓ your plan or API key, per job | ✓ your Claude plan, no key |
| Nothing to keep open | ✓ | ✗ chat busy for the whole call |
| Mid-call lookups | ◐ prep, call context, project folder | ✓ Notion, tracker, project files |
| Spending limits | ✓ per call and per month | ◐ your plan's limits |
| Slides follow Keynote or PowerPoint | ✓ | ✗ speech only |
| Setup | ✓ Setup window installs it all | ◐ about 15 min, steps below |

Best together: prepare in Cowork, and the app picks the prep up when the titles match.

<div class="btns" style="margin: 8px 0 8px;">
<a class="btn btn--primary" href="https://github.com/bodco/live-tips/releases/latest/download/Pacenote.dmg" download>Download Pacenote for Mac (.dmg)</a>
<a class="btn btn--ink" href="https://github.com/bodco/live-tips/releases/latest/download/live-tips.skill" download>Download the skill (.skill)</a>
</div>

<p class="smallprint">First launch: System Settings > Privacy & Security > Open Anyway. Check the download with the <a href="https://github.com/bodco/live-tips/releases/latest/download/SHA256SUMS.txt">SHA-256 checksums</a>: <code>shasum -a 256 ~/Downloads/Pacenote.dmg</code>.</p>

## Privacy

- **Audio is not stored.** Phrases go straight to a text file; audio lives only in memory.
- **Local Whisper.** Client calls never go to a transcription service.
- **2 channels.** Your mic and the call are recorded apart, so the transcript knows when you speak.
- **Your languages, set in advance.** More accurate than auto-detect.
- **Voice prints stay on your Mac.** In many countries they are biometric data: tell people.
- **Transcripts stay in your project folder.** Keep them out of public repositories.
- **Nothing goes to the client.** The Meetings page is internal; drafts wait for you.
- **HubSpot only on your click.** The key stays in the Keychain; the transcript is off by default.
- **Company web search:** only the company's name or domain, never your files.
- **Local usage log.** Event names and numbers, stays on your Mac. Switch it off in Settings > General > Privacy.
- **Nothing goes to the author.** No analytics, no tracking.
- **Tell participants** you keep a transcript, as with any note taker.

Full texts: [privacy policy](/pacenote/privacy/) and [terms of use](/pacenote/terms/).

## Requirements

| Requirement | App and skill |
|---|---|
| Mac | Apple Silicon (M1 or newer) |
| macOS | App 14.4 or newer, skill 14.2 or newer |
| Tools | Python 3.10+. App: Setup adds the rest, Claude Code included. Skill: also Xcode Command Line Tools |
| Disk | About 2.5 GB. Skill extras: about 1.2 GB more. Optional local model: about 16 GB |
| Claude | App: a Claude plan or an API key. Skill: Claude desktop (Cowork) with a connected folder |
| Notion | Optional, for the brief, the meeting page and your tasks |
| HubSpot | Optional, a service key for sales calls |

16 GB of memory is enough for the speech and search models. The app's Setup needs no administrator password.

## Install, about 15 minutes

For the skill. The app installs itself from its Setup window. Most of the time is the model download; do it once, after [floor 2](/start/) works.

<details open>
<summary>1. The tools it needs</summary>

If you do not have them yet, paste these into Terminal one at a time (<kbd>Cmd</kbd>+<kbd>Space</kbd>, "Terminal"). Homebrew itself is on [the setup page](/start/#programs-some-add-ons-need).

```
xcode-select --install
brew install python@3.12
```

The first one opens a window. Press **Install** and wait until it finishes.

</details>

<details>
<summary>2. Put the recorder on your Mac</summary>

The recorder lives in the [Pacenote repository](https://github.com/bodco/live-tips) (the app installs its own copy, this is for the skill). Download the repository, then ask Claude in a task with the `work` folder:

```
copy the recorder folder from ~/work/live-tips to ~/work/Tools/live-transcriber
```

</details>

<details>
<summary>3. Run the installer</summary>

This one you run yourself in Terminal, because macOS gives sound permissions only to the person at the Mac:

```
bash ~/work/Tools/live-transcriber/install.sh
```

It builds a small audio program, installs the speech model (about 1.6 GB) and then tests your sound.

</details>

<details>
<summary>4. Allow the microphone and system audio</summary>

During the test macOS asks 2 questions. Answer **Allow** to both:

- **Terminal would like to access the microphone.** This is your side of the call.
- **Terminal would like to record system audio.** This is everyone else on the call.

When the script asks, play any sound (a YouTube video) for 5 seconds.

Missed the pop-ups? Open **System Settings**, **Privacy & Security**:

- **Microphone**: switch on **Terminal**.
- **Screen & System Audio Recording**: add **Terminal** under system audio recording.

</details>

<details>
<summary>5. Optional extras</summary>

Who is speaking (a local voice model, about 30 MB):

```
bash ~/work/Tools/live-transcriber/bin/install-voices.sh
```

Local search by meaning: install [Ollama](https://ollama.com), then index each project once before its calls (later runs only add changed files):

```
ollama pull bge-m3
~/work/Tools/live-transcriber/bin/lt index "$HOME/work/Orbit"
```

</details>

<details>
<summary>6. Check it</summary>

Ask Claude:

```
check ~/work/Tools/live-transcriber/logs/install.log and tell me if the install is OK
```

**Done when** the log ends with `install OK` and both the `mic` and `sys` peaks are above zero. If `sys` is zero, most likely nothing was playing during the test. Play a video and ask Claude to run the system audio check from `docs/en/17-live-tips.md`.

</details>

<details>
<summary>7. Try the tips window</summary>

```
python3 ~/work/Tools/live-transcriber/bin/demo_prompter.py
```

A scripted call of about 2 minutes plays in the real window: a speech, tips, a question marker, a "Who is speaking?" card, a microphone warning. Press 🆘 and ⏸ to see what they do. To check stealth, start a meeting in Google Meet, share your entire screen and look at what Meet shows you are presenting. **Done when** the window is not in that picture.

</details>

<details>
<summary>8. Try it on a fake call</summary>

In a Cowork task with the `work` folder and Notion on:

```
live tips <your project>
```

A "Live transcriber" Terminal window and the tips window open by themselves. Talk for a minute, then write `stop` in the chat. **Done when** you get a wrap-up in the chat and the meeting's page in your Meetings database.

</details>

## Built on open source

Whisper on MLX, WebRTC VAD, sherpa-onnx with WeSpeaker, Ollama with bge-m3: licences and links on the [open source page](/open-source/). Found a problem? [Open an issue](https://github.com/bodco/pm-control-tower/issues).
