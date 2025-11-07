// src/pages/blog.jsx
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiChevronRight } from "react-icons/fi";

/* Helper for initials (used for avatars) */
function getInitials(name = "") {
  if (!name) return "";
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/* Replace these sample posts with your real content or a CMS later */
const samplePosts = [   
  {
    id: "featured-growth-seo",
    title: "The 7-point pre-launch SEO checklist for new websites",
    excerpt:
      "A practical checklist to make sure your new site launches with a strong SEO foundation — technical, on-page and content.",
    category: "SEO",
    date: "2025-08-01",
    author: "Mohamed",
    readMins: 6,
    tags: ["SEO", "launch"],
    image:
      "https://images.unsplash.com/photo-1508385082359-f0c0c8a3b3b4?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "case-cac",
    title: "How we cut CAC by 28% for a FinTech client (case study)",
    excerpt:
      "Step-by-step breakdown of funnel changes, creatives and bid strategies that improved ROAS and lowered CAC.",
    category: "Case Study",
    date: "2025-07-26",
    author: "Rita Fernandez",
    readMins: 8,
    tags: ["case-study", "ads"],
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "react-performance",
    title: "React performance checklist for production apps",
    excerpt:
      "Tips for measuring and improving frontend performance: code-splitting, caching, rendering patterns and metrics to watch.",
    category: "Engineering",
    date: "2025-06-10",
    author: "Jay Patel",
    readMins: 7,
    tags: ["react", "performance"],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "ux-onboarding",
    title: "Design patterns that increase onboarding conversion",
    excerpt:
      "Practical UI/UX patterns and examples that reduce friction, shorten time-to-value, and increase activation.",
    category: "Design",
    date: "2025-05-01",
    author: "Aisha Khan",
    readMins: 5,
    tags: ["ux", "onboarding"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "ads-guide",
    title: "Conversion-first Google Ads setup (practical guide)",
    excerpt:
      "A pragmatic conversion-first setup you can apply to small and medium budgets — tracking, creatives, and bidding.",
    category: "Paid Ads",
    date: "2025-04-12",
    author: "Skiez Team",
    readMins: 9,
    tags: ["ads", "google"],
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1400&q=80",
  },
];

const CATEGORIES = [
  "All",
  "SEO",
  "Case Study",
  "Engineering",
  "Design",
  "Paid Ads",
];

export default function BlogPage() {
  // page meta safe-set
  useEffect(() => {
    document.title = "Blog — Skiez Digital";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      "Skiez Digital blog — insights on SEO, Ads, UX, Engineering and growth."
    );
  }, []);

  // UI state
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);
  const pageSize = 6;

  const filtered = useMemo(() => {
    let list = samplePosts.slice();
    if (category !== "All") list = list.filter((p) => p.category === category);
    if (q.trim()) {
      const t = q.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(t) ||
          p.excerpt.toLowerCase().includes(t) ||
          (p.tags || []).some((tag) => tag.toLowerCase().includes(t))
      );
    }
    list.sort((a, b) => {
      if (sort === "newest") return new Date(b.date) - new Date(a.date);
      return new Date(a.date) - new Date(b.date);
    });
    return list;
  }, [q, category, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageItems = filtered.slice((page - 1) * pageSize, page * pageSize);

  function onSearch(e) {
    setQ(e.target.value);
    setPage(1);
  }

  // Featured = first post (optionally)
  const featured = filtered[0] || samplePosts[0];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* HERO */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold">
              Insights & Stories
            </h1>
            <p className="mt-3 text-gray-600">
              Actionable articles, case studies and technical write-ups on
              marketing, product and engineering.
            </p>

            <div className="mt-6 flex gap-3">
              <label className="relative flex-1">
                <input
                  value={q}
                  onChange={onSearch}
                  placeholder="Search posts, tags, topics..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-teal-200"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <FiSearch />
                </span>
              </label>

              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setPage(1);
                }}
                className="border border-gray-200 rounded-lg px-3 py-2"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border border-gray-200 rounded-lg px-3 py-2"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        {/* Featured */}
        <section className="mb-12">
          <motion.a
            whileHover={{ translateY: -6 }}
            href={`/blog/${featured.id}`}
            className="block rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white"
          >
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto md:col-span-1">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-8 md:col-span-1">
                <div className="text-xs text-gray-500">
                  {featured.category} ·{" "}
                  {new Date(featured.date).toLocaleDateString()}
                </div>
                <h2 className="mt-3 text-2xl font-bold text-gray-900">
                  {featured.title}
                </h2>
                <p className="mt-4 text-gray-700 max-w-xl">
                  {featured.excerpt}
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 font-semibold">
                    {getInitials(featured.author)}
                  </div>
                  <div className="text-sm text-gray-600">
                    <div className="font-medium text-gray-900">
                      {featured.author}
                    </div>
                    <div className="text-xs">{featured.readMins} min read</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.a>
        </section>

        {/* Posts grid */}
        <section className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {pageItems.length === 0 && (
              <div className="p-8 bg-white rounded-xl border border-gray-100 text-gray-600">
                No posts found. Try another filter.
              </div>
            )}

            {pageItems.map((p) => (
              <ArticleCard key={p.id} post={p} />
            ))}

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-gray-600">
                Showing {(page - 1) * pageSize + 1}–
                {Math.min(page * pageSize, filtered.length)} of{" "}
                {filtered.length}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPage((s) => Math.max(1, s - 1))}
                  disabled={page === 1}
                  className="px-3 py-2 rounded-lg border border-gray-200 bg-white disabled:opacity-60"
                >
                  Prev
                </button>
                <div className="text-sm text-gray-700">
                  Page {page} / {totalPages}
                </div>
                <button
                  onClick={() => setPage((s) => Math.min(totalPages, s + 1))}
                  disabled={page === totalPages}
                  className="px-3 py-2 rounded-lg border border-gray-200 bg-white disabled:opacity-60"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Right column - sidebar */}
          <aside className="space-y-6">
            <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
              <h4 className="font-semibold">Popular tags</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {["SEO", "ads", "react", "ux", "case-study", "growth"].map(
                  (t) => (
                    <button
                      key={t}
                      onClick={() => {
                        setQ(t);
                        setPage(1);
                      }}
                      className="text-xs px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-gray-600"
                    >
                      {t}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm text-sm text-gray-600">
              <h4 className="font-semibold text-gray-900">Newsletter</h4>
              <p className="mt-2">
                Get monthly growth tips & case studies — no spam.
              </p>
              <div className="mt-3 flex gap-2">
                <input
                  placeholder="Your email"
                  className="flex-1 border border-gray-200 px-3 py-2 rounded-lg"
                />
                <button className="px-3 py-2 rounded-lg bg-teal-600 text-white">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
              <h4 className="font-semibold">About Skiez Digital</h4>
              <p className="mt-2 text-sm text-gray-600">
                We blend design, marketing and engineering to deliver measurable
                growth for ambitious brands.
              </p>
              <a
                href="/about"
                className="mt-3 inline-flex items-center gap-2 text-sm text-teal-600"
              >
                {" "}
                Learn more <FiChevronRight />
              </a>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}

/* ---------------- Article Card ---------------- */
function ArticleCard({ post }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col md:flex-row"
    >
      <div className="md:w-1/3 h-44 md:h-auto">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-5 md:p-6 flex-1">
        <div className="text-xs text-gray-500">
          {post.category} · {new Date(post.date).toLocaleDateString()}
        </div>
        <h3 className="mt-2 text-lg font-semibold text-gray-900">
          {post.title}
        </h3>
        <p className="mt-3 text-sm text-gray-600">{post.excerpt}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 font-semibold">
              {getInitials(post.author)}
            </div>
            <div className="text-sm text-gray-600">
              <div className="font-medium text-gray-900">{post.author}</div>
              <div className="text-xs">{post.readMins} min read</div>
            </div>
          </div>

          <a
            href={`/blog/${post.id}`}
            className="text-sm text-teal-600 font-medium inline-flex items-center gap-2"
          >
            Read <FiChevronRight />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
