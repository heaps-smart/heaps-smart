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
    light: "inline-block px-8 py-3 bg-[#fcbb1e] text-black text-lg font-semibold rounded hover:bg-[#e0a817] transition-all",
    dark: "inline-block px-8 py-3 bg-[#000000] text-[#FFFFFF] text-lg font-semibold rounded transition-opacity hover:bg-[#333333]"
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
