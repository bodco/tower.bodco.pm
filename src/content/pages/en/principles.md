---
title: The rules it runs on
lead: 13 principles, 24 lessons from a year of daily use, and the mistakes that break a setup like this most often. Worth reading before you change anything.
doc: 00-manifest.md
facts:
  - { k: Principles, v: "13" }
  - { k: Lessons, v: "24" }
  - { k: Rule 0, v: "the config wins" }
  - { k: Worst failure, v: "mixed projects" }
---

You know in advance what it will and will not do, so you can trust a report without re-checking everything. Most rules exist because something went wrong once on a real project: a lost client thread, skills that went stale when the team changed, a report that looked complete and was not.

## What you can count on

1. **Routine runs without a human.** Collection, preps, overviews, scans, reports, board hygiene, metrics, risks and sentiment run on a schedule and land where you look in the morning.
2. **All project context in one place.** Not "it exists somewhere", but in structured databases, each record linked to its project.
3. **A single truth about the state of the project.** The config (a short file per project) is the single source of truth. Skills (the written instructions Claude follows) read it instead of carrying facts inside.
4. **New projects without rewriting the core.** A new config, pages in Notion, a schedule. The shared skills pick it up, even without a tracker API.
5. **Built to be handed over.** Everything project-specific lives in the config, so another PM can set up their own copy. The first handover to a colleague is still ahead.

## What it does not promise

- **It does not replace the PM.** It removes routine, not judgement. Priorities, hard conversations with the client and people stay with you.
- **It does not guarantee correctness without review.** Every report is a draft with links to sources.
- **It does not work without discipline.** A config not updated on the day the state changed makes the skills wrong within a week.
- **It does not give every project the same depth.** Full API access and browser-only access get the same core but different automation.

## The 13 principles

| # | Principle | In one line |
|---|---|---|
| 1 | Claude Cowork at the centre | A single agent with the full context of every project |
| 2 | Notion as a hub, not a file store | Databases linked to each other, so projects live together without mixing |
| 3 | The config wins | It beats any skill, report or old document. Facts carry "as of" dates |
| 4 | Never guess the project | No project named, the skill asks |
| 5 | Skills are written instructions | Markdown with triggers, steps, format and storage, born from routine |
| 6 | Engines apart from project facts | No prefix means an engine (works for any project). A prefix means a single project |
| 7 | The result is always written somewhere | Every report lands in the Reports database |
| 8 | Natural language | "Prep me for the daily" is enough, in 2 languages |
| 9 | Start small | A single skill, then the next once the first delivered value |
| 10 | Complete context, and knowing its limits | Collect everything you can reach, and say what is missing |
| 11 | An 80% core and 20% adapters | Adapters are skills for a single client stack. Do not try to abstract every tracker in the world |
| 12 | Survive without a client API | Record the access mode, degrade gracefully |
| 13 | Memory has discipline | Every fact has a single place. Duplication means drift |

> The dangerous thing is not that some data is missing. It is a report that looks complete when it is not.

## What a year of daily use taught

- **Start small, iterate.** Automating everything at once gives you 10 reports nobody trusts.
- **Separate engines from project facts.** When the team shrank and half the repositories went to the client, dozens of skills that "knew" the old reality had to be rewritten. Once the facts moved to the config, a change of state became a single file.
- **A skill is born out of routine.** Catch the "I am asking the same thing again" moment.
- **Verification matters more than generation.** Every autopilot report is a draft with sources.
- **Client culture is data.** Without cultural calibration, sentiment analysis is meaningless.
- **Completeness is not traded for convenience.** Partial collection is worse than none: the system looks full while reports rest on a leaky sample.
- **An internal channel never goes to the client, not even as a paraphrase.**
- **A time marker is not a filter.** A queue is defined by where an item sits, so late data cannot disappear silently.

## Mistakes that break it

| Antipattern | Do instead |
|---|---|
| A project fact inside a skill | Put it in the config and reference it |
| A skill silently picks a default project | Ask |
| An engine dies because the tracker has no API | Record the access mode, use a fallback, write the export date |
| Building an engine from the first adapter | Keep the adapter until the scenario repeats on a second project |
| Your tasks scattered across client trackers | Everything in a single Tasks Tracker |
| A report not saved anywhere | Report Storage is mandatory |
| A scheduled prompt that retells the skill | Reference the skill, set only project, period and mode |
| The autopilot before 3 manual runs | Earn trust by hand first |
| Automatic sending to the client | Draft, then a human |
| Removing a former teammate from the config | Move them to former members, with a date |

## Security and privacy

- **No secrets in skills, configs or repositories.** Only the variable name. Values live in a local secrets file and are read at runtime, never printed.
- **Client chats and mail go only through your own accounts.** Claude, in Anthropic's cloud, reads the chats, mail and meeting notes you connect, through connectors you signed in to, to write drafts and reports. The results go into your own Notion. Nothing else is added unless you switch on the optional second agent. Before you connect a client channel, check that your client contract allows AI tools. For how Anthropic handles data, see [Anthropic's privacy policy](https://www.anthropic.com/legal/privacy). Sentiment reports are marked internal: keep them in a closed database or on your disk, because a label does not stop someone from sharing the page.
- **Client context is internal.** Transcripts, quotes, names and sentiment reports never reach the client. External reports use roles instead of people.
- **Agent permissions are narrow: the 5-minute rule.** Without your confirmation the agent writes only where the result can be undone within 5 minutes: a Notion page, a draft, a comment in its own thread, a ticket in its own tracker project. Anything that cannot be undone that fast (a message to the client, a change on the client's board, production, deleting something) waits for you.
