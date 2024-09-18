import Container from "@/app/_components/container";
import { Header } from "@/app/_components/header";

export default function Contact() {
  return (
    <main>
      <Container>
				<Header />
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold tracking-tighter">
            Get in Touch
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            We’d love to hear from you! Reach out with any questions or inquiries.
          </p>
        </section>

        <section className="flex flex-col items-start space-y-8 md:flex-row md:space-x-12 md:space-y-0">
          <div className="w-full md:w-1/2 items-startbg-white dark:bg-slate-700 p-8 rounded-lg">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4 tracking-tight">
              Contact Information
            </h2>
            <div className="space-y-4">
              <p className="flex items-center text-neutral-600 dark:text-neutral-400">
                <svg
                  className="w-5 h-5 mr-2 text-blue-500 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h18M3 14h18"
                  />
                </svg>
                PO Box 238 Mission Beach QLD 4852
              </p>
              <p className="flex items-center text-neutral-600 dark:text-neutral-400">
                <svg
                  className="w-5 h-5 mr-2 text-blue-500 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
                (123) 456-7890
              </p>
              <p className="flex items-center text-neutral-600 dark:text-neutral-400">
                <svg
                  className="w-5 h-5 mr-2 text-blue-500 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16m-7 6h7M4 12h7m-7 6h16"
                  />
                </svg>
                info@heaps-smart.com
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2 bg-white dark:bg-slate-700 p-8 rounded-lg">
            <h2 className="text-xl font-semibold text-neutral-900 tracking-tight">
              Prefer forms? Send Us a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-neutral-300 dark:border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-neutral-300 dark:border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-3 border border-neutral-300 dark:border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  placeholder="Your Message"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </Container>
    </main>
  );
}
