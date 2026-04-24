// Portfolio Data Structure
// Books = Work Experiences
// Records = Standalone projects

export const workExperiences = [
  {
    id: 'dataengite',
    company: 'Dataengite LLC',
    role: 'Product Manager Intern, AI Data Platform',
    period: 'May 2025 – Aug 2025',
    location: 'Houston, TX',
    color: '#C0392B',
    description: 'AI-powered data automation platform for enterprise customers in oil & gas and insurance. Built the 0→1 transformation engine, redesigned onboarding, and shipped AI-powered validation features.',
    highlights: [
      '65% reduction in customer setup time through AI-powered automation',
      '20% improvement in user activation after onboarding redesign',
      '40% reliability gains through systematic validation testing',
      'Built transformation engine from scratch handling complex business rules'
    ],
    projects: [
      {
        id: 'onboarding-rebuild',
        title: 'Rebuilding the Onboarding System',
        role: 'Product Manager',
        duration: 'Q1 2025',
        description: 'Redesigned fragmented onboarding flow to reduce friction and support dependency.',
        technologies: ['User Research', 'Journey Mapping', 'UX Design', 'Validation Logic'],
        highlights: [
          'Conducted interviews with new customers and support engineers',
          'Mapped end-to-end asset ingestion → schema mapping → validation journey',
          'Identified confusing screens, hidden states, and unclear validation triggers',
          'Partnered with UX + Engineering to redesign flows and embed inline validation',
          '65% reduction in setup time',
          '20% increase in activation',
          'Support tickets dropped significantly'
        ],
        situation: 'The onboarding flow was fragmented across multiple steps and tools, causing high friction and high support dependency.',
        task: 'Identify the exact breakdown points, redesign the workflow for clarity, and ensure users could complete onboarding with minimal support.',
        action: 'Conducted interviews with new customers and support engineers. Mapped the end-to-end asset ingestion → schema mapping → validation journey. Identified confusing screens, hidden states, and unclear validation triggers. Partnered with UX + Engineering to redesign flows and embed inline validation.',
        result: '65% reduction in setup time. 20% increase in activation. Support tickets dropped significantly.',
        skillsUsed: 'Workflow design · UX research · User interviews · Journey mapping · Requirements writing · Validation logic',
        links: { live: null, github: null }
      },
      {
        id: 'data-integrity',
        title: 'Fixing 1M+ Corrupted Asset Records',
        role: 'Data PM',
        duration: 'Q2 2025',
        description: 'Restored data integrity across 1M+ asset records using schema refinement and LLM-assisted normalization.',
        technologies: ['SQL', 'Pandas', 'LLM Normalization', 'Data Modeling'],
        highlights: [
          'Performed schema audits and identified common corruption patterns',
          'Created a refined schema and ingestion validation rules',
          'Used LLM-assisted normalization scripts to standardize values',
          'Built dashboards to track discrepancies over time',
          '45% improvement in data integrity',
          '60% reduction in discrepancies',
          'More reliable ingestion → fewer downstream failures'
        ],
        situation: 'Over 1M+ asset records had inconsistent schemas, missing fields, and legacy formats that broke downstream agents.',
        task: 'Restore integrity by defining a canonical schema, enforcing validation, and using SQL/Pandas profiling + LLM-assisted normalization to clean corrupt data at scale.',
        action: 'Performed schema audits and identified common corruption patterns. Created a refined schema and ingestion validation rules. Used LLM-assisted normalization scripts to standardize values. Built dashboards to track discrepancies over time.',
        result: '45% improvement in data integrity. 60% reduction in discrepancies. More reliable ingestion → fewer downstream failures.',
        skillsUsed: 'Data modeling · SQL · Pandas · LLM normalization · Schema refinement · Data profiling',
        links: { live: null, github: null }
      },
      {
        id: 'ai-agent-stability',
        title: 'Stabilizing Multi-Step AI Agents',
        role: 'AI Product Manager',
        duration: 'Q3 2025',
        description: 'Increased AI agent reliability by designing failure taxonomy and validation layers.',
        technologies: ['LLM Chain Analysis', 'Error Taxonomy', 'Tool-Call Specs'],
        highlights: [
          'Analyzed execution logs and clustered failure types',
          'Added pre-execution validators (schema checks, type checks, safe defaults)',
          'Redesigned tool-call structures for consistent inputs/outputs',
          'Improved retrieval constraints to reduce drift',
          '40% increase in agent reliability',
          '30% faster debugging cycles'
        ],
        situation: 'AI agents failed frequently due to retrieval drift, broken tool-calls, and undefined edge cases.',
        task: 'Increase reliability by designing a failure taxonomy, adding validation layers, and tightening tool-call specifications using execution trace analysis.',
        action: 'Analyzed execution logs and clustered failure types. Added pre-execution validators (schema checks, type checks, safe defaults). Redesigned tool-call structures for consistent inputs/outputs. Improved retrieval constraints to reduce drift.',
        result: '40% increase in agent reliability. 30% faster debugging cycles.',
        skillsUsed: 'LLM chain analysis · Error taxonomy design · Safe-default patterns · Tool-call spec refinement',
        links: { live: null, github: null }
      },
      {
        id: 'transformation-engine',
        title: 'Building the 0→1 Transformation Engine',
        role: 'Product Manager',
        duration: 'Q2–Q3 2025',
        description: 'Built core transformation engine from scratch that automated complex business rule execution for enterprise clients.',
        technologies: ['OpenAI APIs', 'Python', 'SQL', 'Business Rules Engine'],
        highlights: [
          'Analyzed complex business rules in oil & gas and insurance data',
          'Designed and built the core engine automating data cleaning, validation, and transformation',
          'Worked directly with enterprise customers understanding domain-specific data requirements',
          'Translated complex business rules into automated validation and transformation workflows',
          'Shipped AI-powered features replacing previously manual data engineering work'
        ],
        situation: 'Enterprise clients had highly specific, complex business rules for data transformation that required manual engineering work for every new customer.',
        task: 'Design and build a 0→1 transformation engine that could understand and automate complex business rules at scale.',
        action: 'Conducted deep discovery with oil & gas and insurance clients. Analyzed business rule patterns. Designed engine architecture with Engineering. Iteratively tested against real enterprise data. Shipped AI-powered automation layer.',
        result: 'Transformation engine handling complex business rules at scale. Significantly reduced time to onboard new enterprise customers.',
        skillsUsed: 'Product strategy · 0→1 development · Enterprise discovery · OpenAI APIs · Python · Business rules automation',
        links: { live: null, github: null }
      }
    ]
  },
  {
    id: 'slb',
    company: 'SLB (Schlumberger)',
    role: 'Business Analyst',
    period: 'Jul 2022 – Jul 2024',
    location: 'Pune, India',
    color: '#2471A3',
    description: 'Fortune 500 energy services company. Delivered internal technology solutions across 10+ business units serving 200+ users including C-level executives. Built platforms for HR, Finance, Supply Chain, and Operations.',
    highlights: [
      '50+ apps/products delivered in 12 months',
      '200+ users across global organization including CIO',
      '45% operational efficiency improvement',
      '$250K annual operational savings'
    ],
    projects: [
      {
        id: 'hr-mentorship',
        title: 'HR Mentorship Matching Platform',
        role: 'Product Owner',
        duration: '4 months',
        description: 'Built internal mentorship platform connecting employees globally, used by 200+ users including the CIO.',
        technologies: ['Power Apps', 'SQL', 'Matching Algorithm', 'Stakeholder Management'],
        highlights: [
          'Designed mentor-mentee matching algorithm based on skills, experience, and career goals',
          'Platform adopted by 200+ users including C-level executives (CIO)',
          'Improved employee development and cross-level knowledge transfer',
          'High-visibility internal product with executive stakeholders'
        ],
        situation: 'No structured mentorship infrastructure existed. Knowledge transfer across levels was informal and inconsistent.',
        task: 'Build a scalable internal mentorship platform with intelligent matching that could serve the entire global organization.',
        action: 'Conducted discovery with HR and employees. Designed matching algorithm. Built platform in Power Apps with SQL backend. Ran pilots. Iterated on matching quality. Rolled out org-wide.',
        result: 'Platform adopted by 200+ users including CIO. Improved development culture and cross-level knowledge transfer.',
        skillsUsed: 'Product ownership · Matching algorithm design · Power Apps · SQL · Executive stakeholder management',
        links: { live: null, github: null }
      },
      {
        id: 'finance-pipeline',
        title: 'Finance Investment Pipeline Automation',
        role: 'Product Lead',
        duration: '10 weeks (5 sprints)',
        description: 'Automated retirement fund investment reporting from email-based Excel files to real-time dashboards.',
        technologies: ['Python', 'SQL', 'Power BI', 'Email Automation'],
        highlights: [
          'Built email trigger → Python extract/transform → SQL database → Power BI dashboard pipeline',
          '50% reduction in reconciliation time',
          'Same-day reporting vs 2-day manual process previously',
          'Delivered faster than expected (5 sprints)'
        ],
        situation: 'Retirement fund reporting relied on fortnightly Excel files from Northern Trust sent via email, requiring 2 days of manual reconciliation.',
        task: 'Automate the full pipeline from data ingestion to reporting, coordinating engineering, compliance, and business stakeholders.',
        action: 'Mapped the existing manual workflow. Designed automated pipeline. Built email trigger system. Implemented Python transformation layer. Created Power BI dashboards. Validated with compliance.',
        result: '50% reduction in reconciliation time. Same-day reporting achieved. Delivered on schedule.',
        skillsUsed: 'Financial services domain · Pipeline automation · Python · SQL · Power BI · Compliance coordination',
        links: { live: null, github: null }
      },
      {
        id: 'supply-chain-analytics',
        title: 'Supply Chain Analytics & Demand Planning',
        role: 'Business Analyst',
        duration: '5 months',
        description: 'Built analytics platform for product configuration analysis and predictive demand planning.',
        technologies: ['SQL', 'Power BI', 'Predictive Analytics', 'Demand Forecasting'],
        highlights: [
          'Analyzed product configurations and sales patterns across manufacturing operations',
          'Identified highest-selling product configurations using SQL and Power BI',
          'Developed predictive demand models informing strategic decisions',
          'Enabled data-driven supply chain optimization and inventory management'
        ],
        situation: 'Supply chain decisions were based on intuition rather than data, leading to stockouts and over-ordering.',
        task: 'Build analytics capability that could surface demand patterns and inform supply chain decisions with data.',
        action: 'Queried and cleaned large sales datasets. Identified configuration patterns. Built demand forecasting models. Created dashboards for ongoing monitoring. Presented to supply chain leadership.',
        result: 'Improved forecast accuracy. Reduced stockouts. Data-driven supply chain decisions adopted by leadership.',
        skillsUsed: 'SQL · Power BI · Predictive analytics · Demand forecasting · Supply chain domain',
        links: { live: null, github: null }
      },
      {
        id: 'platform-redesign',
        title: 'Platform Redesign — 50+ Internal Apps',
        role: 'Product Owner',
        duration: '12 months',
        description: 'Led redesign of 50+ fragmented mini-applications under a unified platform umbrella.',
        technologies: ['Power Platform', 'UX Design', 'Design System', 'Agile'],
        highlights: [
          'Consolidated 50+ fragmented internal tools into cohesive unified experience',
          'Standardized UX patterns and design system across all applications',
          '45% operational efficiency improvement',
          '15% reduction in decision-making latency',
          'Facilitated agile ceremonies for 10+ engineering teams'
        ],
        situation: 'Employees used 50+ disconnected mini-apps with inconsistent UX causing confusion and inefficiency.',
        task: 'Unify fragmented tools under a single platform with consistent design system, working across 10+ business units.',
        action: 'Audited all existing tools. Defined unified design system. Prioritized consolidation roadmap. Coordinated engineering across teams. Ran agile ceremonies. Shipped incrementally.',
        result: '45% operational efficiency improvement. 15% reduction in decision-making latency. Single unified platform adopted org-wide.',
        skillsUsed: 'Platform product strategy · Design systems · Agile facilitation · Cross-functional coordination · Power Platform',
        links: { live: null, github: null }
      }
    ]
  },
  {
    id: 'busisoft',
    company: 'Busisoft Infotech',
    role: 'Lead Product Manager',
    period: 'Jan 2022 – Feb 2024',
    location: 'Mumbai, India',
    color: '#1E8449',
    description: '0→1 B2B SaaS logistics platform. Owned full product lifecycle from concept through launch across 3 countries — web, iOS, and Android. Two-sided marketplace connecting shippers, carriers, and warehouse operators.',
    highlights: [
      '30% user adoption growth',
      '28% conversion rate improvement',
      '40% reduction in manual effort through automation',
      'Launched across 3 countries with distributed team'
    ],
    projects: [
      {
        id: 'logistics-marketplace',
        title: '0→1 Logistics Marketplace Launch',
        role: 'Lead Product Manager',
        duration: '18 months',
        description: 'Owned full 0→1 product from concept through launch across 3 countries — two-sided marketplace connecting shippers, carriers, and warehouse operators.',
        technologies: ['Product Strategy', 'Mobile (iOS/Android)', 'API Integrations', 'Amplitude'],
        highlights: [
          'Led product from zero to live across 3 countries',
          'Built two-sided marketplace connecting shippers, carriers, warehouse operators',
          'Managed distributed team across multiple timezones',
          '30% user adoption growth post-launch',
          '28% conversion rate improvement',
          '95% schedule predictability across distributed teams'
        ],
        situation: 'No product existed. The company needed to build a logistics marketplace from scratch and launch across 3 countries simultaneously.',
        task: 'Own the full product lifecycle — strategy, discovery, design, development, and launch — with a distributed team across 3 countries.',
        action: 'Conducted market research and customer discovery. Defined product strategy and roadmap. Collaborated with engineering on web and mobile apps. Built CRM integrations and API connectivity. Managed distributed teams. Launched in 3 countries.',
        result: '30% adoption growth. 28% conversion improvement. Successful multi-country launch.',
        skillsUsed: 'Product strategy · 0→1 development · Marketplace design · Mobile product · Distributed team management',
        links: { live: null, github: null }
      },
      {
        id: 'ai-support-automation',
        title: 'AI-Assisted Support Automation',
        role: 'Product Lead',
        duration: '4 months',
        description: 'Automated repetitive support workflows using AI summarization and intelligent routing.',
        technologies: ['AI Automation', 'Support Ops', 'Log Analysis'],
        highlights: [
          'Implemented auto-log capture removing manual logging burden',
          'Added AI-generated ticket summaries reducing triage time',
          'Built routing rules that categorized issues automatically',
          '40% reduction in manual workload',
          'Significantly faster response times'
        ],
        situation: 'Support teams spent excessive time writing logs, classifying tickets, and generating summaries — all manual, repetitive work.',
        task: 'Automate repetitive support workflows using AI summarization, log parsing, and routing logic.',
        action: 'Identified highest-volume manual tasks. Implemented auto-log capture. Built AI ticket summarization. Designed intelligent routing rules. Measured impact.',
        result: '40% reduction in manual workload. Faster response times. Support team focused on higher-value work.',
        skillsUsed: 'AI automation · Support ops design · Log analysis · Workflow design',
        links: { live: null, github: null }
      },
      {
        id: 'warehouse-workflows',
        title: 'Redesigning Warehouse Workflows',
        role: 'Product Lead',
        duration: '5 months',
        description: 'Realigned digital workflows with physical warehouse operations through field research.',
        technologies: ['Field Research', 'Service Design', 'Workflow Mapping'],
        highlights: [
          'Observed operators on-site to map actual vs. designed workflows',
          'Identified mismatches: missing states, unclear routing, redundant steps',
          'Redesigned scan-confirm loops, decision points, and exception handling',
          '30% increase in operator adoption',
          'Fewer support escalations'
        ],
        situation: 'Warehouse staff struggled with workflows that did not match real-world receiving, routing, and putaway operations.',
        task: 'Realign workflows with physical operations using floor shadowing, workflow mapping, and operator interviews.',
        action: 'Spent time on warehouse floor observing operators. Mapped real vs. intended workflows. Identified root causes. Redesigned with operators. Tested and iterated.',
        result: '30% increase in adoption. Fewer support escalations. Operators actually used the system.',
        skillsUsed: 'Field research · Service design · Workflow mapping · Operational UX',
        links: { live: null, github: null }
      }
    ]
  }
];

