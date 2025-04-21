import { useEffect, useState, useRef } from "react";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";


function App() {
  const homeRef = useRef(null);
  const usRef = useRef(null);
  const coursesRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);
  const [activeLink, setActiveLink] = useState(null);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  
  const scrollToRef = (ref) => {
    event.preventDefault();
    
    const sectionToShow = ref.current;
    window.scrollTo({
      behavior: 'smooth',
      block: 'end',
      top: sectionToShow.offsetTop - 20,
    });
    setActiveLink(ref.current.id);
  };

  useEffect(() => {
    const handleResize = () => {
      if (windowSize.width >= 768 && windowSize.width <= 1024) {
        setIsMobile(false);
        setIsTablet(true);
      } else if (windowSize.width < 768) {
        setIsTablet(false);
        setIsMobile(true);
      } else {
        setIsTablet(false);
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <>
      <Header scrollToRef={scrollToRef} activeLink={activeLink} usRef={usRef} homeRef={homeRef}  coursesRef={coursesRef} blogRef={blogRef} contactRef={contactRef} isTablet={isTablet} isMobile={isMobile}/>
      <Main scrollToRef={scrollToRef} homeRef={homeRef} usRef={usRef} coursesRef={coursesRef} blogRef={blogRef} contactRef={contactRef} isTablet={isTablet} isMobile={isMobile}/>
      <Footer scrollToRef={scrollToRef} blogRef={blogRef} isTablet={isTablet} isMobile={isMobile}/>
    </>

  )
}

export default App
