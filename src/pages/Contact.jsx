// Contact.jsx (paste/replace)
"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

/**
 * IMPORTANT: Set these values from your EmailJS dashboard:
 * - serviceId: the email service (e.g. 'service_xxx')
 * - templateId: the template (e.g. 'template_xxx')
 * - publicKey: your EmailJS public key (e.g. 'user_xxx')
 *
 * Create an EmailJS account at https://www.emailjs.com/, add an email service,
 * create a template (template variables: from_name, from_email, message, subject),
 * then copy values here or store them in env vars and read them at runtime.
 */
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const formRef = useRef();

  const onSubmit = async (data) => {
    // friendly toast while sending
    const tId = toast.loading("Sending your message...");

    try {
      // template params — match with your template variable names in EmailJS
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject || "New message from website",
        message: data.message,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent — we’ll be in touch!", { id: tId });
      reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error(
        "Oops — something went wrong sending the message. Try again later.",
        { id: tId }
      );
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0b1020] via-[#0f1724] to-[#071124] text-white flex items-center justify-center px-6 py-20">
      {/* Toast container */}
      <Toaster position="top-right" />

      {/* animated blob (behind) */}
      <motion.div
        aria-hidden
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.14 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center z-0"
      >
        <svg
          width="900"
          height="600"
          viewBox="0 0 900 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-w-full"
          style={{ filter: "blur(36px)" }}
        >
          <motion.path
            d="M183 84C235 32 347 -6 458 18C569 42 622 106 688 152C754 198 824 234 826 318C828 402 736 482 624 520C512 558 404 556 310 528C216 500 131 444 99 354C67 264 131 136 183 84Z"
            fill="url(#g1)"
            initial={{ d: "M163 84C215 32 327 -6 438 18C549 42 602 106 668 152C734 198 804 234 806 318C808 402 716 482 604 520C492 558 384 556 290 528C196 500 111 444 79 354C47 264 111 136 163 84Z" }}
            animate={{ d: "M203 104C255 62 347 10 458 34C569 58 622 112 688 148C754 184 814 220 816 294C818 368 716 458 604 496C492 534 384 532 290 504C196 476 121 420 89 330C57 240 121 112 203 104Z" }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#4facfe" />
              <stop offset="50%" stopColor="#00f2fe" />
              <stop offset="100%" stopColor="#a18cd1" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-10">
        {/* LEFT: Info + Map */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-sky-400 text-transparent bg-clip-text">
            Let's Build Something Great Together 🚀
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Whether you have a project idea, want to collaborate, or simply want
            to say hi — drop us a message! We’d love to hear from you.
          </p>

          <div className="space-y-3 text-gray-300">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-sky-400" /> support@skiezdigital.com
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-sky-400" /> +91 98765 43210
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-sky-400" /> Chennai, India
            </p>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-sky-500 transition rounded-full"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-pink-500 transition rounded-full"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-blue-500 transition rounded-full"
            >
              <FaLinkedinIn />
            </a>
          </div>

          {/* Embedded Google Map — replace the src query if you want another location */}
          <div className="mt-6 rounded-xl overflow-hidden border border-white/10 shadow-lg">
            <iframe
              title="Skiez Digital Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.0492942409733!2d80.27069897404756!3d13.082680090369317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b6a7f4f2c9%3A0x6b9a4f7e7b4a5c7c!2sChennai!5e0!3m2!1sen!2sin!4v1698160000000!5m2!1sen!2sin"
              className="w-full h-56 border-0"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* RIGHT: Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-white/6 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl border border-white/10"
        >
          <h3 className="text-2xl font-bold mb-2 text-sky-300">Contact Form</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2">Full Name</label>
              <input
                {...register("name", { required: true })}
                className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 focus:ring-2 focus:ring-sky-400 outline-none"
                placeholder="Your Name"
              />
              {errors.name && (
                <span className="text-red-400 text-sm">Name is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                {...register("email", { required: true })}
                type="email"
                className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 focus:ring-2 focus:ring-sky-400 outline-none"
                placeholder="you@example.com"
              />
              {errors.email && (
                <span className="text-red-400 text-sm">Email is required</span>
              )}
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm mb-2">Subject</label>
            <input
              {...register("subject")}
              className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 focus:ring-2 focus:ring-sky-400 outline-none"
              placeholder="Project or subject"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm mb-2">Message</label>
            <textarea
              {...register("message", { required: true })}
              rows="6"
              className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 focus:ring-2 focus:ring-sky-400 outline-none resize-none"
              placeholder="Describe your project / request..."
            />
            {errors.message && (
              <span className="text-red-400 text-sm">Message is required</span>
            )}
          </div>

          {/* Custom glowing button + cursor hint */}
          <div className="mt-6 flex items-center gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="relative group overflow-hidden px-6 py-3 rounded-md font-semibold bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-600 hover:to-sky-600 transition focus:outline-none"
            >
              {/* glow layer */}
              <span
                aria-hidden
                className="absolute inset-0 -z-10 opacity-60 blur-2xl group-hover:opacity-100 transition"
                style={{
                  background:
                    "linear-gradient(90deg,#ff7eb3,#af40ff,#00f2fe,#4facfe)",
                  mixBlendMode: "screen",
                }}
              />
              <span className="relative z-10">Send Message</span>
            </button>

            <div className="text-sm text-gray-300">Or email us at <a className="text-sky-300 underline" href="mailto:support@skiezdigital.com">support@skiezdigital.com</a></div>
          </div>

          {/* small keyboard-accessible help */}
          <div className="mt-4 text-xs text-gray-400">
            Press Enter to submit. We typically reply within 24–48 hours.
          </div>
        </motion.form>
      </div>

      {/* cursor glow indicator (optional small dot that follows pointer) */}
      <CursorGlow />
    </section>
  );
}

/* ---------- small cursor glow component ---------- */
function CursorGlow() {
  // simple CSS-only floating dot using pointer events + fixed position
  // Add the element once; CSS handles movement via pointermove listener attached to document.
  // This keeps code small and dependency-free.
  React.useEffect(() => {
    const dot = document.createElement("div");
    dot.id = "skiez-cursor-glow";
    document.body.appendChild(dot);

    function move(e) {
      dot.style.transform = `translate3d(${e.clientX - 12}px, ${e.clientY - 12}px, 0)`;
    }
    window.addEventListener("pointermove", move);

    return () => {
      window.removeEventListener("pointermove", move);
      dot.remove();
    };
  }, []);
  return (
    <style jsx global>{`
      #skiez-cursor-glow {
        position: fixed;
        top: 0;
        left: 0;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        pointer-events: none;
        z-index: 99999;
        transform: translate3d(-50%, -50%, 0);
        transition: transform 0.05s linear;
        background: radial-gradient(circle at 50% 40%, rgba(255,255,255,0.95) 0%, rgba(124,58,237,0.6) 25%, rgba(14,165,233,0.35) 55%, rgba(0,0,0,0) 70%);
        mix-blend-mode: screen;
        backdrop-filter: blur(2px);
        opacity: 0.9;
      }

      /* hide the cursor-glow on small screens for performance */
      @media (max-width: 640px) {
        #skiez-cursor-glow { display: none; }
      }

      /* Slightly enlarge glow near the primary CTA for emphasis */
      button.group:hover ~ #skiez-cursor-glow,
      button.group:focus ~ #skiez-cursor-glow {
        transform: scale(1.25);
      }
    `}</style>
  );
}
  