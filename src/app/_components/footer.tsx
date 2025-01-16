import Container from "@/app/_components/container";

export function Footer({ inverted = false }) {
  const bgColor = inverted ? "bg-[#121212]" : "white";
  const textColor = inverted ? "text-white" : "text-neutral-700";
  const borderColor = inverted ? "border-black" : "border-neutral-200";
  const linkColor = inverted ? "text-white" : "text-neutral-700";

  return (
    <footer className={`p-8 pt-4 ${bgColor} ${textColor}`} aria-label="Footer section with contact information and social media links">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
            <p className="text-sm">
              <a href="mailto:hello@heaps-smart.com" className={`${linkColor} hover:underline`} aria-label="Email Heaps Smart">hello@heaps-smart.com</a>
            </p>
            <div className={`hidden sm:block h-5 border-l ${inverted ? "border-neutral-600" : borderColor}`}></div>
            <a
              href="https://www.linkedin.com/company/heaps-smart"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm"
              aria-label="Visit Heaps Smart on LinkedIn"
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
          <p className="text-sm text-center md:text-left flex items-center space-x-2">
            <span>
              This website comes to you from{" "}
              <a
                href="https://cassowaryconservation.org/djiru-country/"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Learn more about Djiru Country in Far North Queensland"
              >
                Djiru Country
              </a>{" "}
              in Far North Queensland.
            </span>
            <a href="https://www.youtube.com/watch?v=KOVhDUkmIvk" target="_blank" rel="noopener noreferrer" className="cursor-default" aria-label="Watch the video on YouTube">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-[25px] h-[25px]"
                fill="currentColor"
              >
                <path d="M434.071,449.363l-5.785,0.82c-1.182,0.18-2.396,0.115-3.569-0.156l-13.276-3.142 c-3.068-0.722-6.302,0.098-8.64,2.215c-2.338,2.109-3.488,5.235-3.085,8.378l1.772,13.457c0.115,0.87,0.353,1.731,0.706,2.552 l9.001,20.816c1.526,3.504,4.988,5.785,8.812,5.785h0.87c2.618,0,5.137-1.083,6.942-2.978l10.306-10.823 c1.247-1.305,2.092-2.929,2.453-4.693l4.25-20.808c0.632-3.052-0.288-6.228-2.421-8.501 C440.273,450.011,437.155,448.912,434.071,449.363z" />
                <path d="M511.913,270.556l-8.353-62.047c-0.23-1.658-0.878-3.225-1.895-4.554l-46.902-61.12 c-0.787-1.018-1.772-1.863-2.896-2.494l-24.976-14.105c-1.724-0.96-3.11-2.453-3.964-4.242l-11.561-24.427 c-0.451-0.944-0.738-1.928-0.854-2.954L408.24,75.93c-0.353-2.897-2.01-5.473-4.496-7.024l-12.513-7.688 c-1.994-1.231-3.471-3.151-4.151-5.399l-13.244-43.906h-6.761l-9.23,21.998c-0.361,0.878-0.608,1.798-0.697,2.757l-5.982,59.841 c-0.386,3.881-3.094,7.147-6.844,8.254l-2.306,0.673c-2.715,0.787-5.645,0.353-8.008-1.214L286.78,72.943 c-3.988-2.642-5.432-7.827-3.356-12.152l8.402-17.534c1.271-2.667,1.264-5.761-0.041-8.402c-1.305-2.642-3.758-4.545-6.638-5.136 l-43.544-9.141c-3.364-0.706-6.827,0.427-9.108,2.97l-29.399,32.747l3.75,9.78H191.69c-2.798,0-5.448-1.206-7.27-3.323 l-5.629-6.531c-3.265-3.775-8.894-4.423-12.931-1.461l-54.753,40.107c-1.806,1.321-3.094,3.232-3.627,5.407l-4.685,18.757 c-0.788,3.11-3.053,5.604-6.064,6.696l-21.792,7.869c-0.312,0.115-0.624,0.254-0.919,0.394L5.408,167.261 C2.1,168.861,0,172.209,0,175.885v51.676c0,1.141,0.206,2.298,0.608,3.364l25.362,67.628c0.722,1.92,0.812,4.02,0.238,6.006 l-6.286,21.99c-0.238,0.854-0.36,1.739-0.36,2.634v10.026c0,2.372,0.861,4.644,2.445,6.392l7.196,8.065 c1.978,2.216,4.882,3.381,7.836,3.176l13.843-1.002c1.649-0.106,3.249-0.656,4.636-1.575l20.496-13.669 c1.452-0.969,3.126-1.518,4.874-1.608l41.001-1.887c3.265-0.148,6.219-1.936,7.86-4.776l3.627-6.252 c1.296-2.232,3.43-3.865,5.932-4.497l82.774-21.038c3.175-0.788,6.522,0.066,8.91,2.281l45.154,42.117 c3.742,3.478,9.558,3.421,13.227-0.14l7.827-7.606c2.462-2.388,6.014-3.29,9.305-2.338c3.307,0.935,5.858,3.561,6.687,6.901 l0.476,1.879l3.692,14.162c0.534,2.035,1.708,3.848,3.364,5.129l10.749,8.426c2.51,1.952,3.873,5.022,3.66,8.188l-0.206,3.053 c-0.131,2.052,0.402,4.094,1.51,5.826l9.781,15.229c1.312,2.042,3.347,3.511,5.694,4.118l25.79,6.589 c1.887,0.476,3.889,0.369,5.711-0.296l14.284-5.292c2.076-0.77,4.366-0.796,6.466-0.073l12.858,4.447 c2.223,0.763,4.652,0.705,6.818-0.206l37.982-15.82c2.412-1.009,4.316-2.962,5.267-5.407l27.849-72.14l16.468-44.39 C511.946,273.699,512.126,272.107,511.913,270.556z" />
              </svg>
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
