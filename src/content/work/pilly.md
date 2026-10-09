---
title: "Price, stock, renewals"
tag: "Research · Design"
summary: "18 hours watching three pharmacy counters, and the app designed from it."
order: 1
---

**Pilly** · a two-sided pharmacy app · MSc Interaction Design thesis, spring 2022
Sole researcher and designer
18 hours observed · 147 interactions · 6 interviews · ~40-screen Android prototype · 7-screen pharmacist dashboard

> I spent 18 hours watching three pharmacy counters. The most common subject wasn't the medicine.
> It was the price — and, on the phone, whether it was in stock.

<figure>
  <img src="/work/pilly/desk-pending.webp" width="1600" height="960" alt="Pilly pharmacist dashboard, Pending screen: a table of customers with dates, medicines, amounts and a status tag — borrowed, waiting, or refill — each with an action menu">
  <figcaption>The pharmacist's <b>Pending</b> screen. Every open item in one list: borrowed (<span lang="el">Δανεικό</span>), waiting for stock (<span lang="el">Σε αναμονή</span>), refill.</figcaption>
</figure>

---

## The setup

Pilly was my thesis for the joint MSc in Interaction Design (Cyprus University of Technology and
Tallinn University), submitted in May 2022. By then I had been co-running a pharmacy on Rhodes since
2011.

The research on pharmacist–patient communication is mostly about **counselling**: how much the
pharmacist explains, what, and in what style. The thesis asked a wider question: what actually
happens between pharmacist and patient in a Greek pharmacy, at the counter **and on the phone**, and
what could support it?

Three research questions:

1. How could pharmacists and assistants be supported **at the counter**?
2. What do **patients** need there, and how could it be met?
3. How could both sides handle the **remote** contact — calls, messages — better?

## What I ran

**Observation first.** A work-sampling study in three pharmacies on Rhodes, March 2022: two
three-hour sessions in each, mornings and one afternoon, one Saturday. Each pharmacy's owner gave
consent beforehand, but not the content of the checklist, to limit people performing for the observer.

The instrument was a **38-item checklist**: 17 items from published pharmacy studies, and **21 I added**
for how Greek pharmacies work — partial collection, debts, shortages, the phone, and whether a CRM was used. To my
knowledge, work-sampling had not been used in Greek pharmacies before.

- **18 hours** · 3 pharmacies · 3 pharmacists and 3 assistants observed
- **147 interactions** · **517 data points**

**Then interviews.** Six semi-structured interviews — **three pharmacists** (not the ones I had
observed) and **three patients with chronic conditions**, all regular pharmacy customers. 183 minutes in
total, transcribed verbatim, and thematically analysed in NVivo: **121 codes, merged to 55, supporting
8 themes**.

## What the counter showed

What came up, out of 147 interactions:

<div class="table-scroll" role="region" aria-label="Table" tabindex="0">

| Observed | Share |
|---|---|
| **Administrative — price, generic availability, renewals** | **58.5%** |
| Name of the medicine | 51.0% |
| People waiting their turn | 37.4% |
| Over-the-counter advice | 34.7% |
| **No information at all — only dispensing** | **33.3%** |
| Purpose of the medicine | 25.9% |
| How to use it | 16.3% |
| Interactions with other medicines | 2.7% |
| Side effects | 0.7% — once |
| A CRM system used | **0** |

</div>

**The counselling the literature focuses on — side effects, interactions, contraindications — was the
rarest thing I saw.** Side effects came up once in 147 interactions. Price, generics and renewals came up in more than half.

And smaller signals that turned out to matter:

- Patients **phoned 11 times** to ask whether something was in stock.
- **7 times** a patient paid off an old debt; **twice** someone asked to pay next time.
- **6.8%** couldn't get everything on the prescription because of shortages, and would have to come
  back.
- **5.4%** chose to take only part of their prescription.
- One of the three pharmacies had a CRM installed. **Nobody used it.**

## What people told me

Eight themes came out of the interviews. The ones that shaped the design:

**Chronic patients don't want the leaflet read to them again.** They want it fast.
> "If it is a recurring prescription, they usually do not want you to remind them… many times we
> have faced the need for fast and prompt service." — *a pharmacist*

**There is still a minimum.** Both sides agreed on it: interactions, side effects, dosage. The thesis
calls this **functional information** — the least a patient should leave with.

**The phone breaks the counter.**
> "Usually the breaks have to do with the phones ringing." — *a pharmacist*

