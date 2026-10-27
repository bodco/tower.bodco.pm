---
title: Open source inside, beta outside
lead: "The heavy lifting (speech recognition, voice and text embeddings, the model that writes the tips) is other people's work, mostly open source. What is built here is the tool around it. Here is the honest list."
doc: https://github.com/bodco/live-tips/blob/main/docs/en/live-tips.md
facts:
  - { k: Status, v: "beta" }
  - { k: Covers, v: "Call co-pilot, Mac app (coming)" }
  - { k: Snapshot, v: "October 2026" }
---

Honest bookkeeping. The heavy lifting (speech recognition, voice embeddings, text embeddings, the language model that writes the tips) is other people's work, mostly open source. This project is the glue, the workflow and the product decisions around those models. If that is "own development", it is development of a tool around ready engines, not of the engines.

## Third-party components

| Component | What it does here | Licence | Source |
|---|---|---|---|
| OpenAI Whisper, `large-v3-turbo` weights | Speech recognition of both channels | MIT (code and weights) | [github.com/openai/whisper](https://github.com/openai/whisper) |
| Apple MLX | Runs Whisper on the Apple Silicon GPU | MIT | [github.com/ml-explore/mlx](https://github.com/ml-explore/mlx) |
| `mlx-whisper` and the `mlx-community` weights | Whisper port for MLX and the converted weights | MIT | [pypi.org/project/mlx-whisper](https://pypi.org/project/mlx-whisper/), [github.com/ml-explore/mlx-examples](https://github.com/ml-explore/mlx-examples) |
| py-webrtcvad (WebRTC VAD) | Speech or silence for every 30 ms frame | MIT (wrapper), BSD-3-Clause (WebRTC code) | [github.com/wiseman/py-webrtcvad](https://github.com/wiseman/py-webrtcvad) |
| NumPy | Audio buffers, vectors, cosine similarity | BSD-3-Clause | [numpy.org](https://numpy.org/) |
| sherpa-onnx (k2-fsa) | Computes speaker embeddings from audio | Apache-2.0 | [github.com/k2-fsa/sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx) |
| ONNX Runtime | Inference engine under sherpa-onnx | MIT | [github.com/microsoft/onnxruntime](https://github.com/microsoft/onnxruntime) |
| WeSpeaker ResNet34 (`wespeaker_en_voxceleb_resnet34_LM`) | The voice model that tells speakers apart | Apache-2.0 (WeSpeaker code); the pretrained model is trained on VoxCeleb, which is CC BY 4.0: see the model page | [WeSpeaker pretrained models](https://github.com/wenet-e2e/wespeaker/blob/master/docs/pretrained.md), [VoxCeleb licence](https://www.robots.ox.ac.uk/~vgg/data/voxceleb/) |
| Ollama | Local server for the text embedding model (optional) | MIT | [github.com/ollama/ollama](https://github.com/ollama/ollama) |
| BAAI `bge-m3` | Multilingual text embeddings: facts by meaning, project index (optional) | MIT | [huggingface.co/BAAI/bge-m3](https://huggingface.co/BAAI/bge-m3) |
| Apple system frameworks: AVAudioEngine, Core Audio process taps, AppKit, WKWebView | Microphone and system audio capture, the tips window | Part of macOS, Apple SDK terms | [developer.apple.com](https://developer.apple.com/documentation/) |
| Claude (Anthropic), in Claude Cowork | Reads the transcript and writes tips, the brief and the wrap-up | Commercial service under your Claude plan, not open source | [anthropic.com](https://www.anthropic.com/) |
| Notion API | Reads project context, writes the meeting page | Commercial service, Notion terms | [developers.notion.com](https://developers.notion.com/) |

Licences change; the links above are the authority, this table is a snapshot of October 2026.

## What is built here

- **Audio capture helper** (`audiocap`, Swift): microphone and system audio as two separate streams, device switching, and the watchdogs: a frozen stream is restarted, a start that hangs is killed and retried, after repeated failures it switches to the Mac's own microphone.
- **The pipeline around Whisper** (`transcriber.py`): segmentation on top of the VAD, the noise gate, the filters for Whisper's invented lines (subtitle credits, prompt echoes, sound descriptions), fixed languages per call and per channel, the transcript format, the talk meter.
- **The tips window** (`prompter.html` + `prompter.swift`): layout, the gear menu, the alert slot, pinning, ratings, 🆘 and pause, the speaker card, stealth, the two interface languages.
- **The protocol between the recorder and Claude:** `read_delta.py` (long poll, tips in, window input out, state, reminders) and the `lt` helper (start, status, stop, prep check, state, wrap-up numbers, search).
- **Instant cards and the fact book:** the formats, the local matching, the question marker and the local 🆘 reaction, with no model in the loop.
- **Speaker identification on top of the voice model:** online clustering, the "Who is speaking?" flow, fixes and merges, the local voice library, names applied to the whole call.
- **The semantic layer on top of the text model:** matching facts and cards by meaning, the live topic, the per-project index with its exclusions, the usage logs.
- **The skill** (`live-tips`): the prep (brief, cards, facts), the live rules (facts or silence, priorities, triggers, tip format), the wrap-up into Notion and the lessons loop.

## Status: beta

- Tested by one person on one Mac (Apple Silicon) on real work calls since October 2026, mostly in Google Meet, in Ukrainian and English.
- Thresholds (speaker matching, semantic matching, tip rates) are still being tuned on real calls; expect them to change between versions.
- Known limits: Zoom and Teams are not fully verified; speaker naming and the semantic layer are new and optional; stealth depends on the meeting app honouring the macOS window flag, so check it in your app before a sensitive call.
- Something wrong or missing: open an issue in the [repository](https://github.com/bodco/pm-control-tower/issues) with the log lines (never with transcripts or client data).

## Coming next

The call co-pilot is now its own product, [Live Tips](/live-tips/): a Mac app and a Cowork skill. Its components and their licences are listed in its repository, [github.com/bodco/live-tips](https://github.com/bodco/live-tips).
