---
title: A quiet co-pilot on your calls
lead: "It listens with you and stays silent until something matters: a new request, a date you are about to promise, a contradiction with a past decision. Audio is transcribed on your Mac and never leaves it."
doc: 17-live-tips.md
facts:
  - { k: Runs on, v: "Apple Silicon Mac" }
  - { k: Speech model, v: "Whisper, local" }
  - { k: Skill, v: "<code>live-tips</code>" }
  - { k: Tips in, v: "A window under the camera" }
  - { k: Writes to, v: "Meetings DB" }
---

You stop agreeing to scope in the moment and regretting it later. When the client slips in "just a small extra", a short hint and a ready phrase appear in a small window under your camera. After the call, the action items, your promises and the transcript are on a Meetings page, and you did not write any of it.

## When it speaks up

Silence is the default. A tip appears only when one of these fires:

<div class="grid" style="--min: 240px;">
<div class="card"><h3 class="card__title">A new request</h3><p class="card__text">An ask that looks like a change request.</p></div>
<div class="card"><h3 class="card__title">A promised date or estimate</h3><p class="card__text">It never suggests hours. The assignee gives the estimate.</p></div>
<div class="card"><h3 class="card__title">A contradiction</h3><p class="card__text">Something said against a recorded decision.</p></div>
<div class="card"><h3 class="card__title">Your own slip</h3><p class="card__text">An inaccurate or incomplete answer from you.</p></div>
<div class="card"><h3 class="card__title">Side talk</h3><p class="card__text">The other team switches to another language between themselves.</p></div>
<div class="card"><h3 class="card__title">Your turn</h3><p class="card__text">Someone calls you by name: your update, ready to read.</p></div>
</div>

## What a tip looks like

Built for a small window right under the camera, so your eyes do not wander. 2 to 5 short lines: the gist in your language first, then a ready phrase in the language of the call. Simple sentences, everyday words, no abbreviations.

<div class="grid" style="--min: 280px;">
<div class="tip"><span class="card__tag">New request</span><b>New request. Do not agree now.</b><span>"Good idea. I will write it down. We will check it and come back to you."</span></div>
<div class="tip"><span class="card__tag">Inaccurate</span><b>Release is 15.10, not 10.10</b><span>"Sorry, a small correction. The release date is October 15."</span><span><i>decision of 30.09</i></span></div>
</div>

A tip marked as internal relies on an internal source and is never meant to be repeated to the client.

## The tips window

Tips appear in their own small window, not in a chat you have to keep open. It opens by itself when the recording starts, at the top centre of the screen, right under the camera.

<div class="grid" style="--min: 240px;">
<div class="card"><h3 class="card__title">Always on top</h3><p class="card__text">Stays above Google Meet and every other window. Pin it or unpin it with one button.</p></div>
<div class="card"><h3 class="card__title">Hidden from screen sharing</h3><p class="card__text">Share your entire screen in Google Meet and the window is not in the picture. Verified with Meet in Chrome on macOS 26.</p></div>
<div class="card"><h3 class="card__title">A field for questions</h3><p class="card__text">Type "what did we promise on exports?" and the answer arrives in the same window, while it keeps listening.</p></div>
<div class="card"><h3 class="card__title">An ordinary window</h3><p class="card__text">Drag it, resize it, minimise it, close it. It remembers where you put it. Closing it does not stop the recording.</p></div>
</div>

The newest tip is on top in a large font, older ones fade below. The 🎙 button is the mic mute: the recorder cannot see the mute button of Meet or Zoom, so when you are muted in a cafe or near other people, press it too and the room is no longer written down as your words. The 💬 button sets the minimum pause between two "you can add" hints: 45s means at most one such hint per 45 seconds, 20s gives more, 90s fewer, off turns them off (urgent tips ignore it). Font size and transparency are one click away. When you start, the skill asks once for the project, the call language and the microphone (the Mac's default input or the Mac's own microphone), because these cannot change during a call. Closed the window by accident? Ask in the chat to open it again, and it comes back with every tip since the start of the call. Prefer the chat? One setting sends tips to the window, the chat or both. Other meeting apps (Zoom, Teams) are not verified yet: if in doubt, share a window or a tab instead of the entire screen.

## A call, step by step

1. **Prep in the same session.** Meeting prep, the Notion pages or folder to focus on. The Live Brief of the project starts from it.
2. **Say "live tips" right before the call.** A Terminal window starts recording the microphone and the system audio as 2 separate channels, you and them, and the tips window opens under the camera.
3. **Ask anything mid-call.** Type it in the window: "What did we promise on exports?" You get a short answer from the brief and the transcript, and it keeps listening.
4. **Stop it explicitly.** Type "stop" in the window or the chat, close the Terminal window, or let the idle timer ask. Closing Zoom or Meet does not stop the recording.

A client interview gets its own mode that tracks the planned questions and suggests follow-ups.

## After the call: notes you did not have to write

A wrap-up in the chat: action items with owners and dates, new requests, your commitments, open questions, and answers worth coming back to. A page in the project's Meetings database appears by itself, with the transcript and the wrap-up. Next steps (a report, a change request, a risk) are offered, never run without your command.

## Why it is built this way

- **Local Whisper.** Client conversations do not go to a third-party transcription service. The model runs on Apple Silicon. The network is needed once, to download it.
- **2 channels, not 1.** Microphone and system audio are captured separately, so the transcript knows who is speaking, and switching headphones does not break the recording.
- **Your languages are fixed in advance.** Your microphone is recognised only among your own languages, the other side among the languages you allow. Better than auto-detect.
- **Files as the interface.** The skill (the written instructions Claude follows) and the recorder talk only through a few files: start, stop, status and the transcript itself.

## Privacy and etiquette

- Audio is not stored. Recognised phrases go straight to a text file, audio buffers live only in memory.
- Transcripts stay in your project folder. Keep them out of public repositories.
- The Meetings page is internal. The skill never sends anything to the client.
- Tell participants you keep a transcript, as with any note taker. Consent rules differ by country and by contract.

## What you need

| | |
|---|---|
| Mac | Apple Silicon (M1 or newer), macOS 14.2 or newer |
| Tools | Xcode Command Line Tools, Python 3.10+ |
| Disk | About 2.5 GB for the model and the environment |
| Claude | Claude desktop (Cowork) with a connected folder, the plugin and a project config (the short file about your project) |
| Notion | Optional but recommended: the Live Brief and the page after the call need it |

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

### 5. Check it

Ask Claude:

```
check ~/work/Tools/live-transcriber/logs/install.log and tell me if the install is OK
```

**Done when** the log ends with `install OK` and both the `mic` and `sys` peaks are above zero. If `sys` is zero, most likely nothing was playing during the test. Play a video and ask Claude to run the system audio check from `docs/en/17-live-tips.md`.

### 6. Try the tips window

```
~/work/Tools/live-transcriber/bin/prompter --demo
```

A window with 3 sample tips opens under the camera. Drag it, minimise it, type a question and press Enter: a demo answer comes back. Then start a meeting in Google Meet, share your entire screen and look at what Meet shows you are presenting. **Done when** the window is not in that picture.

### 7. Try it on a fake call

In a Cowork task with the `work` folder and Notion on:

```
live tips <your project>
```

A "Live transcriber" Terminal window and the tips window open by themselves. Talk for a minute, then write `end live` in the chat. **Done when** you get a wrap-up in the chat and a new page in your Meetings database.
