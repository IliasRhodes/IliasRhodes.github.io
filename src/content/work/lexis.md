---
title: "Ten decisions, nothing built"
tag: "Research"
summary: "Four interviews with seven people, turned into ten MVP decisions."
order: 4
---

**LEXIS** · a mosaic crossword game · spring 2025
Design lead — research and requirements
4 transcripts · 7 participants · 11-code code book · 10 prioritised MVP decisions

<figure class="mark">
  <img src="/work/lexis/lexis-wordmark.webp" width="960" height="1200"
       alt="LEXIS wordmark — yellow letters with an orange offset shadow on black, each letter set at a slightly different angle">
</figure>

---

## The setup

A friend called with a game. He is a developer; he had a mechanic in mind and wanted to build it.
A **mosaic crossword** — you slide rectangles of letters into place, and as they land in the right
position and order, words start to reveal themselves and you have to find them. He brought in
another developer he knew. I came in as the third.

I named it **LEXIS** — λέξις, the Greek for *word*. The wordmark is mine too, built from an Adobe
Express template.

They were going to build it. I said I would do the design, and that I wanted to talk to some
players first.

**I am not a gamer.** That is the honest starting position. No instinct for what makes a word game
good, no taste in the genre, no view I could have defended in a room — nothing to design from at all.

So I ran the process I was taught. Both my MScs teach the same spine — research, analysis,
requirements, prototype, test — and it is a process people shortcut once they know a domain: lead
with the instinct, check it afterwards. **I had no instinct to lead with.** The process was the whole
of what I had.

I set up a Miro board for the three of us to work in, and we met every week or two.

## What I ran

Four semi-structured interview sessions, in Greek, on Google Meet. Recorded, with oral consent
taken at the start of each one. **Seven participants** — students and working adults, a mix of
casual puzzle players and heavier gaming backgrounds.

The two developers found them. They were friends of theirs; I had not met any of them.

**Most of the sessions were pairs, and that was not my decision.** Two of the pairs were brothers
who played games, and the third was a young couple — they came as pairs because that is what
they already were. So three sessions of two, and one on their own: seven people across four
transcripts.

I had never interviewed two people at once. It changes the session — they finish each other's
sentences, they contradict each other, they remember things by arguing about them. It is a real
method and people choose it deliberately; I did not choose it, I adapted to it.

**And in a pair, one of them talks less.** There is usually someone who takes the lead and someone
who hangs back, and if you let it run, the quieter one will happily let the other answer for both of
them. So a good part of running the session is noticing which one that is, and going back to engage
them directly — otherwise you finish with two transcripts and one person's opinion.

The question I was trying to answer: **why do people play word and puzzle games, what breaks the
experience, and what should an MVP do first?**

## How it was made

The same way I work on everything: I decide what needs to exist, I direct the AI, I read what comes
back, and I keep what survives.

The interview questions were AI-drafted. **They did not go to anyone until all three of us had
reviewed them and agreed they were ready.** The thematic analysis I ran through ChatGPT against the
transcripts — **11 codes** — then went through the output myself and finalised it. The MVP
requirements were extracted the same way — drafted with AI from the themes into a ranked list.

Verbatim Greek quotes stayed in. Translating them for the deck would have smoothed them out, and
the specific phrasing was most of the value.

## What I kept hearing

**People play to switch off, and they want to be pulled in fast.**
> «με απορροφάει λίγο περνάει η ώρα χωρίς να το καταλάβω»
> *it absorbs me a bit — time passes without me noticing*

**The best feeling is finishing.** Solving gives a small hit of achievement.
> «νιώθω ικανοποίηση» · «νιώθω… ότι έξυπνος-η»
> *I feel satisfied · I feel… that I'm clever*

**Ads are the single biggest reason to quit.** Interruption breaks concentration and kills the mood.
> «θα χάσω τη ροή… και θα ξενερώσω πολύ»
> *I'll lose the flow… and it'll really put me off*

Some people go to real trouble to avoid them:
> «το βάζω offline για να μη μου πετάει διαφημίσεις»
> *I put it offline so it doesn't throw ads at me*

**Challenge is welcome; pressure has to be opt-in.** Timed modes are fun if I choose them.
> «Εάν σε αφήνει να το επιλέξεις… καλό…»
> *If it lets you choose it… good…*

**Themes mattered more than I expected.** People want topics they like — and where they feel
competent.
> «να μπορούσαμε να επιλέγουμε μία συγκεκριμένη θεματική»
> «θα έβαζα μέσα αυτά που ασχολούμαι εγώ αυτά που ξέρω»
> *if we could pick a specific theme · I'd put in the things I'm into, the things I know*

**Onboarding should teach by playing** — short, skippable, and easy to come back to.
> «skip… μετά… ξανανοίγω για να δω τα instructions…»
> *skip… then… I reopen it to look at the instructions…*

## The code book

Eleven codes. Each one carries a Greek label in the players' own words, a definition, an example
quote, **the transcript it came from** — and rules for what counts and what does not.

**One code, in full:**

<div class="table-scroll" role="region" aria-label="Table" tabindex="0">

