"use client";
import { useState } from "react";

export default function ContactForm() {
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <div className="border-[6px] border-theme-six p-4 xl:p-10">
      <h2 className="primary-heading mb-12">Let&apos;s Talk!</h2>
      <form action="" method="post" className="space-y-4 xl:space-y-8">
        <div>
          <label htmlFor="first_name" className="form-label">
            Name *
          </label>
          <div className="grid grid-cols-2 gap-5">
            <input
              type="text"
              name="first_name"
              id="first_name"
              className="form-input border-theme-six"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="last_name"
              id="last_name"
              className="form-input border-theme-six"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="form-label">
            Email *
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="form-input border-theme-six"
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="form-label">
            Subject *
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            className="form-input border-theme-six"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="form-label">
            Comment or Message
          </label>
          <textarea
            name="message"
            id="message"
            className="form-input border-theme-six"
          ></textarea>
        </div>
        <div>
          <button type="submit" className="btn-primary">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
