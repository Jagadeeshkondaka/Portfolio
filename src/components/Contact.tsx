import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_w43b03d",     
        "template_y60jy2g",    
        form.current,
        "Yd33UVCVt9wQkRBU5"     
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          form.current?.reset();
        },
        (error) => {
          alert("Failed to send ❌");
          console.log(error);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-16 text-center">
      
      <p className="text-gray-500">Connect with me</p>
      <h2 className="text-4xl md:text-5xl font-serif mb-6">
        Get in touch
      </h2>

      <p className="text-gray-500 mb-10">
        I'd love to hear from you! Please fill out the form below.
      </p>

      <form ref={form} onSubmit={sendEmail} className="max-w-2xl mx-auto">
        
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="from_name"
            placeholder="Enter your name"
            required
            className="border p-3 rounded-lg w-full dark:bg-gray-900"
          />

          <input
            type="email"
            name="from_email"
            placeholder="Enter your email"
            required
            className="border p-3 rounded-lg w-full dark:bg-gray-900"
          />
        </div>

        <textarea
          name="message"
          placeholder="Enter your message"
          required
          className="border p-3 rounded-lg w-full h-40 mb-4 dark:bg-gray-900"
        />

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-full dark:bg-white dark:text-black"
        >
          Submit now →
        </button>
      </form>
    </section>
  );
}