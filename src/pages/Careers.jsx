import React, { useState } from "react";
import jobsData from "../data/jobs.json";
import internshipsData from "../data/internships.json";
import traineeCoursesData from "../data/traineeCourses.json";

// (imports data from src/data/*.json)
export default function SimpleTechCareerPage() {
  const [activeTab, setActiveTab] = useState("jobs");
  const [query, setQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showApply, setShowApply] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", resume: "" });
  const [success, setSuccess] = useState("");

  // load data from JSON imports
  const jobs = jobsData || [];
  const internships = internshipsData || [];
  const traineeCourses = traineeCoursesData || [];

  // apply simple search filter (optional)
  const currentList =
    activeTab === "jobs"
      ? jobs.filter((j) => matchesQuery(j, query))
      : activeTab === "internships"
      ? internships.filter((i) => matchesQuery(i, query))
      : traineeCourses.filter((c) => matchesQuery(c, query));

  function matchesQuery(item, q) {
    if (!q) return true;
    const s = q.trim().toLowerCase();
    return (
      (item.title && item.title.toLowerCase().includes(s)) ||
      (item.shortDescription &&
        item.shortDescription.toLowerCase().includes(s)) ||
      (item.description && item.description.toLowerCase().includes(s)) ||
      (item.location && item.location.toLowerCase().includes(s))
    );
  }

  function openDetails(item) {
    setSelectedItem(item);
    setShowApply(false);
    setSuccess("");
  }

  function openApply(item) {
    setSelectedItem(item);
    setShowApply(true);
    setSuccess("");
  }

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function submitApplication(e) {
    e.preventDefault();
    if (!form.name || !form.email) {
      setSuccess("Please enter your name and email.");
      return;
    }
    setSuccess(
      `Thanks ${form.name}! Your application for ${
        selectedItem?.title || "this role"
      } has been received.`
    );
    setForm({ name: "", email: "", resume: "" });
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Careers at SKIEZ DIGITAL
          </h1>
          <p className="mt-2 text-gray-600">
            Explore opportunities to learn, grow, and build the future.
          </p>
        </header>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-6">
          {[
            { key: "jobs", label: "Jobs" },
            { key: "internships", label: "Internships" },
            { key: "trainee", label: "Trainee Courses" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key);
                setSelectedItem(null);
                setShowApply(false);
                setQuery("");
              }}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-200 ${
                activeTab === tab.key
                  ? "bg-teal-500 text-white border-teal-500"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-6">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search title, location or keywords..."
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left section list */}
          <div className="md:w-2/3 space-y-4">
            {currentList.length === 0 && (
              <div className="p-6 bg-white rounded-lg border border-dashed text-gray-500">
                No items match your search.
              </div>
            )}

            {currentList.map((item) => (
              <article
                key={item.id}
                className="bg-white p-6 rounded-lg shadow-sm border flex justify-between items-start"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {item.shortDescription || item.description}
                  </p>
                  <div className="mt-3 flex gap-3 text-xs text-gray-500">
                    {item.location && (
                      <span className="px-2 py-1 bg-gray-100 rounded">
                        {item.location}
                      </span>
                    )}
                    {item.duration && (
                      <span className="px-2 py-1 bg-gray-100 rounded">
                        {item.duration}
                      </span>
                    )}
                    {item.salary && (
                      <span className="px-2 py-1 bg-gray-100 rounded">
                        {item.salary}
                      </span>
                    )}
                    {item.stipend && (
                      <span className="px-2 py-1 bg-gray-100 rounded">
                        {item.stipend}
                      </span>
                    )}
                    {item.fee && (
                      <span className="px-2 py-1 bg-gray-100 rounded">
                        {item.fee}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex-shrink-0 flex flex-col items-end gap-2">
                  <button
                    onClick={() => openDetails(item)}
                    className="px-3 py-2 rounded-md bg-teal-500 text-white text-sm"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => openApply(item)}
                    className="px-3 py-2 rounded-md border border-teal-600 text-gray-600 text-sm"
                  >
                    Apply
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Right panel */}
          <aside className="md:w-1/3">
            <div className="sticky top-6">
              {!selectedItem && (
                <div className="bg-white rounded-lg p-6 border text-gray-600">
                  <h4 className="text-lg font-semibold">
                    {activeTab === "jobs"
                      ? "Job Details"
                      : activeTab === "internships"
                      ? "Internship Details"
                      : "Course Details"}
                  </h4>
                  <p className="mt-2 text-sm">
                    Select a role to view details or apply.
                  </p>
                </div>
              )}

              {selectedItem && (
                <div className="bg-white rounded-lg p-6 border">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">
                        {selectedItem.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {selectedItem.location ||
                          selectedItem.duration ||
                          selectedItem.fee ||
                          selectedItem.stipend}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedItem(null);
                        setShowApply(false);
                      }}
                      className="text-gray-400"
                    >
                      ✕
                    </button>
                  </div>

                  {/* ✅ FIXED: Always shows the full description */}
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    {selectedItem.fullDescription ||
                      selectedItem.description ||
                      selectedItem.shortDescription ||
                      "No description available."}
                  </p>

                  {/* Responsibilities */}
                  {selectedItem.responsibilities &&
                    selectedItem.responsibilities.length > 0 && (
                      <div className="mt-4">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Responsibilities:
                        </h4>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                          {selectedItem.responsibilities.map((res, idx) => (
                            <li key={idx}>{res}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                  {/* Requirements */}
                  {selectedItem.requirements &&
                    selectedItem.requirements.length > 0 && (
                      <div className="mt-4">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Requirements:
                        </h4>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                          {selectedItem.requirements.map((req, idx) => (
                            <li key={idx}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                  {/* Bonus Points */}
                  {selectedItem.bonusPoints &&
                    selectedItem.bonusPoints.length > 0 && (
                      <div className="mt-4">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Bonus Points:
                        </h4>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                          {selectedItem.bonusPoints.map((bonus, idx) => (
                            <li key={idx}>{bonus}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                  {/* Apply Buttons */}
                  <div className="mt-5 flex gap-3">
                    <button
                      onClick={() => openApply(selectedItem)}
                      className="flex-1 px-3 py-2 rounded font-semibold bg-teal-400 text-gray-600"
                    >
                      Apply Now
                    </button>
                    <button
                      onClick={() => alert("Shared! (placeholder)")}
                      className="px-3 py-2 rounded border"
                    >
                      Share
                    </button>
                  </div>

                  {/* Apply Form */}
                  {showApply && (
                    <form
                      onSubmit={submitApplication}
                      className="mt-4 space-y-3"
                    >
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Full name"
                        className="w-full px-3 py-2 border rounded"
                      />
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email address"
                        className="w-full px-3 py-2 border rounded"
                      />
                      <input
                        name="resume"
                        value={form.resume}
                        onChange={handleChange}
                        placeholder="Paste a public resume link (optional)"
                        className="w-full px-3 py-2 border rounded"
                      />

                      <button
                        type="submit"
                        className="w-full px-3 py-2 rounded bg-green-600 text-white"
                      >
                        Submit Application
                      </button>

                      {success && (
                        <p className="text-sm text-green-600">{success}</p>
                      )}
                    </form>
                  )}
                </div>
              )}

              <div className="mt-4 bg-white rounded-lg p-4 border text-sm text-gray-600">
                <strong>Why SKIEZ DIGITAL?</strong>
                <p className="mt-2">
                  Flexible hours, remote-friendly, and real-world experience for
                  learners at every stage.
                </p>
              </div>
            </div>
          </aside>
        </div>

        <footer className="mt-10 text-center text-sm text-gray-500">
          SKIEZ DIGITAL © {new Date().getFullYear()} — Built with care.
        </footer>
      </div>
    </div>
  );
}
