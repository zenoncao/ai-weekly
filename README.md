# AI 优秀博客周刊 / AI Weekly Blog

一个用 Astro 构建的中文 AI 周刊静态站点，按周归档前沿 AI 研究、工程、产品和组织工作流文章。

A Chinese AI weekly static site built with Astro, curating frontier AI research, engineering, product, and organizational workflow articles.

Website: https://fuquay-varina-seven.vercel.app

Issue 001: https://fuquay-varina-seven.vercel.app/issues/2026-06-09/

## 中文说明

### 内容定位

这个仓库不是链接收集器，而是一个有编辑判断的 AI 周刊 archive。每期文章会尽量保留三层信息：

- `summary`：来源文章里的事实、数据、产品更新和作者原意。
- `why`：为什么这篇值得读，以及它对 AI 产品、工程或组织工作的信号价值。
- `factOpinionInference`：明确区分原文事实、编辑判断和基于事实的推断。

### 技术栈

- Astro 5
- TypeScript
- 静态生成
- Vercel 部署

### 项目结构

```text
src/
  data/
    issues.ts              # 周刊数据源，按最新到最旧排序
  pages/
    index.astro            # 首页，展示最新一期和归档入口
    issues/[slug].astro    # 每期详情页，基于 issues 自动生成路由
  styles/
    global.css             # 全局样式
```

### 本地开发

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

生产构建：

```bash
npm run build
```

预览构建结果：

```bash
npm run preview
```

### 添加新一期

所有周刊内容都在 `src/data/issues.ts` 里维护。新增一期时，在 `issues` 数组顶部添加新的 issue 对象；`latestIssue` 会自动指向 `issues[0]`。

每一期需要包含：

- `slug`：稳定路径，通常使用 ISO 日期，例如 `2026-06-09`。
- `date`：发布日期。
- `range`：覆盖时间范围。
- `deck`：本期主线判断。
- `editorial`：编辑导语。
- `articles`：文章数组。

每篇文章需要包含：

- 标题、来源、作者/团队、日期和 URL。
- 分类、标签、信号强度和置信度。
- 摘要、推荐理由、适合读者、事实/观点/推断分离说明。

内容规则：

- 不写无法核实的发布日期、作者、链接、数字或引文。
- 当前、近期或易变化的信息必须先核验来源。
- 事实放在 `summary`，编辑判断放在 `why`，事实和推断的边界放在 `factOpinionInference`。
- `issues` 保持最新一期在最前，历史内容按时间累积，不覆盖旧期。

### 部署

项目已部署在 Vercel：

https://fuquay-varina-seven.vercel.app

常用部署命令：

```bash
npx vercel@latest deploy --prod
```

本地 `.vercel/` 目录只保存 Vercel 项目绑定信息，不提交到仓库。

## English

### What This Is

This repository is not a generic link dump. It is an editorial AI weekly archive with source-heavy curation and explicit judgment. Each issue separates:

- `summary`: facts, dates, product updates, data, and claims from the original source.
- `why`: the editorial reason the article is worth reading.
- `factOpinionInference`: a clear boundary between source facts, editorial opinion, and inference.

### Stack

- Astro 5
- TypeScript
- Static site generation
- Vercel deployment

### Project Structure

```text
src/
  data/
    issues.ts              # Issue data, newest first
  pages/
    index.astro            # Home page for the latest issue and archive
    issues/[slug].astro    # Generated issue detail pages
  styles/
    global.css             # Global styles
```

### Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### Adding a New Issue

All issue content lives in `src/data/issues.ts`. Add a new issue object to the top of the `issues` array; `latestIssue` automatically resolves to `issues[0]`.

Each issue should include:

- `slug`: a stable route, usually an ISO date such as `2026-06-09`.
- `date`: publication date.
- `range`: covered date range.
- `deck`: the main editorial thesis for the issue.
- `editorial`: the opening editorial note.
- `articles`: curated article entries.

Each article should include:

- title, source, author/team, date, and URL.
- category, tags, signal strength, and confidence.
- summary, recommendation rationale, target audience, and fact/opinion/inference separation.

Content rules:

- Do not invent publication dates, authors, URLs, numbers, quotes, or product names.
- Verify current, recent, or unstable information before adding it.
- Keep facts in `summary`, editorial judgment in `why`, and source/inference separation in `factOpinionInference`.
- Keep `issues` ordered newest first, and append new dated issues instead of replacing history.

### Deployment

The site is deployed on Vercel:

https://fuquay-varina-seven.vercel.app

Common production deployment command:

```bash
npx vercel@latest deploy --prod
```

The local `.vercel/` directory stores Vercel project binding metadata and should not be committed.
