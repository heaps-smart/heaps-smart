---
title: "Doing more with less: How we automated non-profit digital comms using n8n"
excerpt: "How a non-developer built an n8n workflow that turns one blog post into multiple communications, customised by audience and format."
coverImage: "/assets/posts/doing-more-with-less/cover.jpg"
date: "2025-05-29"
author:
  name: Kate Blank
  picture: "/assets/team/kate-blank.jpg"
ogImage:
  url: "/assets/posts/doing-more-with-less/cover.jpg"
tags: ["Automation", "n8n", "Non-profits"]
published: true
---

**tl;dr**  
**The problem:** Non-profits spend hours rewriting the same content for different audiences, formats and schedules. This work isn't creative, it's time consuming.

**The experiment:** As a non-developer, I built a no-code n8n workflow that turns one blog post into a LinkedIn series of posts, traditional media pitches, and a member newsletter. It runs on a schedule, customises the outputs by audience and format, and gives me control through a review step. I don't have to think about it anymore, at the end of the month it's all there, I just have to hit send. 

**The learning:** Automation costs can *stack* up: AI tokens, 3rd party apps, platform and cloud hosting. With the right tool selection, design and monitoring, it can scale affordably and save *so* much time. 

---

## If I could automate everything, I would.

<video autoplay muted loop playsinline poster="/assets/posts/doing-more-with-less/cover.jpg" style="display: block; width: 100%; margin: 2rem 0; border-radius: 0.5rem; box-shadow: 0 2px 16px rgba(0,0,0,0.08);">
  <source src="/assets/posts/doing-more-with-less/digital-comms-automation.mp4" type="video/mp4" />
</video>

In non-profits, digital comms often get squeezed into the gaps between other, often more important, work. Blog posts, newsletters, donor updates, social content, and media pitches are all vital but repetitive and time consuming. For smaller orgs, it's expensive and unsustainable. With shrinking budgets and growing to-do lists, I wanted to see how much of this communications work could be automated, starting with a single *human*-written blog post.

I've been an automation girlie for a while now, and I'd been hearing endlessly about [**n8n**](https://n8n.io/). n8n is an automation tool that works a lot like [**Zapier**](https://zapier.com/), but with more flexibility and no subscription fees if you host it yourself (which is perfect for the rapid prototyping we do at Heaps Smart).

First, I **defined my workflow** (what needed to be done):

* Every month, pull last month's blog posts from our charity website  
* Turn each blog into three related LinkedIn posts (customise for Audience A)  
* Draft story pitches for these partner organisations (customise for Audience B)  
* Draft media story pitches for these media outlets (customise for Audience C)  
* Summarise and combine all posts into a branded member newsletter (customise for Audience D)  
* Email me the outputs to review

With **n8n**, **OpenAI** and **Google**, I was able to take one piece of writing and repurpose it in multiple ways, for four different audiences, on a defined schedule. While the results weren't always perfect during my test, they were a solid starting point, and I can already see how I would refine this flow to suit our needs better. And next time, I would be faster.

Unlike other automation tools I've worked with, I experienced almost no blockers or failed executions. This was almost entirely due to my using ChatGPT as my copilot. The only issue I ran into was running out of tokens so quickly. We'll get into managing costs in [Part 2](https://heaps-smart.com/posts/doing-more-with-less-part-2/).

---

> Want to save time on digital comms, or get more value from the content you already create? Heaps Smart helps non-profits and purpose-driven teams automate repetitive communications, repurpose content for different audiences, and build smarter workflows.
>
> [Get in touch](https://heaps-smart.com/contact) to chat about your comms challenges, or [follow us on LinkedIn](https://www.linkedin.com/company/heaps-smart/) for more practical tips on digital transformation for non-profits.



