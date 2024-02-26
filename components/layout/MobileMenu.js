
import Link from 'next/link'
import { useState } from 'react'
export default function MobileMenu({ showMobMenu, setShowMobMenu }) {

    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    // let's make a function that receive the specific element_id as string and scroll into that element_id
    const scrolltoHash = function (element_id) {

        setShowMobMenu(!showMobMenu)
        
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

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <nav id="main-nav-mobi" className="main-nav" style={{ display: `${showMobMenu ? "block" : "none"}` }}>
                <ul id="menu-primary-menu" className="menu">
                    {/* <li className="menu-item menu-item-has-children menu-current-item">
                        <Link href="/#">Home</Link>
                        <span className={isActive.key == 1 ? "arrow active" : "arrow"} onClick={() => handleToggle(1)} />
                        <ul className="sub-menu" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                            <li className="menu-item current-item"><Link href="/">Home v1</Link></li>
                            <li className="menu-item"><Link href="/home-v2">Home v2</Link></li>
                            <li className="menu-item"><Link href="/home-v3">Home v3</Link></li>
                            <li className="menu-item"><Link href="/cardcarousel">Card Carousel</Link></li>
                            <li className="menu-item"><Link href="/zigzagcarousel">Zigzag Carousel</Link>
                            </li>
                            <li className="menu-item"><Link href="/coverflowcarousel">Coverflow
                                Carousel</Link></li>
                            <li className="menu-item"><Link href="/itemcarousel">Item Carousel</Link></li>
                            <li className="menu-item"><Link href="/3dcarousel">3D Carousel</Link></li>
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
        </>
    )
}
