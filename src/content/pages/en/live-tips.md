---
title: Live Tips
lead: "It listens on your Mac and speaks up only when a fact or a phrase is needed: a question to you, your turn, a new request, a date you are about to promise."
doc: https://github.com/bodco/live-tips/blob/main/docs/en/live-tips.md
facts:
  - { k: Runs on, v: "Mac, Apple Silicon" }
  - { k: Audio, v: "Stays on your Mac" }
  - { k: Cost, v: "Free app, about $0.2-0.8 of Claude per call" }
  - { k: Notes go to, v: "Notion and your project folder" }
  - { k: Status, v: "beta 0.6.0" }
---

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
<div class="card"><h3 class="card__title">After the call</h3><p class="card__text">A Notion page in the call's language: summary, decisions, your commitments, new requests, open questions, risks, action items, the transcript attached.</p></div>
</div>

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

Not there yet: a calendar link, a prompt to start recording when a call begins, the summary in Google Docs. Planned; today each call starts from the menu bar.
