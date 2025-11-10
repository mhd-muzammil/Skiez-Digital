// src/data/posts.js

// Helper to build ISO dates easily (or just write strings directly)
const d = (iso) => iso;

export const posts = [
  {
    id: 1,
    title: "SEO in Digital Marketing: A No-Fluff 2025 Playbook",
    slug: "seo-digital-marketing-no-fluff-2025-playbook",
    excerpt:
      "What actually matters in SEO today: authority, helpful content, structured pages, real EEAT signals, and strategic link acquisition.",
    author: "Skiez Digital",
    date: d("2025-11-02"),
    minutes: 13,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    category: "Digital Marketing",
    tags: ["SEO", "Content Strategy", "Google Ranking", "EEAT"],
    sections: [
      {
        id: "mindset",
        label: "SEO in 2025: The Right Mindset",
        html: `
      <p>SEO in 2025 is not about hacks or loopholes. Google has become incredibly good at detecting shallow content, AI spam, clickbait blog posts, and websites built only to rank. The modern approach requires building a site that demonstrates real value, trust, and clarity. Search engines now reward brands that are easy to understand, transparent, and helpful. That means your content needs to answer real questions with depth and accuracy. Ranking today depends heavily on authority, on-page clarity, user satisfaction, and how users interact with your pages.</p>
      <ul>
        <li><strong>Search Experience Optimization</strong> over old SEO tricks.</li>
        <li><strong>Depth over volume:</strong> One great page beats ten weak ones.</li>
        <li><strong>Trust > Traffic:</strong> Quality leads matter more than impressions.</li>
      </ul>
      <p>The mindset shift is simple: Write for humans, structure for algorithms.</p>
      `,
      },
      {
        id: "eeat",
        label: "EEAT: The Real Ranking Factor",
        html: `
      <p>EEAT (Experience, Expertise, Authoritativeness, Trustworthiness) is no longer theoretical — it decides who ranks. Google evaluates who is speaking, why they should be trusted, and whether their content is backed by real experience. Pages created purely for SEO with no author identity or credibility signals are deprioritized. Your content should show lived experience, not just summarized knowledge.</p>
      <ul>
        <li>Add author bios with credentials or real background.</li>
        <li>Use case studies, screenshots and real-world examples.</li>
        <li>Cite sources where relevant show you're informed, not copying.</li>
      </ul>
      <p>EEAT signals tell Google your content is safe, useful and reputable. This directly boosts ranking stability long-term.</p>
      `,
      },
      {
        id: "content",
        label: "Content Strategy That Actually Ranks",
        html: `
      <p>High-ranking content is structured, relevant and deeply useful. Instead of writing long articles for the sake of length, focus on clarity and value. Each page should answer a focused intent informational, transactional or navigational. Google now rewards content that keeps users on the page by being genuinely helpful and complete.</p>
      <ul>
        <li>Build topic clusters one main page + supporting related articles.</li>
        <li>Use simple language and short paragraphs for readability.</li>
        <li>Include tables, FAQs, lists and visuals to increase engagement time.</li>
      </ul>
      <p>Good content feels like it was written by someone who has done the work, not someone trying to rank for keywords.</p>
      `,
      },
      {
        id: "technical",
        label: "Technical SEO for Performance & Crawlability",
        html: `
      <p>Technical SEO ensures Google can read, index and understand your site without friction. Slow load times, broken structure, duplicate pages or bad internal linking weaken rankings. Core Web Vitals matter more than ever because Google uses performance as a quality signal. Fast sites feel trustworthy slow ones feel neglected.</p>
      <ul>
        <li>Use clean URL structures and consistent internal link hierarchy.</li>
        <li>Compress images and ship minimal JavaScript for load efficiency.</li>
        <li>Ensure every important page is no more than 3 clicks deep.</li>
      </ul>
      <p>Technical SEO does not win rankings alone but without it nothing else works.</p>
      `,
      },
      {
        id: "keywords",
        label: "Keyword Intent & Search Psychology",
        html: `
      <p>Keyword strategy in 2025 is not just about search volume. It's about aligning pages with user intent. Every query has a purpose: information, comparison, purchase or navigation. Pages that align with intent convert and rank better. Avoid chasing high-volume keywords where you can't provide unique value. Instead, target buyer-ready, local or niche-intent terms that match your expertise.</p>
      <ul>
        <li>Ask: What does the user want to do after reading?</li>
        <li>Match tone and depth to their decision stage.</li>
        <li>Use keyword variations naturally in subheadings.</li>
      </ul>
      <p>Intent alignment is now more important than keyword density.</p>
      `,
      },
      {
        id: "onpage",
        label: "On-Page Structure That Helps Google Understand",
        html: `
      <p>On-page SEO helps search engines interpret your content correctly. Clean hierarchy, descriptive headings and contextual internal linking are critical. Don't over-optimize clarity beats complexity. Schema markup (Organization, FAQ, Product, Article) can enhance visibility and click-through rate. Titles and meta descriptions must be simple, descriptive and aligned with the real message.</p>
      <ul>
        <li>Use H2 and H3 headings to structure thought flow.</li>
        <li>Place the main keyword naturally in title, intro, and one subheading.</li>
        <li>Link related content to support topic authority.</li>
      </ul>
      <p>Good structure = faster understanding for both humans and crawlers.</p>
      `,
      },
      {
        id: "local",
        label: "Local SEO & Service Businesses",
        html: `
      <p>Local SEO conversions are some of the highest quality in digital marketing. Users searching locally often have immediate intent. To capture this, your Google Business Profile must be complete, active and supported by consistent citations across directories. Local landing pages should clearly state service area, offerings, pricing clarity and social validation (reviews, stars or before/after proof).</p>
      <ul>
        <li>Respond to reviews it signals activity and care.</li>
        <li>Post updates and photos regularly on GBP.</li>
        <li>Use local schema and embed maps thoughtfully.</li>
      </ul>
      <p>Local SEO wins trust faster because buyers see proof from real customers like them.</p>
      `,
      },
      {
        id: "links",
        label: "Link Building Without Spam",
        html: `
      <p>Backlinks still matter, but cheap link spam is dead. Google easily detects low-quality guest posts, PBNs and irrelevant directory links. The only sustainable link strategy in 2025 is earned relevance. Outreach should focus on industry connections, collaborations, podcasts, data-backed content and real value contribution to communities.</p>
      <ul>
        <li>Create content that is reference-worthy: comparisons, research, guides.</li>
        <li>Offer expert contributions to niche sites or newsletters.</li>
        <li>Avoid Fiverr, Black Hat forums, and auto-blog networks.</li>
      </ul>
      <p>Quality > Quantity. One real link beats fifty artificial ones.</p>
      `,
      },
      {
        id: "tracking",
        label: "Tracking, Results & Iteration",
        html: `
      <p>SEO is not a one-time setup it is a feedback loop. Track rankings, behavior flow, conversion paths, exit points and dwell time. Tools like Search Console, Analytics, Ahrefs and heatmaps reveal what’s working. Do not obsess over daily ranking fluctuations; measure trends month-over-month. Update and expand content instead of rewriting everything from scratch. Google rewards improvement and maintenance.</p>
      <ul>
        <li>Track impressions, not just clicks they show direction.</li>
        <li>Identify top-performing pages and strengthen them with internal links.</li>
        <li>Refresh outdated content every 60–120 days.</li>
      </ul>
      <p>Iteration is how SEO compounds into dominance.</p>
      `,
      },
      {
        id: "wrap",
        label: "Final Takeaway",
        html: `
      <p>SEO in 2025 rewards clarity, real expertise, original insight and helpful structure. Stop trying to hack algorithms. Build content that respects the user and demonstrates credibility. Use technology to support speed and structure, not to replace strategic thinking. SEO is long-term asset building
      not short-term traffic chasing. If you stay consistent, rankings become stable, leads grow steadily, and your website turns into a trust engine for your brand.</p>
      `,
      },
    ],
  },
  {
    id: 2,
    title: "Modern Web Stack for High-Trust Business Sites",
    slug: "modern-web-stack-high-trust-business-sites",
    excerpt:
      "Frameworks, hosting, security, content structure, UX polish, and credibility signals that turn visitors into trust-ready clients.",
    author: "Skiez Digital",
    date: d("2025-10-18"),
    minutes: 12,
    image:
      "https://images.unsplash.com/photo-1762330918172-e19bcb6a7172?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    category: "Web Development",
    tags: ["Web Design", "Next.js", "Brand Trust", "UI/UX"],
    sections: [
      {
        id: "trust",
        label: "What Makes a Site High-Trust?",
        html: `
      <p>A high-trust website communicates reliability instantly. Visitors make trust decisions in the first three seconds based on clarity, structure, loading speed, and visual tone. The site must feel confident but not aggressive, polished but not flashy. High-trust brands speak clearly and avoid exaggerated marketing language. They show real examples of results instead of promises. The layout should guide the eye in a predictable and calm rhythm, with enough whitespace to breathe. Trust also comes from how the site behaves: fast interactions, consistent components, no layout shifts, no suspicious popups, and a professional tone throughout.</p>
      <ul>
        <li>Clear message and positioning visible above the fold.</li>
        <li>Predictable layout patterns users recognize instantly.</li>
        <li>Visible proof: testimonials, client logos, case results.</li>
        <li>Zero visual noise and no low-effort stock imagery.</li>
      </ul>
      <p>When a site demonstrates care and precision, users feel the brand is stable and safe to engage with. Trust is a perception created by consistency.</p>
      `,
      },
      {
        id: "brand-language",
        label: "Brand Language & Voice",
        html: `
      <p>Language is one of the strongest trust signals on a website. Overcomplicated sentences, buzzwords, or exaggerated promises immediately create skepticism. A high-trust brand voice is calm, direct, and helpful. It speaks to the customer's situation instead of the company's achievements. Clarity builds confidence because the visitor does not need to interpret or decode the meaning. Each headline should answer a question or remove uncertainty. The more a brand sounds like a real person speaking clearly, the more it feels honest.</p>
      <ul>
        <li>Use short, precise statements with clear value.</li>
        <li>Avoid hype language like “revolutionary” or “next-gen”.</li>
        <li>State benefits in real terms, backed by outcomes.</li>
        <li>Simplify paragraphs so users scan and understand instantly.</li>
      </ul>
      <p>A trustworthy voice aligns messaging with user needs, reducing friction and creating emotional safety during decisions.</p>
      `,
      },
      {
        id: "framework",
        label: "Choosing the Right Framework",
        html: `
      <p>The technology stack influences performance, SEO results, maintainability, and user experience. For high-trust business websites, <strong>Next.js</strong> is typically the strongest choice. It enables server-rendered content for fast initial loads and strong search visibility, while still supporting rich interactive sections where needed. Tailwind CSS ensures consistent spacing, typography, and visual rhythm across the interface, reducing design chaos as the site grows. Deploying through Vercel or another edge-optimized platform ensures global low-latency delivery by default.</p>
      <ul>
        <li><strong>Next.js:</strong> Structure, SEO, streaming, caching, and performance.</li>
        <li><strong>Tailwind CSS:</strong> Scalable design system with consistent utility tokens.</li>
        <li><strong>Framer Motion:</strong> Micro-animations that signal quality without distraction.</li>
        <li><strong>Vercel hosting:</strong> Global CDN and near-instant deployments.</li>
      </ul>
      <p>This stack is modern, efficient, and widely adopted making it future-proof and familiar to developers.</p>
      `,
      },
      {
        id: "design-system",
        label: "Design System & UI Consistency",
        html: `
      <p>Visual consistency is a primary foundation of perceived trust. When spacing, typography, buttons, and color usage follow predictable patterns, the brand feels thoughtful and professional. A design system doesn't need to be large even a small set of shared UI primitives dramatically improves coherence. Each component should have defined visual states for hover, focus, disabled, success, and error feedback. Aligning spacing tokens (4, 8, 12, 16px increments) across sections gives the interface a rhythm the eye can follow effortlessly.</p>
      <ul>
        <li>Create Button, Input, Card, Section, and Layout primitives.</li>
        <li>Use Tailwind’s scale to enforce predictable spacing.</li>
        <li>Never mix mismatched border-radiuses or shadow intensities.</li>
        <li>Repeat visual patterns to avoid UI chaos.</li>
      </ul>
      <p>The smoother the UI feels, the more the brand appears experienced and reliable.</p>
      `,
      },
      {
        id: "credibility",
        label: "Proof, Testimonials & Case Studies",
        html: `
      <p>People trust what can be validated. Displaying real results reduces perceived risk. Proof should be placed above the fold and repeated throughout key sections of the site. Testimonials should include real names, roles, or company verification anonymous statements weaken credibility. Case studies are most effective when they show a transformation: the situation before, the intervention, and the results afterward. Even small wins can be structured into clear narratives that demonstrate reliability and competence.</p>
      <ul>
        <li>Use client logos or partner badges early on the page.</li>
        <li>Show screenshots, not just text descriptions.</li>
        <li>Keep testimonials concise but specific.</li>
        <li>Highlight measurable improvements when possible.</li>
      </ul>
      <p>Proof signals maturity and reduces hesitation during conversion points.</p>
      `,
      },
      {
        id: "content",
        label: "Content Structure That Converts",
        html: `
      <p>Effective content architecture guides the user from recognition to confidence to action. A strong hero section states exactly what the business does and who it benefits. Following that, the site should clarify value, provide proof, explain the offering, and then present a call to action. Walls of text reduce engagement; instead, break content into short, scannable blocks with supportive visuals and calm spacing. Each section should answer a question the user is likely asking at that moment of their decision journey.</p>
      <ul>
        <li>Headline → Value → Proof → CTA layout per section.</li>
        <li>Use bullets to simplify complex points.</li>
        <li>Place CTAs logically not aggressively.</li>
      </ul>
      <p>Users convert when they understand clearly and feel respected.</p>
      `,
      },
      {
        id: "security",
        label: "Security & User Protection",
        html: `
      <p>Trust collapses instantly if a site feels unsafe. Technical security must be matched by visible reassurance. HTTPS must be enforced without exception even a single mixed content warning damages trust. Forms should provide validation feedback in real time and clearly communicate that data is handled responsibly. Payment flows must use known, secure platforms rather than custom-built solutions for sensitive information. Including transparent privacy policies and clear opt-in language builds respect and long-term credibility.</p>
      <ul>
        <li>Always serve the site via secure TLS (HTTPS).</li>
        <li>Protect forms with sanitization and bot prevention.</li>
        <li>Use Stripe, Razorpay, PayPal, or Shopify for payments.</li>
        <li>State how user data is used, stored, and deleted.</li>
      </ul>
      <p>Security is both technical and communicative. Users must feel safe every step.</p>
      `,
      },
      {
        id: "performance",
        label: "Performance & UX Stability",
        html: `
      <p>Performance strongly affects trust: slow websites feel unreliable, while fast ones feel intentional and premium. Optimize images, use lazy loading, compress scripts, and reduce unnecessary JavaScript. Layout stability is equally important — avoid elements shifting during load, as this creates a feeling of sloppiness. Ensure fonts load with swap behavior to avoid text flashes. Pre-render static content where possible, and cache frequently accessed data near the user.</p>
      <ul>
        <li>Use Next.js image optimization for responsive images.</li>
        <li>Minimize client-side scripts and remove unused libraries.</li>
        <li>Focus on <strong>LCP</strong>, <strong>CLS</strong>, and <strong>TTI</strong> Core Web Vitals.</li>
      </ul>
      <p>Fast, smooth interaction reinforces the perception of attention to detail.</p>
      `,
      },
      {
        id: "interaction",
        label: "Micro-Interactions & Motion",
        html: `
      <p>Motion is a psychological trust tool. Subtle hover transitions and micro-interactions make the UI feel alive and responsive. However, motion must be purposeful; excessive or flashy animation appears unprofessional. Use animations to guide attention, confirm actions, and reinforce spatial understanding. The best animation is slow enough to read, fast enough to avoid friction, and predictable enough to avoid surprise. Motion should support navigation and reassure users that the interface is responding to them.</p>
      <ul>
        <li>Animate hover and tap states for feedback.</li>
        <li>Fade and slide transitions for page changes.</li>
        <li>Reveal content with smooth, minimal easing.</li>
      </ul>
      <p>Motion should help users feel supported, not entertained.</p>
      `,
      },
      {
        id: "wrap",
        label: "Final Takeaway",
        html: `
      <p>High-trust business websites are built on clarity, proof, consistency, performance, and respect for the user. The goal is not to impress visitors but to reassure and guide them. A well-structured web stack and a thoughtful UI system help your brand communicate stability and confidence. Trust is earned through details — spacing, tone, interaction smoothness, proof, and honesty. When these elements reinforce each other, the site becomes more than a page; it becomes a reliable extension of the brand.</p>
      `,
      },
    ],
  },

  {
    id: 3,
    title:
      "Building Scalable UI Architecture in React with Reusable Components",
    slug: "scalable-ui-architecture-react-reusable-components",
    excerpt:
      "A practical blueprint for designing dependable, composable UI systems in React—clear boundaries, repeatable patterns, and components that scale with your team.",
    author: "Skiez Digital",
    date: d("2025-10-01"),
    minutes: 9,
    image:
      "https://media.istockphoto.com/id/1290492381/photo/3d-code-programming-for-website-editors-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=BBVWUd7sf2x7G-PqvZvHz_AkTswHqgtfZSXTY3bzlKw=",
    category: "Web Development",
    tags: ["React", "Architecture", "Components", "TailwindCSS"],
    sections: [
      {
        id: "principles",
        label: "Principles & Mental Model",
        html: `
        <p>Scalable UI architecture starts with a few non-negotiables: <strong>single responsibility</strong>, <strong>explicit boundaries</strong>, and <strong>composability</strong>. Each component should do one job well, expose a stable API, and be easy to compose with others. Favor <em>predictable props</em> over magic and avoid hidden global state.</p>
        <ul>
          <li><strong>Design tokens before components:</strong> spacing, typography, colors, radii, shadows. These form your language and reduce drift.</li>
          <li><strong>Build primitives → patterns → pages:</strong> start with low-level building blocks (Button, Input, Card), then compose patterns (Forms, Toolbars), and only then assemble screens.</li>
          <li><strong>Consistency beats cleverness:</strong> consistent naming, prop shapes, and file locations improve velocity and reduce bugs.</li>
        </ul>
      `,
      },
      {
        id: "reusability",
        label: "Designing Reusable Components",
        html: `
        <p>Reusable components are small, focused, and <em>unopinionated about data</em>. Keep them presentational when possible and allow consumers to wire behavior. Prefer <strong>composition over configuration</strong>: instead of 20 boolean props, allow children and slots.</p>
        <ul>
          <li><strong>API design:</strong> stable prop names (<code>variant</code>, <code>size</code>, <code>as</code>), sensible defaults, and minimal surface area.</li>
          <li><strong>Accessibility first:</strong> semantics, ARIA where needed, keyboard support baked into primitives.</li>
          <li><strong>Controlled vs uncontrolled:</strong> expose both if it’s an input. E.g., <code>value/onChange</code> and <code>defaultValue</code>.</li>
          <li><strong>Headless patterns:</strong> extract behavior (state, events) from visuals so teams can re-skin without rewriting logic.</li>
        </ul>
        <figure>
          <img src="https://images.unsplash.com/photo-1600267185393-e158a98703de?q=80&w=1400&auto=format&fit=crop" alt="Component composition diagram" class="rounded-xl border border-gray-200" />
          <figcaption>Compose small, predictable parts into higher-level patterns.</figcaption>
        </figure>
      `,
      },
      {
        id: "state",
        label: "State Management Boundaries",
        html: `
        <p>Most performance issues come from state leaking across the tree. Keep state <strong>as close as possible</strong> to where it’s used. Lift only when multiple siblings need the same data. For server data, prefer framework data layers and cache boundaries.</p>
        <ul>
          <li><strong>Local UI state:</strong> <code>useState</code>, <code>useReducer</code>, or a small context limited to a feature.</li>
          <li><strong>Server state:</strong> fetch on the server (RSC/SSR) when possible, hydrate minimal client islands, and cache aggressively.</li>
          <li><strong>Cross-feature state:</strong> only introduce a store (e.g., Zustand) when props/context become bottlenecks.</li>
          <li><strong>Event boundaries:</strong> push heavy work to transitions and defer non-critical updates.</li>
        </ul>
      `,
      },
      {
        id: "styling",
        label: "Styling System (Tailwind + Variants)",
        html: `
        <p>Adopt a styling system that reinforces consistency. Tailwind accelerates spacing, type, and layout. Pair it with a <strong>variant utility</strong> to centralize component styles.</p>
        <pre><code>// button.tsx (example idea)
import { cva } from "class-variance-authority";

export const button = cva(
  "inline-flex items-center rounded-xl font-medium focus:outline-none focus:ring-2",
  {
    variants: {
      variant: { solid: "bg-teal-600 text-white", outline: "border border-teal-600" },
      size: { sm: "h-8 px-3 text-sm", md: "h-10 px-4", lg: "h-12 px-6 text-lg" }
    },
    defaultVariants: { variant: "solid", size: "md" }
  }
);</code></pre>
        <ul>
          <li><strong>One source of truth:</strong> keep variants and tokens centralized to avoid drift.</li>
          <li><strong>Composable classes:</strong> prefer utilities; extract helpers for repeated patterns (e.g., <code>card()</code>, <code>input()</code>).</li>
        </ul>
      `,
      },
      {
        id: "structure",
        label: "Folder Structure & Conventions",
        html: `
        <p>Structure that scales is boring and predictable. Co-locate files by feature; keep shared primitives in a <code>ui/</code> directory.</p>
        <pre><code>src/
  components/
    ui/        // primitives: Button, Input, Card
    patterns/  // composed UI: Modal, DataTable, Form
  features/
    auth/
      components/
      hooks/
      pages/
    billing/
      ...
  lib/         // utilities, hooks, tokens
  styles/      // globals, tailwind config
</code></pre>
        <ul>
          <li><strong>Index barrels:</strong> re-export thoughtfully to keep imports short without creating cycles.</li>
          <li><strong>Names:</strong> files match component names; one component per file for primitives.</li>
        </ul>
      `,
      },
      {
        id: "testing-docs",
        label: "Testing, Stories & Documentation",
        html: `
        <p>Codify behavior with tests and stories so components remain trustworthy as they evolve. Treat Storybook (or similar) as the living catalog of your system.</p>
        <ul>
          <li><strong>Stories cover:</strong> default, variants, sizes, disabled, loading, long labels, error states.</li>
          <li><strong>Tests focus on behavior:</strong> accessibility roles, keyboard nav, emitted events, edge cases.</li>
          <li><strong>Props tables & usage notes:</strong> document decisions and gotchas near the code.</li>
        </ul>
      `,
      },
      {
        id: "performance-dx",
        label: "Performance & DX Tips",
        html: `
        <p>Performance scales with good boundaries. Keep client JavaScript small, defer what you can, and profile interactions.</p>
        <ul>
          <li><strong>Minimize client code:</strong> prefer server components/layouts; mark client islands explicitly.</li>
          <li><strong>Memo where it matters:</strong> stabilize props, use <code>memo</code>/<code>useMemo</code>/<code>useCallback</code> for hot paths and lists.</li>
          <li><strong>Virtualize long lists</strong> and paginate heavy tables.</li>
          <li><strong>Bundle hygiene:</strong> analyze bundles, avoid duplicating libs, lazy-load rare variants.</li>
          <li><strong>DX:</strong> lint rules for imports, exhaustive deps, a11y; codemods for API changes.</li>
        </ul>
        <figure>
          <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1400&auto=format&fit=crop" alt="Performance profiling" class="rounded-xl border border-gray-200" />
        </figure>
      `,
      },
      {
        id: "antipatterns",
        label: "Common Anti-Patterns",
        html: `
        <ul>
          <li><strong>Monolithic components:</strong> 500-line files with mixed concerns. Split behavior, view, and subparts.</li>
          <li><strong>Boolean soup:</strong> a dozen flags competing. Replace with <code>variant</code>/<code>size</code> enums or composition.</li>
          <li><strong>Global state by default:</strong> introduces accidental coupling and re-renders. Start local.</li>
          <li><strong>Unnamed magic styles:</strong> inline one-off values that ignore tokens; leads to visual debt.</li>
          <li><strong>Hidden side effects:</strong> components that fetch on mount or mutate globals. Keep them pure by default.</li>
        </ul>
        <p>Great UI systems are the result of <em>boring, repeatable patterns</em>. Keep APIs small, boundaries clear, and documentation close to the code. Your future self and your team will move faster with fewer regressions.</p>
      `,
      },
    ],
  },
];

// Derived helpers for Blog.jsx filters
export const allCategories = Array.from(
  new Set(posts.map((p) => p.category))
).sort();

export const allTags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();
