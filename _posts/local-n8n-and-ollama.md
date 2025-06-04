---
title: "Running low-cost automations locally using n8n and Ollama"
excerpt: "How we built a private, automated workflow to summarise blog posts into an email-ready newsletter. For free, without the cloud."
coverImage: "/assets/posts/local-n8n-and-ollama/local-n8n.jpg"
date: "2025-06-03"
author:
  name: Derek Blank
  picture: "/assets/team/derek-blank.jpg"
ogImage:
  url: "/assets/posts/local-n8n-and-ollama/local-n8n.jpg"
tags: ["Automation", "n8n", "Local AI"]
published: true
---

We wanted to take the cloud-based workflows we explored in the [Doing More with Less](https://heaps-smart.com/posts/doing-more-with-less/) series and see if we could run them entirely locally. By <b>"local,"</b> we mean everything runs on your own machine: no third-party servers, no cloud dependencies, and complete control over the data. And most importantly, local usually means free. This post details how we did just that using n8n and a locally-hosted LLM, all running privately on our own machines.

---

## The Goal: Run an LLM automation workflow locally 

We used a real-world example for this flow. The idea was to make creating a monthly email newsletter easier by summarising recent blog posts from an organisation's website. The workflow should:

- Fetch all published WordPress posts from the previous month.
- Summarise each one into 2-3 engaging, human-like sentences.
- Compile it into styled HTML, and output the formatted email-ready markup. 
- Keep all data processing local. No third-party or cloud LLM services.

---

## Tools We Used

- **[n8n](https://n8n.io/)**: Automation platform, self-hosted in Docker.
- **[Ollama](https://ollama.ai/)**: Lightweight LLM runtime for running models locally on your own machine.
- **[Llama 3](https://www.llama.com/models/llama-3/)**: Meta's free large language model, great for summarising text.
- **[Docker](https://www.docker.com/)**: Container platform used to host n8n and isolate services locally.

---

## How the Automation Works

![The workflow running n8n locally](/assets/posts/local-n8n-and-ollama/local-n8n.jpg)<figcaption class="caption">The workflow running n8n locally</figcaption>

The core of this workflow uses **n8n** to automate the process. It's pretty simple: retrieve blog posts from WordPress, summarise them with an LLM, and then format the results into email-ready HTML. This flow can be scheduled to run at any interval (like the first day of every month), and the HTML output could be sent directly via email or another service for even further automation.

---

## Why Local AI?

Running LLMs locally with Ollama offers major benefits:

- **Privacy**: No external service sees our content.
- **Control**: We can fine-tune prompts or swap models as needed.
- **Zero cost**: Ollama is free, open-source software, while n8n is free to self-host for internal or personal use.

---

## What's Next?

This particular system started as a way to automate one workflow, but the process itself is also valuable for rapidly prototyping workflows before putting them into production.

Once the idea of a workflow is validated, we can:

- Run it in production on our own Docker host for full control
- Alternatively, use n8n Cloud for hands-off hosting and autoscaling
- Swap in a hosted LLM API like OpenAI if we later want better performance or language quality

 The workflow itself is a simple one, but it's an example of how a repetitive time-consuming task can be automated quickly.

---

> Want to build automated workflows for your organisation?
>
> [Get in touch](https://heaps-smart.com/contact) to chat about your comms challenges, or [follow us on LinkedIn](https://www.linkedin.com/company/heaps-smart/) to learn more about our work with automation.


