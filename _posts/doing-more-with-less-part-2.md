---
title: "Doing more with less Part 2: What it costs to automate your comms with n8n"
excerpt: "Automation can save time—but what's the real cost? What we learned running n8n with AI, Gmail and Google Workspace for our non-profit communications."
coverImage: "/assets/posts/doing-more-with-less-part-2/cover.jpg"
date: "2025-05-30"
author:
  name: Kate Blank
  picture: "/assets/team/kate-blank.jpg"
ogImage:
  url: "/assets/posts/doing-more-with-less-part-2/cover.jpg"
tags: ["Automation", "n8n", "Non-profits", "AI"]
published: true
---

*If you haven't read Part 1, start here → [Doing more with less: How I automated our non-profit digital comms using n8n](https://heaps-smart.com/posts/doing-more-with-less/)*

---

## Understanding the real costs of automation tooling

Despite my efficiency euphoria, one question kept popping up: **what will this cost to run?**

The thing about digital tools is you rarely use just one. You **stack** them. And each tool in that stack adds its own costs. So I started looking into how to keep those under control as I move this experiment into production.


![What it looks like to run out of AI-tokens](/assets/posts/doing-more-with-less-part-2/token-error.webp)<figcaption class="caption">What it looks like to run out of AI tokens on n8n</figcaption>

### Platform Costs

In my experience, tools with a more technical interface (like those resembling a developer terminal) often deliver better value and greater flexibility. Platforms like [Supabase](https://supabase.com/) and [n8n](https://n8n.io/) fall into this category. In contrast, user-friendly tools such as [Airtable](https://airtable.com/), [Jotform](https://jotform.com/), and [Zapier](https://zapier.com/) offer clean and accessible interfaces for non-technical users, but that simplicity often comes with a higher price tag.

I've been testing n8n because you can run it for free by hosting it yourself on your laptop. It's brilliant for experimenting and building flows without worrying about usage limits. The catch? When your laptop is closed, so is your automation. To run things on a schedule or while you sleep, you'll need to move it to the cloud. n8n's hosted plans currently start at around AUD$42/month.

### 3rd Party App Costs

Your automation won't work in isolation. It needs to talk to your tools — email, calendar, drive, forms, CRMs, etc. For me, that meant giving it access to Gmail so it could send and receive comms.

If you're using a free Gmail account, you'll hit API limits pretty quickly. Google doesn't provide full API access without a Workspace subscription. As a Workspace user, I already pay AUD$18 per user per month — but it's worth knowing this up front.

### AI Costs

Now let's stack again. Add an AI step and you'll encounter **tokens**. Tokens are chunks of words the AI processes, and when using third-party AI models, they cost real computing power — which means real money. Each task might cost cents, but frequent automations or large content volumes can add up fast. And unlike platform costs, AI usage can fluctuate — so it's worth setting some guardrails.

#### 1. **Use your own key**

<div class="tip-body">

Automation tools like Zapier and [Make](https://www.make.com/) often include built-in AI steps that run through their own gateway, not your personal API key. That feels convenient — but:

- You don't see actual token usage;
- You're likely paying a markup;
- You have less control.

n8n, on the other hand, lets you bring your own key. Just sign up at [OpenAI](https://openai.com/), generate a key, paste it into your workflow, and you're away.

</div>

#### 2. **Set limits**

<div class="tip-body">

In n8n, you can name each workflow — e.g. *Monthly Comms: newsletter, LinkedIn posts, media pitches* — and track its costs. You can even set hard cost limits, so the flow stops if it gets too expensive. Want deeper controls? Set monthly spend caps in your OpenAI account — especially useful if multiple people are using the same API key.

</div>

#### 3. **Be specific**

<div class="tip-body">

Keep your prompts tight. The more precise you are, the less it costs — and the better the results.

Also, don't keep repeating the same tasks. If your workflow processes the same blog post every month, you're wasting both time and tokens. Add a filter. Mine only grabs posts from the previous month.

</div>

#### 4. **Batch it**

<div class="tip-body">

If you've ever worked near a dev team, you've probably heard "we should batch that." There's a reason.

If you're turning 50 blog posts into social content, don't run them all at once. Break them into **batches**. That way, if something breaks or the cost spikes, you can stop, tweak, and restart — without a disaster. n8n makes batching easy. (It even suggested it to me!)

</div>

---

## Final thoughts

- **Automate thoughtfully.** Start with the repetitive stuff that doesn't add much value. For us, repackaging the same message for different audiences was an easy win.

- **Review platform pricing before you build.** Tools like n8n can be run locally, free forever. That makes them perfect for testing before committing to cloud plans. Start small and scale up only when needed.

- **Control your AI usage.** Use your own OpenAI API key to keep costs visible and under control. Add token limits, filter what content gets processed, and batch your automations. Always test first — is it actually helpful? Refine it.

- **Get advice early.** If budget is a concern, talk to someone who knows the landscape. The right setup can save you hours — and money — later on.

---

> Want to automate more, spend less, or just get your digital systems working smarter? Heaps Smart helps non-profits and purpose-driven teams do more with less using automation and AI.
>
> [Get in touch](https://heaps-smart.com/contact) to chat about your next project, or [follow us on LinkedIn](https://www.linkedin.com/company/heaps-smart/)  for more practical tips on digital transformation.