**Patients are cut off from their own medication.** They photograph prescriptions, describe boxes,
phone the pharmacy from the doctor's office because they can't remember a brand name.
> "…an application would be very useful to know… when the medicines are ready or for the availability
> of medicines, my history of medicines." — *a patient*

**And one practice the checklist didn't count, but I asked about in every interview: lending medicine.**

## Borrowed medicines

In Greek pharmacies a regular patient can take a medicine now and bring the prescription later —
because the doctor isn't available, or because it's urgent. It is a favour, and it keeps people
loyal. It also costs the pharmacy money, because people forget.

> "There are losses… many times they forget that something like this has happened." — *a pharmacist*

> "I do not mind the loan but to be sure that the pharmacist will not be harmed by it."
> — *a pharmacist*

**That second line is close to a brief.** It doesn't ask for the practice to stop. It asks for it to
stop costing money.

So in Pilly a loan is **recorded on both sides**:

- **The patient** sees it in their orders as a red card — *borrowed on 08/03/22 · Arcoxia, Depon ·
  paid: no* — and after 20 days, a reminder: *"More than 20 days have passed since you borrowed
  Arcoxia, Depon…"*
- **The pharmacist** sees it in **Pending** (Εκκρεμότητες), tagged *Δανεικό*, next to items waiting for
  stock and refills — and on the weekly calendar.

<div class="row">
<figure class="phone">
  <img src="/work/pilly/phone-borrowed.webp" width="540" height="1140" loading="lazy" alt="Patient app, My orders: a red card for a borrowed medicine — borrowed on 08/03/22, Arcoxia and Depon, 2 items, 11.08 euros, paid: no — with Pay and Cancel buttons">
  <figcaption><b>Patient</b> · a loan is a red card in My orders — <i>paid: no</i></figcaption>
</figure>
<figure class="phone">
  <img src="/work/pilly/phone-nudge.webp" width="540" height="806" loading="lazy" alt="Patient app reminder: 'More than 20 days have passed since you borrowed Arcoxia, Depon…' with an illustrated pharmacist">
  <figcaption><b>Patient</b> · after 20 days, a reminder</figcaption>
</figure>
</div>

<figure>
  <img src="/work/pilly/desk-calendar.webp" width="1600" height="960" loading="lazy" alt="Pharmacist dashboard, weekly calendar: customer pickups by day and hour, colour-coded as borrowed, orders or pending">
  <figcaption><b>Pharmacist</b> · loans sit in Pending and on the weekly calendar, coloured apart from orders</figcaption>
</figure>

## What I designed

**A patient app for Android** — about 40 distinct screens, built in Adobe XD and wired as a clickable
prototype. **And a desktop system for the pharmacist** — 7 screens.

The two connect when the patient **pairs with their pharmacy** using an 8-digit code, the same code on
both screens. At that point the patient chooses what to share — past prescriptions, medicines beyond
prescriptions, their social security number (ΑΜΚΑ) — and every transaction afterwards is saved on
their side too.

<div class="row">
<figure class="phone">
  <img src="/work/pilly/phone-pair.webp" width="540" height="1140" loading="lazy" alt="Patient app: 'Connect with pharmacist' showing the code 10 50 62 34 above a barcode">
  <figcaption>Patient · the code</figcaption>
</figure>
<figure>
  <img src="/work/pilly/desk-pair.webp" width="1600" height="960" loading="lazy" alt="Pharmacist dashboard: 'Enter the 8-digit code' with eight empty input fields">
  <figcaption>Pharmacist · enter it, and the two are linked</figcaption>
</figure>
</div>

Each feature traces back to something observed or said:

<div class="table-scroll" role="region" aria-label="Table" tabindex="0">

| What I saw or heard | What Pilly does |
|---|---|
| Price, generics and renewals dominate the counter | **Home** shows this month's spend by type; prescriptions show what's ready |
| Patients take only part of a prescription | **Prescription ready** — swipe away what you don't need, pay for the rest |
| 11 calls about stock; the phone breaks the counter | **Orders and readiness in the app**; **text messaging** with the pharmacist |
| Lending costs the pharmacy money | **Borrowed medicines** recorded on both sides, with a reminder |
| The agreed minimum: functional information | **Drug info** kept to use, dosage, contraindications, interactions |
| Patients can't recall brand names | **Pairing shares history** with the pharmacy; **scan the box's barcode** to find a medicine |
| Patients come in when they've run out | **Refill timing** estimated from pill counts, so the pharmacist knows who's due |
| The pharmacist juggles counter, phone and paperwork | **Dashboard**: overview, calendar, customers, orders, messages, **Pending** |

