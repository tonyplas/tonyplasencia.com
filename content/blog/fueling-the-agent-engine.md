---
title: "Fueling the Agent Engine"
date: "2026-08-12"
excerpt: "The useful question about AI agents isn't whether they are autonomous. It's what jobs we can responsibly delegate to software, and what infrastructure makes that delegation trustworthy."
tags: ["ai-agents", "product", "markets"]
---

I've spent most of my career around products that reduce the distance between intent and action.

At Uber, that meant turning “I want to earn money” into a marketplace that could match a driver with demand. At Setter, it meant turning “I need to take care of my home” into a service that could coordinate the work. At Underdog, it meant helping developers create and distribute digital assets without understanding every low-level detail of a blockchain.

AI agents compress that distance further.

A user no longer has to learn every interface, find every piece of information, or manually execute every step. They can describe an objective and let software coordinate the path toward it.

That sounds simple. It isn't.

The interesting part of agentic software isn't a chat interface. It's the action layer underneath it.

An agent becomes useful when it can reliably answer three questions:

1. **What is the user actually trying to accomplish?**
2. **What tools and information are available to accomplish it?**
3. **What is the agent allowed to do without asking again?**

The third question is the one I think about most now.

When we built Griffain, we started from crypto because blockchains gave software a particularly clear action surface. An agent could inspect a wallet, monitor a market, construct a transaction, or execute a strategy. The state was legible and the actions were programmable.

But as agents become more capable, the limiting factor becomes less about whether they *can* act and more about whether a user can trust the system acting on their behalf.

That requires more than intelligence.

It requires identity, permissions, payment rails, observability, reversibility where possible, and clear boundaries around authority.

Financial use cases make this obvious. Imagine an agent tasked with improving the yield on a user's idle dollars. It might compare products, evaluate risk, move funds, monitor rates, and rebalance over time.

The user probably doesn't want to approve every API call. If they did, the agent wouldn't be doing much work.

But they also shouldn't have to hand an opaque model unlimited authority over their money.

The product problem is therefore not “make the agent more autonomous.”

It is **design the right delegation model**.

Give the agent enough authority to be useful, enough context to make good decisions, and enough constraints that the user remains in control.

That is why I think the next major layer of agent infrastructure will look less like a collection of clever prompts and more like an operating system for delegated action.

Agents will need ways to discover tools, authenticate, pay, transact, persist preferences, communicate with other agents, and report what they have done. Developers will need standard interfaces for exposing capabilities. Users will need simple ways to define policies rather than micromanage steps.

The technology is moving quickly, but I don't think the winning products will be those that maximize autonomy for its own sake.

They will be the ones that make delegation feel natural and trustworthy.

The shift from software that helps us **read and write** to software that can **act** is real.

The hard part now is deciding what we should ask it to do, what authority we're willing to give it, and how we build the rails that let it act safely.

That's the agent engine I want to help build.
