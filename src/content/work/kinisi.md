---
title: "Community came last"
tag: "Research"
summary: "260 people with Parkinson's on what they want from an exercise app."
order: 2
---

**I asked 260 people with Parkinson's what they wanted from an exercise app. The feature every
fitness app puts first, they put last.**

KINISI · a Parkinson's exercise app · 2025
Co-founder — one of three

---

## The setup

It started on a family holiday, in a conversation with friends who were thinking about building a
website for younger people with Parkinson's — a condition one of them knows from the inside.

Between the three of us the idea changed shape over that conversation. Not a website — an app built
around **exercise**, because exercise is one of the few things that demonstrably helps in
Parkinson's — gait, balance, mobility — and because a website is content while an app can be a
routine.

That reframe belonged to all three of us. I named it **KINISI** — ΚΙΝΗΣΗ, the Greek for
*movement*: the symptom, the intervention and the goal, in one word — and took on the survey.

DATAPULSE was behind me: a year of building before I spoke to a customer. So this time I did it in
the other order.

## What I ran

A survey, with follow-up interviews planned behind it to drill into whatever it surfaced.

**I am not a clinician, and the questionnaire was not mine to write.** ChatGPT did the background
research — on Parkinson's itself, and on what the evidence says about exercise in it — and drafted
the questionnaire from it: the structure, the questions, and the clinical scaffolding none of us
had. **Eleven sections, around fifty questions:**
demographics, disease status, physical ability, exercise habits and barriers, motivators, awareness of
benefits, technology use, reaction to the concept, concerns about exercising at home, features and
content, and open comments.

**A note about how all of this was made, since it runs through the whole project.** I work with AI the
way other people work with a team: I decide what needs to exist, I direct it, I read everything it
gives back, and I keep only what survives. The questionnaire here, and the requirements and personas
further down, were all produced that way. I could not have written the disease-stage questions myself
— I do not know the Parkinson's scales or the clinical metrics.

**And none of it went out on my say-so.** The questionnaire was reviewed several times over by all
three of us, and we made every edit it needed — the collaborator with a doctorate in pharmacology was
by far the best placed to catch what I could not. It went to participants only once the three of us agreed it was
ready.

Three questions in it did most of the work later.

**The disease stages were written in plain language** rather than clinical shorthand — options like
*"you can stand or walk unassisted but are markedly disabled"* instead of "unilateral involvement
only." People can answer that honestly about their own body, and it is why the stage data is usable at
all.

**It asked about "on" and "off" medication periods** — the windows in the day when medication is
working and when it is not — and how often they occur. That question is the reason I could later tell
that "I want to exercise when it suits me" was not a convenience answer.

**It asked whether their symptoms make apps hard to use** — tremor, stiffness. A design question
rather than a clinical one, and the answer was in front of me before anything was drawn.

Recruitment was my collaborator's part of the work, and the right way round: a researcher with a
doctorate in pharmacology wrote to **Parkinson's patient organisations** asking them to forward the
survey to their members. That is access an outsider does not get. **260 people answered,
from 25 countries and territories** — two thirds of them in the United States. I ran the descriptive analysis myself, in Power BI — the same tool I had
built a business on, pointed at patient research instead of pharmacy sales.

## Who answered

<div class="table-scroll" role="region" aria-label="Table" tabindex="0">

| | |
|---|---|
| Age | 60–79 **68.5%** · 40–59 25.0% · 80+ 5.0% · 25–39 1.5% |
| Gender | Female 59.2% · Male 40.8% |
| Country of residence | US 65% · UK 10% · Canada 9.2% · Australia 4.2% · **21 more, from Norway to Uganda** |
| Diagnosed | 1–5 years 44.6% · 6–10 years 26.9% · 10+ years 23.5% |
| Self-reported stage | Mild 48.8% · Moderate 39.6% · Severe 8.5% · Advanced 1.2% |
| Falls in the last six months | None 70% · one or two minor 23.1% · frequent or injurious 6.9% |
| Smartphone users | **97.3%** · have used a fitness app 60% |
| Interested in the concept | Very or extremely **58.8%** |

</div>

An international, English-speaking, highly educated sample — 78% hold a bachelor's degree or higher.

**And one thing about this sample matters more than any of the rest: 90.4% of them already exercise.**
Nearly half of them five or more days a week. That is a selection effect — the people who join a
patient organisation are the people already doing something about their condition, and the ones who
are not are not on that mailing list. I should have written it down as a limitation at the time, and
I did not.