</div>

<div class="row">
<figure class="phone">
  <img src="/work/pilly/phone-home.webp" width="540" height="1140" loading="lazy" alt="Patient app home: search, this month's spend split into medicines with co-payment, without co-payment, supplements and family members, total 84 euros, and My prescriptions">
  <figcaption>Home · this month's spend, and prescriptions</figcaption>
</figure>
<figure class="phone">
  <img src="/work/pilly/phone-ready.webp" width="540" height="1136" loading="lazy" alt="Patient app: 'Your prescription is ready to be filled' listing three medicines, with a hint to swipe left on the ones you don't need, amount payable and co-payment, Fill and Cancel buttons">
  <figcaption>Ready · swipe away what you don't need</figcaption>
</figure>
<figure class="phone">
  <img src="/work/pilly/phone-done.webp" width="540" height="1136" loading="lazy" alt="Patient app: 'Your order was sent successfully — you will be updated when it is complete' with an illustration">
  <figcaption>Sent · you'll hear when it's done</figcaption>
</figure>
</div>

<div class="row">
<figure class="phone">
  <img src="/work/pilly/phone-info.webp" width="540" height="1136" loading="lazy" alt="Patient app, drug information for Depon 500 mg: use, dosage, contraindications and interactions">
  <figcaption>Drug info · the functional minimum</figcaption>
</figure>
<figure class="phone">
  <img src="/work/pilly/phone-scan.webp" width="540" height="1140" loading="lazy" alt="Patient app scanning the barcode on a medicine box, with a 'Search by name' button">
  <figcaption>Scan the box instead of describing it</figcaption>
</figure>
<figure class="phone">
  <img src="/work/pilly/phone-chat.webp" width="540" height="1140" loading="lazy" alt="Patient app, text conversation with the pharmacist about collecting medicines after 5 pm and a medicine in shortage">
  <figcaption>Text, instead of a call at the counter</figcaption>
</figure>
</div>

<figure>
  <img src="/work/pilly/desk-overview.webp" width="1600" height="960" loading="lazy" alt="Pharmacist dashboard overview: monthly sales, prescriptions processed, products, a sales curve for the month, and tables of prescriptions and medicines">
  <figcaption>Pharmacist · overview</figcaption>
</figure>

<figure>
  <img src="/work/pilly/desk-customers.webp" width="1600" height="960" loading="lazy" alt="Pharmacist dashboard, customers: cards with photo, customer since date, phone, and quick actions for message, pending, orders and calendar">
  <figcaption>Pharmacist · customers, each one a step from a message, a pending item or an order</figcaption>
</figure>

## What it didn't do

**Pilly was never tested with users.** The thesis says so — it is the most substantial limitation it
lists. The prototype is clickable; it was never put in front of patients or pharmacists.

The sample was small and convenient: three pharmacies on one island, all the observed pharmacists
women, three patients. Some patterns came through, but more people would have given them depth.

And it was never built.

## Four years later

In April 2026 I picked Pilly up again. ChatGPT drafted a set of
product documents — vision, user groups, a ranked problem set, feature priorities, a phased plan —
and I reviewed them.

The ranked problems:

1. **Pharmacy communication is fragmented** — calls, walk-ins, Viber, WhatsApp
2. **Refills are too manual** — memory, paper, repeated calls
3. **Patients don't know if something is available or ready**

Those are the 2022 findings, ranked. The documents also add what the thesis didn't have: a launch
segment (the pharmacist, the staff, and existing loyal customers — chronic-therapy users,
caregivers, repeat buyers) and an explicit
**Later** list — loyalty, full ERP integration, rich health records.

Borrowed medicines are not in them.

## Where it shows up now

The refill-timing idea — know who's due before they run out — is close to something I've since built
for my own pharmacy: a Power BI dashboard, **still in beta**, that follows our regular chronic patients
and whether they come back on time, early or late.

---

## What I'd do differently

- **Test it.** Five patients and a clickable prototype would have told me more about the borrowed-
  medicines card than any amount of reasoning about it.
- **Widen the sample.** One island and women pharmacists only — the patterns might hold, but I can't
  show that they do.

---

*Observation took place with each pharmacy owner's consent; interviewees gave recorded oral consent,
and were pseudonymised in the thesis. Quotes here are attributed by role only, in the thesis's English
translation. Every name, phone number and photo in the screens is invented or from a stock avatar
library; one placeholder name has been replaced.*
