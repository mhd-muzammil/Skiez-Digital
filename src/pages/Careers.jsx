// src/pages/Careers.jsx
import React, { useMemo, useState } from "react";
import jobsData from "../data/jobs.json";
import internshipsData from "../data/internships.json";
import traineeCoursesData from "../data/traineeCourses.json";
import { Toaster, toast } from "react-hot-toast";

export default function Careers() {
  const [activeTab, setActiveTab] = useState("jobs");
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("All");
  const [selected, setSelected] = useState(null);
  const [applyOpen, setApplyOpen] = useState(false);

  // Form state
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    resumeFile: null,
  });
  const [err, setErr] = useState("");

  const jobs = jobsData || [];
  const internships = internshipsData || [];
  const traineeCourses = traineeCoursesData || [];

  const rawList =
    activeTab === "jobs"
      ? jobs
      : activeTab === "internships"
      ? internships
      : traineeCourses;

  const locations = useMemo(() => {
    const set = new Set();
    rawList.forEach((i) => i.location && set.add(i.location));
    return ["All", ...Array.from(set)];
  }, [rawList]);

  const matchesQuery = (item, q) => {
    if (!q?.trim()) return true;
    const s = q.toLowerCase().trim();
    return (
      (item.title && item.title.toLowerCase().includes(s)) ||
      (item.shortDescription &&
        item.shortDescription.toLowerCase().includes(s)) ||
      (item.description && item.description.toLowerCase().includes(s)) ||
      (item.fullDescription &&
        item.fullDescription.toLowerCase().includes(s)) ||
      (item.location && item.location.toLowerCase().includes(s))
    );
  };

  const list = rawList
    .filter((i) => (location === "All" ? true : i.location === location))
    .filter((i) => matchesQuery(i, query));

  const openDetails = (item) => {
    setSelected(item);
    setApplyOpen(false);
    setErr("");
  };

  const openApply = (item) => {
    setSelected(item);
    setApplyOpen(true);
    setErr("");
  };

  const handleForm = (e) => {
    const { name, value, files } = e.target;
    if (name === "resumeFile") {
      const file = files?.[0] || null;
      setForm((p) => ({ ...p, resumeFile: file }));
      return;
    }
    setForm((p) => ({ ...p, [name]: value }));
  };

  // validation
  const isValidEmail = (v) => /\S+@\S+\.\S+/.test(v);
  const isValidPhone = (v) => /^[0-9+\-\s()]{7,15}$/.test(v);

  const submit = (e) => {
    e.preventDefault();
    setErr("");

    if (!form.name.trim()) return setErr("Please enter your full name.");
    if (!form.phone.trim() || !isValidPhone(form.phone))
      return setErr("Please enter a valid phone number.");
    if (!form.email.trim() || !isValidEmail(form.email))
      return setErr("Please enter a valid email address.");
    if (!form.resumeFile) return setErr("Please upload your resume file.");

    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowed.includes(form.resumeFile.type)) {
      return setErr("Only PDF, DOC, or DOCX files are allowed.");
    }
    const maxBytes = 5 * 1024 * 1024;
    if (form.resumeFile.size > maxBytes) {
      return setErr("Resume file is too large. Max size is 5 MB.");
    }

    // Prepare FormData (ready for backend)
    const fd = new FormData();
    fd.append("name", form.name.trim());
    fd.append("phone", form.phone.trim());
    fd.append("email", form.email.trim());
    fd.append("roleId", selected?.id ?? "");
    fd.append("roleTitle", selected?.title ?? "");
    fd.append("category", activeTab);
    fd.append("resume", form.resumeFile);

    // TODO: hook to backend (POST /api/apply) next
    console.log("Application FormData ready", {
      ...Object.fromEntries(fd.entries()),
      resume: form.resumeFile?.name,
    });

    // ✅ Toast success
    toast.success(
      `Application submitted for ${selected?.title || "this role"}!`
    );

    // reset & close
    setForm({ name: "", phone: "", email: "", resumeFile: null });
    setApplyOpen(false);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Toast container (local). If you already mount Toaster globally, remove this line */}
      <Toaster position="top-center" toastOptions={{ duration: 3500 }} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="h-40 md:h-56 w-full bg-gradient-to-b from-teal-50 to-white" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">
              Careers at <span className="text-teal-600">SKIEZ DIGITAL</span>
            </h1>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Build products, grow fast, and do your best work with a team that
              ships. Flexible, learning-first, impact-driven.
            </p>
          </div>

          {/* Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { key: "jobs", label: "Jobs" },
              { key: "internships", label: "Internships" },
              { key: "trainee", label: "Trainee Courses" },
            ].map((t) => (
              <button
                key={t.key}
                onClick={() => {
                  setActiveTab(t.key);
                  setSelected(null);
                  setApplyOpen(false);
                  setQuery("");
                  setLocation("All");
                }}
                className={`px-5 py-2 rounded-full border text-sm font-medium transition
                ${
                  activeTab === t.key
                    ? "bg-teal-500 text-white border-teal-500 shadow"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Search + Filters */}
          <div className="mt-6 flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-center">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search title, location or keywords…"
              className="w-full md:w-[420px] px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
            <div className="flex gap-2">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="px-3 py-2.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-300"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
              <button
                onClick={() => {
                  setQuery("");
                  setLocation("All");
                }}
                className="px-3 py-2.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* LIST + DETAILS */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 pb-14">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left list */}
          <div className="md:w-2/3 space-y-4">
            {list.length === 0 && (
              <div className="p-6 rounded-xl border border-dashed text-gray-500">
                No openings match your search.
              </div>
            )}

            {list.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-xl border shadow-sm hover:shadow-md transition p-5"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {item.shortDescription || item.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs">
                      {item.location && (
                        <span className="px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100">
                          {item.location}
                        </span>
                      )}
                      {item.duration && (
                        <span className="px-2.5 py-1 rounded-full bg-gray-50 text-gray-600 border">
                          {item.duration}
                        </span>
                      )}
                      {item.salary && (
                        <span className="px-2.5 py-1 rounded-full bg-gray-50 text-gray-600 border">
                          {item.salary}
                        </span>
                      )}
                      {item.stipend && (
                        <span className="px-2.5 py-1 rounded-full bg-gray-50 text-gray-600 border">
                          {item.stipend}
                        </span>
                      )}
                      {item.fee && (
                        <span className="px-2.5 py-1 rounded-full bg-gray-50 text-gray-600 border">
                          {item.fee}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex-shrink-0 flex gap-2">
                    <button
                      onClick={() => openDetails(item)}
                      className="px-3 py-2 rounded-md bg-teal-500 text-white text-sm font-medium"
                    >
                      View details
                    </button>
                    <button
                      onClick={() => openApply(item)}
                      className="px-3 py-2 rounded-md border border-teal-600 text-teal-700 text-sm font-medium"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Right sticky details */}
          <aside className="md:w-1/3">
            <div className="sticky top-6 space-y-4">
              {!selected ? (
                <div className="bg-white rounded-xl p-6 border">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {activeTab === "jobs"
                      ? "Job Details"
                      : activeTab === "internships"
                      ? "Internship Details"
                      : "Course Details"}
                  </h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Select a role on the left to see responsibilities and
                    requirements. Ready? Hit Apply.
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-xl p-6 border shadow-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {selected.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {selected.location ||
                          selected.duration ||
                          selected.fee ||
                          selected.stipend}
                      </p>
                    </div>
                    <button
                      className="text-gray-400 hover:text-gray-600"
                      onClick={() => {
                        setSelected(null);
                        setApplyOpen(false);
                        setErr("");
                      }}
                      aria-label="Close details"
                    >
                      ✕
                    </button>
                  </div>

                  <p className="mt-4 text-gray-700 leading-relaxed">
                    {selected.fullDescription ||
                      selected.description ||
                      selected.shortDescription ||
                      "No description available."}
                  </p>

                  {Array.isArray(selected.responsibilities) &&
                    selected.responsibilities.length > 0 && (
                      <div className="mt-4">
                        <h4 className="font-semibold text-gray-900">
                          Responsibilities
                        </h4>
                        <ul className="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
                          {selected.responsibilities.map((res, i) => (
                            <li key={i}>{res}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                  {Array.isArray(selected.requirements) &&
                    selected.requirements.length > 0 && (
                      <div className="mt-4">
                        <h4 className="font-semibold text-gray-900">
                          Requirements
                        </h4>
                        <ul className="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
                          {selected.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                  {Array.isArray(selected.bonusPoints) &&
                    selected.bonusPoints.length > 0 && (
                      <div className="mt-4">
                        <h4 className="font-semibold text-gray-900">
                          Bonus Points
                        </h4>
                        <ul className="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
                          {selected.bonusPoints.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                  <div className="mt-5 flex gap-3">
                    <button
                      onClick={() => setApplyOpen(true)}
                      className="flex-1 px-3 py-2 rounded-md bg-teal-500 text-white font-semibold"
                    >
                      Apply now
                    </button>
                    <button
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({ title: selected.title });
                        } else {
                          alert("Share this page/role link!");
                        }
                      }}
                      className="px-3 py-2 rounded-md border text-gray-700"
                    >
                      Share
                    </button>
                  </div>
                </div>
              )}

              <div className="bg-white rounded-xl p-5 border text-sm text-gray-700">
                <strong className="font-semibold">Why SKIEZ DIGITAL?</strong>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>Flexible hours & remote-friendly</li>
                  <li>Teal/grey design system & modern stack</li>
                  <li>Fast feedback, portfolio-worthy projects</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* APPLY MODAL */}
      {applyOpen && selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/40"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-md rounded-2xl bg-white shadow-xl border">
            <div className="flex items-center justify-between p-4 border-b">
              <h4 className="font-semibold text-gray-900">
                Apply — {selected.title}
              </h4>
              <button
                onClick={() => {
                  setApplyOpen(false);
                  setErr("");
                }}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Close apply form"
              >
                ✕
              </button>
            </div>

            <form onSubmit={submit} className="p-4 space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleForm}
                  placeholder="e.g., Mohamed Muzammil"
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone number
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleForm}
                  placeholder="e.g., +91 98765 43210"
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
                  inputMode="tel"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleForm}
                  placeholder="you@example.com"
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
                  type="email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Resume (PDF/DOC/DOCX, max 5 MB)
                </label>
                <input
                  name="resumeFile"
                  onChange={handleForm}
                  type="file"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  className="block w-full text-sm text-gray-700 file:mr-3 file:py-2 file:px-3 file:rounded-md file:border-0 file:bg-teal-600 file:text-white hover:file:bg-teal-700"
                  required
                />
                {form.resumeFile && (
                  <p className="mt-1 text-xs text-gray-500">
                    Selected: {form.resumeFile.name}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full mt-1 px-4 py-2 rounded-lg bg-teal-600 text-white font-semibold"
              >
                Submit application
              </button>

              {err && (
                <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-md px-3 py-2">
                  {err}
                </p>
              )}
            </form>
          </div>
        </div>
      )}

      <footer className="py-10 text-center text-sm text-gray-500 border-t">
        SKIEZ DIGITAL © {new Date().getFullYear()} — Built with care.
      </footer>
    </main>
  );
}
