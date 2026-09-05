import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import BackToTop from "./components/layout/BackToTop";
import MoreAbout from "./components/sections/MoreAbout";

function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) =>
            e.isIntersecting &&
            e.target.classList.add("visible")
        ),
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));

    const handleNavClick = (e) => {
      if (
        e.target.tagName === "A" &&
        e.target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();

        const target = document.querySelector(
          e.target.getAttribute("href")
        );

        if (target) {
          const navHeight = 80;

          const top =
            target.getBoundingClientRect().top +
            window.scrollY -
            navHeight;

          window.scrollTo({
            top,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleNavClick);

    return () => {
      observer.disconnect();
      document.removeEventListener("click", handleNavClick);
    };
  }, [page]);

  if (page === "more-about") {
    return (
      <MoreAbout
        onBack={() => setPage("home")}
      />
    );
  }

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen text-white overflow-x-hidden">
        <Hero />
        <About
          onMoreAbout={() => setPage("more-about")}
        />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;