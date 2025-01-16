import Container from "@/app/_components/container";

export function Footer({ inverted = false }) {
  const bgColor = inverted ? "bg-black" : "bg-neutral-50";
  const textColor = inverted ? "text-white" : "text-neutral-700";
  const borderColor = inverted ? "border-black" : "border-neutral-200";
  const linkColor = inverted ? "text-white" : "text-neutral-700";

  return (
    <footer className={`p-8 ${bgColor} border-t ${borderColor} ${textColor}`}>
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
            <p className="text-sm">
              <a href="mailto:hello@heaps-smart.com" className={`${linkColor} hover:underline`}>
                hello@heaps-smart.com
              </a>
            </p>
            <div className={`hidden sm:block h-5 border-l ${inverted ? "border-neutral-600" : borderColor}`}></div>
            <a
              href="https://www.linkedin.com/company/heaps-smart"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className={linkColor}
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-3.5v-11h3.5v11zm-1.75-12.412c-1.117 0-2.024-.907-2.024-2.024s.907-2.024 2.024-2.024 2.024.907 2.024 2.024-.907 2.024-2.024 2.024zm13.75 12.412h-3.5v-5.412c0-1.013-.019-2.318-1.411-2.318-1.412 0-1.63 1.103-1.63 2.243v5.487h-3.5v-11h3.359v1.51h.048c.467-.883 1.609-1.813 3.315-1.813 3.544 0 4.196 2.333 4.196 5.368v5.935z" />
              </svg>
            </a>
          </div>
          <p className="text-sm text-center md:text-left">
            This website comes to you from <a href="https://cassowaryconservation.org/djiru-country/" className="underline" target="_blank">Djiru Country</a>.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
