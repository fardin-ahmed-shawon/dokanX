import { useEffect } from "react";

export default function GetDemo() {
  useEffect(() => {
    window.location.href = "https://user-demo.dokanxbd.com/";
  }, []);

  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  );
}