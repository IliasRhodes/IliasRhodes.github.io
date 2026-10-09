---
title: "100 doors"
tag: "Build & operate"
summary: "An analytics product, taken door to door, and closed on the evidence."
order: 3
---

**A year of analytics for a customer I had assumed instead of interviewed.**

DATAPULSE · sole proprietorship, Greece · built from summer 2022 · taken to market end of 2023 · closed June 2024
Founder — product, design, build, go-to-market

---

## The setup

I have co-owned a pharmacy since 2011. Every day I looked at our ERP — a Farmakon SQL database
holding every sale, every prescription, every supplier invoice — and saw a business being run on
instinct while the answers sat one query away.

I had just finished an MSc in Interaction Design, and the year before that I had trained in business
intelligence — ETL, SQL, Power BI. I knew the industry from the inside, I knew the exact database
other pharmacies were running, and I could build. That combination looked like an opening no outside
vendor had.

So I built the thing I wanted for my own pharmacy, and set out to sell it to everyone else's.

## What I built

Power BI analytics running directly on the Farmakon ERP database, in two products:

**Customers** — totals and trends, segmentation by age band and gender, purchase-frequency cohorts,
days since last purchase, month-on-month comparison, prescribing analysis by doctor and specialty.

**Drugs & Parapharmaceuticals** — top sellers, rolling sums and rolling 30-day averages with automatic
refresh, non-moving stock, supplier purchasing and ordering views, year-on-year comparison against the
same period twelve months earlier.

The two were sold as a single proposition, never separately.

Roughly a year of work, alone, using ChatGPT as a build partner in the first months it existed.

<figure>
  <img src="/work/datapulse/suppliers.png" width="1667" height="808" loading="lazy"
       alt="The supplier screen: four multi-select manufacturer filters across the top, four KPI tiles with year-on-year deltas, a category bar chart and a two-column comparison table.">
  <figcaption>The supplier screen. Purchasing value, units and transactions against the same period last year, filterable by warehouse, supplier, licence holder and manufacturer.</figcaption>
</figure>

<figure>
  <img src="/work/datapulse/prescribing-by-specialty.png" width="1665" height="805" loading="lazy"
       alt="Prescribing analysis: three linked tables — medical specialties by units, individual doctors by units, and the products they prescribed — with narcotic and antibiotic filters.">
  <figcaption>Prescribing analysis. Which specialties send you volume, which individual prescribers sit behind it, and what they actually prescribe — filterable to narcotics or antibiotics. Nothing else on the market told a pharmacy this, and it is still the piece I am proudest of.</figcaption>
</figure>

I did not treat it as a side project, and there was nobody to hand any of it to. I registered the
business, found the name, designed the business cards in Photoshop, wrote the content for the
explanatory flyers, took the wordmark from an online logo generator and did the colour work on it,
briefed the accountant, wrote the value proposition, built a target list filtered to pharmacies I
knew ran the same ERP, drew up the visiting plan for Athens, and hired and trained the salesperson
who would walk it, since I live on Rhodes. I wrote the interview guide for that hire myself.

All of that ran in parallel with building the product. My wife is the pharmacist and carries much of
the shop; since 2018 I have worked out of the back office — spreadsheets, the finances, and proposals
for making our customers happier. DATAPULSE came out of that room, after the two MScs and the BI
training, as what felt like the obvious next step. A one-man show — which is its own kind of evidence,
and also part of why nobody ever told me I was building the wrong thing.

## What happened

<div class="table-scroll" role="region" aria-label="Table" tabindex="0">

| | |
|---|---|
| Walked past and disqualified on sight | **~50** |
| Pharmacies approached | **~90** |
| Booked appointments and full demos delivered | **~10** |
| Bought | **2** |

</div>

Demo to close: roughly 20%. Door to close: roughly 2%.

The salesperson worked Athens. I sold too — I walked into pharmacies myself and made the case in
person. Pharmacies are my own world; I have stood behind that counter since 2011 and I speak the
language. And I still could not get them to see the value in what I had built. That should have told
me something earlier than it did.

I set both customers up personally, on their own data, in the BI service.

I charged a **one-off installation fee and nothing after it**. I thought a single payment would be
easier to say yes to than a subscription, and for the two who bought it probably was. It also meant
the business earned nothing from a customer after week one, and that I had no renewal moment — no
point at which someone had to decide, out loud and with money, whether the thing was still worth
having. The pricing removed the one signal that would have told me the truth earliest.

## What I found

Two months of doors taught me more than a year of building had, and none of it was what I expected.

