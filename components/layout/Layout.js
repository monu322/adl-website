import { useEffect, useState } from "react";
import BackToTop from '../elements/BackToTop';
import Breadcrumb from './Breadcrumb';
import PageHead from './PageHead';
import Footer1 from './footer/Footer1';
import Footer2 from './footer/Footer2';
import Header1 from "./header/Header1";

export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children, big, survey }) {
    
    const [scroll, setScroll] = useState(0);
    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = useState(false);
    const handleMobileMenu = () => setMobileMenu(!isMobileMenu);

    useEffect(() => {
        const WOW = require('wowjs');
        window.wow = new WOW.WOW({
            live: false
        });
        window.wow.init();

        const handleScroll = () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        };

        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [scroll]);

    return (
        <>
            <PageHead headTitle={headTitle} />

            <div className={`wrapper ${scroll ? "has-padding" : ""}`}>
                {/* Render the header only if survey is false */}
                {!survey && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} big={big} />}

                {/* Uncomment if you want to render Breadcrumb based on breadcrumbTitle */}
                {/* {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />} */}

                {children}

                {!footerStyle && <Footer1 survey={survey}/>}
                {footerStyle === 1 && <Footer1 survey={survey}/>}
                {footerStyle === 2 && <Footer2 />}

                <BackToTop />
            </div>
        </>
    );
}

