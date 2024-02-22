import Link from "next/link"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, big }) {
    
    // let's make a function that receive the specific element_id as string and scroll into that element_id
    const scrolltoHash = function (element_id) {
        
        const element = document.getElementById(element_id)
        console.log(element)
        console.log(element.offsetTop)

        const scrollTop = element.offsetTop
        
        if(window)
        {
            window.scrollTo({
                top: scrollTop-150,
                behavior: 'smooth',
            })
        }

        return false;

    }
    
    return (
        <>
            <header id="header_main" className={`header ${scroll ? "is-fixed is-small" : ""}`}>
                <div className={`container ${big ? "big" : ""} menu-container`}>
                    <div className="row">
                        <div className="col-12">
                            <div className="header__body">
                                <Link href="/">
                                    <div className="header__logo"></div>
                                </Link>
                                <div className="header__right">
                                    <nav id="main-nav" className="main-nav">
                                        <ul id="menu-primary-menu" className="menu">
                                            {/* <li className="menu-item">
                                                <Link href="#">Home</Link>
                                                 <ul className="sub-menu">
                                                    <li className="menu-item current-item"><Link href="/">Home v1</Link></li>
                                                    <li className="menu-item"><Link href="/home-v2">Home v2</Link></li>
                                                    <li className="menu-item"><Link href="/home-v3">Home v3</Link></li>
                                                    <li className="menu-item"><Link href="/cardcarousel">Card Carousel</Link></li>
                                                    <li className="menu-item"><Link href="/zigzagcarousel">Zigzag Carousel</Link></li>
                                                    <li className="menu-item"><Link href="/coverflowcarousel">Coverflow Carousel</Link></li>
                                                    <li className="menu-item"><Link href="/itemcarousel">Item Carousel</Link></li>
                                                    <li className="menu-item"><Link href="/3dcarousel">3D Carousel</Link></li>
                                                </ul>
                                            </li> */}
                                            {/* <li className="menu-item menu-item-has-children">
                                                <Link href="#">Explore</Link>
                                                <ul className="sub-menu">
                                                    <li className="menu-item"><Link href="/nft">NFTs</Link></li>
                                                    <li className="menu-item"><Link href="/blog">Blog List</Link></li>
                                                    <li className="menu-item"><Link href="/blog-details">Blog Details</Link></li>
                                                    <li className="menu-item"><Link href="/vision-mission">Visions &amp; Mission</Link></li>
                                                    <li className="menu-item"><Link href="/help-center">Help Center</Link></li>
                                                    <li className="menu-item"><Link href="/parti-asset">Participants &amp; Assets</Link></li>
                                                    <li className="menu-item"><Link href="/advisor">Advisors &amp; Backers</Link></li>
                                                    <li className="menu-item"><Link href="/partner">Partners &amp; Investors</Link></li>
                                                </ul>
                                            </li> */}
                                            <li className="menu-item">
                                                <a onClick={(e) => scrolltoHash('about-section')}>About</a>
                                            </li>
                                            <li className="menu-item">
                                                <a onClick={(e) => scrolltoHash('features-section')}>Features</a>
                                            </li>
                                            <li className="menu-item">
                                                <a onClick={(e) => scrolltoHash('roadmap-section')}>RoadMap</a>
                                            </li>
                                            <li className="menu-item">
                                                <a onClick={(e) => scrolltoHash('team-section')}>Team</a>
                                            </li>
                                        </ul>
                                    </nav>

                                    <Link href="/contact" className="action-btn"><span>Get in touch</span></Link>
                                    <div className="mobile-button" onClick={handleMobileMenu}><span /></div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <MobileMenu isMobileMenu={isMobileMenu} />
            </header>

        </>
    )
}
