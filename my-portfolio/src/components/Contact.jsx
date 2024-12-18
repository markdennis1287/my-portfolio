import React from 'react';

function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="Your Message"
            required
            className="w-full p-2 border rounded"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
