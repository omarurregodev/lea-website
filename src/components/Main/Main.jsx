import Hero from "../Hero/Hero";
import RoundQuad from "../RoundQuad/RoundQuad";
import SingleSlider from "../SingleSlider/SingleSlider";
import SimpleQuad from "../SimpleQuad/SimpleQuad";
import Testimonials from "../Testimonials/Testimonials";
import Blog from "../Blog/Blog";
import Enquiry from "../Enquiry/Enquiry";
import Wbutton from "../Wbutton/Wbutton";

import "./Main.scss";

function Main({scrollToRef, usRef, coursesRef, blogRef, contactRef, isTablet, isMobile}) {
    
    return (
        <main className="main">
            <Hero scrollToRef={scrollToRef} contactRef={contactRef} isTablet={isTablet} isMobile={isMobile}/>
            <SingleSlider scrollToRef={scrollToRef} usRef={usRef} isTablet={isTablet} isMobile={isMobile}/>
            <RoundQuad scrollToRef={scrollToRef} coursesRef={coursesRef} isTablet={isTablet} isMobile={isMobile}/>
            <Testimonials isTablet={isTablet} isMobile={isMobile}/>
            {(!isTablet && !isMobile) ? <SimpleQuad isTablet={isTablet} isMobile={isMobile}/> : null}
            <Blog scrollToRef={scrollToRef} blogRef={blogRef} isTablet={isTablet} isMobile={isMobile}/>
            <Enquiry scrollToRef={scrollToRef} contactRef={contactRef} isTablet={isTablet} isMobile={isMobile}/>
            <Wbutton />
        </main>
    )
}

export default Main;