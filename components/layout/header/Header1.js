import Link from "next/link"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, big }) {
    return (
        <>
            <header id="header_main" className={`header ${scroll ? "is-fixed is-small" : ""}`}>
                <div className={`container ${big ? "big" : ""}`}>
                    <div className="row">
                        <div className="col-12">
                            <div className="header__body">
                                <div className="header__logo">
                                    <Link href="/">
                                        <img id="site-logo" src="/assets/images/logo/logo.png" alt="Peson" width={160} height={38} data-retina="assets/images/logo/logo@2x.png" data-width={160} data-height={38} />
                                    </Link>
                                </div>
                                <div className="header__right">
                                    <nav id="main-nav" className="main-nav">
                                        <ul id="menu-primary-menu" className="menu">
                                            <li className="menu-item menu-current-item">
                                                <Link href="#">Home</Link>
                                                {/* <ul className="sub-menu">
                                                    <li className="menu-item current-item"><Link href="/">Home v1</Link></li>
                                                    <li className="menu-item"><Link href="/home-v2">Home v2</Link></li>
                                                    <li className="menu-item"><Link href="/home-v3">Home v3</Link></li>
                                                    <li className="menu-item"><Link href="/cardcarousel">Card Carousel</Link></li>
                                                    <li className="menu-item"><Link href="/zigzagcarousel">Zigzag Carousel</Link></li>
                                                    <li className="menu-item"><Link href="/coverflowcarousel">Coverflow Carousel</Link></li>
                                                    <li className="menu-item"><Link href="/itemcarousel">Item Carousel</Link></li>
                                                    <li className="menu-item"><Link href="/3dcarousel">3D Carousel</Link></li>
                                                </ul> */}
                                            </li>
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
                                                <Link href="/about">About</Link>
                                            </li>
                                            <li className="menu-item">
                                                <Link href="/about">Features</Link>
                                            </li>
                                            <li className="menu-item">
                                                <Link href="/roadmap">RoadMap</Link>
                                            </li>
                                            <li className="menu-item">
                                                <Link href="/team">Team</Link>
                                            </li>
                                            <li className="menu-item">
                                                <Link href="/team">Careers</Link>
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
