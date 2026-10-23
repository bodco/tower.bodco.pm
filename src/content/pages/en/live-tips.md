---
title: A quiet co-pilot on your calls
lead: "It listens with you and speaks up only when a fact or a phrase is needed: a direct question, a new request, a date you are about to promise, a decision without an owner. Audio is transcribed on your Mac and never leaves it."
doc: 17-live-tips.md
facts:
  - { k: Runs on, v: "Apple Silicon Mac" }
  - { k: Speech model, v: "Whisper, local" }
  - { k: Skill, v: "<code>live-tips</code>" }
  - { k: Tips in, v: "A window under the camera" }
  - { k: Writes to, v: "Meetings DB" }
  - { k: Also as, v: "macOS app (beta)" }
  - { k: Status, v: "beta" }
---

You stop agreeing to scope in the moment and regretting it later. When the client asks "how long will the export take?", the number from your own prep is already under the camera. When they slip in "just a small extra", a short hint and a ready phrase appear before you answer. After the call, the action items, your promises and the transcript are on a Meetings page, and you did not write any of it.

This is a **beta**: built and tested by one person on real calls, and built on other people's open-source models (see [open source inside](/open-source/)).

New: the [Live Tips app](#live-tips-app-beta), a native macOS app in beta that runs the same tips without a Cowork chat, with your own Claude API key.

## Facts or silence

Silence is the default. A tip carries a number, a date, a name, a status or a ready phrase, or it is not shown. A tip appears when one of these fires:

<div class="grid" style="--min: 240px;">
<div class="card"><h3 class="card__title">A question to you</h3><p class="card__text">The answer as a ready sentence, with the fact and its source.</p></div>
<div class="card"><h3 class="card__title">Your turn</h3><p class="card__text">Someone calls you by name: your update, ready to read.</p></div>
<div class="card"><h3 class="card__title">A new request</h3><p class="card__text">An ask that looks like a change request: "do not agree now" and a phrase that buys time.</p></div>
<div class="card"><h3 class="card__title">A promised date or estimate</h3><p class="card__text">It never suggests hours. The assignee gives the estimate.</p></div>
<div class="card"><h3 class="card__title">Fix the owner and date</h3><p class="card__text">A decision was discussed but nobody owns it yet.</p></div>
<div class="card"><h3 class="card__title">A contradiction</h3><p class="card__text">Something said against a recorded decision.</p></div>
</div>

It follows the live topic, not the plan: when the talk leaves your agenda, it looks for facts about what is being discussed or stays quiet. Proactive hints ("you can add...") are off by default and one switch away.

## Instant before smart

A model needs seconds to think, and the conversation does not wait. So before the call the skill prepares a small fact book and instant cards from your project: tickets with estimates, decisions, dates, open questions. During the call the recorder on your Mac matches every phrase against them and shows the fact within 1 or 2 seconds, with no model in the loop. Claude adds what the cards could not know. With the optional local search (below), the match works by meaning, not only by the exact words.

## What a tip looks like

Built for a small window right under the camera, so your eyes do not wander. 2 to 5 short lines: the gist first, then a ready phrase in the language of the call. Simple sentences, everyday words, no abbreviations.

<div class="grid" style="--min: 280px;">
<div class="tip"><span class="card__tag">New request</span><b>New request. Do not agree now.</b><span>"Good idea. I will write it down. We will check it and come back to you."</span></div>
<div class="tip"><span class="card__tag">Inaccurate</span><b>Release is 15.10, not 10.10</b><span>"Sorry, a small correction. The release date is October 15."</span><span><i>decision of 30.09</i></span></div>
</div>

A tip marked as internal relies on an internal source and is never meant to be repeated to the client.

## The tips window

Tips appear in their own small window, not in a chat you have to keep open. It opens by itself when the recording starts, at the top centre of the screen, right under the camera.

<div class="grid" style="--min: 240px;">
<div class="card"><h3 class="card__title">🆘 Help now</h3><p class="card__text">You are talking and cannot type. One click: the best facts for what is being said appear at once, then the next sentence you can say.</p></div>
<div class="card"><h3 class="card__title">⏸ Pause, ▶ resume</h3><p class="card__text">The talk went aside? Pause the tips. It keeps listening and recording, and comes back to the live topic when you press play.</p></div>
<div class="card"><h3 class="card__title">One field</h3><p class="card__text">Typing searches your fact book on the spot. Enter sends the question to Claude, and the answer arrives in the same window.</p></div>
<div class="card"><h3 class="card__title">One menu</h3><p class="card__text">Meeting type, audience, language, microphone, text size, transparency and help live behind one gear. The top bar stays clean.</p></div>
<div class="card"><h3 class="card__title">One warning at a time</h3><p class="card__text">Your microphone stopped recording? One alert with a button that fixes it, such as switching to the Mac's own microphone.</p></div>
<div class="card"><h3 class="card__title">Stealth or demo</h3><p class="card__text">Hidden from screen sharing and screenshots by default. Switch stealth off to show the window to colleagues.</p></div>
</div>

Pin any card, including your speech, so it stays on top; unpin it and it returns to its place. A ❓ line shows a question to you the moment it is heard, before the tip arrives. The interface speaks English or Ukrainian; the tips follow the language of the call. The 🎙 button is the mic mute: the recorder cannot see the mute button of Meet or Zoom, so when you are muted in a cafe, press it too. Closed the window by accident? Ask in the chat to open it again, and it comes back with every tip since the start of the call.

## It reads the meeting by itself

You do not pick a meeting type before every call. Two things are worked out from the schedule, the project and what is being said, and you can correct them in the gear menu:

- **Who is on the other side.** Your team (candid, your language), a client (their language, internal facts stay internal, wording tuned to their culture) or your own manager playing the client on an internal project.
- **What is happening.** A discussion, or you presenting: then it stops interrupting and keeps your outline (Now and Next) in view.

Two meeting types need a choice because they need their own preparation: **Presentation** (your talk as an outline that follows you) and **Interview**, with three roles:

- **Observer.** Someone else asks and answers; you get a reference answer to compare with what you hear, and an analysis after the call.
- **Interviewer.** You ask; it tracks your planned questions and suggests a follow-up when an answer is vague.
- **Coach.** You are the one being asked: a steering committee, questions after a demo, a quarterly review, an audit, or a rehearsal before any of these. Like a coach at the edge of the field: short cues during the game, while you play it yourself. It keeps your prepared talking points, numbers and results within reach, reminds you of the part of a question you have not answered yet, and helps you keep the answer short and structured. It uses only what you prepared and never invents facts.

For client calls, an optional culture lens from your project notes adjusts the wording and reads the signals: in many cultures "a bit concerning" means a real problem.

## Presentation mode: slides and tips side by side

When the meeting type is **Presentation** and the prep has slides (a `<name>.slides.json` file next to the brief), the tips window splits into 2 halves: slide cards with the full text of your speech, and the usual tips stream. It works the same in the Cowork skill and in the app.

<div class="grid" style="--min: 240px;">
<div class="card"><h3 class="card__title">One slide at a time</h3><p class="card__text">Cards snap into place one by one. Move with the arrows, the buttons or the mouse wheel.</p></div>
<div class="card"><h3 class="card__title">A timer with a limit</h3><p class="card__text">Set the minutes you have, and the time of each slide scales to fit. The pace shows your words per minute.</p></div>
<div class="card"><h3 class="card__title">Auto</h3><p class="card__text">Slides turn by the schedule with a short signal, and a warning comes 10 seconds before a slide's time is up.</p></div>
<div class="card"><h3 class="card__title">Trim</h3><p class="card__text">Running late? Hide the paragraphs marked as safe to skip and keep only what must be said.</p></div>
</div>

Each paragraph on a card has a kind: **read aloud**, **may skip**, a **hint** for you (not to be read), or a **colleague's line** that comes right before your part. **My slides / All slides** switches between your part and the whole deck when several people present. At the end a table compares the plan with the actual time of every slide. 📑 hides or shows the cards, ⇄ swaps the 2 sides (the choice is remembered). The window grows towards the cards, so the tips stream stays where you put it.

## Who is speaking

Everyone on the other side arrives in one audio stream. An optional local voice model tells the voices apart. When a new voice has spoken for a few seconds, the window asks "Who is speaking?" with a quote, so you know whom it means, and buttons with the names from your project and from earlier calls. Nothing is named without you. One click fixes a wrong line or merges two voices; the names apply to the whole call. Identifying voices never delays a tip.

## Built for real calls

- **The microphone does not go silent unnoticed.** If the stream freezes (it happens after unmuting in some meeting apps), the recorder restarts it, switches to the Mac's own microphone if needed, and tells you once.
- **The loop does not stop by itself.** A red warning appears if Claude stops listening, and one word in the chat brings it back.
- **The prep is checked.** The call does not start on an empty fact book: the skill checks that the cards and facts were written.

## Optional: local search with Ollama

With [Ollama](https://ollama.com) and a small multilingual embedding model (`bge-m3`), the recorder understands meaning, not only words. Facts appear when a question is phrased differently from your notes, 🆘 finds the right one, and the text files of each project, including a local copy of your Notion, become searchable during the call. Each project gets its own index, so projects never mix. Logs show whether it helped on your calls, and one switch turns it off.

## A call, step by step

1. **Prep in the same session.** Meeting prep, the Notion pages or folder to focus on. The brief, the fact book and the cards start from it.
2. **Say "live tips" right before the call.** Recording starts at once (your microphone and the other side as 2 channels), the tips window opens under the camera and shows your speech.
3. **Use the window, not the keyboard.** 🆘 when you need help now, ⏸ when the talk goes aside, a question in the field when you have a second.
4. **Stop it explicitly.** Type "stop" in the window or the chat, close the Terminal window, or let the idle timer ask. Closing Zoom or Meet does not stop the recording.

**Open it before the call (standby).** You can start a few minutes early: the window opens, but nothing is recorded and no microphone warnings appear while you wait. Recording starts by itself when the other side has been speaking for about 5 seconds, or at once when you press the green **Start**. This works in the skill and in the app.

## After the call: notes you did not have to write

A wrap-up in the chat: action items with owners and dates, new requests, your commitments, open questions, and answers worth coming back to. It goes into the meeting's existing Notion page (for example the one Notion AI Meeting Notes created), and a new page appears only when there is none. Your notes from the call become lessons for the next one. Next steps (a report, a change request, a risk) are offered, never run without your command.

## Live Tips app (beta)

The same live-tips loop as a native macOS app in the menu bar, without a Cowork chat running during the call. It records the call on your Mac, transcribes it there with Whisper on MLX and calls the Claude API directly with your own API key, kept in the macOS Keychain.

<div class="btns" style="margin: 8px 0 24px;">
<a class="btn btn--primary" href="https://github.com/bodco/pm-control-tower/releases/download/live-tips-app-v0.5.2/LiveTips-0.5.2-beta.dmg" download>Download Live Tips 0.5.2 beta (.dmg)</a>
</div>

<div class="grid" style="--min: 240px;">
<div class="card"><h3 class="card__title">No chat to keep alive</h3><p class="card__text">The app asks the model on events (a question, your name, a new request) instead of a chat loop that can fall silent.</p></div>
<div class="card"><h3 class="card__title">Spending limits</h3><p class="card__text">A soft and a hard limit per call and a monthly cap. The menu shows this call and this month. At the hard limit only the local layer keeps working.</p></div>
<div class="card"><h3 class="card__title">Local AI built in</h3><p class="card__text">A small model on the Mac (bge-m3) matches facts and cards by meaning and powers 🆘 and project search. No Ollama needed.</p></div>
<div class="card"><h3 class="card__title">Ready for the call</h3><p class="card__text">Standby start, a choice of microphone that stays put, the split view for presentations and the same tips window.</p></div>
<div class="card"><h3 class="card__title">Notes in Notion</h3><p class="card__text">After the call the wrap-up and the transcript land on the meeting's Notion page: added to the existing one, or a new page when there is none.</p></div>
<div class="card"><h3 class="card__title">Knows who is speaking</h3><p class="card__text">As in the skill: name a new voice once from the project's people, and the tips and the summary use the name. Voice prints stay on your Mac.</p></div>
<div class="card"><h3 class="card__title">Interviews, both sides</h3><p class="card__text">Pick your role in Start call: you watch, you ask, or you are the one being interviewed. Tips follow the role.</p></div>
<div class="card"><h3 class="card__title">Fast on busy hours</h3><p class="card__text">When Claude is slow to start, the same request goes again and the first good answer wins.</p></div>
</div>

**It is a beta, so expect rough edges:**

- **Not notarized yet.** The first time, right-click the app and choose **Open**, then confirm. After that it opens normally.
- **macOS 14.4 or newer on Apple silicon** (M1 or newer).
- **Python 3.10 or newer.** The Setup window checks it and installs the rest (Python modules and models, about 2.5 GB in total) with a tick next to each step. Nothing needs an administrator password.
- **An Anthropic API key.** Billed by Anthropic per use, separately from your Claude plan. Usually $0.10 to $1.20 per hour of a call, and the limits keep it in check.

### After the call: the meeting page in Notion

Turn on **Write the call summary to Notion** in Settings and add a Notion token in Keys. When you end the call, one Claude call writes the wrap-up: action items with owners and dates, decisions, your commitments, new requests, open questions and risks. The app finds this meeting's page in your Meetings database (its date within 20 minutes of the call start, so a Notion AI Meeting Notes page counts) and appends a **Live Tips** section with the transcript attached. No page yet: it creates one, with a real date in the title. Missed it? **Send last call to Notion** in the menu bar does it later. Only text goes to Claude and Notion; audio stays on your Mac.

**Shortcuts.** Control-Option-H is HELP NOW and Control-Option-P pauses tips, even while the meeting app has the focus. The app and the skill can also record the same call side by side, each with its own files, if you want to compare them.

### App or skill?

Both do roughly the same job: the same rules, the same "facts or silence", the same tips window. Pick the one that fits how you work.

- **Skill in Cowork:** no API key, it runs on your Claude plan, and it can look things up in Notion and the tracker during the call. It needs the Cowork chat to stay busy for the whole call.
- **App:** one click from the menu bar, no chat to watch, your own key and limits.

They work best together. Make the prep in Cowork (the brief, fact cards, an outline and slides for a presentation): the app picks it up by itself when the prep title matches the call title, so keep the same title for both. Without a prep the app still works: it uses the call context you type in **Start call** and a local search over the project folder.

## Open source inside, beta outside

The heavy parts are other people's open-source work: speech recognition, voice and text embeddings. What is built here is the glue around them: the audio capture and its watchdogs, the filters around Whisper, the tips window, the protocol between the recorder and Claude, instant cards, speaker naming, the local index and the skill itself. Claude writes the tips.

- **Whisper** (OpenAI, MIT) on **MLX** (Apple, MIT): speech recognition.
- **WebRTC VAD** (BSD) via py-webrtcvad (MIT): speech or silence.
- **sherpa-onnx** (Apache-2.0) with the **WeSpeaker** voice model (trained on VoxCeleb, CC BY 4.0): who is speaking.
- **Ollama** (MIT) with **bge-m3** (BAAI, MIT): local search by meaning.

It is a beta: tested by one person on one Mac since October 2026, thresholds are still tuned, Zoom and Teams are not fully verified. The full list with licences, links and what exactly is built here is on the [open source page](/open-source/). Found a problem? [Open an issue](https://github.com/bodco/pm-control-tower/issues).

## Why it is built this way

- **Local Whisper.** Client conversations do not go to a third-party transcription service. The model runs on Apple Silicon. The network is needed once, to download it.
- **2 channels, not 1.** Microphone and system audio are captured separately, so the transcript knows when you speak.
- **Your languages are fixed in advance.** Your microphone is recognised only among your own languages. Better than auto-detect.
- **Files as the interface.** The skill (the written instructions Claude follows) and the recorder talk only through a few files and one small command line helper.

## Privacy and etiquette

- Audio is not stored. Recognised phrases go straight to a text file, audio buffers live only in memory.
- Voice prints, if you turn speakers on, stay on your Mac. A voice print is biometric data in many countries: tell people, and delete the ones you do not need.
- Transcripts stay in your project folder. Keep them out of public repositories.
- The Meetings page is internal. The skill never sends anything to the client.
- Tell participants you keep a transcript and use an assistant, as with any note taker. Consent rules differ by country, by contract and by the meeting itself.

## What you need

| | |
|---|---|
| Mac | Apple Silicon (M1 or newer, 16 GB of memory is enough), macOS 14.2 or newer |
| Tools | Xcode Command Line Tools, Python 3.10+ |
| Disk | About 2.5 GB for the model and the environment, plus about 1.3 GB for the optional extras |
| Claude | Claude desktop (Cowork) with a connected folder, the plugin and a project config (the short file about your project) |
| Notion | Optional but recommended: the brief and the page after the call need it |
| Optional | Ollama with `bge-m3` for local search; the voice model for "who is speaking" |

The Live Tips app needs less: macOS 14.4 or newer and Python 3.10 or newer, the rest comes from its Setup window. See [the app section](#live-tips-app-beta).

A model tip: a faster model for everyday calls, the strongest one for interviews and high-stakes calls.

## Install, about 15 minutes

Most of the time is the model download. Do it once, after [floor 2](/start/) works.

### 1. The tools it needs

If you do not have them yet, paste these into Terminal one at a time (<kbd>Cmd</kbd>+<kbd>Space</kbd>, "Terminal"). Homebrew itself is on [the setup page](/start/#programs-some-add-ons-need).

```
xcode-select --install
brew install python@3.12
```

The first one opens a window. Press **Install** and wait until it finishes.

### 2. Put the recorder on your Mac

The recorder lives in the repository you downloaded, not inside the plugin. Ask Claude in a task with the `work` folder:

```
copy tools/live-transcriber from ~/work/pm-control-tower to ~/work/Tools/live-transcriber
```

### 3. Run the installer

This one you run yourself in Terminal, because macOS gives sound permissions only to the person at the Mac:

```
bash ~/work/Tools/live-transcriber/install.sh
```

It builds a small audio program, installs the speech model (about 1.6 GB) and then tests your sound.

### 4. Allow the microphone and system audio

During the test macOS asks 2 questions. Answer **Allow** to both:

- **Terminal would like to access the microphone.** This is your side of the call.
- **Terminal would like to record system audio.** This is everyone else on the call.

When the script asks, play any sound (a YouTube video) for 5 seconds.

Missed the pop-ups? Open **System Settings**, **Privacy & Security**:

- **Microphone**: switch on **Terminal**.
- **Screen & System Audio Recording**: add **Terminal** under system audio recording.

### 5. Optional extras

Who is speaking (a local voice model, about 30 MB):

```
bash ~/work/Tools/live-transcriber/bin/install-voices.sh
```

Local search by meaning: install [Ollama](https://ollama.com), then index each project once before its calls (later runs only add changed files):

```
ollama pull bge-m3
~/work/Tools/live-transcriber/bin/lt index "$HOME/work/Acme Portal"
```

### 6. Check it

Ask Claude:

```
check ~/work/Tools/live-transcriber/logs/install.log and tell me if the install is OK
```

**Done when** the log ends with `install OK` and both the `mic` and `sys` peaks are above zero. If `sys` is zero, most likely nothing was playing during the test. Play a video and ask Claude to run the system audio check from `docs/en/17-live-tips.md`.

### 7. Try the tips window

```
python3 ~/work/Tools/live-transcriber/bin/demo_prompter.py
```

A scripted call of about 2 minutes plays in the real window: a speech, tips, a question marker, a "Who is speaking?" card, a microphone warning. Press 🆘 and ⏸ to see what they do. To check stealth, start a meeting in Google Meet, share your entire screen and look at what Meet shows you are presenting. **Done when** the window is not in that picture.

### 8. Try it on a fake call

In a Cowork task with the `work` folder and Notion on:

```
live tips <your project>
```

A "Live transcriber" Terminal window and the tips window open by themselves. Talk for a minute, then write `stop` in the chat. **Done when** you get a wrap-up in the chat and the meeting's page in your Meetings database.
