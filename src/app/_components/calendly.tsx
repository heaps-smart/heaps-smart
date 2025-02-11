"use client";

import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";

interface CalendlyPopupProps {
  url: string;
  text: string;
  variant?: 'light' | 'dark';
}

export default function CalendlyPopup({ url, text, variant = 'light' }: CalendlyPopupProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const buttonStyles = {
    light: "inline-block px-8 py-3 bg-[#007999] text-white text-lg font-semibold rounded hover:bg-[#004c73] transition-all",
    dark: "inline-block px-8 py-3 bg-[#000000] text-[#FFFFFF] text-lg font-semibold rounded transition-opacity hover:opacity-80"
  };

  if (!isClient) {
    return null;
  }

  return (
    <PopupButton
      url={url}
      rootElement={document.body}
      text={text}
      className={buttonStyles[variant]}
    />
  );
}
