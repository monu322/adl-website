import Accordion from "@/components/elements/Accordion"
import Layout from "@/components/layout/Layout"
import BannerSlider3 from "@/components/slider/BannerSlider3"
import BrandSlider1 from "@/components/slider/BrandSlider1"
import ProjectSlider3 from "@/components/slider/ProjectSlider3"
import RoadmapSlider1 from "@/components/slider/RoadmapSlider1"
import TestimonialSlider1 from "@/components/slider/TestimonialSlider1"
import Link from "next/link"
export default function CoverFlowCarousel() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <section className="banner s3">
                        <div className="shape" />
                        <div className="shape right" />
                        <div className="shape s3 right" />
                        <div className="container big">
                            <div className="row">
                                <div className="col-xl-5 col-md-12">
                                    <div className="banner__left">
                                        <div className="block-text">
                                            <h2 className="heading">Discover and
                                                Collect Digital Art
                                                and <span className="arlo_tm_animation_text_word" />
                                            </h2>
                                            <p className="desc">Cyfonii is the premier marketplace for nifties, which are digital items you can truly own for yourself</p>
                                            <Link href="/contact" className="action-btn"><span>Explore Now</span></Link>
                                            <Link href="/contact" className="action-btn s1"><span>Create NFT’s</span></Link>
                                        </div>
                                        <div className="couter-list">
                                            <div className="couter-box">
                                                <h4 className="numb">52K<span>+</span></h4>
                                                <p>Artwork</p>
                                            </div>
                                            <div className="couter-box">
                                                <h4 className="numb">27K<span>+</span></h4>
                                                <p>Auction</p>
                                            </div>
                                            <div className="couter-box">
                                                <h4 className="numb">18K<span>+</span></h4>
                                                <p>Artist</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-md-12">
                                    <div className="right-c">
                                        <BannerSlider3 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* End Banner */}
                    {/* About */}
                    <section className="about s3">
                        <div className="shape" />
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-md-12">
                                    <div className="block-text pd-0">
                                        <h6 className="sub-heading"><span>About us</span></h6>
                                        <h3 className="heading wow" data-splitting>Hight Quality
                                            NFT Collections</h3>
                                        <p className="mb-17">Cyfonii is the premier marketplace for nifties, which are digital items you can truly own for yourself</p>
                                        <p className="mb-26">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat</p>
                                        <Link href="/about" className="action-btn"><span>More About Us</span></Link>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-12">
                                    <div className="about__right" data-aos="fade-left" data-aos-duration={2000}>
                                        <div className="card-box">
                                            <div className="top d-flex">
                                                <span className="icon-logo-01" />
                                                <div>
                                                    <h6>3D Digital Artwork</h6>
                                                    <h6 className="price">2.26 ETH</h6>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <div className="image">
                                                    <img src="/assets/images/layouts/banner-04.png" alt="" />
                                                </div>
                                                <div className="info d-flex">
                                                    <img src="/assets/images/layouts/avt-07.png" alt="" />
                                                    <div>
                                                        <h6 className="name">Leslie Alexander</h6>
                                                        <p>@leslie754</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-box sm">
                                            <div className="top d-flex">
                                                <span className="icon-logo-01" />
                                                <div>
                                                    <h6>3D Digital Artwork</h6>
                                                    <h6 className="price">2.26 ETH</h6>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <div className="image">
                                                    <img src="/assets/images/layouts/banner-05.png" alt="" />
                                                </div>
                                                <div className="info d-flex">
                                                    <img src="/assets/images/layouts/avt-07.png" alt="" />
                                                    <div>
                                                        <h6 className="name">Leslie Alexander</h6>
                                                        <p>@leslie754</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* End About */}
                    {/* token */}
                    <section className="token">
                        <div className="shape" />
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-md-12">
                                    <div className="block-text pd-0">
                                        <h6 className="sub-heading"><span>Token Information</span></h6>
                                        <h3 className="heading wow" data-splitting>Here’s what you
                                            need to know
                                            about NFT</h3>
                                        <p className="mb-17">Sunt in culpa qui officia dese runt mollit anim id est laborum velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat</p>
                                        <Link href="#" className="action-btn"><span>Buy Token</span></Link>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-12">
                                    <div className="token__main" data-aos="fade-left" data-aos-duration={2000}>
                                        <ul className="token-list">
                                            <li>
                                                <div className="name">
                                                    <svg width={12} height={16} viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.49933 4C8.49933 4.66304 8.23594 5.29893 7.7671 5.76777C7.29826 6.23661 6.66237 6.5 5.99933 6.5C5.33629 6.5 4.70041 6.23661 4.23157 5.76777C3.76273 5.29893 3.49933 4.66304 3.49933 4C3.49933 3.33696 3.76273 2.70107 4.23157 2.23223C4.70041 1.76339 5.33629 1.5 5.99933 1.5C6.66237 1.5 7.29826 1.76339 7.7671 2.23223C8.23594 2.70107 8.49933 3.33696 8.49933 4V4ZM1 13.412C1.02142 12.1002 1.55756 10.8494 2.49278 9.92936C3.42801 9.00929 4.68739 8.49365 5.99933 8.49365C7.31127 8.49365 8.57066 9.00929 9.50588 9.92936C10.4411 10.8494 10.9772 12.1002 10.9987 13.412C9.43026 14.1312 7.72477 14.5023 5.99933 14.5C4.21533 14.5 2.522 14.1107 1 13.412Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <p>Name</p></div>
                                                <h6>Al Mahmud</h6>
                                            </li>
                                            <li>
                                                <div className="name">
                                                    <svg width={12} height={16} viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.49933 4C8.49933 4.66304 8.23594 5.29893 7.7671 5.76777C7.29826 6.23661 6.66237 6.5 5.99933 6.5C5.33629 6.5 4.70041 6.23661 4.23157 5.76777C3.76273 5.29893 3.49933 4.66304 3.49933 4C3.49933 3.33696 3.76273 2.70107 4.23157 2.23223C4.70041 1.76339 5.33629 1.5 5.99933 1.5C6.66237 1.5 7.29826 1.76339 7.7671 2.23223C8.23594 2.70107 8.49933 3.33696 8.49933 4V4ZM1 13.412C1.02142 12.1002 1.55756 10.8494 2.49278 9.92936C3.42801 9.00929 4.68739 8.49365 5.99933 8.49365C7.31127 8.49365 8.57066 9.00929 9.50588 9.92936C10.4411 10.8494 10.9772 12.1002 10.9987 13.412C9.43026 14.1312 7.72477 14.5023 5.99933 14.5C4.21533 14.5 2.522 14.1107 1 13.412Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <p>Flatform</p></div>
                                                <h6>Cyfonii</h6>
                                            </li>
                                            <li>
                                                <div className="name">
                                                    <svg width={12} height={16} viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.49933 4C8.49933 4.66304 8.23594 5.29893 7.7671 5.76777C7.29826 6.23661 6.66237 6.5 5.99933 6.5C5.33629 6.5 4.70041 6.23661 4.23157 5.76777C3.76273 5.29893 3.49933 4.66304 3.49933 4C3.49933 3.33696 3.76273 2.70107 4.23157 2.23223C4.70041 1.76339 5.33629 1.5 5.99933 1.5C6.66237 1.5 7.29826 1.76339 7.7671 2.23223C8.23594 2.70107 8.49933 3.33696 8.49933 4V4ZM1 13.412C1.02142 12.1002 1.55756 10.8494 2.49278 9.92936C3.42801 9.00929 4.68739 8.49365 5.99933 8.49365C7.31127 8.49365 8.57066 9.00929 9.50588 9.92936C10.4411 10.8494 10.9772 12.1002 10.9987 13.412C9.43026 14.1312 7.72477 14.5023 5.99933 14.5C4.21533 14.5 2.522 14.1107 1 13.412Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <p>Total Supply</p></div>
                                                <h6>100'000tokens</h6>
                                            </li>
                                            <li>
                                                <div className="name">
                                                    <svg width={12} height={16} viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.49933 4C8.49933 4.66304 8.23594 5.29893 7.7671 5.76777C7.29826 6.23661 6.66237 6.5 5.99933 6.5C5.33629 6.5 4.70041 6.23661 4.23157 5.76777C3.76273 5.29893 3.49933 4.66304 3.49933 4C3.49933 3.33696 3.76273 2.70107 4.23157 2.23223C4.70041 1.76339 5.33629 1.5 5.99933 1.5C6.66237 1.5 7.29826 1.76339 7.7671 2.23223C8.23594 2.70107 8.49933 3.33696 8.49933 4V4ZM1 13.412C1.02142 12.1002 1.55756 10.8494 2.49278 9.92936C3.42801 9.00929 4.68739 8.49365 5.99933 8.49365C7.31127 8.49365 8.57066 9.00929 9.50588 9.92936C10.4411 10.8494 10.9772 12.1002 10.9987 13.412C9.43026 14.1312 7.72477 14.5023 5.99933 14.5C4.21533 14.5 2.522 14.1107 1 13.412Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <p>ICO supply</p></div>
                                                <h6>60'000 tokens</h6>
                                            </li>
                                            <li>
                                                <div className="name">
                                                    <svg width={12} height={16} viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.49933 4C8.49933 4.66304 8.23594 5.29893 7.7671 5.76777C7.29826 6.23661 6.66237 6.5 5.99933 6.5C5.33629 6.5 4.70041 6.23661 4.23157 5.76777C3.76273 5.29893 3.49933 4.66304 3.49933 4C3.49933 3.33696 3.76273 2.70107 4.23157 2.23223C4.70041 1.76339 5.33629 1.5 5.99933 1.5C6.66237 1.5 7.29826 1.76339 7.7671 2.23223C8.23594 2.70107 8.49933 3.33696 8.49933 4V4ZM1 13.412C1.02142 12.1002 1.55756 10.8494 2.49278 9.92936C3.42801 9.00929 4.68739 8.49365 5.99933 8.49365C7.31127 8.49365 8.57066 9.00929 9.50588 9.92936C10.4411 10.8494 10.9772 12.1002 10.9987 13.412C9.43026 14.1312 7.72477 14.5023 5.99933 14.5C4.21533 14.5 2.522 14.1107 1 13.412Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <p>Token Price</p></div>
                                                <h6>0.25€ / 0.29 USD</h6>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* End token */}
                    <section className="project s3">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="block-text center">
                                        <h6 className="sub-heading"><span>NFT Portfolio Collections</span></h6>
                                        <h3 className="heading wow" data-splitting>Checkout Our NFT <br />
                                            Collections</h3>
                                    </div>
                                    <ProjectSlider3 />
                                    <div className="brands s3 block-text center pd-0">
                                        <h6 className="sub-heading"><span>We Are Partnered with Top Brands</span></h6>
                                        <div className="swiper brands-swiper">
                                            <BrandSlider1 />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="roadmap s2">
                        <div className="shape right" />
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="block-text center">
                                        <h6 className="sub-heading"><span>Road Map</span></h6>
                                        <h3 className="heading wow" data-splitting>The Journey of NFT
                                            <br />
                                            Portfolio</h3>
                                    </div>
                                    <div className="roadmap__main s1">
                                        <RoadmapSlider1 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="team s2">
                        <div className="shape" />
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="block-text center">
                                        <h6 className="sub-heading"><span>Team Members</span></h6>
                                        <h3 className="heading wow" data-splitting>Our Amazing Team
                                            <br />
                                            Members</h3>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="team-box">
                                        <div className="image">
                                            <Link href="/team"><img src="/assets/images/layouts/team-01.png" alt="" /></Link>
                                            <ul className="list-social">
                                                <li><Link href="#">
                                                    <span className="icon-facebook" />
                                                </Link></li>
                                                <li><Link href="#">
                                                    <span className="icon-twiter" />
                                                </Link></li>
                                                <li><Link href="#">
                                                    <span className="icon-plan" />
                                                </Link></li>
                                            </ul>
                                        </div>
                                        <div className="content">
                                            <Link href="/team" className="h5 name">Jane Cooper</Link>
                                            <p className="postion">
                                                Founder &amp; CEO
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="team-box">
                                        <div className="image">
                                            <Link href="/team"><img src="/assets/images/layouts/team-02.png" alt="" /></Link>
                                            <ul className="list-social">
                                                <li><Link href="#">
                                                    <span className="icon-facebook" />
                                                </Link></li>
                                                <li><Link href="#">
                                                    <span className="icon-twiter" />
                                                </Link></li>
                                                <li><Link href="#">
                                                    <span className="icon-plan" />
                                                </Link></li>
                                            </ul>
                                        </div>
                                        <div className="content">
                                            <Link href="/team" className="h5 name">Jenny Wilson</Link>
                                            <p className="postion">
                                                Designer
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="team-box">
                                        <div className="image">
                                            <Link href="/team"><img src="/assets/images/layouts/team-03.png" alt="" /></Link>
                                            <ul className="list-social">
                                                <li><Link href="#">
                                                    <span className="icon-facebook" />
                                                </Link></li>
                                                <li><Link href="#">
                                                    <span className="icon-twiter" />
                                                </Link></li>
                                                <li><Link href="#">
                                                    <span className="icon-plan" />
                                                </Link></li>
                                            </ul>
                                        </div>
                                        <div className="content">
                                            <Link href="/team" className="h5 name">Bobby Fischer</Link>
                                            <p className="postion">
                                                Designer
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="team-box">
                                        <div className="image">
                                            <Link href="/team"><img src="/assets/images/layouts/team-04.png" alt="" /></Link>
                                            <ul className="list-social">
                                                <li><Link href="#">
                                                    <span className="icon-facebook" />
                                                </Link></li>
                                                <li><Link href="#">
                                                    <span className="icon-twiter" />
                                                </Link></li>
                                                <li><Link href="#">
                                                    <span className="icon-plan" />
                                                </Link></li>
                                            </ul>
                                        </div>
                                        <div className="content">
                                            <Link href="/team" className="h5 name">Jenny Wilson</Link>
                                            <p className="postion">
                                                Designer
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="team-box">
                                        <div className="image">
                                            <Link href="/team"><img src="/assets/images/layouts/team-05.png" alt="" /></Link>
                                            <ul className="list-social">
                                                <li><Link href="#">
                                                    <span className="icon-facebook" />
                                                </Link></li>
                                                <li><Link href="#">
                                                    <span className="icon-twiter" />
                                                </Link></li>
                                                <li><Link href="#">
                                                    <span className="icon-plan" />
                                                </Link></li>
                                            </ul>
                                        </div>
                                        <div className="content">
                                            <Link href="/team" className="h5 name">Courtney Henry</Link>
                                            <p className="postion">
                                                Designer
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="team-box">
                                        <div className="image">
                                            <Link href="/team"><img src="/assets/images/layouts/team-06.png" alt="" /></Link>
                                            <ul className="list-social">
                                                <li><Link href="#">
                                                    <span className="icon-facebook" />
                                                </Link></li>
                                                <li><Link href="#">
                                                    <span className="icon-twiter" />
                                                </Link></li>
                                                <li><Link href="#">
                                                    <span className="icon-plan" />
                                                </Link></li>
                                            </ul>
                                        </div>
                                        <div className="content">
                                            <Link href="/team" className="h5 name">Bobby Fischer</Link>
                                            <p className="postion">
                                                Designer
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="team-box">
                                        <div className="image">
                                            <Link href="/team"><img src="/assets/images/layouts/team-07.png" alt="" /></Link>
                                            <ul className="list-social">
                                                <li><Link href="#">
                                                    <span className="icon-facebook" />
                                                </Link></li>
                                                <li><Link href="#">
                                                    <span className="icon-twiter" />
                                                </Link></li>
                                                <li><Link href="#">
                                                    <span className="icon-plan" />
                                                </Link></li>
                                            </ul>
                                        </div>
                                        <div className="content">
                                            <Link href="/team" className="h5 name">Devon Lane</Link>
                                            <p className="postion">
                                                Designer
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="speciality s1">
                        <div className="shape right" />
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="block-text center">
                                        <h6 className="sub-heading"><span>Technology</span></h6>
                                        <h3 className="heading wow" data-splitting>Cyfonii unique
                                            <br />
                                            Technology</h3>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-duration={2000}>
                                    <div className="speciality-box">
                                        <div className="icon">
                                            <svg width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M25.4995 11.1667H14.666V10.0001C14.666 4.84542 18.8447 0.666748 23.9994 0.666748H37.9994C43.1539 0.666748 47.3327 4.84542 47.3327 10.0001V24.0001C47.3327 29.1546 43.1539 33.3334 37.9994 33.3334H36.8327V22.5C36.8327 16.2409 31.7586 11.1667 25.4995 11.1667ZM9.99935 47.3334H23.9994C29.1539 47.3334 33.3327 43.1547 33.3327 38.0001V24.0001C33.3327 18.8454 29.1539 14.6667 23.9994 14.6667H9.99935C4.84469 14.6667 0.666016 18.8454 0.666016 24.0001V38.0001C0.666016 43.1547 4.84469 47.3334 9.99935 47.3334ZM25.1518 25.0165C25.8791 25.6528 25.9528 26.7586 25.3163 27.4859L18.6199 35.139C17.181 36.7835 14.7024 37.0035 12.996 35.6385L8.90614 32.3667C8.15142 31.7628 8.02906 30.6615 8.63283 29.9069C9.23658 29.1521 10.3378 29.0298 11.0926 29.6337L15.1825 32.9055C15.4262 33.1006 15.7803 33.069 15.9859 32.8341L22.6824 25.181C23.3187 24.4537 24.4243 24.3799 25.1518 25.0165Z" fill="url(#paint0_linear_939_616)" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_939_616" x1="23.9993" y1="0.666748" x2="23.9993" y2="47.3334" gradientUnits="userSpaceOnUse">
                                                        <stop offset={1} stopColor="white" />
                                                        <stop offset={1} stopColor="white" stopOpacity="0.5" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <h5 className="title">Safe
                                            Database</h5>
                                        <p>Oficia dese runt mollit anim id est labo met, consectetur adipis</p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-duration={2400}>
                                    <div className="speciality-box">
                                        <div className="icon">
                                            <svg width={48} height={42} viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M39.2612 1.68623L46.0794 9.45348C47.6617 11.256 47.7559 13.9428 46.3037 15.8544L27.9319 40.0393C25.9458 42.6536 22.0529 42.6536 20.0667 40.0393L1.6949 15.8544C0.242769 13.9428 0.33692 11.256 1.91922 9.45348L8.73743 1.68623C9.67896 0.613667 11.0285 0 12.4457 0H19.5891H28.9607H35.5531C36.9701 0 38.3197 0.613667 39.2612 1.68623Z" fill="url(#paint0_linear_939_5927)" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_939_5927" x1="23.9993" y1={0} x2="23.9993" y2={42} gradientUnits="userSpaceOnUse">
                                                        <stop offset={1} stopColor="white" />
                                                        <stop offset={1} stopColor="white" stopOpacity="0.5" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <h5 className="title">Non-fungible token</h5>
                                        <p>Oficia dese runt mollit anim id est labo met, consectetur adipis</p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-duration={2800}>
                                    <div className="speciality-box">
                                        <div className="icon">
                                            <svg width={48} height={42} viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.99935 4.66667C9.99935 2.08934 12.0887 0 14.666 0H33.3327C35.9101 0 37.9994 2.08934 37.9994 4.66667V7H9.99935V4.66667ZM5.33268 15.1667C5.33268 12.5893 7.42202 10.5 9.99935 10.5H37.9994C40.5768 10.5 42.666 12.5893 42.666 15.1667V17.5H5.33268V15.1667ZM0.666016 25.6667C0.666016 23.0893 2.75535 21 5.33268 21H42.666C45.2434 21 47.3327 23.0893 47.3327 25.6667V32.6667C47.3327 37.8212 43.1539 42 37.9994 42H9.99935C4.84469 42 0.666016 37.8212 0.666016 32.6667V25.6667ZM17.5827 28C17.5827 27.0335 18.3662 26.25 19.3327 26.25H28.666C29.6325 26.25 30.416 27.0335 30.416 28C30.416 28.9665 29.6325 29.75 28.666 29.75H19.3327C18.3662 29.75 17.5827 28.9665 17.5827 28Z" fill="url(#paint0_linear_939_156)" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_939_156" x1="23.9993" y1={0} x2="23.9993" y2={42} gradientUnits="userSpaceOnUse">
                                                        <stop offset={1} stopColor="white" />
                                                        <stop offset={1} stopColor="white" stopOpacity="0.5" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <h5 className="title">verify
                                            payment</h5>
                                        <p>Oficia dese runt mollit anim id est labo met, consectetur adipis</p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-duration={3000}>
                                    <div className="speciality-box">
                                        <div className="icon">
                                            <svg width={42} height={48} viewBox="0 0 42 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M42 19.6841V37.9226C42 43.1201 37.8212 47.3334 32.6667 47.3334H9.33333C4.17867 47.3334 0 43.1201 0 37.9226V19.6841C0 16.8586 1.25916 14.1826 3.42967 12.3953L15.0963 2.78856C18.532 -0.0405116 23.468 -0.040535 26.9036 2.78856L38.5702 12.3953C40.7409 14.1826 42 16.8586 42 19.6841ZM28.5833 36.2501V41.5001C28.5833 42.7888 27.5387 43.8334 26.25 43.8334H15.75C14.4613 43.8334 13.4167 42.7888 13.4167 41.5001V36.2501C13.4167 32.062 16.8119 28.6667 21 28.6667C25.1881 28.6667 28.5833 32.062 28.5833 36.2501Z" fill="url(#paint0_linear_939_899)" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_939_899" x1={21} y1="0.666748" x2={21} y2="47.3334" gradientUnits="userSpaceOnUse">
                                                        <stop offset={1} stopColor="white" />
                                                        <stop offset={1} stopColor="white" stopOpacity="0.5" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <h5 className="title">Timestamp server</h5>
                                        <p>Oficia dese runt mollit anim id est labo met, consectetur adipis</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="testimonials s3">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="testimonials__main">
                                        <div className="block-text center">
                                            <h6 className="sub-heading"><span>Testimonials</span></h6>
                                            <h3 className="heading wow" data-splitting>What People Say <br />
                                                About us
                                            </h3>
                                        </div>
                                        <div className="swiper testimonials-swiper">
                                            <TestimonialSlider1 />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="couter">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="couter__main">
                                        <div className="couter-list">
                                            <div className="couter-box">
                                                <div className="icon">
                                                    <svg width={35} height={31} viewBox="0 0 35 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.5 12.1738C20.6907 12.1738 23.2773 9.58722 23.2773 6.39648C23.2773 3.20575 20.6907 0.619141 17.5 0.619141C14.3093 0.619141 11.7227 3.20575 11.7227 6.39648C11.7227 9.58722 14.3093 12.1738 17.5 12.1738Z" fill="url(#paint0_linear_1065_853)" />
                                                        <path d="M29.1875 12.1738C31.2046 12.1738 32.8398 10.5386 32.8398 8.52148C32.8398 6.50435 31.2046 4.86914 29.1875 4.86914C27.1704 4.86914 25.5352 6.50435 25.5352 8.52148C25.5352 10.5386 27.1704 12.1738 29.1875 12.1738Z" fill="url(#paint1_linear_1065_853)" />
                                                        <path d="M5.8125 12.1738C7.82963 12.1738 9.46484 10.5386 9.46484 8.52148C9.46484 6.50435 7.82963 4.86914 5.8125 4.86914C3.79537 4.86914 2.16016 6.50435 2.16016 8.52148C2.16016 10.5386 3.79537 12.1738 5.8125 12.1738Z" fill="url(#paint2_linear_1065_853)" />
                                                        <path d="M9.41105 15.4536C7.97336 14.2757 6.67133 14.4316 5.00898 14.4316C2.52273 14.4316 0.5 16.4424 0.5 18.9134V26.1656C0.5 27.2387 1.3759 28.1113 2.45301 28.1113C7.10317 28.1113 6.54297 28.1955 6.54297 27.9108C6.54297 22.7719 5.93429 19.0032 9.41105 15.4536Z" fill="url(#paint3_linear_1065_853)" />
                                                        <path d="M19.0806 14.4582C16.177 14.2161 13.6533 14.461 11.4764 16.2579C7.83357 19.1757 8.53462 23.1045 8.53462 27.9108C8.53462 29.1824 9.56923 30.2364 10.8602 30.2364C24.8773 30.2364 25.4352 30.6885 26.2664 28.8478C26.539 28.2253 26.4643 28.4231 26.4643 22.4682C26.4643 17.7383 22.3688 14.4582 19.0806 14.4582Z" fill="url(#paint4_linear_1065_853)" />
                                                        <path d="M29.9919 14.4315C28.3205 14.4315 27.0256 14.2771 25.5898 15.4535C29.0406 18.9767 28.4579 22.4882 28.4579 27.9106C28.4579 28.1971 27.9929 28.1112 32.4782 28.1112C33.5938 28.1112 34.5009 27.2074 34.5009 26.0964V18.9132C34.5009 16.4423 32.4782 14.4315 29.9919 14.4315Z" fill="url(#paint5_linear_1065_853)" />
                                                        <defs>
                                                            <linearGradient id="paint0_linear_1065_853" x1="30.7502" y1="-16.0273" x2="4.99287" y2="-13.4479" gradientUnits="userSpaceOnUse">
                                                                <stop offset="0.164688" stopColor="#DEC7FF" />
                                                                <stop offset="0.855177" stopColor="#5C27FE" />
                                                            </linearGradient>
                                                            <linearGradient id="paint1_linear_1065_853" x1="37.5641" y1="-5.65446" x2="21.2807" y2="-4.02384" gradientUnits="userSpaceOnUse">
                                                                <stop offset="0.164688" stopColor="#DEC7FF" />
                                                                <stop offset="0.855177" stopColor="#5C27FE" />
                                                            </linearGradient>
                                                            <linearGradient id="paint2_linear_1065_853" x1="14.1891" y1="-5.65446" x2="-2.09431" y2="-4.02384" gradientUnits="userSpaceOnUse">
                                                                <stop offset="0.164688" stopColor="#DEC7FF" />
                                                                <stop offset="0.855177" stopColor="#5C27FE" />
                                                            </linearGradient>
                                                            <linearGradient id="paint3_linear_1065_853" x1="15.1742" y1="-5.30959" x2="-4.80447" y2="-4.0081" gradientUnits="userSpaceOnUse">
                                                                <stop offset="0.164688" stopColor="#DEC7FF" />
                                                                <stop offset="0.855177" stopColor="#5C27FE" />
                                                            </linearGradient>
                                                            <linearGradient id="paint4_linear_1065_853" x1="38.1106" y1="-8.53467" x2="-1.88821" y2="-4.00346" gradientUnits="userSpaceOnUse">
                                                                <stop offset="0.164688" stopColor="#DEC7FF" />
                                                                <stop offset="0.855177" stopColor="#5C27FE" />
                                                            </linearGradient>
                                                            <linearGradient id="paint5_linear_1065_853" x1="40.264" y1="-5.31003" x2="20.2854" y2="-4.00857" gradientUnits="userSpaceOnUse">
                                                                <stop offset="0.164688" stopColor="#DEC7FF" />
                                                                <stop offset="0.855177" stopColor="#5C27FE" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <h4 className="numb">100K</h4>
                                                <p>Registered User</p>
                                            </div>
                                            <div className="couter-box">
                                                <div className="icon">
                                                    <svg width={34} height={35} viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_1065_867)">
                                                            <path d="M8.85351 25.31C6.58552 25.31 4.56812 23.8578 3.83556 21.696L3.78602 21.5331C3.61325 20.9605 3.54088 20.4791 3.54088 19.9974V10.3381L0.104009 21.8106C-0.338018 23.498 0.669255 25.2475 2.35928 25.7136L24.2658 31.5804C24.5393 31.6512 24.8127 31.6852 25.0819 31.6852C26.4928 31.6852 27.7821 30.7487 28.1434 29.3687L29.4197 25.31H8.85351Z" fill="black" />
                                                            <path d="M8.85351 25.31C6.58552 25.31 4.56812 23.8578 3.83556 21.696L3.78602 21.5331C3.61325 20.9605 3.54088 20.4791 3.54088 19.9974V10.3381L0.104009 21.8106C-0.338018 23.498 0.669255 25.2475 2.35928 25.7136L24.2658 31.5804C24.5393 31.6512 24.8127 31.6852 25.0819 31.6852C26.4928 31.6852 27.7821 30.7487 28.1434 29.3687L29.4197 25.31H8.85351Z" fill="url(#paint0_linear_1065_867)" />
                                                            <path d="M12.7515 10.4346C14.3141 10.4346 15.5847 9.16373 15.5847 7.60107C15.5847 6.03841 14.3141 4.76758 12.7515 4.76758C11.1888 4.76758 9.91797 6.03841 9.91797 7.60107C9.91797 9.16373 11.1888 10.4346 12.7515 10.4346Z" fill="black" />
                                                            <path d="M12.7515 10.4346C14.3141 10.4346 15.5847 9.16373 15.5847 7.60107C15.5847 6.03841 14.3141 4.76758 12.7515 4.76758C11.1888 4.76758 9.91797 6.03841 9.91797 7.60107C9.91797 9.16373 11.1888 10.4346 12.7515 10.4346Z" fill="url(#paint1_linear_1065_867)" />
                                                            <path d="M30.4562 0.517578H9.20573C7.2537 0.517578 5.66406 2.10722 5.66406 4.0595V19.643C5.66406 21.5953 7.2537 23.185 9.20573 23.185H30.4562C32.4085 23.185 33.9982 21.5953 33.9982 19.643V4.0595C33.9982 2.10722 32.4085 0.517578 30.4562 0.517578ZM9.20573 3.35107H30.4562C30.8474 3.35107 31.1647 3.66832 31.1647 4.0595V14.1167L26.6894 8.89457C26.2147 8.33788 25.5275 8.04035 24.7895 8.02348C24.0557 8.02764 23.3672 8.35345 22.8969 8.9174L17.6351 15.2329L15.921 13.5229C14.9521 12.554 13.3752 12.554 12.4076 13.5229L8.49755 17.4316V4.0595C8.49755 3.66832 8.8148 3.35107 9.20573 3.35107Z" fill="black" />
                                                            <path d="M30.4562 0.517578H9.20573C7.2537 0.517578 5.66406 2.10722 5.66406 4.0595V19.643C5.66406 21.5953 7.2537 23.185 9.20573 23.185H30.4562C32.4085 23.185 33.9982 21.5953 33.9982 19.643V4.0595C33.9982 2.10722 32.4085 0.517578 30.4562 0.517578ZM9.20573 3.35107H30.4562C30.8474 3.35107 31.1647 3.66832 31.1647 4.0595V14.1167L26.6894 8.89457C26.2147 8.33788 25.5275 8.04035 24.7895 8.02348C24.0557 8.02764 23.3672 8.35345 22.8969 8.9174L17.6351 15.2329L15.921 13.5229C14.9521 12.554 13.3752 12.554 12.4076 13.5229L8.49755 17.4316V4.0595C8.49755 3.66832 8.8148 3.35107 9.20573 3.35107Z" fill="url(#paint2_linear_1065_867)" />
                                                        </g>
                                                        <defs>
                                                            <linearGradient id="paint0_linear_1065_867" x1="48.4466" y1="-20.4157" x2="-16.5545" y2="-11.445" gradientUnits="userSpaceOnUse">
                                                                <stop offset="0.164688" stopColor="#DEC7FF" />
                                                                <stop offset="0.855177" stopColor="#5C27FE" />
                                                            </linearGradient>
                                                            <linearGradient id="paint1_linear_1065_867" x1="19.2496" y1="-3.39663" x2="6.61749" y2="-2.13171" gradientUnits="userSpaceOnUse">
                                                                <stop offset="0.164688" stopColor="#DEC7FF" />
                                                                <stop offset="0.855177" stopColor="#5C27FE" />
                                                            </linearGradient>
                                                            <linearGradient id="paint2_linear_1065_867" x1="52.323" y1="-32.1385" x2="-10.4878" y2="-24.2762" gradientUnits="userSpaceOnUse">
                                                                <stop offset="0.164688" stopColor="#DEC7FF" />
                                                                <stop offset="0.855177" stopColor="#5C27FE" />
                                                            </linearGradient>
                                                            <clipPath id="clip0_1065_867">
                                                                <rect width={34} height={34} fill="white" transform="translate(0 0.452148)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <h4 className="numb">5M</h4>
                                                <p>Total Assets</p>
                                            </div>
                                            <div className="couter-box">
                                                <div className="icon">
                                                    <svg width={34} height={35} viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.7711 4.90991C15.7711 3.80534 14.8711 2.89661 13.7752 3.035C6.00736 4.01597 0 10.6469 0 18.681C0 27.3911 7.06094 34.4521 15.7711 34.4521C23.8052 34.4521 30.4361 28.4447 31.4171 20.6769C31.5555 19.581 30.6467 18.681 29.5422 18.681H17.7711C16.6665 18.681 15.7711 17.7856 15.7711 16.681V4.90991Z" fill="black" />
                                                        <path d="M15.7711 4.90991C15.7711 3.80534 14.8711 2.89661 13.7752 3.035C6.00736 4.01597 0 10.6469 0 18.681C0 27.3911 7.06094 34.4521 15.7711 34.4521C23.8052 34.4521 30.4361 28.4447 31.4171 20.6769C31.5555 19.581 30.6467 18.681 29.5422 18.681H17.7711C16.6665 18.681 15.7711 17.7856 15.7711 16.681V4.90991Z" fill="url(#paint0_linear_1065_881)" />
                                                        <path d="M20.2224 0.577237C19.1266 0.438845 18.2266 1.34758 18.2266 2.45215V14.2232C18.2266 15.3278 19.122 16.2232 20.2266 16.2232H31.9976C33.1022 16.2232 34.011 15.3232 33.8726 14.2274C32.9741 7.11317 27.3366 1.47566 20.2224 0.577237Z" fill="black" />
                                                        <path d="M20.2224 0.577237C19.1266 0.438845 18.2266 1.34758 18.2266 2.45215V14.2232C18.2266 15.3278 19.122 16.2232 20.2266 16.2232H31.9976C33.1022 16.2232 34.011 15.3232 33.8726 14.2274C32.9741 7.11317 27.3366 1.47566 20.2224 0.577237Z" fill="url(#paint1_linear_1065_881)" />
                                                        <defs>
                                                            <linearGradient id="paint0_linear_1065_881" x1="51.9417" y1="-42.5317" x2="-18.3711" y2="-35.4906" gradientUnits="userSpaceOnUse">
                                                                <stop offset="0.164688" stopColor="#DEC7FF" />
                                                                <stop offset="0.855177" stopColor="#5C27FE" />
                                                            </linearGradient>
                                                            <linearGradient id="paint1_linear_1065_881" x1="44.1974" y1="-22.2687" x2="9.04102" y2="-18.7481" gradientUnits="userSpaceOnUse">
                                                                <stop offset="0.164688" stopColor="#DEC7FF" />
                                                                <stop offset="0.855177" stopColor="#5C27FE" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <h4 className="numb">10B</h4>
                                                <p>Yearly Trading</p>
                                            </div>
                                            <div className="image">
                                                <img src="/assets/images/layouts/couter.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="blog s3">
                        <div className="shape" />
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="block-text center">
                                        <h6 className="sub-heading"><span>From Our Blog</span></h6>
                                        <h3 className="heading wow" data-splitting>Read Our Recent <br />
                                            News &amp; Articles</h3>
                                    </div>
                                </div>
                                <div className="col-md-4" data-aos="fade-up" data-aos-duration={2000}>
                                    <div className="blog-box">
                                        <div className="image">
                                            <Link href="/blog-details"><img src="/assets/images/layouts/blog-01.png" alt="" /></Link>
                                        </div>
                                        <div className="content center">
                                            <div className="meta ">
                                                <p><svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.9375 0.75V2.0625M9.0625 0.75V2.0625M0.75 9.9375V3.375C0.75 3.0269 0.888281 2.69306 1.13442 2.44692C1.38056 2.20078 1.7144 2.0625 2.0625 2.0625H9.9375C10.2856 2.0625 10.6194 2.20078 10.8656 2.44692C11.1117 2.69306 11.25 3.0269 11.25 3.375V9.9375M0.75 9.9375C0.75 10.2856 0.888281 10.6194 1.13442 10.8656C1.38056 11.1117 1.7144 11.25 2.0625 11.25H9.9375C10.2856 11.25 10.6194 11.1117 10.8656 10.8656C11.1117 10.6194 11.25 10.2856 11.25 9.9375M0.75 9.9375V5.5625C0.75 5.2144 0.888281 4.88056 1.13442 4.63442C1.38056 4.38828 1.7144 4.25 2.0625 4.25H9.9375C10.2856 4.25 10.6194 4.38828 10.8656 4.63442C11.1117 4.88056 11.25 5.2144 11.25 5.5625V9.9375" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                    February 18, 2022</p>
                                            </div>
                                            <Link href="/blog-details" className="h5 title">NFTs worth $100 million stolen in the past year</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4" data-aos="fade-up" data-aos-duration={2400}>
                                    <div className="blog-box">
                                        <div className="image">
                                            <Link href="/blog-details"><img src="/assets/images/layouts/blog-02.png" alt="" /></Link>
                                        </div>
                                        <div className="content center">
                                            <div className="meta ">
                                                <p><svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.9375 0.75V2.0625M9.0625 0.75V2.0625M0.75 9.9375V3.375C0.75 3.0269 0.888281 2.69306 1.13442 2.44692C1.38056 2.20078 1.7144 2.0625 2.0625 2.0625H9.9375C10.2856 2.0625 10.6194 2.20078 10.8656 2.44692C11.1117 2.69306 11.25 3.0269 11.25 3.375V9.9375M0.75 9.9375C0.75 10.2856 0.888281 10.6194 1.13442 10.8656C1.38056 11.1117 1.7144 11.25 2.0625 11.25H9.9375C10.2856 11.25 10.6194 11.1117 10.8656 10.8656C11.1117 10.6194 11.25 10.2856 11.25 9.9375M0.75 9.9375V5.5625C0.75 5.2144 0.888281 4.88056 1.13442 4.63442C1.38056 4.38828 1.7144 4.25 2.0625 4.25H9.9375C10.2856 4.25 10.6194 4.38828 10.8656 4.63442C11.1117 4.88056 11.25 5.2144 11.25 5.5625V9.9375" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                    February 18, 2022</p>
                                            </div>
                                            <Link href="/blog-details" className="h5 title">This crypto startup is offering zero trading fees on crypto coins</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4" data-aos="fade-up" data-aos-duration={2800}>
                                    <div className="blog-box">
                                        <div className="image">
                                            <Link href="/blog-details"><img src="/assets/images/layouts/blog-03.png" alt="" /></Link>
                                        </div>
                                        <div className="content center">
                                            <div className="meta ">
                                                <p><svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.9375 0.75V2.0625M9.0625 0.75V2.0625M0.75 9.9375V3.375C0.75 3.0269 0.888281 2.69306 1.13442 2.44692C1.38056 2.20078 1.7144 2.0625 2.0625 2.0625H9.9375C10.2856 2.0625 10.6194 2.20078 10.8656 2.44692C11.1117 2.69306 11.25 3.0269 11.25 3.375V9.9375M0.75 9.9375C0.75 10.2856 0.888281 10.6194 1.13442 10.8656C1.38056 11.1117 1.7144 11.25 2.0625 11.25H9.9375C10.2856 11.25 10.6194 11.1117 10.8656 10.8656C11.1117 10.6194 11.25 10.2856 11.25 9.9375M0.75 9.9375V5.5625C0.75 5.2144 0.888281 4.88056 1.13442 4.63442C1.38056 4.38828 1.7144 4.25 2.0625 4.25H9.9375C10.2856 4.25 10.6194 4.38828 10.8656 4.63442C11.1117 4.88056 11.25 5.2144 11.25 5.5625V9.9375" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                    February 18, 2022</p>
                                            </div>
                                            <Link href="/blog-details" className="h5 title">Why NFTs do not give ownership rights to the holders</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="faq s3">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-md-12">
                                    <div className="block-text">
                                        <h6 className="sub-heading"><span>FAQs</span></h6>
                                        <h3 className="heading wow" data-splitting>Frequently
                                            <br />
                                            Aksed Questions</h3>
                                        <p>Below is a list of frequently asked questions and answers from partners and 3D artist. Please check this FAQ first before contacting us.</p>
                                    </div>
                                    <Accordion oneCol />
                                </div>
                                <div className="col-xl-6 col-md-12">
                                    <div className="image" data-aos="fade-left" data-aos-duration={2000}>
                                        <img src="/assets/images/layouts/img-faq.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}