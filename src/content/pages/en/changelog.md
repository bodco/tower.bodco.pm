---
title: "Changelog: what changed in each version"
lead: What changed in each version of the plugin, the Notion template and the documentation.
facts:
  - { k: Current, v: "v1.8.0" }
  - { k: First public, v: "2026-09-11" }
  - { k: Licence, v: "MIT" }
  - { k: Status, v: "beta" }
---

## Versions

| Version | Date | What changed |
|---|---|---|
| App 0.4.0 beta | 2026-10-22 | **Live Tips app 0.4.0 beta.** A native macOS menu bar app that runs the same live tips without a Cowork chat: records and transcribes on the Mac (Whisper on MLX), calls the Claude API directly with your own key from the Keychain, spending limits per call and per month, built-in local AI (bge-m3) for facts by meaning, standby start, a choice of microphone, a Setup window that installs the Python modules and models (about 2.5 GB, no admin password). Picks up a Cowork prep when its title matches the call title. Beta: not notarized (first open with right-click, Open), macOS 14.4+ on Apple silicon, Python 3.10+. **Presentation split view** (skill and app): with type Presentation and a prep with slides, slide cards with the full speech next to the tips stream, a timer with a minute limit, Auto turns with a warning 10 s before the end of a slide, words per minute, Trim for skippable paragraphs, My / All slides, plan vs actual at the end, ⇄ to swap the sides. **Skill improvements:** direct microphone capture (fixes headsets and USB dongles that gave no audio, and hangs at start), standby (open the window early, recording starts when the other side speaks or on the green Start), a see-through window that stays readable at low opacity (only the background fades, the text keeps a halo), "❓" cards only for real work questions, the prep title match ignores hyphens and spaces. |
| 1.8.0 | 2026-10-21 | **Call co-pilot, rebuilt for real calls.** Facts or silence: tips answer a question to you, your turn, a new request, a promised date, a decision without an owner; proactive hints are off by default and the tips follow the live topic, not the plan. **The tips window:** 🆘 help now (the best facts at once, then the next sentence to say), ⏸ / ▶ pause, one field that searches your facts and asks Claude, one gear menu, one warning at a time with a fixing button, pinned cards, a question marker, English or Ukrainian interface, stealth on by default and off for demos. **It reads the meeting by itself:** audience (team, client, your manager as the client) and mode (discussion or your talk); Presentation and Interview (Observer, Interviewer, Coach) as the two types that need their own prep; a culture lens for client calls. **Who is speaking:** optional local voice model, a "Who is speaking?" card, names applied to the whole call, never auto-named. **Reliability:** a frozen microphone is restarted and switched to the Mac's own one, the prep is checked before the call. **Optional local search with Ollama:** facts by meaning and a per-project index of your files and Notion copy. The skill is now a small core with modules, and a helper command does the routine steps. |
| 1.7.0 | 2026-10-14 | **Instant cards:** trigger phrases with ready tips prepared before the call, shown within 1-2 s with no model in the loop. The tips window gets a setup row (meeting type, language, microphone), an agenda strip, quick asks, ✓ / ✕ ratings and a delay badge on every tip. Fast start: recording begins at once. Meeting types and interview roles, prep ahead, a red warning when the loop stops, the wrap-up goes into the meeting's existing Notion page instead of a duplicate. |
| 1.6.3 | 2026-10-12 | **Cleaner live transcript.** The microphone no longer loses audio to a restart loop, line times follow the clock, Whisper artefacts (subtitle credits, repetition loops, the prompt names repeated) are dropped, the main language comes first and Russian is out of the default sets. **Comment moments:** when others finish a thought and expect a reaction, the tips window suggests what you can add, without waiting for a direct question. New window buttons: **🎙 mute** stops transcribing your mic while you are muted, **💬** sets how often comment hints come. Choice of microphone: default input (AirPods, Jabra) or always the Mac's own microphone. |
| 1.6.2 | 2026-10-11 | **The tips window** for the call co-pilot: a small window under the camera, always on top, with a field for questions. Movable, minimisable, closable, hidden from screen sharing (verified with Google Meet). Plus a "your turn" update when someone calls you by name |
| 1.6.1 | 2026-10-11 | Notion template and documentation aligned: relation names, historical decisions, an AI review queue in Topics and Risks, a fix to the follow-up check, a sync runbook |
| 1.6.0 | 2026-10-11 | **Call co-pilot** (the `live-tips` skill): hints during the call. Local transcription, tips on triggers, a Meetings page after the call, an interview mode, switching language mid-call. A local recorder in `tools/live-transcriber/` and document 17 |
| 1.5.2 | 2026-10-10 | The **Focus desk** at the top of the Notion template. Restricted internal sources: candid internal channels are context only and never reach the client |
| 1.5.1 | 2026-10-05 | Fix: the meanings of *Awaiting Reply* and *Need Follow-up* restored |
| 1.5.0 | 2026-10-03 | Optional Bitbucket Server connector |
| 1.4.0 | 2026-10-02 | Thread status and icon rules in one canonical place. Collectors recompute the status on every pass. A daily review pass over every open chat thread |
| 1.3.0 | 2026-09-24 | Sent mail collection, recipients and dates from the original message, a queue by folder instead of by time. Sync prep improvements |
| 1.2.0 | 2026-09-23 | Custom document templates and a step-by-step runbook |
| 1.1.0 | 2026-09-19 | The plugin aligned with the documentation and the public Notion template. Anonymization. Jira and Confluence server config |
| 1.0.0 | 2026-09-11 | First public package: 21 skills, the Notion template, documentation in 2 languages |

The full, detailed history lives in the [repository README](https://github.com/bodco/pm-control-tower#status-and-versions).
