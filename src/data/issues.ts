export type Article = {
  title: string;
  source: string;
  author: string;
  date: string;
  url: string;
  category:
    | "本周精选"
    | "研究与模型"
    | "工程与 Codex/Agent"
    | "产品与设计"
    | "组织与工作流"
    | "X 高信号"
    | "延伸阅读";
  tags: string[];
  signal: "高" | "中高" | "中";
  confidence: "高" | "中" | "低";
  summary: string;
  why: string;
  audience: string;
  factOpinionInference: string;
};

export type Issue = {
  slug: string;
  title: string;
  date: string;
  range: string;
  deck: string;
  editorial: string;
  articles: Article[];
};

export const issues: Issue[] = [
  {
    slug: "2026-06-09",
    title: "AI 优秀博客周刊 001",
    date: "2026-06-09",
    range: "2026-06-02 至 2026-06-09",
    deck:
      "本周的主线很清楚：编码 Agent 正在从个人电脑和 IDE 扩散到企业工作流、云端隔离运行时、产品遥测、团队知识库和行业垂直任务。真正值得看的不是“AI 又能写代码了”，而是组织开始重构权限、成本、上下文和验收机制。",
    editorial:
      "如果只看模型能力，会误判这一周。更强的信号来自周边系统：Codex 被重新包装成知识工作工具，Linear 把 Agent 技能变成团队流程资产，AWS/Vercel 在争夺 Agent 运行与路由层，Anthropic 则把 Claude 的叙事推进到网络安全和科学工作。结论偏冷：Agent 不是一个更聪明的聊天框，而是一种会消耗权限、预算、上下文和组织注意力的新型生产单元。",
    articles: [
      {
        title: "Codex is becoming a productivity tool for everyone",
        source: "OpenAI",
        author: "OpenAI",
        date: "2026-06-02",
        url: "https://openai.com/index/codex-for-knowledge-work/",
        category: "本周精选",
        tags: ["Codex", "知识工作", "Agent", "生产力"],
        signal: "高",
        confidence: "高",
        summary:
          "OpenAI 发布《The Next Era of Knowledge Work》相关说明，把 Codex 从纯编程工具重新定位为知识工作生产力工具。文中称 Codex 周活超过 500 万，自 2 月桌面应用发布以来增长超过 6 倍；非开发者知识工作者约占用户 20%，增长速度超过开发者 3 倍。典型用途扩展到报告、表格、演示、合同、研究、数据分析和轻量工具构建。这个转向比单个功能发布更关键，因为它暴露了 OpenAI 想把 Codex 推成通用工作操作层。",
        why:
          "这是本周最重要的一手信号：Codex 的竞争对象不再只是 Claude Code、Cursor 或 Copilot，而是 Excel、Slides、Docs、Notion、Slack 之间的工作摩擦。",
        audience:
          "AI 产品负责人、知识管理/运营团队、关注 Codex 商业化路径的人。",
        factOpinionInference:
          "事实：用户数、增长、用例来自 OpenAI 原文。判断：Codex 正在被推成工作操作层，是基于产品定位和用例范围的推断。",
      },
      {
        title: "Codex for every role, tool, and workflow",
        source: "OpenAI",
        author: "OpenAI",
        date: "2026-06-02",
        url: "https://openai.com/index/codex-for-every-role-tool-workflow/",
        category: "工程与 Codex/Agent",
        tags: ["Codex", "Plugins", "Sites", "Annotations"],
        signal: "高",
        confidence: "高",
        summary:
          "OpenAI 同日发布 Codex 新能力：面向角色的插件、可分享的 Sites 预览，以及对产物局部反馈的 annotations。文章给出的内部与客户案例覆盖研究、投研、市场、设计、运营和数据分析，而不是传统软件工程。Sites 尤其值得盯，因为它让 Codex 生成可分享的交互式网站或应用，改变了“产物交付”的默认形态。它不是单纯代码生成，而是把插件、上下文、权限和可发布界面打包成一个闭环。",
        why:
          "如果 Codex 能把“生成文件”推进到“生成可使用的工作应用”，组织内部工具和轻量流程自动化会被重新定价。",
        audience:
          "内部工具团队、产品运营、设计工程师、企业 AI 管理员。",
        factOpinionInference:
          "事实：插件、Sites、annotations 和可用性来自 OpenAI 原文。推断：内部工具会被重新定价，是基于能力组合的产品判断。",
      },
      {
        title: "Making Claude a chemist",
        source: "Anthropic Research",
        author: "Anthropic",
        date: "2026-06-05",
        url: "https://www.anthropic.com/research/making-claude-a-chemist",
        category: "研究与模型",
        tags: ["Claude", "AI for Science", "Chemistry", "NMR"],
        signal: "高",
        confidence: "高",
        summary:
          "Anthropic Science 发布化学方向的首批工作，评估 Claude 在 NMR 光谱解析中的表现。文章称测试覆盖 20 个训练截止后发表的化合物，并把 Opus 4.7、Opus 4.6、Sonnet 4.6 与 ChemDraw、MestReNova 等专门工具比较。重点不只是模型能预测谱图，而是它能在某些场景尝试从实验谱图反推结构，这更接近化学家的日常瓶颈。Anthropic 对结论保持克制，明确列出样本量、溶剂、2D 实验和立体化学等限制。",
        why:
          "这类文章比通用榜单更有价值，因为它把 frontier model 放进具体学科工作流，暴露模型在哪些环节能省时间、哪些地方仍然不可靠。",
        audience:
          "AI for Science 研究者、科研软件团队、关注垂直模型评估的人。",
        factOpinionInference:
          "事实：任务、模型、对照工具和限制来自 Anthropic 原文。判断：比通用榜单更有价值，是编辑选择。",
      },
      {
        title: "What we learned mapping a year’s worth of AI-enabled cyber threats",
        source: "Anthropic",
        author: "Anthropic",
        date: "2026-06-03",
        url: "https://www.anthropic.com/news/AI-enabled-cyber-threats-mitre-attack",
        category: "研究与模型",
        tags: ["Cybersecurity", "Threat Intel", "MITRE ATT&CK", "Autonomy"],
        signal: "高",
        confidence: "高",
        summary:
          "Anthropic 分析了 2025 年 3 月至 2026 年 3 月因恶意网络活动被封禁的 832 个账号，并映射到 MITRE ATT&CK。结论很硬：攻击者正在把 AI 用到更复杂、更靠后的攻击阶段；传统依靠技术数量、工具界面来评估威胁等级的方法正在失效；MITRE ATT&CK 尚未充分覆盖 Agent 式编排行为。文中还给出数字：560/832 个账号用于恶意软件相关准备，第二个半年中中高风险以上账号比例从 33% 升至 56%。",
        why:
          "这篇提供了 Agent 安全讨论中罕见的实际滥用样本，而不是抽象风险作文。",
        audience:
          "安全团队、AI 平台治理、企业 Agent 权限设计者。",
        factOpinionInference:
          "事实：样本量、比例和三点结论来自 Anthropic 原文。判断：样本比抽象风险更有用，是编辑评价。",
      },
      {
        title: "Expanding Project Glasswing",
        source: "Anthropic",
        author: "Anthropic",
        date: "2026-06-02",
        url: "https://www.anthropic.com/news/expanding-project-glasswing",
        category: "工程与 Codex/Agent",
        tags: ["Claude", "Security", "Project Glasswing", "Vulnerability Discovery"],
        signal: "中高",
        confidence: "高",
        summary:
          "Anthropic 宣布扩大 Project Glasswing，把使用 Claude Mythos Preview 扫描关键软件漏洞的合作范围扩展到约 150 个新组织，覆盖 15 个以上国家。文章称早期约 50 个伙伴已用该模型在代码库中发现超过 1 万个高危或严重安全缺陷。这个项目把 frontier model 的叙事从“帮助开发”推进到“主动发现关键基础设施漏洞”。同时，它也说明最强能力会被放在受控伙伴网络里，而不是简单开放给所有用户。",
        why:
          "它是 AI 安全工具商业化与管控模式的交叉案例：能力越强，分发越不像普通 SaaS。",
        audience:
          "安全产品、开源维护者、政府/关键基础设施技术负责人。",
        factOpinionInference:
          "事实：组织数量、国家范围和漏洞数量来自 Anthropic 原文。推断：强能力分发更受控，是基于项目准入条件的判断。",
      },
      {
        title: "Team documents",
        source: "Linear Changelog",
        author: "Linear",
        date: "2026-06-04",
        url: "https://linear.app/changelog/2026-06-04-team-documents",
        category: "组织与工作流",
        tags: ["Linear", "Linear Agent", "Skills", "Team Knowledge"],
        signal: "高",
        confidence: "高",
        summary:
          "Linear 发布 team documents，让团队主页成为长期上下文、文档和共享引用的归档位置。更值得注意的是 Shared skills for Linear Agent：个人可复用指令可以共享到团队，用于标准化规格撰写、周计划、状态更新等流程。Linear 还加入 issue description comments，让反馈可以锚定到具体文本或图片。组合起来看，Linear 正在把 Agent 工作从一次性对话推进到团队流程资产。",
        why:
          "这不是一个小型文档功能，而是 Agent 时代的组织记忆设计：技能、文档、Issue、评论都变成可执行上下文。",
        audience:
          "产品经理、工程经理、使用 Linear 管理 AI 工作流的团队。",
        factOpinionInference:
          "事实：team documents、shared skills、description comments 来自 Linear changelog。推断：团队流程资产化是产品趋势判断。",
      },
      {
        title: "DeepSeek enters the fight for token volume, Anthropic continues to dominate spend",
        source: "Vercel",
        author: "Jerilyn, Harpreet, Eric",
        date: "2026-06-08",
        url: "https://vercel.com/blog/ai-gateway-production-index-june-2026",
        category: "本周精选",
        tags: ["AI Gateway", "Model Routing", "Anthropic", "DeepSeek", "Cost"],
        signal: "高",
        confidence: "高",
        summary:
          "Vercel 发布 2026 年 5 月 AI Gateway production index。数据显示总 token 环比增长 20%，总花费环比增长 43%；DeepSeek 在 token 量上快速上升，但 Anthropic 在高风险用例的花费占比继续领先。文章称 Anthropic token 份额从 26% 升至 32%，花费份额从 61% 升至 65%；在 coding agent 场景，DeepSeek 占 49% token 量但只占 4% 成本，Anthropic 占 28% token 量但占 70% 成本。核心信号是：低价模型在吞吐层吃量，frontier 模型在高价值/高风险层吃预算。",
        why:
          "这是比排行榜更接近生产现实的数据：企业不是选一个模型，而是在成本、风险和任务类型之间路由。",
        audience:
          "AI 平台团队、成本治理、模型路由和网关产品负责人。",
        factOpinionInference:
          "事实：环比、份额和 use case 数字来自 Vercel 原文。判断：低价模型吃量、frontier 模型吃预算，是对数据的归纳。",
      },
      {
        title: "It’s safe to close your laptop now: Hosting coding agents on Amazon Bedrock AgentCore",
        source: "AWS Machine Learning Blog",
        author:
          "Evandro Franco, Eashan Kaushik, Kosti Vasilakakis, Mark Roy, Abhimanyu Siwach, Shreyas Subramanian",
        date: "2026-06-08",
        url: "https://aws.amazon.com/blogs/machine-learning/its-safe-to-close-your-laptop-now-hosting-coding-agents-on-amazon-bedrock-agentcore/",
        category: "工程与 Codex/Agent",
        tags: ["Agent Runtime", "Bedrock AgentCore", "Codex", "Claude Code", "MCP"],
        signal: "高",
        confidence: "高",
        summary:
          "AWS 这篇技术文章直指 coding agent 的真实痛点：开发者把 Claude Code、Codex、Kiro、Cursor CLI 跑在自己的笔记本上，导致权限、密钥、端口、状态和并行性全部混在一起。Bedrock AgentCore Runtime 的方案是给每个 agent session 一个隔离 Linux microVM、持久 workspace、真实 shell、MCP Gateway、Identity 和 CloudWatch 可观测性。文章还把 Claude Code、Codex、Kiro、Cursor 放到同一问题上并行运行，强调比较延迟、成本和测试通过率。它代表云厂商开始把“Agent 工作站”产品化。",
        why:
          "个人电脑不是 Agent 的长期运行时；隔离、身份、工具权限和可观测性才是企业落地的硬门槛。",
        audience:
          "平台工程、DevSecOps、企业 coding agent 基础设施团队。",
        factOpinionInference:
          "事实：microVM、persistent workspace、MCP Gateway、Identity、CloudWatch 来自 AWS 原文。推断：Agent 工作站产品化是编辑判断。",
      },
      {
        title: "Reacting to AI (reducing shadow AI practices)",
        source: "Salaboy",
        author: "Mauricio Salatino",
        date: "2026-06-08",
        url: "https://www.salaboy.com/2026/06/08/reacting-to-ai/",
        category: "组织与工作流",
        tags: ["Platform Engineering", "Shadow AI", "Governance", "SDLC"],
        signal: "中高",
        confidence: "高",
        summary:
          "Mauricio Salatino 把 2026 年企业平台团队面临的问题命名为 Shadow AI：Claude Code、Codex、Copilot 等工具在团队里扩散，平台团队不得不支持大量内部、外部和 SaaS Agent 服务。文章把这个问题类比 Kubernetes 生态爆炸，但指出 Agent 的复杂度更高，因为它们不仅部署服务，还会主动执行任务、调用工具和消耗预算。核心观点是，平台工程需要把 GenAI 服务纳入标准化、治理和开发者体验，而不是放任每个团队自建一套。",
        why:
          "这篇适合给企业技术管理层看：Agent 不是采购一个工具，而是引入一组分布式自治系统。",
        audience:
          "平台工程负责人、DevOps/SRE、企业 AI enablement 团队。",
        factOpinionInference:
          "事实：文章主题和工具例子来自原文。判断：适合企业技术管理层，是编辑推荐。",
      },
      {
        title: "Introducing the LogRocket MCP: Take the blindfold off your AI agents",
        source: "LogRocket Blog",
        author: "Matt Arbesfeld",
        date: "2026-06-02",
        url: "https://blog.logrocket.com/introducing-the-logrocket-mcp/",
        category: "产品与设计",
        tags: ["MCP", "Product Analytics", "User Sessions", "Agent Feedback"],
        signal: "中高",
        confidence: "高",
        summary:
          "LogRocket 发布 MCP Server，把 Galileo AI 的会话回放、客户反馈、支持票据和产品变更上下文提供给 Claude、Cursor、Codex 等 Agent。文章举例：当转化率下降时，Agent 可以从真实用户会话中定位移动端 autofill 导致 spinner 卡死，并把上下文交给 coding agent 修复。这里的关键不是又接了一个 MCP，而是把产品遥测接入 Agent 反馈循环。软件“自我修复”的前提，是 Agent 能看到真实用户如何失败。",
        why:
          "这类 MCP 是 Agent 从代码库走向生产系统的关键拼图：没有用户行为数据，Agent 只能猜问题。",
        audience:
          "增长工程、产品分析、前端平台、AI debugging 工具团队。",
        factOpinionInference:
          "事实：MCP 能力、示例和支持客户端来自 LogRocket 原文。推断：这是生产反馈循环拼图，是编辑判断。",
      },
      {
        title: "Release datasette-agent-micropython 0.1a0",
        source: "Simon Willison’s Weblog",
        author: "Simon Willison",
        date: "2026-06-02",
        url: "https://simonwillison.net/2026/Jun/2/datasette-agent-micropython/",
        category: "延伸阅读",
        tags: ["Sandboxing", "WASM", "MicroPython", "Datasette Agent"],
        signal: "中高",
        confidence: "高",
        summary:
          "Simon Willison 发布 datasette-agent-micropython 0.1a0，用 WASM 沙箱里的 MicroPython 作为 Datasette Agent 的代码执行工具。短文很短，但问题很尖锐：Agent 要想安全运行自己生成的 Python，必须有足够强的沙箱。Simon 特别提到 GPT-5.5 目前尚未逃出这个沙箱。它提醒我们，Agent 的能力越强，代码执行边界越要工程化，而不是靠提示词祈祷。",
        why:
          "这是小而硬的工程信号：安全执行环境会成为 Agent 产品的基本组件。",
        audience:
          "Agent 工具开发者、数据应用工程师、安全沙箱实现者。",
        factOpinionInference:
          "事实：项目、WASM MicroPython 和 GPT-5.5 未逃逸说法来自 Simon 原文。判断：沙箱是基本组件，是工程归纳。",
      },
      {
        title: "Farewell Ai2",
        source: "Interconnects AI",
        author: "Nathan Lambert",
        date: "2026-06-02",
        url: "https://www.interconnects.ai/p/farewell-ai2",
        category: "延伸阅读",
        tags: ["Open Models", "AI2", "OLMo", "Research Culture"],
        signal: "中高",
        confidence: "高",
        summary:
          "Nathan Lambert 离开 Ai2，并借这篇文章回顾 OLMo/open post-training 工作为什么产生了超出模型榜单的影响。它不是前沿模型发布，但对理解开源模型生态很有价值：影响力不只来自性能第一，还来自开放数据、训练配方、评测、社区复用和研究叙事。对于只盯闭源 frontier lab 的人，这篇是必要的反向校准。它提醒读者，AI 生态的长期结构由能力、开放性、可复现性和人才流动共同决定。",
        why:
          "本周大厂 Agent 新闻很多，这篇提供了开源模型路线的背景音。",
        audience:
          "开源模型研究者、AI 策略分析、关注 OLMo/Ai2 的读者。",
        factOpinionInference:
          "事实：离职与 Ai2/OLMo 回顾来自原文。判断：开源路线背景音，是编辑选择。",
      },
    ],
  },
];

export const latestIssue = issues[0];