| | |
|---|---|
| Code | **Flow / absorption** · «απορρόφηση» |
| Definition | The game absorbs attention; time passes unnoticed |
| Include | "ξεχνιέμαι", "περνάει η ώρα" |
| Exclude | purely "fun" without absorption |
| Quote | «με απορροφάει λίγο περνάει η ώρα χωρίς να το καταλάβω» |
| Transcript | T1A |

</div>

**The exclusion rule is the part that matters.** Saying what a code is *not* is what stops a theme
quietly swallowing everything next to it.

<div class="table-scroll" role="region" aria-label="Table" tabindex="0">

| # | Code | Greek label | Definition | T |
|---|---|---|---|---|
| 1 | Flow / absorption | «απορρόφηση» | Game absorbs attention; time passes unnoticed | T1A |
| 2 | Time-killer in micro-moments | «να περάσει η ώρα» | Playing to fill waiting, travel and idle moments | T1A |
| 3 | Cognitive challenge | «να δουλέψει το μυαλό» | Enjoyment from thinking, effort, mental work | T4B |
| 4 | Achievement satisfaction | «ικανοποίηση» | Positive emotion after solving or completing | T1A |
| 5 | Self-efficacy — "I'm smart" | «νιώθω έξυπνη» | Identity payoff: competence, intelligence | T1A |
| 6 | Relaxation / decompression | «αποσυμφόρηση» | Playing to reduce stress, to unwind | T2 |
| 7 | Personal best / speed | «πιο γρήγορα» | Replaying to beat your own time | T2 |
| 8 | Optional time pressure | «χρονόμετρο προαιρετικό» | A time limit adds challenge — if the player chooses it | T1A |
| 9 | Theme / category selection | «θεματικές» | Wanting to choose topics — sports, travel, and so on | T3A |
| 10 | Orientation for visibility | «οριζόντια για να βλέπω» | Landscape preferred for better visibility | T3A |
| 11 | Short sessions / snackable | «5–10 λεπτά» | Brief play sessions; avoid long friction | T4B |

</div>

**The transcript IDs carry the shape of the sessions.** T1A, T3A, T4B all take a speaker letter,
because those were the paired sessions and each person needed their own line. **T2 has no letter** —
that was the participant who came alone.

## The word that decided the product

One participant said they would **«χάσω τη ροή»** — lose the flow.

That word is where the whole thing points. It is **code 1** in the code book — *flow / absorption* —
and **decision 1** in the requirements: *protect cognitive flow*. Four of the other nine decisions
are the same idea in different clothes: don't break it with an ad, don't break it with a difficulty
cliff, don't break it with a tutorial, don't require a long sitting.

**Most of the list is not features. It is a set of things the game is not allowed to do.**

## The ten decisions

1. **Protect cognitive flow** — never interrupt mid-puzzle with ads or forced dialog
2. **Default to "relaxing"**; offer challenge as an option (timed mode, bonus)
3. **Make progression explicit** — levels and a "next", with a consistent difficulty ramp
4. **The ramp should be legible** — shorter → longer Greek words, more complex clues
5. **Themes are a retention lever** — let players choose categories that match their interests and
   competence
6. **Hints must feel fair** — prefer earned hints; if ads exist, keep them clearly optional and
   non-coercive
7. **Trust matters** — ad and bonus flows should not feel unsafe: no external redirects, a clear
   close, reputable framing
8. **Snackable sessions win** — optimise for 5–10 minutes with instant resume
9. **Onboarding is learn-by-doing** — short, skippable, replayable
10. **Readability and comfort are baseline** — dark mode, orientation, sound toggles

**Decision 1 is a monetisation constraint produced by user research.** It takes the easiest revenue
mechanism in casual mobile gaming off the table before a line of code is written — cheap to decide
at the interview stage, very expensive to decide after launch.

## What the MVP became

Four things, in order:

- **Untimed core mode** — relaxing by default, with an optional timed challenge for bonus
- **No mid-puzzle interruptions**, especially ads — protect concentration
- **Theme packs**, 3–5 at launch, so players can choose what they like
- **Readability first** — dark mode, clear typography, good grid visibility in portrait and
  landscape

## How it ended

It stopped at the start of the summer. The team did not hold together — not the work, the team.

**Nothing was built.** No prototype screens, no usability testing, no code I ever saw run. The
research and the requirements were finished; everything downstream of them was not.

I am not going to dress that up. What I have from LEXIS is four transcripts, eleven codes and ten
decisions that never got used.

## What it was worth anyway

LEXIS had no customers, no revenue and nothing at stake, in a domain I knew nothing about — and the
sequence still produced something usable. **A method that works when you have no expertise is worth
more than one that only works when you do.** Word games are not pharmacy.

It sits between two projects. Before it, DATAPULSE: a year of building, then the discovery that
closed the business. After it, three months later, KINISI: the research first, at ten times the
scale. **LEXIS is where the order changed.**

---

## What I'd do differently

- **Get something in front of them.** Four sessions of talk and no artefact — even a paper sketch in
  session four would have tested "relaxing by default" instead of just recording it.
- **Use the pairs on purpose.** They were the most productive sessions and they happened by accident.

---

*Participants were adults who consented orally at the start of each recorded session. Quotes are
reproduced in the original Greek and are anonymous; no participant is named or identifiable, and
nothing here concerns anything more sensitive than how people play word games.*
