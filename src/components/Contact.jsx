import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send the message. Please try again.');
        }
      );
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-left text-white p-8"
    >
      <div className="w-full md:w-1/2 mx-left bg-[#130936] p-8 rounded-lg shadow-lg">
        <h2 className="text-5xl font-bold font-papyrus mb-6">Contact.</h2>
        <p className="text-lg mb-6">GET IN TOUCH</p>
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-4 w-full"
        >
          <label className="flex flex-col">
            Your Name
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="block w-full p-2 rounded bg-white text-blue-900"
              required
            />
          </label>
          <label className="flex flex-col">
            Your Email
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="block w-full p-2 rounded bg-white text-blue-900"
              required
            />
          </label>
          <label className="flex flex-col">
            Message
            <textarea
              name="message"
              rows={6}
              placeholder="Your Message"
              className="block w-full p-2 rounded bg-white text-blue-900"
              required
            ></textarea>
          </label>
          <button
            type="submit"
            className="w-60 py-3 bg-blue-950 text-white rounded hover:bg-blue-900"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
