"use client";

import { PopupButton } from "react-calendly";

interface CalendlyPopupProps {
  variant?: 'light' | 'dark';
}

export default function CalendlyPopup({ variant = 'light' }: CalendlyPopupProps) {
  const buttonStyles = {
    light: "inline-block px-8 py-3 bg-[#5A9367] text-white text-lg font-semibold rounded transition-opacity hover:bg-[#4A7D57]",
    dark: "inline-block px-8 py-3 bg-[#000000] text-[#FFFFFF] text-lg font-semibold rounded transition-opacity hover:opacity-80"
  };

  return (
    <PopupButton
      url="https://calendly.com/heaps-smart/discovery-call"
      rootElement={document.body}
      text="Schedule a time to chat →"
      className={buttonStyles[variant]}
    />
  );
}
