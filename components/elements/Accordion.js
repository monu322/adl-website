import { useState } from 'react'
export default function Accordion({oneCol}) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

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

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <div className="faq__main flat-tabs" data-aos="fade-up" data-aos-duration={3000}>
                <ul className="menu-tab">
                    <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "active" : ""}><h6 className="fs-14">Cryptocurrency</h6></li>
                    <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "active" : ""}> <h6 className="fs-14">NFT Token</h6></li>
                    <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "active" : ""}><h6 className="fs-14">Collection</h6></li>
                    <li onClick={() => handleOnClick(4)} className={activeIndex === 4 ? "active" : ""}><h6 className="fs-14">Crypto Trading</h6></li>
                </ul>
                <div className="content-tab">
                    <div className="content-inner"style={{ display: `${activeIndex == 1 ? "block" : "none"}` }}>
                        <div className="flat-accordion row">
                            <div className={`col-md-6 ${oneCol?"col-md-12":"col-sm-12"} `}>
                                <div className={isActive.key == 1 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(1)}>
                                    <h6 className={isActive.key == 1 ? "toggle-title active" : "toggle-title"}><span>01.</span> When the musics over turn off the light? <span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Tellus aliquam parturient erat id vel, condimentum a,
                                            hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                            Egestas feugiat gravida in imperdiet facilisi tortor ac
                                            ultrices venenatis.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 2 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(2)}>
                                    <h6 className={isActive.key == 2 ? "toggle-title active" : "toggle-title"}><span>02.</span> What is the best way to collect NFT?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Tellus aliquam parturient erat id vel, condimentum a,
                                            hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                            Egestas feugiat gravida in imperdiet facilisi tortor ac
                                            ultrices venenatis.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 3 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(3)}>
                                    <h6 className={isActive.key == 3 ? "toggle-title active" : "toggle-title"}><span>03.</span> What is the best way to collect NFT?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Tellus aliquam parturient erat id vel, condimentum a,
                                            hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                            Egestas feugiat gravida in imperdiet facilisi tortor ac
                                            ultrices venenatis.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 4 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(4)}>
                                    <h6 className={isActive.key == 4 ? "toggle-title active" : "toggle-title"}><span>04.</span> What is the best way to collect NFT?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Tellus aliquam parturient erat id vel, condimentum a,
                                            hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                            Egestas feugiat gravida in imperdiet facilisi tortor ac
                                            ultrices venenatis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={`col-md-6 ${oneCol?"col-md-12":"col-sm-12"} `}>
                                <div className={isActive.key == 5 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(5)}>
                                    <h6 className={isActive.key == 5 ? "toggle-title active" : "toggle-title"}><span>05.</span> When the musics over turn off the light? <span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Tellus aliquam parturient erat id vel, condimentum a,
                                            hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                            Egestas feugiat gravida in imperdiet facilisi tortor ac
                                            ultrices venenatis.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 6 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(6)}>
                                    <h6 className={isActive.key == 6 ? "toggle-title active" : "toggle-title"}><span>06.</span> What is the best way to collect NFT?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Tellus aliquam parturient erat id vel, condimentum a,
                                            hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                            Egestas feugiat gravida in imperdiet facilisi tortor ac
                                            ultrices venenatis.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 7 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(7)}>
                                    <h6 className={isActive.key == 7 ? "toggle-title active" : "toggle-title"}><span>07.</span> What is the best way to collect NFT?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Tellus aliquam parturient erat id vel, condimentum a,
                                            hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                            Egestas feugiat gravida in imperdiet facilisi tortor ac
                                            ultrices venenatis.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 8 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(8)}>
                                    <h6 className={isActive.key == 8 ? "toggle-title active" : "toggle-title"}><span>08.</span> What is the best way to collect NFT?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 8 ? "block" : "none"}` }}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Tellus aliquam parturient erat id vel, condimentum a,
                                            hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                            Egestas feugiat gravida in imperdiet facilisi tortor ac
                                            ultrices venenatis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-inner"style={{ display: `${activeIndex == 2 ? "block" : "none"}` }}>
                        <div className="flat-accordion row">
                            <div className={`col-md-6 ${oneCol?"col-md-12":"col-sm-12"} `}>
                                <div className={isActive.key == 9 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(9)}>
                                    <h6 className={isActive.key == 9 ? "toggle-title active" : "toggle-title"}><span>01.</span> When the musics over turn off the light? <span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 9 ? "block" : "none"}` }}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Tellus aliquam parturient erat id vel, condimentum a,
                                            hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                            Egestas feugiat gravida in imperdiet facilisi tortor ac
                                            ultrices venenatis.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 10 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(10)}>
                                    <h6 className={isActive.key == 10 ? "toggle-title active" : "toggle-title"}><span>02.</span> What is the best way to collect NFT?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 10 ? "block" : "none"}` }}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Tellus aliquam parturient erat id vel, condimentum a,
                                            hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                            Egestas feugiat gravida in imperdiet facilisi tortor ac
                                            ultrices venenatis.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 11 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(11)}>
                                    <h6 className={isActive.key == 11 ? "toggle-title active" : "toggle-title"}><span>03.</span> What is the best way to collect NFT?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 11 ? "block" : "none"}` }}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Tellus aliquam parturient erat id vel, condimentum a,
                                            hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                            Egestas feugiat gravida in imperdiet facilisi tortor ac
                                            ultrices venenatis.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 12 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(12)}>
                                    <h6 className={isActive.key == 12 ? "toggle-title active" : "toggle-title"}><span>04.</span> What is the best way to collect NFT?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 12 ? "block" : "none"}` }}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Tellus aliquam parturient erat id vel, condimentum a,
                                            hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                            Egestas feugiat gravida in imperdiet facilisi tortor ac
                                            ultrices venenatis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={`col-md-6 ${oneCol?"col-md-12":"col-sm-12"} `}>
                                <div className={isActive.key == 13 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(13)}>
                                    <h6 className={isActive.key == 13 ? "toggle-title active" : "toggle-title"}><span>05.</span> When the musics over turn off the light? <span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 13 ? "block" : "none"}` }}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Tellus aliquam parturient erat id vel, condimentum a,
                                            hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                            Egestas feugiat gravida in imperdiet facilisi tortor ac
                                            ultrices venenatis.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 14 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(14)}>
                                    <h6 className={isActive.key == 14 ? "toggle-title active" : "toggle-title"}><span>06.</span> What is the best way to collect NFT?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 14 ? "block" : "none"}` }}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Tellus aliquam parturient erat id vel, condimentum a,
                                            hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                            Egestas feugiat gravida in imperdiet facilisi tortor ac
                                            ultrices venenatis.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 15 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(15)}>
                                    <h6 className={isActive.key == 15 ? "toggle-title active" : "toggle-title"}><span>07.</span> What is the best way to collect NFT?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 15 ? "block" : "none"}` }}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Tellus aliquam parturient erat id vel, condimentum a,
                                            hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                            Egestas feugiat gravida in imperdiet facilisi tortor ac
                                            ultrices venenatis.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 16 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(16)}>
                                    <h6 className={isActive.key == 16 ? "toggle-title active" : "toggle-title"}><span>08.</span> What is the best way to collect NFT?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 16 ? "block" : "none"}` }}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Tellus aliquam parturient erat id vel, condimentum a,
                                            hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                            Egestas feugiat gravida in imperdiet facilisi tortor ac
                                            ultrices venenatis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-inner"style={{ display: `${activeIndex == 3 ? "block" : "none"}` }}>
                        <div className="flat-accordion row">
                            <div className={`col-md-6 ${oneCol?"col-md-12":"col-sm-12"} `}>
                                <div className={isActive.key == 17 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(17)}>
                                    <h6 className={isActive.key == 17 ? "toggle-title active" : "toggle-title"}><span>01.</span> When the musics over turn off the light? <span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 17 ? "block" : "none"}` }}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Tellus aliquam parturient erat id vel, condimentum a,
                                            hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                            Egestas feugiat gravida in imperdiet facilisi tortor ac
                                            ultrices venenatis.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 18 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(18)}>
                                    <h6 className={isActive.key == 18 ? "toggle-title active" : "toggle-title"}><span>02.</span> What is the best way to collect NFT?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 18 ? "block" : "none"}` }}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Tellus aliquam parturient erat id vel, condimentum a,
                                            hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                            Egestas feugiat gravida in imperdiet facilisi tortor ac
                                            ultrices venenatis.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 19 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(19)}>
                                    <h6 className={isActive.key == 19 ? "toggle-title active" : "toggle-title"}><span>03.</span> What is the best way to collect NFT?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 19 ? "block" : "none"}` }}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Tellus aliquam parturient erat id vel, condimentum a,
                                            hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                            Egestas feugiat gravida in imperdiet facilisi tortor ac
                                            ultrices venenatis.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 20 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(20)}>
                                    <h6 className={isActive.key == 20 ? "toggle-title active" : "toggle-title"}><span>04.</span> What is the best way to collect NFT?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 20 ? "block" : "none"}` }}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Tellus aliquam parturient erat id vel, condimentum a,
                                            hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                            Egestas feugiat gravida in imperdiet facilisi tortor ac
                                            ultrices venenatis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={`col-md-6 ${oneCol?"col-md-12":"col-sm-12"} `}>
                                <div className={isActive.key == 21 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(21)}>
                                    <h6 className={isActive.key == 21 ? "toggle-title active" : "toggle-title"}><span>05.</span> When the musics over turn off the light? <span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 21 ? "block" : "none"}` }}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Tellus aliquam parturient erat id vel, condimentum a,
                                            hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                            Egestas feugiat gravida in imperdiet facilisi tortor ac
                                            ultrices venenatis.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 22 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(22)}>
                                    <h6 className={isActive.key == 22 ? "toggle-title active" : "toggle-title"}><span>06.</span> What is the best way to collect NFT?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 22 ? "block" : "none"}` }}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Tellus aliquam parturient erat id vel, condimentum a,
                                            hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                            Egestas feugiat gravida in imperdiet facilisi tortor ac
                                            ultrices venenatis.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 23 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(23)}>
                                    <h6 className={isActive.key == 23 ? "toggle-title active" : "toggle-title"}><span>07.</span> What is the best way to collect NFT?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 23 ? "block" : "none"}` }}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Tellus aliquam parturient erat id vel, condimentum a,
                                            hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                            Egestas feugiat gravida in imperdiet facilisi tortor ac
                                            ultrices venenatis.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 24 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(24)}>
                                    <h6 className={isActive.key == 24 ? "toggle-title active" : "toggle-title"}><span>08.</span> What is the best way to collect NFT?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 24 ? "block" : "none"}` }}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Tellus aliquam parturient erat id vel, condimentum a,
                                            hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                            Egestas feugiat gravida in imperdiet facilisi tortor ac
                                            ultrices venenatis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-inner"style={{ display: `${activeIndex == 4 ? "block" : "none"}` }}>
                        <div className="flat-accordion row">
                            <div className={`col-md-6 ${oneCol?"col-md-12":"col-sm-12"} `}>
                                <div className={isActive.key == 25 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(25)}>
                                    <h6 className={isActive.key == 25 ? "toggle-title active" : "toggle-title"}><span>01.</span> When the musics over turn off the light? <span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 25 ? "block" : "none"}` }}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Tellus aliquam parturient erat id vel, condimentum a,
                                            hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                            Egestas feugiat gravida in imperdiet facilisi tortor ac
                                            ultrices venenatis.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 26 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(26)}>
                                    <h6 className={isActive.key == 26 ? "toggle-title active" : "toggle-title"}><span>02.</span> What is the best way to collect NFT?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 26 ? "block" : "none"}` }}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Tellus aliquam parturient erat id vel, condimentum a,
                                            hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                            Egestas feugiat gravida in imperdiet facilisi tortor ac
                                            ultrices venenatis.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 27 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(27)}>
                                    <h6 className={isActive.key == 27 ? "toggle-title active" : "toggle-title"}><span>03.</span> What is the best way to collect NFT?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 27 ? "block" : "none"}` }}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Tellus aliquam parturient erat id vel, condimentum a,
                                            hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                            Egestas feugiat gravida in imperdiet facilisi tortor ac
                                            ultrices venenatis.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 28 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(28)}>
                                    <h6 className={isActive.key == 28 ? "toggle-title active" : "toggle-title"}><span>04.</span> What is the best way to collect NFT?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 28 ? "block" : "none"}` }}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Tellus aliquam parturient erat id vel, condimentum a,
                                            hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                            Egestas feugiat gravida in imperdiet facilisi tortor ac
                                            ultrices venenatis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={`col-md-6 ${oneCol?"col-md-12":"col-sm-12"} `}>
                                <div className={isActive.key == 29 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(29)}>
                                    <h6 className={isActive.key == 29 ? "toggle-title active" : "toggle-title"}><span>05.</span> When the musics over turn off the light? <span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 29 ? "block" : "none"}` }}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Tellus aliquam parturient erat id vel, condimentum a,
                                            hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                            Egestas feugiat gravida in imperdiet facilisi tortor ac
                                            ultrices venenatis.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 30 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(30)}>
                                    <h6 className={isActive.key == 30 ? "toggle-title active" : "toggle-title"}><span>06.</span> What is the best way to collect NFT?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 30 ? "block" : "none"}` }}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Tellus aliquam parturient erat id vel, condimentum a,
                                            hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                            Egestas feugiat gravida in imperdiet facilisi tortor ac
                                            ultrices venenatis.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 31 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(31)}>
                                    <h6 className={isActive.key == 31 ? "toggle-title active" : "toggle-title"}><span>07.</span> What is the best way to collect NFT?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 31 ? "block" : "none"}` }}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Tellus aliquam parturient erat id vel, condimentum a,
                                            hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                            Egestas feugiat gravida in imperdiet facilisi tortor ac
                                            ultrices venenatis.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 32 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(32)}>
                                    <h6 className={isActive.key == 32 ? "toggle-title active" : "toggle-title"}><span>08.</span> What is the best way to collect NFT?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 32 ? "block" : "none"}` }}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Tellus aliquam parturient erat id vel, condimentum a,
                                            hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                                            Egestas feugiat gravida in imperdiet facilisi tortor ac
                                            ultrices venenatis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