export const standaloneProjects = [
  {
    id: 'healthcare-staffing',
    title: 'Healthcare Staffing Optimization Agent',
    category: 'AI Agent',
    year: '2024',
    color: '#8E44AD',
    description: 'Built a multi-step AI scheduling agent that reduced manual assignment effort and improved staffing transparency for healthcare teams.',
    situation: 'Healthcare teams faced scheduling conflicts, manual checks, and zero visibility into assignment logic.',
    task: 'Design a multi-step scheduling agent with prioritization logic, conflict detection, and fallback behaviors.',
    action: 'Designed intent parsing and conflict detection\nImplemented prioritization logic for nurse assignments\nAdded fallback behaviors for edge cases\nBuilt evaluation metrics to measure consistency',
    result: 'Reduced manual scheduling cycles\nImproved consistency and transparency\nClear audit trail for assignment decisions',
    skillsUsed: 'Agent Design · Workflow Modeling · LLM Prompting · Evaluation Metrics · Data Logic',
    technologies: ['Agent Design', 'LLM Prompting', 'Workflow Modeling', 'Evaluation Metrics'],
    links: { live: null, github: null }
  },
  {
    id: 'daidaex',
    title: 'DaidaEX — Expert Matching + KPI Machine',
    category: 'Product Strategy',
    year: '2024',
    color: '#E67E22',
    description: 'Designed matching logic and KPI framework for an expert marketplace — making discovery more reliable and trust measurable for both sides.',
    situation: 'Subscribers struggled to find the right experts. The platform lacked any operational clarity on what "good matching" meant.',
    task: 'Design the expert-matching logic, KPI framework, and onboarding patterns to improve match quality and trust signals.',
    action: 'Defined expert-matching signals: expertise relevance, responsiveness, profile quality\nCreated KPI loops for trust-building and match reliability\nDesigned evaluation flows for both experts and subscribers\nBuilt adoption-focused self-serve onboarding patterns',
    result: 'Stronger match quality\nMore predictable activation and retention\nHigher trust between experts and subscribers',
    skillsUsed: 'KPI Modeling · Matchmaking Logic · Onboarding Flows · Product Experimentation · User Behavior Analysis',
    technologies: ['KPI Modeling', 'Matchmaking Logic', 'Onboarding Flows', 'Product Experimentation'],
    links: { live: null, github: null }
  },
  {
    id: 'synthezy',
    title: 'Synthezy — AI Video Repurposing Tool',
    category: 'AI Product',
    year: '2024',
    color: '#F39C12',
    description: 'Built an end-to-end multimodal AI pipeline that transforms long-form video into short-form social content automatically.',
    situation: 'Creators manually cut and summarized long-form videos — hours of work per piece of content.',
    task: 'Design an end-to-end multimodal workflow for automated clip extraction and highlight scoring.',
    action: 'Built transcription, segmentation, and highlight scoring pipeline using Whisper + OpenAI\nDesigned evaluation criteria for highlight quality\nCreated editor review flows for human-in-the-loop\nTuned prompt chains to reduce hallucination',
    result: 'Faster repurposing cycles for creators\nConsistent highlight quality\nReduced manual editing time significantly',
    skillsUsed: 'OpenAI APIs · Whisper · Multimodal AI · AI Orchestration · LLM Evaluation · Creator Economy',
    technologies: ['OpenAI APIs', 'Whisper', 'Multimodal AI', 'LLM Evaluation'],
    links: { live: null, github: null }
  },
  {
    id: 'bosch-csl',
    title: 'Bosch CSL — Market & GTM Strategy',
    category: 'Strategy',
    year: '2023',
    color: '#16A085',
    description: 'Developed market positioning and a go-to-market narrative for a new Bosch connected-device capability presented to leadership.',
    situation: 'Bosch lacked clarity on market positioning, customer segmentation, and GTM approach for a new product line.',
    task: 'Define positioning, segmentation, and a GTM narrative that leadership could act on.',
    action: 'Conducted competitive analysis and market sizing\nCreated value-proposition matrices across segments\nDefined messaging pillars and differentiation strategy\nPresented data-driven recommendations to Bosch leadership',
    result: 'Clear strategic roadmap adopted by leadership\nUnified GTM story across teams\nStrong executive presentation deliverable',
    skillsUsed: 'Competitive Analysis · GTM Strategy · Market Sizing · Positioning · Executive Presentations',
    technologies: ['Competitive Analysis', 'GTM Strategy', 'Market Sizing', 'Positioning'],
    links: { live: null, github: null }
  },
  {
    id: 'visionworks',
    title: 'Visionworks Retail Analytics',
    category: 'Analytics',
    year: '2023',
    color: '#2980B9',
    description: 'Analyzed 60,000+ sales data points for Visionworks to surface SKU performance patterns and improve product assortment decisions.',
    situation: 'Store managers lacked visibility into which SKUs performed, where congestion occurred, and what drove purchasing behavior.',
    task: 'Analyze 60K+ data points to identify behavioral patterns and deliver actionable recommendations to Visionworks leadership.',
    action: 'Performed exploratory data analysis and clustering on 60K+ data points\nIdentified best-selling SKU characteristics and in-store performance patterns\nConducted competitive analysis and assortment optimization research\nPresented data-driven recommendations to Visionworks leadership',
    result: '70% reduction in reporting time\nImproved inventory placement and layout decisions\nLeadership adopted data-driven assortment strategy',
    skillsUsed: 'EDA · Clustering · Dashboards · Retail Analytics · Client Presentations · Consumer Behavior',
    technologies: ['EDA', 'Clustering', 'Power BI', 'Retail Analytics'],
    links: { live: null, github: null }
  },
  {
    id: 'ai-market-agent',
    title: 'AI Market Analysis Agent',
    category: 'AI Agent',
    year: '2024',
    color: '#C0392B',
    description: 'Built and deployed a multi-agent AI system using Python and LLM orchestration to analyze SEC filings and generate investment intelligence.',
    situation: 'Investment analysis required manual review of large volumes of SEC filings — slow, inconsistent, and not scalable.',
    task: 'Build a production multi-agent system that could autonomously analyze SEC/EDGAR data and generate investment intelligence.',
    action: 'Designed multi-agent architecture with specialized data pipelines\nImplemented LLM orchestration for SEC filing analysis\nBuilt evaluation framework measuring output quality and reliability\nDeployed production-ready system',
    result: 'Automated investment intelligence generation\nConsistent, reliable output quality\nProduction deployment demonstrating full-stack AI execution',
    skillsUsed: 'Python · LLM Orchestration · Multi-agent Systems · SEC/EDGAR Data · Investment Analysis · Data Pipelines',
    technologies: ['Python', 'LLM Orchestration', 'Multi-agent Systems', 'SEC/EDGAR'],
    links: { live: null, github: null }
  },
  {
    id: 'legal-nlp',
    title: 'Legal Document Entity Extraction',
    category: 'AI Product',
    year: '2024',
    color: '#7F8C8D',
    description: 'Analyzed 20,000+ legal contracts using BERT-based NLP for entity extraction and compliance monitoring at scale.',
    situation: 'Legal teams manually reviewed contracts for compliance — slow, error-prone, and impossible at scale.',
    task: 'Build an NLP pipeline for automated entity extraction and compliance flagging across large contract volumes.',
    action: 'Built BERT-based entity extraction pipeline\nProcessed 20,000+ legal contracts\nDesigned compliance monitoring logic\nValidated accuracy with legal domain experts',
    result: 'Automated contract analysis at scale\nFaster compliance review cycles\nDemonstrated NLP + legal domain depth',
    skillsUsed: 'NLP · BERT · Contract Analysis · Compliance · Entity Extraction · Legal Workflows',
    technologies: ['BERT', 'NLP', 'Python', 'Compliance'],
    links: { live: null, github: null }
  },
  {
    id: 'ubereats-ai',
    title: 'UberEats AI Personalization Feature',
    category: 'AI Product',
    year: '2024',
    color: '#E74C3C',
    description: 'Designed an AI-powered personalization feature addressing repeat ordering friction — user research through to sprint delivery.',
    situation: 'UberEats users experienced friction in repeat ordering, leading to drop-off during the reorder flow.',
    task: 'Conduct user research, translate insights into product requirements, and deliver AI personalization feature in 2-week sprint.',
    action: 'Conducted user research and analyzed fan/consumer behavior\nCreated journey maps identifying friction points in reorder flow\nDefined AI personalization feature requirements\nCollaborated with Engineers and UX/UI to implement in 2-week sprint\nDefined success metrics and measured impact',
    result: 'Improved user satisfaction and engagement\nAI personalization feature shipped in 2-week sprint\nDemonstrated fast-iteration consumer product capability',
    skillsUsed: 'User Research · Consumer Products · AI Personalization · Sprint Execution · UX/UI Collaboration · Journey Mapping',
    technologies: ['User Research', 'AI Personalization', 'Journey Mapping', 'Agile'],
    links: { live: null, github: null }
  },
  {
    id: 'asset-management',
    title: 'Asset Management Product Landscape',
    category: 'Strategy',
    year: '2024',
    color: '#2C3E50',
    description: 'Analyzed ETF and mutual fund landscape to understand how self-directed investors choose products — wealth management market research.',
    situation: 'Needed to understand what drives product adoption among retail investors across digital wealth management platforms.',
    task: 'Evaluate digital distribution channels, fee structures, and user experience across wealth management platforms.',
    action: 'Analyzed ETF and mutual fund market positioning using Yahoo Finance and SEC EDGAR data\nEvaluated fee structures and performance dispersion\nResearched digital distribution channels and UX\nIdentified competitive gaps and product differentiation opportunities',
    result: 'Structured analysis report on investment vehicle positioning\nClear competitive gaps identified\nDemonstrated financial services domain depth',
    skillsUsed: 'Financial Products · ETF/Mutual Fund Analysis · Wealth Management · Market Research · Competitive Analysis',
    technologies: ['Market Research', 'Financial Analysis', 'SEC/EDGAR', 'Competitive Intelligence'],
    links: { live: null, github: null }
  },
  {
    id: 'wearable-aid',
    title: 'Wearable Aid for Visually Impaired',
    category: 'Research',
    year: '2021',
    color: '#27AE60',
    description: 'Designed and validated a wearable assistive technology device combining computer vision, OCR, and text-to-speech. Published research.',
    situation: 'Visually impaired individuals lacked a reliable, affordable wearable solution for reading text in everyday environments.',
    task: 'Build a wearable OCR + TTS prototype and validate it with real users for academic publication.',
    action: 'Integrated camera hardware with OCR pipeline\nImplemented text-to-speech output\nDefined product requirements and technical specifications\nConducted user evaluations\nPublished findings in Asian Journal of Convergence in Technology',
    result: 'Prototype validated with visually impaired users\nPublished: Asian Journal of Convergence in Technology, Vol VII Issue II, 2021\nDemonstrated hardware + AI product depth',
    skillsUsed: 'Computer Vision · OCR · Assistive Tech · IoT · User Testing · Published Research',
    technologies: ['Computer Vision', 'OCR', 'Text-to-Speech', 'IoT', 'Hardware'],
    links: { live: null, github: null }
  },
  {
    id: 'carelens',
    title: 'CareLens — AR Training Companion',
    category: 'AR/VR',
    year: '2021',
    color: '#8E44AD',
    description: 'Designed an AR-based training companion for healthcare workers, overlaying contextual guidance in real-time during procedures.',
    situation: 'Healthcare training relied heavily on in-person supervision, creating bottlenecks and inconsistent skill development.',
    task: 'Design an AR companion that could provide real-time contextual guidance during training procedures.',
    action: 'Conducted discovery with healthcare training staff\nDefined AR overlay interaction patterns\nDesigned guidance content system\nPrototyped and tested with trainees',
    result: 'Validated AR training concept with healthcare staff\nClear product requirements for AR companion\nDemonstrated ability to design emerging-tech products',
    skillsUsed: 'AR Product Design · Healthcare Domain · UX Research · Prototyping · Emerging Tech',
    technologies: ['AR/VR', 'Product Design', 'Healthcare', 'Prototyping'],
    links: { live: null, github: null }
  },
  {
    id: 'plantr',
    title: 'Plantr — Social Calendar App',
    category: 'UX Design',
    year: '2022',
    color: '#E91E8C',
    description: 'Designed a social calendar app for coordinating group plans — reducing the friction of scheduling across friend groups.',
    situation: 'Friend groups struggled to coordinate plans across different schedules and communication channels.',
    task: 'Design a consumer social calendar app that made group scheduling effortless and social.',
    action: 'Conducted user research with target demographic\nMapped pain points in existing scheduling tools\nDesigned core scheduling and social interaction flows\nBuilt prototypes and ran usability testing',
    result: 'Validated product concept with target users\nClear UX design demonstrating consumer product thinking\nStrong end-to-end design portfolio piece',
    skillsUsed: 'UX Design · Consumer Products · User Research · Prototyping · Social Product Design',
    technologies: ['Figma', 'UX Design', 'User Research', 'Prototyping'],
    links: { live: null, github: null }
  }
];