It limits what the survey can say about people with Parkinson's in general. It does not limit what it
can say about the people we were building for — and I will come back to that.

## The decision I had to argue for

Then the answers came back, and for a moment they were worth nothing.

260 completed questionnaires is not a finding. It is a pile. So I stopped and asked the question that
slide four of the analysis I built for the team is titled with: **"Who are we designing for?"** We are
building an app. Who is going to open it? What are those people like? "Everyone who answered" is not
an answer, because most of them never would.

The questionnaire had asked how willing people would be to use an exercise app like this one. I took
the **top two positive answers — very and extremely interested — and treated those 153 people as the
population worth designing for.** Then I cut them by age and gender.

<div class="table-scroll" role="region" aria-label="Table" tabindex="0">

| Segment | n | Very or extremely interested | |
|---|---|---|---|
| Women 40–59 | 37 | 26 | **70.3%** |
| Men 40–59 | 28 | 19 | 67.9% |
| Women 60–79 | 108 | 64 | 59.3% |
| Men 60–79 | 70 | 33 | 47.1% |

</div>

**Interest falls with age and runs higher in women.** Then I did the part the team disagreed with.

I picked one. **Women aged 40 to 59 — twenty-six people out of 260.**

The smallest group in the study, the most interested group in it, and the one I wanted the follow-up
interviews to be with. The rest of the team wanted to present all four segments, and their reasoning
was not stupid: all four were interested, three of them were larger, and dropping them looked like
throwing data away. I had a genuinely hard time getting them to see it as a design decision at all.

The argument I was making then and would make again: describing a population is not the same as
designing for a user. The average of 260 people is nobody. Four segments is a description of a
survey. One segment is a brief.

**The next step should have been interviews with those twenty-six women** — the drill-down the survey
existed to set up. By then the team was running out of energy, and I made a call I would make differently now: I
skipped the interviews and went straight to generating the design requirements from the data I
already had.

That is the thing in this project I would undo. The survey tells me what people say they want.
The interviews would have told me why.

## What they said

**What would help you feel safer exercising alone?**
Exercises appropriate to my abilities and stage **186** · clear instructions 88 · a trainer who can
see my form on video 55 · an emergency alert button 24

**Why would you use it?**
I can exercise at a time that suits me **198** · at my own pace **174** · a choice of exercise types
169 · saves travel time 111 · saves money 99 · privacy 81

**What would make you stick with it?**
Seeing measurable changes in my abilities **211** · goals and feedback 156 · a virtual coach check-in
119 · reminders 113 · a friend or family member joining 81

**Which features?**
Pre-recorded videos by instructors who know Parkinson's **198** · plans that adapt to my level 194 ·
progress tracking 183 · music or voice coaching 127 · educational content 126 · live classes 125 ·
trainer feedback 116 · reminders 111 · share progress with my doctor 101 ·
**community forum and group challenges — 76, last of everything offered**

## What I found

**Proof beats everything.** "Seeing measurable changes in my abilities" scored 211 — the highest
single answer anywhere in the survey. The literature explains it: low outcome expectation is a known
adherence barrier in Parkinson's. If people cannot see it working, they stop doing it. So progress
measurement is not a feature to schedule for version two. It is the core loop, and everything else
hangs off it.

**Community came last.** Seventy-six people, below sharing data with their own doctor. Open a fitness
app — any fitness app — and the social layer is the first thing it sells you: challenges, leaderboards,
friends. This population put it at the bottom of a list of ten. The reason is elsewhere in the same
data: 81 people gave *privacy* as a reason they would use the app, and the clinical literature
describes how self-conscious people with Parkinson's often are in public, because tremor, freezing and
dyskinesia are visible. The obvious feature was the wrong feature. Building what every other app builds
would have produced a worse product.

**Autonomy is a clinical requirement, not a preference.** The top two reasons for wanting the app were
exercising at a time that suits me (198) and at my own pace (174). On its own that reads as ordinary
convenience. But because I had asked about on and off periods, I knew what it actually meant: people
need to exercise inside the window when their medication is working, and that window moves. Scheduling
flexibility is not a nice-to-have. The medication sets the timetable.

**And the enemy is not fear — it is depletion.** Among the most interested group, the top barrier to
exercising more was lack of motivation or energy: 77.3% of the women, 64.3% of the men. Fear of
falling was 4.5% and 21.4%. Physical limitation around 30%. The intuitive product for a Parkinson's
population manages risk and reassures people about falling. The data says to design for someone who is
tired.

