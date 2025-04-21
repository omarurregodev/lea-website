import Navbar from "../Header/Navbar.jsx";
import MobileNavbar from "../Header/MobileNavbar.jsx";
import { useState, useEffect } from "react";

import "./Header.scss";

function Header({
  scrollToRef,
  activeLink,
  usRef,
  coursesRef,
  blogRef,
  contactRef,
  isTablet,
  isMobile,
}) {

  return (
    <header className="">
      {!isMobile && !isTablet ? (
        <Navbar
          scrollToRef={scrollToRef}
          activeLink={activeLink}
          usRef={usRef}
          coursesRef={coursesRef}
          blogRef={blogRef}
          contactRef={contactRef}
          isTablet={isTablet}
          isMobile={isMobile}
        />
      ) : (
        <MobileNavbar
          scrollToRef={scrollToRef}
          activeLink={activeLink}
          usRef={usRef}
          coursesRef={coursesRef}
          blogRef={blogRef}
          contactRef={contactRef}
          isTablet={isTablet}
          isMobile={isMobile}
        />
      )}
    </header>
  );
}

export default Header;
