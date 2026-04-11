import React, { useState } from "react";
import { Send } from "@mui/icons-material";
import emailjs from '@emailjs/browser';
import SectionTitle from "../SectionTitle";
const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      console.log("Success!")
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="md:p-7 text-white">
       <div className="pt-8 ">
        <SectionTitle title="Contact"/>
      </div>

      <p className="text-gray-400 mb-8">
        Open for opportunities:{" "}
        <span className="text-white font-semibold">Yes</span>
      </p>

      <h3 className="text-[26px] font-bold mb-6">Contact Form</h3>

      <form onSubmit={sendEmail} className="space-y-6 ">
        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="text"
            placeholder="Full name"
            name="name"
            required
            className="w-full md:w-1/2 rounded-2xl bg-white/5 px-6 py-4 outline-none focus:bg-white/10 transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
            className="w-full md:w-1/2 rounded-2xl bg-white/5 px-6 py-4 outline-none focus:bg-white/10 transition"
          />
        </div>

        <div>
          <textarea
            placeholder="Your message"
            name="message"
            required
            rows={6}
            className="w-full rounded-2xl bg-white/5 px-6 py-4 outline-none resize-none focus:bg-white/10 transition"
          />
          {status === 'success' && <p className="text-green-500">Message sent successfully!</p>}
          {status === 'error' && <p className="text-red-500">Something went wrong. Try again.</p>}
        </div>

        <input type="hidden" name="title" value="Portfolio contact form" />
        <input type="hidden" name="time" value={new Date().toLocaleString()} />

        <div className="flex justify-end">
          <button
            disabled={status === 'loading'}
            type="submit"
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold 
            bg-linear-to-br from-blue-400 to-blue-600
            shadow-md hover:shadow-lg hover:-translate-y-[2px] transition"
          >
            <Send style={{ fontSize: 18 }} />
            {status === 'loading' ? 'Sending...' : 'Send'}
          </button>
        </div>

      </form>
    </div>
  );
};

export default Contact;
