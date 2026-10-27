---
title: Live Tips
lead: "It listens on your Mac and speaks up only when a fact or a phrase is needed: a question to you, your turn, a new request, a date you are about to promise."
doc: https://github.com/bodco/live-tips/blob/main/docs/en/live-tips.md
facts:
  - { k: Runs on, v: "Mac, Apple Silicon" }
  - { k: Audio, v: "Stays on your Mac" }
  - { k: Cost, v: "Free app, about $0.2-0.8 of Claude per call" }
  - { k: Notes go to, v: "Notion and your project folder" }
  - { k: Status, v: "beta 0.6.7" }
---

<div class="aimix">
<h3 class="aimix__title">Claude and local AI, each for its job</h3>
<p class="aimix__lead">What must be instant and private runs on your Mac. What needs real thinking goes to Claude, as text only.</p>
<div class="aimix__cols">
<div class="aimix__col"><h4>On your Mac (local models, free)</h4><ul>
<li><b>Whisper</b> turns speech into text; audio never leaves the Mac.</li>
<li><b>Local AI</b> (a small search model, built in or Ollama) finds facts and cards by meaning in under a second and searches your project files.</li>
<li><b>A voice model</b> tells speakers apart.</li></ul></div>
<div class="aimix__col"><h4>Claude (cloud, your key or plan)</h4><ul>
<li>Tips and the ready phrase when you are asked, HELP NOW, answers to your questions.</li>
<li>The picture of the call: topic, what is on you, decisions.</li>
<li>Prepare now and deep search (Claude Code, read-only), the Notion summary.</li></ul></div>
</div>
<p class="aimix__note">Claude off for a project? It runs on the Mac part only: transcript, instant facts and search.</p>
</div>

## Two ways to run it

<div class="grid" style="--min: 280px; margin: 8px 0 12px;">
<div class="card">
<p class="card__tag">For most people</p>
<h3 class="card__title">Live Tips for Mac</h3>
<p class="card__text">A menu bar app. Your own Claude API key, no chat to keep open during the call. Setup installs the speech model by itself.</p>
<div class="btns"><a class="btn btn--primary" href="https://github.com/bodco/live-tips/releases/latest/download/LiveTips.dmg" download>Download for Mac (.dmg)</a></div>
<p class="smallprint">macOS 14.4+, Apple Silicon. About 2.5 GB of local models on the first run. Beta, not notarized: on the first launch open System Settings > Privacy & Security and press Open Anyway. <a href="https://github.com/bodco/live-tips/releases/latest/download/SHA256SUMS.txt">SHA-256 checksums</a>.</p>
</div>
<div class="card">
<p class="card__tag">For Claude Cowork users</p>
<h3 class="card__title">Live Tips skill</h3>
<p class="card__text">The same tips inside your Cowork chat, on your Claude plan. Needs the recorder from the repository, about 15 minutes to set up.</p>
<div class="btns"><a class="btn btn--ink" href="https://github.com/bodco/live-tips/releases/latest/download/live-tips.skill" download>Download the skill (.skill)</a></div>
<p class="smallprint">Add it in Cowork under Skills, then follow <a href="/live-tips/details/#install-about-15-minutes">the install steps</a>.</p>
</div>
</div>

