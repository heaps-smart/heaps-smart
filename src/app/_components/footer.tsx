import Container from "@/app/_components/Container";
import Australia from "./svg/Australia";

export default function Footer({ inverted = false }) {
  const bgColor = inverted ? "bg-[#121212]" : "white";
  const textColor = inverted ? "text-white" : "text-neutral-700";
  const borderColor = inverted ? "border-neutral-800" : "border-neutral-200";
  const linkColor = inverted ? "text-white" : "text-neutral-700";

  return (
    <footer className={`pt-10 pb-6 px-6 ${bgColor} ${textColor} border-t ${borderColor}`} aria-label="Footer section with contact information, legal links, and social media">
      <Container>
        <div className="grid md:grid-cols-3 gap-8 text-sm">
          {/* Contact & Social */}
          <div className="flex flex-col space-y-4">
            <div>
              <p className="font-medium">Contact Us</p>
              <a
                href="mailto:hello@heaps-smart.com"
                className={`${linkColor} hover:underline`}
                aria-label="Email Heaps Smart"
              >
                hello@heaps-smart.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <a
                href="https://www.linkedin.com/company/heaps-smart"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Heaps Smart on LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className={linkColor}
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761..."/>
                </svg>
              </a>
              {/* Add more social icons here if desired */}
            </div>
          </div>

          {/* Site Links */}
          <div className="flex flex-col space-y-2">
            <p className="font-medium">Quick Links</p>
            <a href="/privacy-policy" className={`${linkColor} hover:underline`} aria-label="Privacy Policy">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className={`${linkColor} hover:underline`} aria-label="Terms of Service">
              Terms of Service
            </a>
            <a href="/about" className={`${linkColor} hover:underline`} aria-label="About Heaps Smart">
              About Us
            </a>
            <a href="/services" className={`${linkColor} hover:underline`} aria-label="AI Services">
              AI Services
            </a>
          </div>

          {/* Acknowledgement & Attribution */}
          <div className="space-y-3">
            <p>
              Built on{" "}
              <a
                href="https://cassowaryconservation.org/djiru-country/"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Learn more about Djiru Country"
              >
                Djiru Country
              </a>{" "}
              in Far North Queensland.
            </p>
            <a
              href="https://www.youtube.com/watch?v=KOVhDUkmIvk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              aria-label="Visit our YouTube channel"
            >
              <Australia />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-neutral-500">
          &copy; {new Date().getFullYear()} Heaps Smart Pty Ltd. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
