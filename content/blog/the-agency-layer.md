---
title: "The Agency Layer"
date: "2026-09-03"
excerpt: "Models know. Tools act. The missing layer lets software safely act for you."
tags: ["ai", "agents", "software"]
---

## Intelligence isn't enough.

For most of computing history, humans operated computers.

We opened applications. We searched websites. We filled out forms. We copied information between systems. We entered passwords. We made decisions. We clicked purchase.

Software provided the tools.

Humans provided the agency.

Artificial intelligence changes this relationship.

For the first time, computers can increasingly understand what we want without requiring us to translate every intention into a sequence of clicks.

Tell a model: **“Find me somewhere good to stay in New York next Tuesday.”**

It can research hotels, compare neighborhoods, analyze reviews and recommend an answer.

That's extraordinary.

But something important is still missing.

It can't necessarily book the hotel. It may not know which neighborhood you prefer. It doesn't know that you hate early flights. It doesn't know your Hilton account. It doesn't know whether spending $900 is reasonable for you. It doesn't have your payment credentials. It doesn't know whether it has permission to spend your money. It doesn't know whom you're traveling with. It can't necessarily operate the websites required to complete the transaction.

And after you close the conversation, it may have no responsibility for whether the task was ever completed.

The model has intelligence.

What it lacks is **agency**.

---

## Intelligence and agency are different things.

Intelligence answers: **What should happen?**

Agency answers: **Can I make it happen?**

That distinction matters because intelligence is rapidly becoming abundant.

Models can already write, reason, research, code, analyze, translate, plan and increasingly operate software. Those capabilities will improve.

But a system that can reason about your life is fundamentally different from a system capable of acting within it.

To cross that gap, AI needs something beyond intelligence.

It needs an **Agency Layer**.

---

## What is the Agency Layer?

The Agency Layer is the infrastructure between human intent and consequential action.

It allows software to understand **who you are**, **what you want**, **what it knows about you**, **what systems belong to you**, **what it is allowed to access**, **what it is allowed to do**, **what resources it may use**, **when it needs your approval**, **how it should execute**, and **how it proves the task was completed.**

Put differently:

> **Models provide intelligence. The Agency Layer provides the infrastructure required for intelligence to safely represent a person.**

That requires several things working together.

---

## 1. Context

Consider two requests:

**“Find the best flight to New York.”**

and

**“Find the best flight to New York for me.”**

Those are radically different problems.

The first can be solved with public information.

The second requires context.

Where do you normally fly from? Window or aisle? Do you care about upgrades? Which airlines do you prefer? What loyalty programs do you have? Do you optimize for price or convenience? Would you rather leave at 6 AM for $300 or 10 AM for $450? Are you traveling alone? When do you need to arrive? What does your calendar look like?

The best answer exists somewhere between public information and private context.

Without context, an AI can produce a good generic answer.

With context, it can produce **your answer**.

This is why memory isn't simply a convenience feature for agents.

Memory is infrastructure.

---

## 2. Intent

Humans rarely communicate complete specifications.

We say: **“I need to get to New York Tuesday.”**

But hidden inside that sentence might be dozens of constraints.

Don't miss the morning meeting. Don't book Spirit. Use points if they're worth it. Stay near Soho. Don't spend more than $2,000. Make sure Callie knows the itinerary. Don't schedule anything during training.

A useful agent must convert incomplete human language into structured intent.

That doesn't mean blindly guessing.

Sometimes it should infer. Sometimes it should remember. Sometimes it should ask.

The art is knowing which.

---

## 3. Identity

The internet knows how to authenticate humans.

Email. Passwords. Passkeys. OAuth. Biometrics. Wallets.

But agents introduce a new problem.

The system accessing an account may no longer be the human. It may be software representing the human.

That creates a fundamentally different question:

**Who is this agent acting for?**

And eventually: **How does another system verify that relationship?**

Identity in an agent economy isn't only about proving that Tony is Tony.

It's about proving: **this software is legitimately acting on Tony's behalf.**

---

## 4. Credentials

An intelligent agent without credentials is like an extraordinarily capable employee locked outside the office.

It may know exactly what to do. But it can't do it.

Real-world tasks require access: airlines, banks, email, calendars, commerce, transportation, insurance, government portals, work software and health systems.

Every additional credential expands what an agent can accomplish.

But credentials create risk.

The goal can't simply be: **give the AI all your passwords.**

The real problem is building infrastructure that lets agents use credentials safely without exposing unnecessary authority.

---

## 5. Permission

Credentials answer: **Can this system access my account?**

