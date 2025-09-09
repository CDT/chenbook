# ChenBook AI Agent Guidelines

This document provides guidelines for how AI agents could support the ChenBook project - a personal knowledge management system built with VitePress. ChenBook organizes knowledge across four main categories: music, coding, history, and science. Content is maintained in either Chinese or English, without bilingual translation support.

## Proposed Agent Roles

### 1. Content Curator Agent
**Primary Function**: Could manage and organize knowledge entries across all categories

**Potential Responsibilities**:
- Categorize new content into appropriate sections (music, coding, history, science)
- Maintain consistent formatting and structure across entries
- Ensure content quality and completeness
- Generate metadata tags for better discoverability
- Manage content relationships and cross-references
- Structure knowledge entries in standardized format:
  - Short and succinct markdown articles
  - Curated list of relevant questions for each topic
  - Interactive flashcards using Leitner/Zettelkasten system

**Potential Capabilities**:
- Content analysis and automatic categorization
- Metadata generation and tagging
- Cross-reference detection and linking
- Quality assessment and validation
- Knowledge structure standardization
- Flashcard generation and management

**Knowledge Structure Standards**:
- **Core Article**: Each knowledge entry could begin with a concise, well-structured markdown article that captures the essential information in a clear, readable format
- **Question Bank**: Following the main article, agents could generate a curated list of thought-provoking questions that encourage deeper understanding and self-assessment
- **Flashcard System**: Each entry could conclude with interactive flashcards implementing the Leitner/Zettelkasten spaced repetition system:
  - Cards display only the title initially
  - Click-to-flip functionality reveals detailed information
  - Reusable Vue component ensures consistent UI/UX across all categories
  - Spaced repetition algorithm tracks user progress and review schedules

### 2. Code Documentation Agent
**Primary Function**: Could specialize in coding category content

**Potential Responsibilities**:
- Document programming concepts, tutorials, and best practices
- Generate code examples and explanations
- Maintain code snippet accuracy and currency
- Create technical documentation
- Explain complex programming concepts

**Potential Capabilities**:
- Multi-language code generation and explanation
- Technical writing and documentation
- Code review and optimization suggestions
- API documentation generation

### 3. Research Assistant Agent
**Primary Function**: Could support research and fact-checking across all categories

**Potential Responsibilities**:
- Conduct research on topics within the four categories
- Verify information accuracy and sources
- Discover related content and connections
- Generate summaries and key insights
- Identify knowledge gaps

**Potential Capabilities**:
- Web research and information gathering
- Source verification and citation management
- Content summarization and synthesis
- Trend analysis and emerging topics identification

### 4. Music Knowledge Agent
**Primary Function**: Could manage music-related content and analysis

**Potential Responsibilities**:
- Document musical theory, history, and analysis
- Maintain artist and album information
- Explain musical concepts and techniques
- Create listening guides and recommendations
- Track musical trends and developments

**Potential Capabilities**:
- Musical analysis and theory explanation
- Artist and genre research
- Music recommendation systems
- Historical music context and evolution

### 5. Science Research Agent
**Primary Function**: Could handle scientific content and research

**Potential Responsibilities**:
- Document scientific discoveries and theories
- Explain complex scientific concepts
- Maintain accuracy in scientific information
- Create educational content for various science topics
- Track scientific developments and breakthroughs

**Potential Capabilities**:
- Scientific concept explanation and visualization
- Research paper summarization
- Data analysis and interpretation
- Educational content creation

### 6. History Documentation Agent
**Primary Function**: Could manage historical content and context

**Potential Responsibilities**:
- Document historical events, figures, and periods
- Provide historical context and analysis
- Maintain chronological accuracy
- Create timelines and historical connections
- Explain historical significance and impact

**Potential Capabilities**:
- Historical research and documentation
- Timeline creation and management
- Historical context analysis
- Primary source evaluation and interpretation

## Potential Agent Collaboration Protocols

### Communication Standards
- Agents could use clear, structured communication
- Content updates could be logged with timestamps and agent attribution
- Quality checks could be performed before content publication

### Workflow Integration
1. **Content Creation**: Research Assistant → Content Curator
2. **Code Documentation**: Code Documentation Agent → Content Curator
3. **Research Tasks**: Research Assistant could coordinate with specialized agents
4. **Quality Assurance**: All agents could participate in peer review processes

### Conflict Resolution
- Content disputes could be resolved through majority consensus
- Technical accuracy issues could be escalated to domain experts

## Performance Metrics (If Implemented)

### Content Quality Metrics
- Accuracy rate of information (>95%)
- Completeness of documentation
- User engagement and feedback scores

### Operational Metrics
- Response time for content requests
- Successful categorization rate
- Research task completion efficiency

## Agent Development Guidelines (For Future Implementation)

### Training Data
- Domain-specific knowledge bases for each category
- Code repositories for technical documentation
- Research papers and academic sources

### Continuous Learning
- Regular updates to knowledge bases
- Incorporation of user feedback
- Adaptation to new content patterns
- Performance monitoring and improvement

## Integration with VitePress (Potential)

### Content Pipeline
1. Raw content → Agent processing → VitePress formatting
2. Markdown generation with proper frontmatter
3. Automatic sidebar and navigation updates
4. Search index optimization

### Plugin Integration
- Custom VitePress plugins for agent-generated content
- Automated content publishing workflows
- Real-time content synchronization
- Version control integration

## Ethical Guidelines (For Agent Development)

### Content Standards
- Maintain factual accuracy and objectivity
- Respect copyright and intellectual property
- Provide appropriate attribution for sources
- Avoid biased or misleading information

### User Privacy
- Respect user data and privacy preferences
- Secure handling of personal information
- Transparent data usage policies
- User consent for content personalization

These guidelines outline how AI agents could enhance and support ChenBook as a comprehensive, accurate, and well-organized personal knowledge management system that effectively serves learning and reference needs across multiple domains.