Both run the same rules and the same recorder, so the tips behave the same way. Code and releases: [github.com/bodco/live-tips](https://github.com/bodco/live-tips).

## What it does

<div class="grid" style="--min: 300px;">
<div class="card"><h3 class="card__title">Before the call</h3><p class="card__text">Prepare now writes a short brief and fact cards from your project folders and the documents you name. A few minutes, while you do something else. No time? Start anyway: tips when you are asked, HELP NOW and answers work without it, and a late preparation joins the call.</p></div>
<div class="card"><h3 class="card__title">During the call</h3><p class="card__text">A small window under your camera: the answer when you are asked, your update when it is your turn, a warning on a new request. HELP NOW gives the next sentence to say.</p></div>
<div class="card"><h3 class="card__title">Any language in, one language out</h3><p class="card__text">Set the call to one language and every speaker is written in it: Spanish on an English call comes out in English. Or keep each language as spoken.</p></div>
<div class="card"><h3 class="card__title">After the call</h3><p class="card__text">A Notion page in the call's language: summary, decisions, your commitments, new requests, open questions, risks, action items, the transcript as a sub-page.</p></div>
</div>

## How it looks

Real screenshots of the app on demo data. The pictures follow the site's light or dark theme.

<div class="gallery">
<figure class="ltshot ltshot--wide"><img class="ltshot__img ltshot--dark" src="/live-tips/shots/home-dark.webp" alt="" loading="lazy" decoding="async" /><img class="ltshot__img ltshot--light" src="/live-tips/shots/home-light.webp" alt="" loading="lazy" decoding="async" /><figcaption><b>Home.</b> The calls ahead from your calendars and Up next (overlaps marked), the calls already held with Notion, transcript and folder, and what a call needs.</figcaption></figure>
<figure class="ltshot ltshot--wide"><img class="ltshot__img ltshot--dark" src="/live-tips/shots/tips-dark.webp" alt="" loading="lazy" decoding="async" /><img class="ltshot__img ltshot--light" src="/live-tips/shots/tips-light.webp" alt="" loading="lazy" decoding="async" /><figcaption><b>On the call.</b> The transcript with named speakers (Team or Client), what is on you, the call summary, answers to your questions and the Help button.</figcaption></figure>
<figure class="ltshot"><img class="ltshot__img ltshot--dark" src="/live-tips/shots/start-call-dark.webp" alt="" loading="lazy" decoding="async" /><img class="ltshot__img ltshot--light" src="/live-tips/shots/start-call-light.webp" alt="" loading="lazy" decoding="async" /><figcaption><b>Start call.</b> The project, the call's name and time, audience, type and languages, what matters on this call and the folders to read, Prepare now.</figcaption></figure>
<figure class="ltshot"><img class="ltshot__img ltshot--dark" src="/live-tips/shots/plan-call-dark.webp" alt="" loading="lazy" decoding="async" /><img class="ltshot__img ltshot--light" src="/live-tips/shots/plan-call-light.webp" alt="" loading="lazy" decoding="async" /><figcaption><b>Up next.</b> During a call, plan the next one: set it up and prepare it now, switch to it when this call ends.</figcaption></figure>
<figure class="ltshot ltshot--wide"><img class="ltshot__img ltshot--dark" src="/live-tips/shots/tips-presentation-dark.webp" alt="" loading="lazy" decoding="async" /><img class="ltshot__img ltshot--light" src="/live-tips/shots/tips-presentation-light.webp" alt="" loading="lazy" decoding="async" /><figcaption><b>Presentation mode.</b> Your slides with the speech, a timer per slide and the tips next to them.</figcaption></figure>
<figure class="ltshot"><img class="ltshot__img ltshot--dark" src="/live-tips/shots/settings-general-dark.webp" alt="" loading="lazy" decoding="async" /><img class="ltshot__img ltshot--light" src="/live-tips/shots/settings-general-light.webp" alt="" loading="lazy" decoding="async" /><figcaption><b>Settings: General.</b> A checklist for the first call, the work folder, your name on calls, interface language, hiding the window from screen sharing.</figcaption></figure>
<figure class="ltshot"><img class="ltshot__img ltshot--dark" src="/live-tips/shots/settings-ai-dark.webp" alt="" loading="lazy" decoding="async" /><img class="ltshot__img ltshot--light" src="/live-tips/shots/settings-ai-light.webp" alt="" loading="lazy" decoding="async" /><figcaption><b>Settings: AI.</b> How Prepare now runs, the models, spending limits, the local AI layer and the voice library.</figcaption></figure>
<figure class="ltshot"><img class="ltshot__img ltshot--dark" src="/live-tips/shots/settings-notion-dark.webp" alt="" loading="lazy" decoding="async" /><img class="ltshot__img ltshot--light" src="/live-tips/shots/settings-notion-light.webp" alt="" loading="lazy" decoding="async" /><figcaption><b>Settings: Notion.</b> The meeting page after each call, where it goes, and the optional local copy of Notion.</figcaption></figure>
<figure class="ltshot"><img class="ltshot__img ltshot--dark" src="/live-tips/shots/settings-projects-dark.webp" alt="" loading="lazy" decoding="async" /><img class="ltshot__img ltshot--light" src="/live-tips/shots/settings-projects-light.webp" alt="" loading="lazy" decoding="async" /><figcaption><b>Settings: Projects.</b> Workspaces and projects found in your work folder; ticked ones show up in Start call.</figcaption></figure>
</div>

## Home and your calendars

**Home** is the app's main window: the call that is live, the calls ahead from your calendars and Up next with their preparation, and the calls already held with their Notion page, transcript and folder (remove one from the list with ×; the files stay). At the bottom: the Claude key, this month's spend against your limit, the Notion copy, local AI and the calendars.

**Calendars through macOS, several accounts at once.** Add your Google and Microsoft accounts in System Settings > Internet Accounts, then Settings > Calendars in Live Tips: tick the calendars that have your calls. Nothing to install and no extra sign-in; Live Tips only reads. Two or three meetings at the same time are normal: Home marks them, and you prepare and start the one you actually go to. A regular meeting starts from the settings and the "what matters" text of its last call, so you only correct them.

## Back-to-back calls: Up next

A call is still running and the next one starts right after it. Open **Plan an upcoming call** (the menu bar, or ⚙ > Up next in the tips window), set up the next call and press **Prepare**: its preparation is written while you talk. Plan as many calls as you like; they wait in **Up next**, ordered by time, and their preparations run one after another. Only one call records at a time.

When it is time, **Switch** (or "End and start" in End call) asks once, ends the current call properly (the transcript is saved, the Notion summary is written in the background) and starts the next one in a couple of seconds, with its preparation loaded. A preparation that is still running goes on and joins the new call when ready; it never lands in the call it was not made for.

## Why it is different

- **Facts or silence.** A tip carries a number, a date, a name or a ready sentence from your own material, or it is not shown. Red only when you are addressed.
- **Your audio stays on your Mac.** Speech is transcribed locally with Whisper; only text goes to Claude.
- **It knows your project.** Your preparation, your folders and, with [PM Control Tower](/), your Notion pages and the project's current state.
- **Pay per call, not per seat.** The app is free and open source (MIT); you pay Claude for what a call uses and set a monthly limit.

## Next to Fireflies, Fathom and Notion

Those are mature note takers with team workspaces, video and many integrations. Live Tips is about the minutes while you are on the call, built by one PM. The honest side-by-side, with prices as of October 2026: [Live Tips compared](/live-tips/compare/).

## Learn more

<div class="grid" style="--min: 230px;">
<div class="card"><h3 class="card__title"><a href="/live-tips/details/">How it works and setup</a></h3><p class="card__text">Triggers, the tips window, presentation and interview modes, speakers, privacy, requirements and install steps.</p></div>
<div class="card"><h3 class="card__title"><a href="/live-tips/compare/">Compared with others</a></h3><p class="card__text">Transcript, live help and summary next to Fireflies, Fathom and Notion AI Meeting Notes.</p></div>
<div class="card"><h3 class="card__title"><a href="https://github.com/bodco/live-tips">Code and releases</a></h3><p class="card__text">The app, the skill, the recorder and the full guide on GitHub. What changed: the <a href="/changelog/">changelog</a>.</p></div>
</div>

Not there yet: the summary in Google Docs or Word in your Drive or OneDrive. Planned.

<p class="smallprint">Your calls and your data: <a href="/live-tips/privacy/">privacy policy</a> and <a href="/live-tips/terms/">terms of use</a>.</p>