Permission answers: **What is it allowed to do once it's there?**

That distinction becomes critical as agents become autonomous.

Imagine telling an agent: **“Keep my travel organized.”**

Should that mean it can research flights? Book flights? Spend $300? Spend $3,000? Cancel a reservation? Move meetings? Use loyalty points? Upgrade your seat? Book something for your partner?

The future of agent permissions will likely be much more granular than today's login systems.

Something closer to:

**You may spend up to $500 on domestic travel without asking me.**

**Above $500, request approval.**

**Never book basic economy.**

**Never move money between investment accounts.**

**You may reorder previously purchased household items under $100.**

Authority becomes programmable.

---

## 6. Execution

Even perfect context, identity and permission are useless if the agent cannot interact with the world.

The internet was built for humans operating interfaces.

Agents need execution surfaces: APIs where they exist, browsers where they don't, computer use, mobile applications, operating systems, and eventually physical devices.

The agent economy therefore creates an enormous interoperability problem.

Intelligence needs hands.

Execution gives it hands.

---

## 7. Capital

Many useful actions eventually encounter money.

Buy this. Book that. Pay them. Renew this. Sell that. Deposit here. Move this. Negotiate that.

An agent capable of research but incapable of economic action remains an advisor.

An agent capable of deploying capital becomes an economic actor.

But money dramatically increases the consequences of mistakes.

That means capital must sit behind identity, permissions, limits and verification.

The interesting problem isn't simply: **Can an AI pay?**

It's: **Can an AI safely use my money under rules I understand and control?**

---

## 8. Proof

Traditional software assumes the user is watching.

You click “purchase.” You see the confirmation. You know what happened.

Agents change that.

If I delegate a task and walk away, I need the system to tell me: What did you do? What did it cost? Which account did you use? What changed? What failed? What still needs attention? Where is the receipt?

Delegation requires proof.

The output of an agent shouldn't merely be: **“Done.”**

It should be a verifiable record of what happened.

---

## 9. Continuity

And finally, agency requires persistence.

Humans don't think in sessions.

Our lives contain open loops.

The refund hasn't arrived. The flight price might drop. The restaurant hasn't confirmed. The package is late. The investor hasn't replied. The insurance claim is unresolved.

Traditional software waits for us to return.

An agent should understand that the task isn't complete simply because the conversation ended.

It should remember unfinished obligations. Watch for changes. Resume when conditions change. Escalate when necessary.

The difference is subtle but enormous.

A chatbot responds.

> **An agent remains responsible for the loop.**

---

## The Personal Agent

Put these pieces together and a very different kind of software appears.

Not a chatbot. Not a browser. Not a collection of integrations. Not simply a smarter model.

A persistent system representing a person across the digital world.

It understands context. Interprets intent. Carries identity. Uses credentials. Operates under permissions. Executes through software. Deploys capital. Returns proof. Remembers what remains unfinished.

The interface could be almost anything: voice, text, desktop, mobile, glasses—eventually perhaps very little interface at all.

Because the important abstraction isn't the interface.

It's the relationship.

For decades, the relationship was:

**Human → Software → Internet**

You operated software to accomplish things.

The emerging relationship is:

**Human → Agent → Internet**

You express intent.

The agent figures out the software.

That could be one of the largest changes to computing since the graphical user interface.

---

## Software becomes representation.

The operating systems of the personal-computing era organized applications.

The browsers of the internet era organized websites.

Search engines organized information.

Smartphones organized services around people.

The next interface may organize **actions**.

Instead of deciding: Which app do I open? Which website do I visit? Which form do I fill out? Which account do I use?

The user increasingly expresses an outcome:

**Get me there. Buy this. Fix that. Handle this. Figure this out.**

The complexity moves behind the interface.

That is why the most important agent may not be the one with the highest benchmark score.

Models will change. Models will improve. Models may increasingly become interchangeable.

But the system that knows you, represents you, holds your permissions, understands your history and has earned your trust occupies a much more durable position.

Because eventually the question won't be: **Which AI is smartest?**

It will be: **Which AI do I trust to act for me?**

---

## The Agency Layer

The internet made information universally accessible.

AI is making intelligence increasingly accessible.

Agents are making that intelligence increasingly capable of work.

But consequential action requires something else.

Context. Intent. Identity. Credentials. Permission. Execution. Capital. Proof. Continuity.

Together, these form an Agency Layer between humans and the digital world.

And as intelligence becomes cheaper, this layer may become more—not less—important.

Because intelligence can tell a computer what should happen.

> **Agency allows it to happen for you.**