## The reframe

We had been building for people who exercise from the start. The evidence for exercise is why the project existed at
all; the gap we set out to close was that the content for it is scattered, unstructured and not
matched to anyone's stage. What the data added was the part we had not said out loud.

- **90.4% already exercise** — they do not need persuading to start.
- **50.4% of them do it with no expert supervision at all.** That is the gap.
- **"Seeing measurable changes" was the single highest answer.** They want evidence it is working.
- **81.2% would try it without a doctor recommending it** — only 1.5% would need to be told to.

**So the app is not there to get people moving. It is there to tell people who are already moving
whether what they are doing is safe, and whether it is working.** That is a narrower claim than "an
exercise app for Parkinson's", a more reachable market, and every number above supports it.

It also puts the sampling bias in its place. Recruiting through patient organisations reached people
already engaged with their condition — which is a real limit on what the survey says about the wider
population, and the exact group the product was for.

## What the data made me design

The findings became four requirement sets — interface, accessibility and usability, motivational
elements, and general requirements — under a rule I set before any of them were written: every line
has to tie back to a figure or a persona. Six personas, and every claim in them carries its survey
percentage inline, so nothing in them is invented.

**The ones that design for the condition rather than around it:**

- A play control **large enough that a shaking finger can hit it**
- **No time-sensitive gestures** — no swipe that needs precision or timing, because bradykinesia and
  tremor make both unreliable
- A **pre-workout safety check** before balance sessions — stable support within reach, floor clear.
  On by default, because fear of falling is real; switchable off, because by the fortieth time it is
  an obstacle rather than a safety feature
- **The option to slow the video down**, for slower movement initiation — plus captions, read-aloud,
  and a text alternative to audio
- **A cap on choices per step.** Low cognitive load is not a style preference in this population
- **Seated and assisted exercises for people who reach a walker or a wheelchair**, a profile they can
  adjust as their abilities change, and a tone that does not falter when they do. The condition is
  degenerative: the person using this in year six is not the person who installed it

**The single design idea I would build first** came out of the finding that symptoms and energy
fluctuate from day to day:

> **A daily check-in — "how are you feeling today?" — that adapts the session.** A gentler workout on a
> low-energy day, the full one on a good day.

It answers the depletion finding, and it removes a decision from someone whose energy is the scarce
resource.

**And what I would not build:** the community feed. Not in version one, probably not at all. The data
ranked it last, the privacy answers explain why, and building it would cost the roadmap the progress
tracking that 211 people actually asked for.

## Where it stopped

We prepared a fifteen-slide pitch for a health accelerator — problem, evidence of demand, competitive
landscape, business model, and an ask that included access to users — for the usability testing we
would need once there were screens to test, because there were none yet. The
positioning argument in it still holds: there is no shortage of Parkinson's exercise content (600+
videos from one association alone, hundreds more elsewhere) — it is scattered, unstructured and not
stage-appropriate. **The product is the navigation system that content ecosystem never got.**

I stepped away at the end of the year, before the pitch was presented — so I do not know whether it
was ever delivered, or what came back. Two things were true. It was a volunteer project between
friends and we had very different expectations about time commitment. And — visible first in the
argument about that one segment — we were not reading the same data the same way.

I had finished the research; taking it further needed more than the team could put in, and I stepped
back rather than let it drift. As far as I know, nothing carried on after that.

## What it would need next

The project is closed and I am not carrying it on alone — it needs a team, and this one had stopped
being one. But the work stops at a point I can describe exactly, and that is worth saying.

**The screens.** Everything upstream of them exists: the plan, the questionnaire, the data, the
analysis, the personas, the requirements. The only missing piece is the design itself.

**Test the reframe before building anything.** The safety-and-progress positioning comes from a
re-reading of my own data, not from asking anyone. That makes it a hypothesis, and I have learned what
happens when I treat one of those as a fact.

**Recruit past the engaged end.** The sample answered the question "what do committed exercisers with
Parkinson's want?" — which turned out to be the more useful question, but it was not the one I set out
to ask. A second wave would have to reach people who are not already in a patient organisation.

---

*Findings are reported in aggregate only. Participants are people with a named neurological condition
who consented to a research project, recruited through patient organisations; no individual responses,
free-text answers or identifying details appear here.*
