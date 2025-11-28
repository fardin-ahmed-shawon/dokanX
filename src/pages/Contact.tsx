import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    window.location.href = "https://wa.me/8801580741616?text=Hello%20I%20am%20interested";
  }, []);

  return (
    <div>
      <h1>Redirecting to WhatsApp...</h1>
    </div>
  );
}