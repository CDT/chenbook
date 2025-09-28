# Prompt Engineering

## Reference

1. [What is Prompt Engineering](https://cloud.google.com/discover/what-is-prompt-engineering?hl=en)

2. [Prompt Engineering](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/concepts/prompt-engineering)

3. [Prompt Engineering Guide](https://www.promptingguide.ai/)

## Types of Prompts

- **Direct Prompts (Zero-shot)**:  
  Provide the model with a direct instruction or question, without any additional context or examples.  
  - *Example*: Idea generation (asking the model to brainstorm creative ideas), summarization, or translation (asking the model to summarize or translate content).

- **One-shot, Few-shot, and Multi-shot Prompts**:  
  Give the model one or more examples of input-output pairs before presenting the actual prompt. Supplying examples helps the model better understand the task and generate more accurate responses.

- **Chain of Thought (CoT) Prompts**:  
  Encourage the model to break down complex reasoning into a series of intermediate steps, resulting in a more comprehensive and well-structured final output.

- **Zero-shot Chain of Thought (CoT) Prompts**:  
  Combine zero-shot prompting with chain of thought reasoning by asking the model to perform reasoning steps, often leading to improved output quality.