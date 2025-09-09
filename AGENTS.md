# ChenBook AI Agents

This document outlines the AI agents and assistants designed to support the ChenBook project - a personal knowledge management system built with VitePress. ChenBook organizes knowledge across four main categories: music, coding, history, and science, with bilingual support for English and Chinese content.

## Core Agent Roles

### 1. Content Curator Agent
**Primary Function**: Manages and organizes knowledge entries across all categories

**Responsibilities**:
- Categorizes new content into appropriate sections (music, coding, history, science)
- Maintains consistent formatting and structure across entries
- Ensures content quality and completeness
- Generates metadata tags for better discoverability
- Manages content relationships and cross-references
- Structures knowledge entries in standardized format:
  - Short and succinct markdown articles
  - Curated list of relevant questions for each topic
  - Interactive flashcards using Leitner/Zettelkasten system

**Capabilities**:
- Content analysis and automatic categorization
- Metadata generation and tagging
- Cross-reference detection and linking
- Quality assessment and validation
- Knowledge structure standardization
- Flashcard generation and management

**Knowledge Structure Standards**:
- **Core Article**: Each knowledge entry begins with a concise, well-structured markdown article that captures the essential information in a clear, readable format
- **Question Bank**: Following the main article, agents generate a curated list of thought-provoking questions that encourage deeper understanding and self-assessment
- **Flashcard System**: Each entry concludes with interactive flashcards implementing the Leitner/Zettelkasten spaced repetition system:
  - Cards display only the title initially
  - Click-to-flip functionality reveals detailed information
  - Reusable Vue component ensures consistent UI/UX across all categories
  - Spaced repetition algorithm tracks user progress and review schedules

### 2. Bilingual Translation Agent
**Primary Function**: Manages multilingual content and translations

**Responsibilities**:
- Translates content between English and Chinese
- Ensures translation accuracy and cultural appropriateness
- Maintains consistency in technical terminology
- Handles bidirectional translation workflows
- Validates translation quality

**Capabilities**:
- Professional translation between EN/CN
- Terminology management and consistency
- Cultural context adaptation
- Quality assurance for translations

### 3. Code Documentation Agent
**Primary Function**: Specializes in coding category content

**Responsibilities**:
- Documents programming concepts, tutorials, and best practices
- Generates code examples and explanations
- Maintains code snippet accuracy and currency
- Creates technical documentation
- Explains complex programming concepts

**Capabilities**:
- Multi-language code generation and explanation
- Technical writing and documentation
- Code review and optimization suggestions
- API documentation generation

### 4. Research Assistant Agent
**Primary Function**: Supports research and fact-checking across all categories

**Responsibilities**:
- Conducts research on topics within the four categories
- Verifies information accuracy and sources
- Discovers related content and connections
- Generates summaries and key insights
- Identifies knowledge gaps

**Capabilities**:
- Web research and information gathering
- Source verification and citation management
- Content summarization and synthesis
- Trend analysis and emerging topics identification

### 5. Music Knowledge Agent
**Primary Function**: Manages music-related content and analysis

**Responsibilities**:
- Documents musical theory, history, and analysis
- Maintains artist and album information
- Explains musical concepts and techniques
- Creates listening guides and recommendations
- Tracks musical trends and developments

**Capabilities**:
- Musical analysis and theory explanation
- Artist and genre research
- Music recommendation systems
- Historical music context and evolution

### 6. Science Research Agent
**Primary Function**: Handles scientific content and research

**Responsibilities**:
- Documents scientific discoveries and theories
- Explains complex scientific concepts
- Maintains accuracy in scientific information
- Creates educational content for various science topics
- Tracks scientific developments and breakthroughs

**Capabilities**:
- Scientific concept explanation and visualization
- Research paper summarization
- Data analysis and interpretation
- Educational content creation

### 7. History Documentation Agent
**Primary Function**: Manages historical content and context

**Responsibilities**:
- Documents historical events, figures, and periods
- Provides historical context and analysis
- Maintains chronological accuracy
- Creates timelines and historical connections
- Explains historical significance and impact

**Capabilities**:
- Historical research and documentation
- Timeline creation and management
- Historical context analysis
- Primary source evaluation and interpretation

## Agent Collaboration Protocols

### Communication Standards
- All agents use clear, structured communication
- Content updates are logged with timestamps and agent attribution
- Quality checks are performed before content publication
- Translation validation occurs for all bilingual content

### Workflow Integration
1. **Content Creation**: Research Assistant → Content Curator → Bilingual Translation
2. **Code Documentation**: Code Documentation Agent → Content Curator → Bilingual Translation
3. **Research Tasks**: Research Assistant coordinates with specialized agents
4. **Quality Assurance**: All agents participate in peer review processes

### Conflict Resolution
- Content disputes are resolved through majority consensus
- Translation disagreements require human review
- Technical accuracy issues are escalated to domain experts

## Performance Metrics

### Content Quality Metrics
- Accuracy rate of information (>95%)
- Completeness of documentation
- User engagement and feedback scores
- Translation quality assessments

### Operational Metrics
- Response time for content requests
- Successful categorization rate
- Translation completion rate
- Research task completion efficiency

## Agent Development Guidelines

### Training Data
- Domain-specific knowledge bases for each category
- Bilingual corpora for translation training
- Code repositories for technical documentation
- Research papers and academic sources

### Continuous Learning
- Regular updates to knowledge bases
- Incorporation of user feedback
- Adaptation to new content patterns
- Performance monitoring and improvement

## Integration with VitePress

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

## Ethical Guidelines

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

This agent framework ensures ChenBook remains a comprehensive, accurate, and well-organized personal knowledge management system that effectively serves its user's learning and reference needs across multiple domains.
