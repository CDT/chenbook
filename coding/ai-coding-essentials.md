# AI Coding Essentials

## System Design Docs

### `AGENTS.md`
- A central design doc describing your AI system’s **agents, tools, and flows**.  
- Keeps your project understandable, maintainable, and shareable.  

#### References
- [AGENTS.md](https://agents.md) – the community standard.  
- [OpenAI agents.md GitHub project](https://github.com/openai/agents.md).  

#### Typical Contents
- Roles: (e.g., Retrieval Agent, Planning Agent, Evaluation Agent)  
- Tools: (APIs, DBs, filesystems)  
- Communication: message formats, error handling  
- Examples: sample prompts, usage flows  

---

## Agents
- **Definition**: Autonomous components that interact with models, users, and tools.  
- **Types**:  
  - Single-agent systems (one agent with multiple tools).  
  - Multi-agent systems (specialized agents collaborating).  

#### Key Concepts
- **Planning**: deciding what step to take.  
- **Execution**: calling tools or APIs.  
- **Memory**: retaining context (short-term / long-term).  
- **Reflection**: self-evaluating outputs for quality.  

#### Frameworks
- [LangChain](https://www.langchain.com/)  
- [Microsoft AutoGen](https://microsoft.github.io/autogen/)  
- [crewAI](https://github.com/joaomdmoura/crewAI)  
- Custom Node.js/Python implementations.  

---

## Prompt Engineering
- Crafting prompts for consistent, reliable outputs.  

#### Core Techniques
- **Role prompting**: give the model a persona (e.g., “You are a medical assistant”).  
- **Few-shot prompting**: provide examples of input/output pairs.  
- **Chain-of-thought prompting**: ask the model to reason step by step.  
- **Structured prompting**: JSON output, schema enforcement.  

#### Tools
- [Guidance](https://github.com/microsoft/guidance)  
- [Outlines](https://github.com/outlines-dev/outlines)  
- Schema-based validation (Pydantic, Zod).  

---

## Model Context Protocol (MCP)
- A **standard protocol** for connecting LLMs with external tools/services.  

#### Why MCP?
- Provides a universal “adapter” layer between models and environments.  
- Makes agents portable across backends.  

#### Key Pieces
- **Servers**: expose tools/resources (filesystem, DB, APIs).  
- **Clients**: connect LLMs to MCP servers.  
- **Transport**: stdio, WebSockets.  

#### Examples
- `@modelcontextprotocol/server-filesystem` → let an agent read/write local files.  
- `@modelcontextprotocol/client` → connect an LLM to your tools.  

---

## Retrieval-Augmented Generation (RAG)
- Combine **retrieval** (knowledge base search) with **generation** (LLM response).  

#### Workflow
1. Embed docs → store in vector DB (ChromaDB, FAISS, Pinecone).  
2. Retrieve top-k results by similarity.  
3. Inject into prompt for grounded answers.  

#### Best Practices
- Use domain-specific embeddings.  
- Keep chunks ~500–1000 tokens.  
- Add metadata (source, author, date).  

---

## Vector Databases
- Databases specialized for **embedding search**.  

#### Popular Options
- **ChromaDB**: local-first, Python/JS.  
- **FAISS**: fast, C++/Python, great for research.  
- **Pinecone/Weaviate**: scalable cloud services.  

#### Features
- Similarity search (cosine, dot product).  
- Metadata filtering.  
- Hybrid search (keywords + embeddings).  

---

## Tool-Calling & Function Execution
- Modern LLMs can “call functions” directly.  

#### Flow
1. Define tool schema (JSON).  
2. Model selects tool + arguments.  
3. System executes → returns result.  
4. Model continues with new context.  

#### Use Cases
- Calculator, search API, DB query, file read/write.  

---

## APIs & SDK Integration
- How you **connect your app to AI providers**.  

#### Essentials
- **OpenAI SDK** (Python/Node.js).  
- **Anthropic SDK**.  
- **DeepSeek API** (OpenAI-compatible).  
- Streaming vs batch requests.  
- Error handling & retries.  

---

## Evaluation & Guardrails
- Ensuring **quality, safety, and reliability**.  

#### Methods
- Human eval sets.  
- Automatic metrics (BLEU, Rouge, accuracy).  
- Guardrails: schema validation, regex, filtering toxic outputs.  
- Monitoring: logs, traces, dashboards.  

---

## Deployment & Automation
- Packaging AI apps for production.  

#### Tools
- **Docker** for containerization.  
- **FastAPI / Express** for serving models.  
- **Vercel / Railway** for quick hosting.  
- Background jobs: cron, Celery, Node workers.  

#### Workflow Automation
- Chain tasks with MCP or agents.  
- Integrate with Slack, email, or hospital IT systems.  

---
