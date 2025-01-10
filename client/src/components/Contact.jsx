import React, { useRef, useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const formRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          toast.success('Message sent successfully!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          console.log(error.text);
          toast.error('Failed to send the message. Please try again.', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className={`min-h-screen flex flex-col px-8 justify-left text-white p-8 transition-opacity duration-[1500ms] ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <ToastContainer />
      <div
        className={`w-full md:w-1/2 mx-left bg-[#130936] p-8 rounded-lg shadow-lg transition-transform duration-[1500ms] ease-out ${
          isVisible ? 'translate-x-0' : '-translate-x-10'
        }`}
      >
        <h2 className="text-5xl font-bold font-papyrus mb-6">Contact.</h2>
        <p className="text-lg mb-6">GET IN TOUCH</p>
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className={`space-y-4 w-full transition-opacity duration-[2000ms] ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
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
            className="w-60 py-3 bg-blue-950 text-white rounded hover:bg-blue-900 transition-transform duration-200 hover:scale-105"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