**The customer I designed for did not exist in the numbers I needed.** I had built for a pharmacy
owner who thinks like a manager — someone who wants to know their rolling average, their cohort
behaviour, their year-on-year movement. Most owners run the pharmacy as a shop, not as a managed
business, and are not wrong to. That is not a failure of sophistication on their part. It is a
different job.

**A large share of them did not have the data at all.** Many kept no digital record of purchase
invoices. What they bought never entered the database. My product analysed the difference between
what came in and what went out — and for those pharmacies, half of that equation did not exist.
One conversation with one pharmacist before I started building would have surfaced this. I had a year
of work resting on an assumption I never tested because it never occurred to me that it was one.

<figure>
  <img src="/work/datapulse/customers-age-groups.png" width="1668" height="808" loading="lazy"
       alt="The customer screen: a bar list of pseudonymous customer IDs reading &quot;Πελάτης 1377&quot;, &quot;Πελάτης 363&quot;, beside a six-slice pie chart of revenue by age band, under four KPI tiles whose up-arrows are all brand orange.">
  <figcaption>The customer screen. "Πελάτης 1377" is my most frequent customer — and is not a person anyone behind that counter can do anything about.</figcaption>
</figure>

<figure>
  <img src="/work/datapulse/non-moving-stock.png" width="1667" height="805" loading="lazy"
       alt="The non-moving stock screen: an alphabetical table of products unsold for 120 days, totalling 4,181 lines.">
  <figcaption>Dead stock: 4,181 lines, alphabetical. The most useful question the product could answer, returned as a list nobody has an afternoon to read. The answer was in there. The decision was not.</figcaption>
</figure>

**They had no time and no vocabulary for it.** The pharmacist wears every hat, is exhausted by six,
and does not think in rolling averages. Their working model of the business is simpler and completely
rational: what came in, what went out, how much is in the till today.

**And the job they actually wanted done was the opposite of mine.** They did not want more to look
at. They wanted **less to carry** — simple automations that took work off their shoulders. I had
spent a year building something that added a task to their day and called it a benefit.

## The part that is hard to admit

I had already met this objection and misfiled it.

When I interviewed the salesperson, one of my scenario questions was:
*"Imagine a pharmacy client is hesitant to use data analytics. How would you convince them of its
benefits?"*

I had anticipated the exact objection that would kill the product — and treated it as a sales problem
to be overcome rather than a product signal to be listened to. The question was in the room before the
first door was knocked on. I just had it pointed the wrong way.

## What I did about it

I had one other option, and I did not take it. As it became clear the business was going down, I
considered splitting the two products apart and selling them separately and cheaper — a smaller ask,
an easier yes, something for a pharmacy that cared about stock but not about customers. I decided
against it because it felt like degrading my product.

That was pride, not analysis. But the instinct turned out to be right for a reason I had not thought
of at the time: a cheaper version of something people did not want is still something people did not
want. Splitting it would have bought me a few more months and taught me nothing I did not already
know.

I closed the business.

There were exceptions — pharmacies that wanted exactly what I had built — but too few to justify
continuing to spend into it. I could have kept going on the strength of the two customers and my own
sunk year. Stopping was the correct read of the evidence, and it was mine to make.

## What I do differently now

**I ask before I build.** Whether the next thing is useful, to a real person, out loud. Then a
mock-up, then iterate — before a line of code exists. That is now my default working order, and I did
not learn it from a course.

**I check that the data my design depends on actually exists** before designing anything that
depends on it. This is now the first question I ask of any data-driven product.

**I treat "they need convincing" as a finding, not an obstacle.** Resistance is information about
the job to be done. It took a year and my own money to learn that resistance was the product telling
me something, not the market being slow.

---

## What came next, and why it matters

Two projects since, both in the same domain, both built the other way round.

**KINISI** — a Parkinson's exercise app. I ran the research first: 260 patients recruited through
patient organisations across twelve countries, analysed, segmented, turned into personas and design
requirements. The findings contradicted what I would have designed from instinct — community features,
the thing every fitness app leads with, ranked last. I found that **before** building, not after.

**The pharmacy order page** — the tool I should have built in 2022. It does not show anyone a
dashboard. It prints a sheet you can carry to a shelf, and it puts a keyboard shortcut under the hand
of someone whose eyes are on a wholesaler's screen. It takes work off the pharmacist. It is the
product those hundred doors were asking for, and it took me being wrong in public to hear it.

---

*Every screen shown here runs on demonstration data.*
