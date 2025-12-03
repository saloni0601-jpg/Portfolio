// Portfolio Data Structure
// Books = Work Experiences
// Chapters = Projects within each experience
// Records = Standalone projects

export const workExperiences = [
  {
    id: 'dataengite',
    company: 'Dataengite',
    role: 'AI Data Platform PM Intern',
    period: '2022 - 2024',
    color: '#E74C3C',
    description: 'Improved onboarding flows, data integrity, AI agent reliability, observability, and responsible AI guardrails.',
    chapters: [
      {
        id: 'onboarding-rebuild',
        title: 'Rebuilding the Onboarding System',
        role: 'Product Manager',
        duration: 'Q1 2024',
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
        task: 'Identify the exact breakdown points, redesign the workflow for clarity, and ensure users could complete onboarding with minimal support by using interviews, flow mapping, and validation rule audits.',
        action: 'Conducted interviews with new customers and support engineers. Mapped the end-to-end asset ingestion → schema mapping → validation journey. Identified confusing screens, hidden states, and unclear validation triggers. Partnered with UX + Engineering to redesign flows and embed inline validation.',
        result: '65% reduction in setup time. 20% increase in activation. Support tickets dropped significantly.',
        skillsUsed: 'Workflow design, UX research, user interviews, journey mapping, requirements writing, validation logic.',
        links: {
          live: null,
          github: null
        }
      },
      {
        id: 'data-integrity',
        title: 'Fixing 1M+ Corrupted Asset Records',
        role: 'Data PM',
        duration: 'Q2 2024',
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
        skillsUsed: 'Data modeling, SQL, Pandas, LLM normalization, schema refinement, data profiling.',
        links: {
          live: null,
          github: null
        }
      },
      {
        id: 'ai-agent-stability',
        title: 'Stabilizing Multi-Step AI Agents',
        role: 'AI Product Manager',
        duration: 'Q3 2024',
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
        skillsUsed: 'LLM chain analysis, error taxonomy design, safe-default patterns, tool-call spec refinement.',
        links: {
          live: null,
          github: null
        }
      },
      {
        id: 'observability',
        title: 'Building Observability for AI Systems',
        role: 'Product Manager',
        duration: 'Q4 2024',
        description: 'Built observability layer to expose system behavior and reduce diagnosis time.',
        technologies: ['SQL', 'Analytics', 'KPI Design', 'Dashboards'],
        highlights: [
          'Built dashboards surfacing latency, failure patterns, ingestion quality',
          'Defined system health KPIs and anomaly thresholds',
          'Partnered with Engineering to standardize log formats',
          'Diagnosis time reduced from hours → minutes',
          'Leadership and engineering aligned on reliability trends'
        ],
        situation: 'Teams had no visibility into latency spikes, ingestion failures, or readiness metrics.',
        task: 'Build an observability layer using SQL dashboards, Pandas analysis, and health metrics that exposed system behavior clearly to PMs + Engineering.',
        action: 'Built dashboards surfacing latency, failure patterns, ingestion quality. Defined system health KPIs and anomaly thresholds. Partnered with Engineering to standardize log formats.',
        result: 'Diagnosis time reduced from hours → minutes. Leadership and engineering aligned on reliability trends.',
        skillsUsed: 'Analytics, KPI design, SQL dashboards, observability thinking, cross-functional communication.',
        links: {
          live: null,
          github: null
        }
      },
      {
        id: 'responsible-ai',
        title: 'Responsible AI & Compliance Alignment',
        role: 'AI Safety PM',
        duration: 'Q1 2025',
        description: 'Implemented safety guardrails and made AI behavior auditable.',
        technologies: ['Responsible AI', 'Validation Frameworks', 'Compliance'],
        highlights: [
          'Added hallucination checks, confidence thresholds, schema enforcement',
          'Implemented validation layers before tool execution',
          'Documented safety behaviors and aligned with Compliance',
          'More predictable agent behavior',
          'Improved auditability and reduced risk'
        ],
        situation: 'Agents were unpredictable on ambiguous inputs, raising compliance concerns.',
        task: 'Implement safety guardrails and make behavior auditable using confidence checks, schema constraints, and validation layers.',
        action: 'Added hallucination checks, confidence thresholds, schema enforcement. Implemented validation layers before tool execution. Documented safety behaviors and aligned with Compliance.',
        result: 'More predictable agent behavior. Improved auditability and reduced risk.',
        skillsUsed: 'Responsible AI, risk analysis, validation frameworks, compliance alignment.',
        links: {
          live: null,
          github: null
        }
      }
    ]
  },
  {
    id: 'slb',
    company: 'SLB',
    role: 'Product Owner / Business Analyst',
    period: '2020 - 2022',
    color: '#3498DB',
    description: 'Delivered HR, sustainability, and supply chain systems with forecasting accuracy, operational visibility, agile delivery discipline, and compliance guardrails.',
    chapters: [
      {
        id: 'unified-forecasting',
        title: 'Unified Forecasting Across Global Regions',
        role: 'Product Owner',
        duration: '6 months',
        description: 'Consolidated siloed forecasting systems into a single platform.',
        technologies: ['SQL', 'Forecasting Logic', 'Workflow Design', 'Stakeholder Alignment'],
        highlights: [
          'Consolidated operational + sales data into a single forecasting engine',
          'Defined rules for overrides, adjustments, approval flows, and exception handling',
          'Worked with Engineering to implement real-time synchronization',
          'Validated logic with regional leads to ensure correctness and adoption',
          '45% improvement in forecast accuracy',
          '50% reduction in reconciliation time',
          'Became the trusted "source of truth" across departments'
        ],
        situation: 'Forecasting across regions was inconsistent. Sales, Operations, and Supply Chain teams used siloed spreadsheets and disconnected systems, creating mismatched numbers and long reconciliation cycles.',
        task: 'Design a single forecasting platform by consolidating data sources, defining consistent business logic, and using SQL analysis, stakeholder interviews, and process mapping to align cross-functional needs.',
        action: 'Consolidated operational + sales data into a single forecasting engine. Defined rules for overrides, adjustments, approval flows, and exception handling. Worked with Engineering to implement real-time synchronization. Validated logic with regional leads to ensure correctness and adoption.',
        result: '45% improvement in forecast accuracy. 50% reduction in reconciliation time. Became the trusted "source of truth" across departments.',
        skillsUsed: 'Forecasting logic, stakeholder alignment, SQL profiling, workflow design, cross-functional facilitation.',
        links: {
          live: null,
          github: null
        }
      },
      {
        id: 'operational-intelligence',
        title: 'Operational Intelligence & SLA Predictability',
        role: 'Business Analyst',
        duration: '4 months',
        description: 'Built dashboards to expose workflow bottlenecks and SLA risks.',
        technologies: ['SQL Analytics', 'KPI Design', 'Dashboard Design'],
        highlights: [
          'Designed dashboards showing cycle times, bottlenecks, SLA variance patterns, and routing delays',
          'Added team-level performance metrics and hourly throughput patterns',
          'Enabled cross-region comparison for clear trend identification',
          'Faster detection of workflow inefficiencies',
          'Leadership gained measurable visibility into SLA risks',
          'Improved staffing and planning'
        ],
        situation: 'Leadership couldn\'t see where workflows slowed or where SLA risks emerged.',
        task: 'Build operational intelligence dashboards by modeling workflow timing using SQL cycle-time analysis, metadata modeling, and throughput metrics.',
        action: 'Designed dashboards showing cycle times, bottlenecks, SLA variance patterns, and routing delays. Added team-level performance metrics and hourly throughput patterns. Enabled cross-region comparison for clear trend identification.',
        result: 'Faster detection of workflow inefficiencies. Leadership gained measurable visibility into SLA risks. Improved staffing and planning.',
        skillsUsed: 'SQL analytics, operational KPIs, cycle-time modeling, dashboard design.',
        links: {
          live: null,
          github: null
        }
      },
      {
        id: 'root-cause-analysis',
        title: 'Root-Cause Analysis for Workflow Breakdowns',
        role: 'Business Analyst',
        duration: '3 months',
        description: 'Identified UX and workflow issues causing SLA failures.',
        technologies: ['UX Research', 'Workflow Analysis', 'Root-Cause Investigation'],
        highlights: [
          'Shadowed users across multiple teams and regions',
          'Mapped real workflows vs planned workflows',
          'Identified ambiguous UI labels, missing guardrails, inconsistent states',
          'Recommended UX and logic improvements',
          'Reduced SLA failures',
          'Increased operator trust',
          'Fewer manual workarounds'
        ],
        situation: 'Teams blamed users for SLA misses, but repeated failures pointed to deeper UX and workflow issues.',
        task: 'Identify root causes using workflow shadowing, log analysis, and side-by-side mapping of actual vs intended workflows.',
        action: 'Shadowed users across multiple teams and regions. Mapped real workflows vs planned workflows. Identified ambiguous UI labels, missing guardrails, inconsistent states. Recommended UX and logic improvements.',
        result: 'Reduced SLA failures. Increased operator trust. Fewer manual workarounds.',
        skillsUsed: 'UX research, workflow analysis, root-cause investigations, requirements refinement.',
        links: {
          live: null,
          github: null
        }
      },
      {
        id: 'agile-delivery',
        title: 'Driving Agile Delivery Across HR, Sustainability & Supply Chain',
        role: 'Product Owner',
        duration: '12 months',
        description: 'Improved sprint predictability and reduced carryover work.',
        technologies: ['Agile PM', 'Prioritization', 'Story Decomposition'],
        highlights: [
          'Led backlog refinement, sprint planning, standups, reviews, retros',
          'Consolidated domain requests into a unified roadmap',
          'Wrote acceptance criteria with clear business context and edge cases',
          'Coordinated alignment across engineering, HR, Sustainability, and Supply Chain',
          'Sprint predictability improved 30%',
          'Carryover work reduced 40%',
          'Clearer cross-team alignment and execution'
        ],
        situation: 'Teams struggled with unclear priorities, frequent carryover, and inconsistent delivery cadence.',
        task: 'Serve as Product Owner across HR analytics, sustainability reporting, and supply chain tools using refinement sessions, sprint ceremonies, and prioritization frameworks.',
        action: 'Led backlog refinement, sprint planning, standups, reviews, retros. Consolidated domain requests into a unified roadmap. Wrote acceptance criteria with clear business context and edge cases. Coordinated alignment across engineering, HR, Sustainability, and Supply Chain.',
        result: 'Sprint predictability improved 30%. Carryover work reduced 40%. Clearer cross-team alignment and execution.',
        skillsUsed: 'Agile PM, prioritization frameworks, story decomposition, stakeholder communication.',
        links: {
          live: null,
          github: null
        }
      },
      {
        id: 'compliance-governance',
        title: 'Compliance, Audit-Readiness & Governance',
        role: 'Product Owner',
        duration: '6 months',
        description: 'Strengthened governance and made workflows audit-ready.',
        technologies: ['Data Governance', 'Compliance PM', 'Access Controls'],
        highlights: [
          'Mapped end-to-end data flows for HR and Sustainability platforms',
          'Added validation layers, audit logs, and role-based access',
          'Collaborated with Compliance to align workflows with policy requirements',
          'Updated requirements with explicit governance constraints',
          'Policy violations reduced 70%',
          'Workflows became audit-ready and easier to review'
        ],
        situation: 'Workflows lacked consistent validation and auditability, triggering compliance issues.',
        task: 'Strengthen governance by mapping data flows, defining guardrails, and embedding validation rules in cross-domain tools.',
        action: 'Mapped end-to-end data flows for HR and Sustainability platforms. Added validation layers, audit logs, and role-based access. Collaborated with Compliance to align workflows with policy requirements. Updated requirements with explicit governance constraints.',
        result: 'Policy violations reduced 70%. Workflows became audit-ready and easier to review.',
        skillsUsed: 'Data governance, compliance PM, access controls, risk analysis.',
        links: {
          live: null,
          github: null
        }
      }
    ]
  },
  {
    id: 'busisoft',
    company: 'Busisoft',
    role: 'Product Lead',
    period: '2018 - 2020',
    color: '#27AE60',
    description: 'Redesigned warehouse systems, automated support workflows, improved API performance, and transitioned product to a scalable SaaS architecture.',
    chapters: [
      {
        id: 'warehouse-workflows',
        title: 'Redesigning Warehouse Workflows',
        role: 'Product Lead',
        duration: '5 months',
        description: 'Realigned workflows with physical warehouse operations.',
        technologies: ['Field Research', 'Service Design', 'Workflow Mapping'],
        highlights: [
          'Observed operators on-site to map actual workflows',
          'Identified mismatches like missing states, unclear routing, redundant steps',
          'Redesigned workflows for scan-confirm loops, decision points, exceptions',
          '30% increase in adoption',
          '28% increase in conversion',
          'Fewer support escalations'
        ],
        situation: 'Warehouse staff struggled with workflows that didn\'t match real-world receiving, routing, and putaway operations.',
        task: 'Realign workflows with physical operations using floor shadowing, workflow mapping, and operator interviews.',
        action: 'Observed operators on-site to map actual workflows. Identified mismatches like missing states, unclear routing, redundant steps. Redesigned workflows for scan-confirm loops, decision points, exceptions.',
        result: '30% increase in adoption. 28% increase in conversion. Fewer support escalations.',
        skillsUsed: 'Field research, service design, workflow mapping, operational UX.',
        links: {
          live: null,
          github: null
        }
      },
      {
        id: 'process-mapping',
        title: 'Process Mapping & Operational Alignment',
        role: 'Product Lead',
        duration: '3 months',
        description: 'Created shared clarity using process diagrams and documentation.',
        technologies: ['Process Documentation', 'Diagramming', 'Communication'],
        highlights: [
          'Built detailed diagrams for receiving → routing → putaway',
          'Documented states, transitions, failure modes, decision logic',
          'Used diagrams to drive roadmap planning',
          'Reduced rework',
          'Faster alignment across teams'
        ],
        situation: 'Workflows existed in tribal knowledge, causing misalignment between engineering and operations.',
        task: 'Create shared clarity using process diagrams, state charts, and swimlanes.',
        action: 'Built detailed diagrams for receiving → routing → putaway. Documented states, transitions, failure modes, decision logic. Used diagrams to drive roadmap planning.',
        result: 'Reduced rework. Faster alignment across teams.',
        skillsUsed: 'Process documentation, diagramming, communication, alignment.',
        links: {
          live: null,
          github: null
        }
      },
      {
        id: 'ai-support-automation',
        title: 'AI-Assisted Support Automation',
        role: 'Product Lead',
        duration: '4 months',
        description: 'Automated repetitive support workflows using AI.',
        technologies: ['AI Automation', 'Support Ops', 'Log Analysis'],
        highlights: [
          'Implemented auto-log capture',
          'Added AI-generated ticket summaries',
          'Built routing rules that categorized issues automatically',
          '40% reduction in manual workload',
          'Faster response times'
        ],
        situation: 'Support teams spent excessive time writing logs, classifying tickets, and generating summaries.',
        task: 'Automate repetitive support workflows using AI summarization, log parsing, and routing logic.',
        action: 'Implemented auto-log capture. Added AI-generated ticket summaries. Built routing rules that categorized issues automatically.',
        result: '40% reduction in manual workload. Faster response times.',
        skillsUsed: 'AI automation, support ops design, log analysis.',
        links: {
          live: null,
          github: null
        }
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
    color: '#9B59B6',
    description: 'Multi-step scheduling agent with priority rules, conflict checks, and evaluation metrics.',
    technologies: ['Python', 'LLM Planners', 'Agent Design', 'Workflow Modeling'],
    situation: 'Healthcare staffing teams struggled with unpredictable scheduling conflicts, limited visibility into priority rules, and manual checks that slowed assignment.',
    task: 'Build a multi-step scheduling agent using prioritization logic, failure-mode checks, and evaluation criteria using Python and LLM-based planners.',
    action: 'Designed agent workflow including intent parsing, rule validation, conflict detection. Created prioritization logic (urgency, availability, skill match). Implemented fallback behaviors for incomplete or ambiguous requests. Built evaluation metrics for throughput, correctness, and conflict rate.',
    result: 'Reduced manual scheduling cycles. Improved consistency and transparency of staffing decisions.',
    skillsUsed: 'Agent design, workflow modeling, evaluation metrics, LLM prompting, data logic design.',
    links: {
      live: null,
      github: null
    }
  },
  {
    id: 'daidaex',
    title: 'DaidaEX — Expert Matching + KPI Machine',
    category: 'Product Strategy',
    year: '2024',
    color: '#E67E22',
    description: 'Matching engine with KPI loops and early-trust measurement.',
    technologies: ['KPI Modeling', 'Matchmaking Logic', 'Product Experimentation'],
    situation: 'Subscribers struggled to connect with the right experts, and the platform lacked visibility into what "good matchmaking" meant operationally.',
    task: 'Design the KPI framework, expert evaluation loops, and onboarding patterns using user behavior mapping, KPI modeling, and product experimentation.',
    action: 'Defined expert-matching logic: expertise signals, responsiveness, profile quality. Created KPI loops for trust-building and match reliability. Designed evaluation flows for experts + subscribers. Built adoption-focused self-serve onboarding patterns.',
    result: 'Stronger match quality. More predictable activation and retention. Higher trust between experts and subscribers.',
    skillsUsed: 'KPI modeling, matchmaking logic, onboarding flows, product experimentation, user behavior analysis.',
    links: {
      live: null,
      github: null
    }
  },
  {
    id: 'synthezy',
    title: 'Synthezy — AI Video Repurposing Tool',
    category: 'AI Product',
    year: '2024',
    color: '#F39C12',
    description: 'Multimodal pipeline for clip extraction, segmentation, and highlight scoring.',
    technologies: ['Whisper', 'OpenAI', 'Multimodal AI', 'UX Design'],
    situation: 'Content creators struggled with manually cutting, summarizing, and repurposing long-form videos into short clips.',
    task: 'Design multimodal AI workflow using Whisper, OpenAI models, and clip-selection heuristics, while building an editor-friendly interface.',
    action: 'Built pipeline for transcription → semantic segmentation → highlight scoring. Designed evaluation metrics for clip selection and narrative flow. Created UX flows for editors to review and finalize clips. Tuned prompt chains to reduce hallucination.',
    result: 'Faster content repurposing cycle. Automated highlight extraction with consistent quality.',
    skillsUsed: 'AI orchestration, multimodal design, UX for editors, LLM evaluation criteria.',
    links: {
      live: null,
      github: null
    }
  },
  {
    id: 'bosch-csl',
    title: 'Bosch CSL — Market & GTM Strategy',
    category: 'Strategy',
    year: '2023',
    color: '#16A085',
    description: 'Positioning, buyer segmentation, and GTM narrative for connected devices.',
    technologies: ['Competitive Analysis', 'GTM Strategy', 'Market Sizing'],
    situation: 'Bosch lacked clarity on market positioning, competitive landscape, and GTM approach for a new connected-device capability.',
    task: 'Develop positioning, segmentation, and GTM narrative using competitive analysis, persona mapping, and opportunity sizing.',
    action: 'Performed competitor scan of connected device platforms. Created value-prop matrix for enterprise vs SMB buyers. Defined messaging pillars and adoption strategies. Presented narrative adopted by leadership.',
    result: 'Clear strategic roadmap for product direction. Unified GTM story for leadership.',
    skillsUsed: 'Competitive analysis, GTM strategy, market sizing, positioning.',
    links: {
      live: null,
      github: null
    }
  },
  {
    id: 'visionworks',
    title: 'Visionworks Retail Analytics',
    category: 'Analytics',
    year: '2023',
    color: '#3498DB',
    description: '60k+ datapoints analyzed to understand flow, congestion, and behavioral patterns.',
    technologies: ['Python', 'EDA', 'Clustering', 'Dashboards'],
    situation: 'Store managers lacked visibility into footfall patterns and flow inefficiencies.',
    task: 'Analyze 60k+ datapoints using clustering, descriptive analytics, and layout mapping.',
    action: 'Performed EDA + clustering. Identified congestion hotspots and behavioral patterns. Built dashboards for ongoing monitoring. Recommended layout optimizations.',
    result: '70% reduction in reporting time. Better inventory + layout decisions.',
    skillsUsed: 'EDA, clustering, dashboards, operational analytics.',
    links: {
      live: null,
      github: null
    }
  },
  {
    id: 'plantr',
    title: 'Plantr — Social Calendar App',
    category: 'UX Design',
    year: '2022',
    color: '#E74C3C',
    description: 'Collaborative planning app connecting group availability and event flow.',
    technologies: ['UX Research', 'Prototyping', 'Social Graph Design'],
    situation: 'Students struggled to coordinate plans due to fragmented platforms.',
    task: 'Design cross-user collaborative system using interviews and prototyping.',
    action: 'Interviewed users about planning challenges. Designed flows for group availability + shared suggestions. Built high-fidelity prototype with event feed and notifications.',
    result: 'A cohesive, user-validated social planning system.',
    skillsUsed: 'UX research, prototyping, social graph design, persona mapping.',
    links: {
      live: null,
      github: null
    }
  },
  {
    id: 'wearable-aid',
    title: 'Wearable Aid for Visually Impaired',
    category: 'Research',
    year: '2021',
    color: '#27AE60',
    description: 'Camera + OCR + TTS wearable, published as academic research.',
    technologies: ['Computer Vision', 'OCR', 'TTS', 'Hardware Prototyping'],
    situation: 'Visually impaired individuals needed a reliable way to read text in daily environments.',
    task: 'Build a prototype using OCR, TTS, and a wearable camera, then validate with users.',
    action: 'Integrated camera module + OCR pipeline. Added TTS for audio output. Designed ergonomic wearable. Published research after evaluations.',
    result: 'Prototype validated with users. Academic publication + recognition.',
    skillsUsed: 'Computer vision, OCR, hardware prototyping, user testing.',
    links: {
      live: null,
      github: null
    }
  },
  {
    id: 'carelens',
    title: 'CareLens — AR Training Companion',
    category: 'AR/VR',
    year: '2021',
    color: '#9B59B6',
    description: 'AR overlays for rounds workflow, vitals, and checklists.',
    technologies: ['AR Design', 'Workflow Mapping', 'Healthcare UX'],
    situation: 'Residents lacked real-time guidance during rounds.',
    task: 'Conceptualize an AR assistant using workflow mapping and clinician interviews.',
    action: 'Mapped rounds workflow. Designed AR overlays for vitals, notes, and checklists. Created early wireframes + concept prototypes.',
    result: 'Concept validated by clinicians. Highlighted potential for training consistency.',
    skillsUsed: 'AR design, workflow mapping, clinician interviews.',
    links: {
      live: null,
      github: null
    }
  }
];
