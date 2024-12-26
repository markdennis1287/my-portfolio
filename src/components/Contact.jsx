function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center text-white p-8"
    >
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <p className="text-lg mb-6">
        Feel free to reach out to me for any opportunities or collaborations.
      </p>
      <form className="space-y-4 w-80">
        <input
          type="text"
          placeholder="Your Name"
          className="block w-full p-2 rounded bg-white text-blue-900"
        />
        <input
          type="text"
          placeholder="Your Email"
          className="block w-full p-2 rounded bg-white text-blue-900"
        />
        <textarea
          placeholder="Your Message"
          className="block w-full p-2 rounded bg-white text-blue-900"
        ></textarea>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-950"
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
