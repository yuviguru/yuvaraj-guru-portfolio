const transitionPosts = [
    {
        "id": 10,
        "title": "From Frontend Architect to Product Engineer in the AI Era",
        "slug": "frontend-architect-to-product-engineer-ai-era",
        "summary": "A practical breakdown of how my role shifted from frontend architecture to product engineering by owning outcomes, workflows, and AI-enabled execution end-to-end.",
        "tags": ["Product Engineering", "AI Engineering", "Career Transition", "Execution"],
        "author": {
            "name": "Yuvaraj",
            "profileImage": "author-yuvaraj.jpg"
        },
        "date": "2026-02-17",
        "heroText": "Role Shift",
        "content": {
            "introduction": {
                "heading": "Introduction",
                "paragraphs": [
                    "For years, I was measured mostly by frontend architecture quality: component systems, performance, maintainability, and UX precision. That foundation still matters, but market expectations changed faster than role titles.",
                    "Today, product engineering means owning outcomes across discovery, implementation, AI integration, release quality, and measurable business impact. This post explains how I made that shift and what actually changed in my daily work."
                ]
            },
            "sections": [
                {
                    "heading": "Why the Role Shift Happened",
                    "paragraphs": [
                        "Frontend depth alone is no longer enough when products are expected to ship faster with AI-assisted workflows. Teams now value engineers who can connect user problems, technical constraints, and delivery systems in one loop.",
                        "I saw that the highest leverage work was not just writing interfaces, but designing execution systems: task decomposition, AI-assisted implementation, review gates, and reliability checks."
                    ]
                },
                {
                    "heading": "What Changed in My Weekly Workflow",
                    "paragraphs": [
                        "I moved from feature ownership to outcome ownership. Instead of asking 'Did this component ship?', I ask 'Did this improve cycle time, quality, or conversion for the right user segment?'",
                        "My week now includes product framing, architecture decisions, agent workflow setup, benchmark reviews, post-release analysis, and process improvements. Coding is still core, but now it sits inside a broader product loop."
                    ]
                },
                {
                    "heading": "The New Skill Stack That Became Non-Negotiable",
                    "paragraphs": [
                        "The transition required three layers: product judgment, systems thinking, and AI workflow literacy. Product judgment helps prioritize what matters. Systems thinking keeps complexity manageable. AI workflow literacy turns acceleration into repeatable results.",
                        "The practical shift is this: design for maintainable speed, not one-time speed. If a workflow cannot be repeated safely by the team, it is not a real improvement."
                    ]
                }
            ],
            "conclusion": {
                "heading": "Conclusion",
                "paragraphs": [
                    "The move from frontend architect to product engineer is not a title change. It is an operating model change. You keep technical depth, but add responsibility for delivery quality, measurable impact, and cross-functional execution."
                ]
            },
            "cta": {
                "heading": "Call to Action",
                "paragraphs": [
                    "If you are planning a similar transition, start by mapping one current project from user outcome to deployment. Then identify where AI-assisted workflows can reduce time without reducing trust."
                ]
            }
        }
    },
    {
        "id": 11,
        "title": "What AI Engineer Means in Practice: Product, Not Prompts",
        "slug": "ai-engineer-in-practice-product-not-prompts",
        "summary": "AI engineering is not about isolated prompt tricks. It is about designing reliable workflows that move product metrics with clear guardrails.",
        "tags": ["AI Engineering", "Product Thinking", "Workflow Design", "Reliability"],
        "author": {
            "name": "Yuvaraj",
            "profileImage": "author-yuvaraj.jpg"
        },
        "date": "2026-02-10",
        "heroText": "Product AI",
        "content": {
            "introduction": {
                "heading": "Introduction",
                "paragraphs": [
                    "Most people still frame AI engineering as prompt quality. In real products, prompt quality is only one input. The actual challenge is building a reliable system around model behavior, uncertainty, and operational constraints.",
                    "In this post, I share how I evaluate AI work from a product lens: outcomes, reliability, and maintainability."
                ]
            },
            "sections": [
                {
                    "heading": "Prompts Are Inputs, Workflows Are the Product",
                    "paragraphs": [
                        "A prompt can produce a good response once. A workflow can produce acceptable outcomes repeatedly. That is the difference between experimentation and engineering.",
                        "I now design AI features as pipelines: intent capture, context assembly, generation, validation, human review where needed, and observability."
                    ]
                },
                {
                    "heading": "How I Measure AI Engineering Quality",
                    "paragraphs": [
                        "I track completion rate, intervention rate, defect leakage, and time-to-acceptable-output. These metrics force honest tradeoffs between speed and quality.",
                        "Without these metrics, teams mistake novelty for impact and cannot defend architecture decisions."
                    ],
                    "codeExample": {
                        "language": "json",
                        "content": "{\n  \"taskType\": \"feature-implementation\",\n  \"completionRate\": 0.82,\n  \"interventionRate\": 0.37,\n  \"defectLeakage\": 0.08,\n  \"timeToAcceptableOutputMins\": 34\n}"
                    }
                },
                {
                    "heading": "Reliability Comes From Guardrails",
                    "paragraphs": [
                        "Guardrails are design decisions: strict context windows, schema validation, deterministic post-processing, fallback paths, and escalation rules.",
                        "If an AI flow cannot fail safely, it is not ready for product usage. Engineering maturity shows up in how failures are handled, not just in best-case demos."
                    ]
                }
            ],
            "conclusion": {
                "heading": "Conclusion",
                "paragraphs": [
                    "AI engineering is product engineering under uncertainty. Build repeatable workflows, measure them, and improve them with discipline."
                ]
            },
            "cta": {
                "heading": "Call to Action",
                "paragraphs": [
                    "Audit one AI-assisted workflow in your team this week. If you cannot state its reliability metrics and fallback behavior, that is your next engineering task."
                ]
            }
        }
    },
    {
        "id": 12,
        "title": "Agent Skills as Product Primitives: Reusable Capability Design",
        "slug": "agent-skills-as-product-primitives",
        "summary": "Treat agent skills like product primitives with strict input/output contracts so they can be reused across tasks without losing quality.",
        "tags": ["Agent Skills", "Reusable Systems", "Architecture", "AI Engineering"],
        "author": {
            "name": "Yuvaraj",
            "profileImage": "author-yuvaraj.jpg"
        },
        "date": "2026-02-03",
        "heroText": "Reusable Skills",
        "content": {
            "introduction": {
                "heading": "Introduction",
                "paragraphs": [
                    "One-off agent setups feel fast at first but become expensive when every task needs a custom flow. Reusable skills solve this by packaging repeatable capability with clear boundaries.",
                    "I approach skills the same way I approach UI primitives: stable interfaces, predictable behavior, and composability."
                ]
            },
            "sections": [
                {
                    "heading": "Define Skills by Contract, Not by Prompt",
                    "paragraphs": [
                        "A reliable skill has explicit inputs, validation rules, output schema, and failure states. If those are vague, reuse breaks down quickly.",
                        "The prompt still matters, but it is part of the implementation, not the contract. Consumers should depend on behavior, not internal wording."
                    ]
                },
                {
                    "heading": "Where Skill Reuse Actually Pays Off",
                    "paragraphs": [
                        "I see the biggest gains in recurring tasks: repo scanning, change summarization, test triage, release-note generation, and content transformation.",
                        "When skills are reused across teams, consistency improves and review cost drops because outputs become predictable."
                    ]
                },
                {
                    "heading": "Design for Composition",
                    "paragraphs": [
                        "Skills become powerful when they chain cleanly: discovery skill -> analysis skill -> generation skill -> verification skill. Composition creates leverage.",
                        "Keep each skill narrow enough to remain testable. Broad skills look flexible but hide failures and reduce observability."
                    ],
                    "codeExample": {
                        "language": "yaml",
                        "content": "skill:\n  name: summarize-diff\n  input:\n    - git_diff\n    - audience\n  output:\n    - summary\n    - risks\n    - test_impact\n  failure_modes:\n    - missing_context\n    - oversized_diff\n    - ambiguous_intent"
                    }
                }
            ],
            "conclusion": {
                "heading": "Conclusion",
                "paragraphs": [
                    "Reusable agent skills are a product architecture decision. Design the contract first, then optimize the internals."
                ]
            },
            "cta": {
                "heading": "Call to Action",
                "paragraphs": [
                    "Pick one repeated workflow in your team and extract it into a skill with explicit I/O today. You will quickly see where your process assumptions are unclear."
                ]
            }
        }
    },
    {
        "id": 13,
        "title": "Multi-Agent Workflow Patterns That Actually Survive Production",
        "slug": "multi-agent-workflow-patterns-production",
        "summary": "The most useful multi-agent patterns are simple, observable, and fail-safe. This post covers the ones that work in production.",
        "tags": ["Multi-Agent Systems", "Production Engineering", "Workflow Orchestration", "Reliability"],
        "author": {
            "name": "Yuvaraj",
            "profileImage": "author-yuvaraj.jpg"
        },
        "date": "2026-01-27",
        "heroText": "Agent Patterns",
        "content": {
            "introduction": {
                "heading": "Introduction",
                "paragraphs": [
                    "Multi-agent systems sound advanced, but production success usually comes from simple patterns with clear responsibilities and checkpoints.",
                    "In this post, I share practical patterns that reduce handoff confusion and improve repeatability."
                ]
            },
            "sections": [
                {
                    "heading": "Pattern 1: Planner -> Executor -> Verifier",
                    "paragraphs": [
                        "This pattern works because each role has one primary job. Planner defines scope, executor produces output, verifier checks against acceptance criteria.",
                        "It is easy to debug because you can isolate failure by role and quickly identify where context drift occurred."
                    ]
                },
                {
                    "heading": "Pattern 2: Specialist Swarm with Human Gate",
                    "paragraphs": [
                        "For broader tasks, parallel specialists can generate options (implementation, testing, docs), then a human gate merges the final path.",
                        "This increases coverage while keeping accountability. The gate prevents low-confidence merges from entering production."
                    ]
                },
                {
                    "heading": "Pattern 3: Retry with Constraint Tightening",
                    "paragraphs": [
                        "Blind retries waste tokens and time. Effective retries tighten constraints: narrower scope, clearer schema, stricter acceptance rules.",
                        "A good retry policy also caps attempts and escalates early when risk thresholds are exceeded."
                    ]
                }
            ],
            "conclusion": {
                "heading": "Conclusion",
                "paragraphs": [
                    "Production-grade multi-agent workflows are less about complexity and more about disciplined orchestration, observability, and controlled escalation."
                ]
            },
            "cta": {
                "heading": "Call to Action",
                "paragraphs": [
                    "Document one multi-agent flow in your team using role boundaries and failure rules. If boundaries are unclear, production reliability will remain fragile."
                ]
            }
        }
    },
    {
        "id": 14,
        "title": "Codex vs Claude Code in Real Work: My Task-by-Task Findings",
        "slug": "codex-vs-claude-code-real-work-findings",
        "summary": "A context-based comparison of Codex and Claude Code across real engineering tasks, with transparent limits and workflow-level observations.",
        "tags": ["Codex", "Claude Code", "Developer Productivity", "Engineering Workflow"],
        "author": {
            "name": "Yuvaraj",
            "profileImage": "author-yuvaraj.jpg"
        },
        "date": "2026-01-20",
        "heroText": "Tool Findings",
        "content": {
            "introduction": {
                "heading": "Introduction",
                "paragraphs": [
                    "Tool comparisons often become opinion-heavy because context is missing. In my work, both Codex and Claude Code are useful, but their strengths change by task type and constraints.",
                    "This post shares practical observations from repeated task classes, not a universal winner claim."
                ]
            },
            "sections": [
                {
                    "heading": "Task Classes I Compared",
                    "paragraphs": [
                        "I compared the tools on feature implementation, bug fixes, refactors, doc updates, and test expansion tasks. Each class has different ambiguity and verification cost.",
                        "The quality bar was consistent: acceptable output with reasonable intervention and no major regressions."
                    ]
                },
                {
                    "heading": "What I Observed in Practice",
                    "paragraphs": [
                        "Some tasks favored faster first-pass output, while others favored stronger structured reasoning and safer edits. The right tool often depended on repo familiarity and change complexity.",
                        "The biggest predictor of success was not model preference alone, but how clearly acceptance criteria were defined before generation."
                    ],
                    "codeExample": {
                        "language": "markdown",
                        "content": "| Task type | Completion rate | Avg intervention |\n| --- | --- | --- |\n| Feature implementation | track per sprint | track per sprint |\n| Bug fix | track per sprint | track per sprint |\n| Refactor | track per sprint | track per sprint |"
                    }
                },
                {
                    "heading": "How I Make the Choice Per Task",
                    "paragraphs": [
                        "I choose the tool based on three factors: task complexity, need for deterministic edits, and expected review burden.",
                        "When uncertainty is high, I bias toward workflows with stronger verification checkpoints and clearer step-by-step planning."
                    ]
                }
            ],
            "conclusion": {
                "heading": "Conclusion",
                "paragraphs": [
                    "The most reliable approach is not loyalty to one tool. It is a task-aware strategy backed by measurable outcomes and transparent assumptions."
                ]
            },
            "cta": {
                "heading": "Call to Action",
                "paragraphs": [
                    "Run your own 2-week task-based comparison with explicit metrics. You will get better decisions than any generic ranking can provide."
                ]
            }
        }
    },
    {
        "id": 15,
        "title": "Benchmarking Coding Agents Correctly: Method Before Opinion",
        "slug": "benchmarking-coding-agents-method-before-opinion",
        "summary": "A practical methodology for benchmarking coding agents so comparisons stay fair, reproducible, and useful for real product decisions.",
        "tags": ["Benchmarks", "Evaluation", "AI Engineering", "Methodology"],
        "author": {
            "name": "Yuvaraj",
            "profileImage": "author-yuvaraj.jpg"
        },
        "date": "2026-01-13",
        "heroText": "Benchmark Method",
        "content": {
            "introduction": {
                "heading": "Introduction",
                "paragraphs": [
                    "Benchmarks are easy to misuse. Without clear protocol, they become marketing artifacts instead of engineering signals.",
                    "This post outlines the method I use to evaluate coding agents in a way that supports actual delivery decisions."
                ]
            },
            "sections": [
                {
                    "heading": "Design a Task Suite That Matches Reality",
                    "paragraphs": [
                        "Use task classes that resemble your workload: feature development, bug fixes, refactoring, docs, and tests. Synthetic-only tasks skew conclusions.",
                        "Keep acceptance criteria explicit and equal across tools so reviewers can judge outcomes consistently."
                    ]
                },
                {
                    "heading": "Track More Than Speed",
                    "paragraphs": [
                        "Time matters, but quality and intervention matter more. I track completion rate, intervention count, regression risk, and rework time.",
                        "A faster first output that creates later defects is not a productivity gain."
                    ]
                },
                {
                    "heading": "Publish Context With Every Result",
                    "paragraphs": [
                        "Always publish model version, date, repository size, constraints, and human reviewer profile. Without context, results are not reproducible.",
                        "The goal is decision support, not bragging rights. Good benchmark reports make limitations obvious."
                    ],
                    "codeExample": {
                        "language": "json",
                        "content": "{\n  \"runDate\": \"2026-01-13\",\n  \"repoSize\": \"medium\",\n  \"taskCount\": 12,\n  \"metrics\": [\"completionRate\", \"interventionCount\", \"defectCount\", \"timeToAcceptableOutput\"],\n  \"reviewMode\": \"human-verification\"\n}"
                    }
                }
            ],
            "conclusion": {
                "heading": "Conclusion",
                "paragraphs": [
                    "Method quality determines conclusion quality. If your benchmark setup is weak, your tool decisions will be weak too."
                ]
            },
            "cta": {
                "heading": "Call to Action",
                "paragraphs": [
                    "Before your next tool decision, publish a benchmark protocol first. Lock the method, then run the comparison."
                ]
            }
        }
    },
    {
        "id": 16,
        "title": "Building Integration Pipelines Across Repos, Tools, and Teams",
        "slug": "integration-pipelines-across-repos-tools-teams",
        "summary": "How to design integration pipelines that stay reliable when work spans multiple repositories, toolchains, and team boundaries.",
        "tags": ["Integration", "DevOps", "Cross-Repo Workflows", "Engineering Operations"],
        "author": {
            "name": "Yuvaraj",
            "profileImage": "author-yuvaraj.jpg"
        },
        "date": "2026-01-06",
        "heroText": "Integration Flow",
        "content": {
            "introduction": {
                "heading": "Introduction",
                "paragraphs": [
                    "Single-repo workflows are straightforward. Real delivery usually spans frontend, backend, infra, and automation repositories with different ownership models.",
                    "This post explains how I structure integration pipelines so cross-team delivery remains predictable."
                ]
            },
            "sections": [
                {
                    "heading": "Define Stable Contracts Across Boundaries",
                    "paragraphs": [
                        "Integration pain usually comes from unclear contracts, not missing tooling. Start with clear API contracts, schema versioning, and environment assumptions.",
                        "When contracts are explicit, parallel teams can move faster without constant re-alignment meetings."
                    ]
                },
                {
                    "heading": "Automate Verification at Each Handoff",
                    "paragraphs": [
                        "Every boundary should have automated checks: interface validation, smoke tests, and deployment readiness checks.",
                        "This catches drift early and reduces late-stage surprises where rollback cost is highest."
                    ],
                    "codeExample": {
                        "language": "yaml",
                        "content": "steps:\n  - run: api-contract-check\n  - run: integration-smoke-test\n  - run: deployment-readiness-gate\n  - run: notify-owning-team"
                    }
                },
                {
                    "heading": "Build Observability for Integration Health",
                    "paragraphs": [
                        "I track pipeline failure categories, mean time to recovery, and re-run frequency. These metrics reveal whether integration design is improving or regressing.",
                        "If the same failure repeats, solve the contract or process gap, not just the immediate incident."
                    ]
                }
            ],
            "conclusion": {
                "heading": "Conclusion",
                "paragraphs": [
                    "Reliable integration pipelines are primarily an interface and ownership design problem. Tooling amplifies good design; it does not replace it."
                ]
            },
            "cta": {
                "heading": "Call to Action",
                "paragraphs": [
                    "Map your highest-friction integration boundary and define one contract improvement plus one automated gate this sprint."
                ]
            }
        }
    },
    {
        "id": 17,
        "title": "Human-in-the-Loop Design for High-Trust Agentic Workflows",
        "slug": "human-in-the-loop-agentic-workflows",
        "summary": "Human-in-the-loop is not a fallback strategy. It is a deliberate design layer for trust, safety, and faster recovery in agentic systems.",
        "tags": ["Human in the Loop", "Agentic Workflows", "Trust", "AI Governance"],
        "author": {
            "name": "Yuvaraj",
            "profileImage": "author-yuvaraj.jpg"
        },
        "date": "2025-12-30",
        "heroText": "Trust Design",
        "content": {
            "introduction": {
                "heading": "Introduction",
                "paragraphs": [
                    "Automation without trust does not scale. Teams either bypass it or over-control it until velocity collapses.",
                    "Human-in-the-loop design gives you a practical middle path: automate confidently, review intentionally, escalate intelligently."
                ]
            },
            "sections": [
                {
                    "heading": "Where Human Review Adds Real Value",
                    "paragraphs": [
                        "Not every step needs manual review. Focus review on high-impact decisions: architectural changes, security-sensitive code, and irreversible operations.",
                        "Selective review preserves speed while protecting quality and compliance."
                    ]
                },
                {
                    "heading": "Design Review Gates as Product Interfaces",
                    "paragraphs": [
                        "A review gate should include context, risk score, proposed action, and rollback path. This turns review from guesswork into decision support.",
                        "Poorly designed review gates create fatigue and inconsistent decisions."
                    ]
                },
                {
                    "heading": "Measure Trust, Not Just Throughput",
                    "paragraphs": [
                        "I track pass rates, rollback frequency, and post-merge incident rates to evaluate whether review design is working.",
                        "When trust is high, teams review faster because signal quality is better."
                    ],
                    "codeExample": {
                        "language": "json",
                        "content": "{\n  \"reviewGate\": \"high-risk-change\",\n  \"requiredFields\": [\"riskScore\", \"diffSummary\", \"rollbackPlan\"],\n  \"approvalSLA\": \"30m\",\n  \"escalation\": \"team-lead\"\n}"
                    }
                }
            ],
            "conclusion": {
                "heading": "Conclusion",
                "paragraphs": [
                    "Human-in-the-loop is a system design choice, not a manual patch. When designed well, it increases both trust and delivery speed."
                ]
            },
            "cta": {
                "heading": "Call to Action",
                "paragraphs": [
                    "Audit one current agent workflow and identify where human review is too early, too late, or missing context. Fix one gate this week."
                ]
            }
        }
    },
    {
        "id": 18,
        "title": "Failure Modes in Agent Systems and How I Debug Them",
        "slug": "failure-modes-in-agent-systems-debugging",
        "summary": "A debugging playbook for common agent-system failures including context drift, invalid assumptions, tool mismatch, and unreliable retries.",
        "tags": ["Debugging", "Agent Systems", "Reliability Engineering", "Diagnostics"],
        "author": {
            "name": "Yuvaraj",
            "profileImage": "author-yuvaraj.jpg"
        },
        "date": "2025-12-23",
        "heroText": "Debug Agents",
        "content": {
            "introduction": {
                "heading": "Introduction",
                "paragraphs": [
                    "Agent systems fail in patterns. Once you recognize those patterns, troubleshooting becomes much faster and less emotional.",
                    "This post covers the failure modes I see most often and the debugging sequence I use to isolate root causes."
                ]
            },
            "sections": [
                {
                    "heading": "Failure Mode 1: Context Drift",
                    "paragraphs": [
                        "Context drift happens when the agent works from stale, incomplete, or contradictory information. Symptoms include irrelevant edits and repeated misunderstanding.",
                        "The fix is context discipline: scoped context bundles, explicit assumptions, and mandatory refresh points before high-impact actions."
                    ]
                },
                {
                    "heading": "Failure Mode 2: Tool/Task Mismatch",
                    "paragraphs": [
                        "Some tasks need deterministic transformations while others tolerate exploratory output. Using the wrong tool profile increases correction cost.",
                        "I map tasks by ambiguity and risk, then assign workflows accordingly."
                    ]
                },
                {
                    "heading": "Failure Mode 3: Retry Loops Without Learning",
                    "paragraphs": [
                        "Retrying the same instruction without added constraints rarely works. Good retries add new information, stricter format, or different decomposition.",
                        "If two retries fail, escalate quickly and inspect assumptions instead of burning more attempts."
                    ],
                    "codeExample": {
                        "language": "text",
                        "content": "Debug sequence:\n1) Verify context source\n2) Reproduce on smallest failing task\n3) Tighten constraints\n4) Add validation checkpoints\n5) Escalate if failure persists"
                    }
                }
            ],
            "conclusion": {
                "heading": "Conclusion",
                "paragraphs": [
                    "Agent debugging improves when you treat failures as system signals, not model surprises. Repeatable diagnostics beat intuition."
                ]
            },
            "cta": {
                "heading": "Call to Action",
                "paragraphs": [
                    "Capture your top three recurring failure modes this month and define one preventive guardrail for each."
                ]
            }
        }
    },
    {
        "id": 19,
        "title": "Cost, Latency, and Reliability Tradeoffs in Daily AI Engineering",
        "slug": "cost-latency-reliability-ai-engineering",
        "summary": "How to make practical tradeoffs between model cost, response latency, and output reliability without harming product quality.",
        "tags": ["AI Economics", "Latency", "Reliability", "Engineering Tradeoffs"],
        "author": {
            "name": "Yuvaraj",
            "profileImage": "author-yuvaraj.jpg"
        },
        "date": "2025-12-16",
        "heroText": "Tradeoffs",
        "content": {
            "introduction": {
                "heading": "Introduction",
                "paragraphs": [
                    "AI-enabled delivery is constrained by three forces: cost, latency, and reliability. You cannot maximize all three at once.",
                    "Strong teams make these tradeoffs intentionally and document why a given balance fits product goals."
                ]
            },
            "sections": [
                {
                    "heading": "Start With Service Expectations",
                    "paragraphs": [
                        "Different workflows need different service levels. Internal drafting can tolerate slower response. customer-facing generation may require stricter latency and reliability.",
                        "Define service levels first, then tune model choice, context size, and fallback strategy."
                    ]
                },
                {
                    "heading": "Use Tiered Workflows",
                    "paragraphs": [
                        "I often use a tiered model strategy: low-cost pass for straightforward tasks, high-capability pass for complex or high-risk tasks.",
                        "Tiering controls cost while preserving quality where it matters most."
                    ],
                    "codeExample": {
                        "language": "yaml",
                        "content": "routing:\n  low_risk:\n    model: economical\n    timeout_ms: 6000\n  high_risk:\n    model: high_capability\n    timeout_ms: 15000\n    require_review: true"
                    }
                },
                {
                    "heading": "Monitor the Right Signals",
                    "paragraphs": [
                        "Track p95 latency, cost per accepted output, and rollback/defect rates. These reveal whether optimization is real or just shifted elsewhere.",
                        "Cost reduction that raises failure rates is usually a false economy."
                    ]
                }
            ],
            "conclusion": {
                "heading": "Conclusion",
                "paragraphs": [
                    "Tradeoffs are unavoidable. Good AI engineering means choosing the right tradeoff for each workflow and revisiting that choice as usage evolves."
                ]
            },
            "cta": {
                "heading": "Call to Action",
                "paragraphs": [
                    "Pick one AI workflow and chart its cost, p95 latency, and intervention rate for two weeks. Use data, not instinct, for your next optimization decision."
                ]
            }
        }
    },
    {
        "id": 20,
        "title": "Shipping Internal AI Tooling That Developers Will Actually Use",
        "slug": "shipping-internal-ai-tooling-developers-use",
        "summary": "Internal AI tooling succeeds when trust, ergonomics, and team workflow fit are designed deliberately from day one.",
        "tags": ["Internal Tools", "Developer Experience", "AI Adoption", "Product Delivery"],
        "author": {
            "name": "Yuvaraj",
            "profileImage": "author-yuvaraj.jpg"
        },
        "date": "2025-12-09",
        "heroText": "Ship Internal AI",
        "content": {
            "introduction": {
                "heading": "Introduction",
                "paragraphs": [
                    "Internal AI tools often fail for one simple reason: they optimize demo quality, not daily developer workflow.",
                    "In this post, I break down how to ship internal AI tooling that teams keep using after the launch week."
                ]
            },
            "sections": [
                {
                    "heading": "Start With One Painful, Repeated Task",
                    "paragraphs": [
                        "Avoid broad 'assistant for everything' scope. Start with one high-friction repeated workflow where improvement is easy to measure.",
                        "Narrow scope accelerates trust because users can quickly compare old vs new process."
                    ]
                },
                {
                    "heading": "Design for Transparency and Control",
                    "paragraphs": [
                        "Developers adopt tools they can inspect and override. Show what context was used, what action is proposed, and how to edit before apply.",
                        "Opacity may feel magical in demos but creates resistance in production."
                    ]
                },
                {
                    "heading": "Measure Adoption Like a Product",
                    "paragraphs": [
                        "Track weekly active users, repeat usage, task completion time, and escaped defect rate. Adoption without quality is not success.",
                        "Feedback loops should be fast. If users abandon after one attempt, your experience contract is broken."
                    ],
                    "codeExample": {
                        "language": "markdown",
                        "content": "- WAU\n- Repeat usage rate\n- Median time saved per task\n- Defect rate after assisted changes"
                    }
                }
            ],
            "conclusion": {
                "heading": "Conclusion",
                "paragraphs": [
                    "Great internal AI tooling behaves like strong product design: focused scope, transparent behavior, fast feedback, and measurable value."
                ]
            },
            "cta": {
                "heading": "Call to Action",
                "paragraphs": [
                    "Choose one internal workflow this sprint, define success metrics before launch, and ship a narrow version teams can trust immediately."
                ]
            }
        }
    },
    {
        "id": 21,
        "title": "My 90-Day Framework to Transition Engineers into Product + AI Roles",
        "slug": "90-day-framework-transition-engineers-product-ai",
        "summary": "A 90-day practical framework for engineers moving into product and AI execution roles with measurable weekly checkpoints.",
        "tags": ["Career Growth", "Product Engineering", "AI Engineering", "Frameworks"],
        "author": {
            "name": "Yuvaraj",
            "profileImage": "author-yuvaraj.jpg"
        },
        "date": "2025-12-02",
        "heroText": "90 Day Plan",
        "content": {
            "introduction": {
                "heading": "Introduction",
                "paragraphs": [
                    "Role transitions fail when goals are vague and feedback is slow. A 90-day framework creates momentum by combining skill development with shipped outcomes.",
                    "This is the structure I use for engineers moving from implementation-heavy roles into product and AI ownership."
                ]
            },
            "sections": [
                {
                    "heading": "Days 1-30: Build Foundations and Baselines",
                    "paragraphs": [
                        "Focus on product framing, system constraints, and baseline metrics. Understand where current delivery loses time or quality.",
                        "Ship one scoped improvement with clear before/after numbers. Early visible wins build confidence and credibility."
                    ]
                },
                {
                    "heading": "Days 31-60: Introduce Workflow Leverage",
                    "paragraphs": [
                        "Add reusable AI-assisted workflows for repeated tasks. Keep human review gates for high-risk operations.",
                        "Measure intervention rate and quality impact every week. The goal is dependable acceleration, not raw automation."
                    ],
                    "codeExample": {
                        "language": "text",
                        "content": "Week checkpoint examples:\n- cycle time delta\n- intervention rate trend\n- defect leakage trend\n- stakeholder feedback score"
                    }
                },
                {
                    "heading": "Days 61-90: Scale and Operationalize",
                    "paragraphs": [
                        "Document playbooks, define ownership, and formalize acceptance criteria so other engineers can reuse the system.",
                        "Transition success is proven when outcomes remain stable without constant heroics."
                    ]
                }
            ],
            "conclusion": {
                "heading": "Conclusion",
                "paragraphs": [
                    "A strong 90-day transition plan turns ambition into observable progress. Focus on shipped outcomes, measurable quality, and repeatable workflows."
                ]
            },
            "cta": {
                "heading": "Call to Action",
                "paragraphs": [
                    "If you are planning your own transition, map your next 12 weeks with weekly checkpoints and one measurable proof point per week."
                ]
            }
        }
    }
];

export default transitionPosts;
