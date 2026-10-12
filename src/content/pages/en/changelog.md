---
title: "Changelog: what changed in each version"
lead: What changed in each version of the plugin, the Notion template and the documentation.
facts:
  - { k: Current, v: "v1.6.3" }
  - { k: First public, v: "2026-09-11" }
  - { k: Licence, v: "MIT" }
  - { k: Status, v: "beta" }
---

## Versions

| Version | Date | What changed |
|---|---|---|
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
