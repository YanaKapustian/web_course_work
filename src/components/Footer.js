import React, { useEffect, useState } from "react";
import "./Footer.css";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const isFooterVisible = scrollTop > 100;
      setIsVisible(isFooterVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className={`footer ${isVisible ? "visible" : ""}`}>
      <p>&copy; 2024 Яна Капустян. Всі права захищені.</p>
    </footer>
  );
}

export default Footer;
