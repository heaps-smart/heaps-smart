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

Despite my efficiency euphoria, one question kept popping up: what will this cost to run?

The thing about digital tools is you rarely use just one. You stack them. And each tool in that stack adds its own costs. So I started looking into how to keep those under control as I move this experiment into production.

![What it looks like to run out of AI-tokens](/assets/posts/doing-more-with-less-part-2/token-error.webp)<figcaption class="caption">What it looks like to run out of AI tokens on n8n</figcaption>

### Platform Costs

In my experience, the more a tool looks like a developer terminal (dark screen, blinking text, scary) the better value it tends to be. Think [Supabase](https://supabase.com/) and [n8n](https://n8n.io/). On the flip side, cheerful tools like [Airtable](https://www.airtable.com/), [Jotform](https://www.jotform.com/), and [Zapier](https://zapier.com/) are clean, friendly, and seemingly easy to use, but that usually means you end up paying more. I've been testing n8n because you can run it for free by hosting it yourself on your laptop. It's great for experimenting and building flows without worrying about usage limits. The catch is that when your laptop is closed, so is your automation. To run things on a schedule or while you sleep, you'll need to move it to the cloud. n8n's hosted plans currently start at AUD$42 per month.

### 3rd Party App Costs

Now, when your automation needs to interact with the tools you already use, like email, calendar, drive, forms, CRMs etc, you need to give it access to information within these systems. In my case, that meant integrating Gmail so the automation could send and receive comms on my behalf. If you're using a free Gmail account, you'll hit limitations quickly as Google doesn't provide full API access without a Workspace subscription. As a Google Workspace customer, I already pay for this access which is currently AUD$18 per user per month.

### AI Costs

Let's keep stacking! If you choose to add an AI step to your workflow, like asking it to summarise, rewrite, or generate content, you'll run into something called "tokens." Tokens are chunks of words the AI processes and importantly, they cost real money. Each task shouldn't cost much but if your automations run frequently or handle lots of content, those costs can add up quickly and unlike the other costs mentioned here, AI-costs can fluctuate so it's important to add controls:

#### 1. For greater control, use your own key

<div class="tip-body">

If you're using AI in your workflows, it's worth taking a moment to understand how costs are handled by platforms such as [n8n](https://n8n.io/), [Zapier](https://zapier.com/) and [Make](https://www.make.com/).

Automation tools like Zapier and Make often include built-in AI steps which run through their custom gateway, not your personal key, which seem convenient but means that:

- You don't see the actual token usage;
- You're paying a markup, often wrapped into your monthly subscription or per-task fees;
- You have less control over how and when the AI is used.

By contrast, tools like n8n let you connect with your own key. And it's very simple to set up: sign up at [OpenAI](https://openai.com/), hand over your credit card, generate a key, and paste it into your automation platform.

</div>

#### 2. Set limits

<div class="tip-body">

In n8n, you can give each workflow a specific name, like "Monthly Comms: newsletter, LinkedIn posts, media pitches" and monitor the running costs on a dashboard. This level of monitoring makes it easy to clearly associate a cost to an outcome, and determine if and where refinements are needed. 

You can also set cost limits on each workflow, so it stops automatically if it gets too expensive. If you need even more control, you can also set spending limits directly in your OpenAI account, including a maximum monthly budget. This is especially useful if you have a team using one AI account. 

</div>

#### 3. Be specific

<div class="tip-body">

My tip here is to keep your prompts tight and avoid asking for more than you need. The more precise you are, the less it costs, and the better the results.

Also, don't repeat tasks over and over. If your workflow keeps pulling the same blog posts every month, you're wasting both time and tokens. Instead, add a filter. In mine, I set my automation to run on the first of the month, and the task to only grab content from the previous month. That way, I'm only working with what's new and not reprocessing something I already turned into content last month.

</div>

#### 4. Batch it

<div class="tip-body">

If you've ever been in earshot of a dev team or read their work diary, you've probably seen and heard "enable batching", "batch process" or "we should batch that!" (It's a thing.) And for good reason. If you're turning 50 blog posts into social content, don't run them all at once. Break it into smaller batches. That way, if something goes wrong, or the token usage starts creeping up, you can hit the big red button, make changes, and avoid things turning into a big red problem. n8n makes breaking content into batches super-simple, in fact it suggested it to me and all I had to do was agree.

</div>

---

## Final thoughts

- **Automate thoughtfully.** Start by identifying where you or your team spend time on repetitive work that doesn't add much value. In our case, recreating the same messaging for different audiences was a clear candidate for automation.

- **Review platform pricing carefully before you build.** Tools like n8n can be run locally for free forever, making them ideal for testing before committing to paid cloud plans or full rollouts. Start small and upgrade your plan as you really need it.

- **Control your AI usage.** Connect your own OpenAI API key for full visibility and cost control. It's often cheaper and gives you more flexibility than bundled AI features in platforms like [Zapier](https://zapier.com/) or [Make](https://www.make.com/). Add caps on token usage, filter what content gets processed, and run your automations in small batches. Always test your setup first — is it actually helpful? Get feedback and refine.

- **Get professional advice early.** If cost is a major factor, consult with someone who knows the automation landscape. The right tool stack from the start can save you hours — and dollars — down the track.

---

> Want to automate more, spend less, or just get your digital systems working smarter? Heaps Smart helps non-profits and purpose-driven teams do more with less using automation and AI.
>
> [Get in touch](https://heaps-smart.com/contact) to chat about your next project, or [follow us on LinkedIn](https://www.linkedin.com/company/heaps-smart/)  for more practical tips on digital transformation.
