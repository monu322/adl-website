import { useState } from 'react'
export default function RestaurantFaq({oneCol}) {
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
                {/* <ul className="menu-tab">
                    <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "active" : ""}><h6 className="fs-14">Cryptocurrency</h6></li>
                    <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "active" : ""}> <h6 className="fs-14">NFT Token</h6></li>
                    <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "active" : ""}><h6 className="fs-14">Collection</h6></li>
                    <li onClick={() => handleOnClick(4)} className={activeIndex === 4 ? "active" : ""}><h6 className="fs-14">Crypto Trading</h6></li>
                </ul> */}
                <div className="content-tab">
                    <div className="content-inner"style={{ display: `${activeIndex == 1 ? "block" : "none"}` }}>
                        <div className="flat-accordion row">
                            <div className={`col-md-6 ${oneCol?"col-md-12":"col-sm-12"} `}>
                                <div className={isActive.key == 1 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(1)}>
                                    <h6 className={isActive.key == 1 ? "toggle-title active" : "toggle-title"}><span>01.</span>What tasks can the robots perform in the kitchen?
 <span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                        <p>
                                        Our robots assist with tasks including ingredient preparation, basic cooking, dishwashing, and inventory management.

                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 2 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(2)}>
                                    <h6 className={isActive.key == 2 ? "toggle-title active" : "toggle-title"}><span>02.</span> How do the robots improve kitchen efficiency?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                        <p>
                                        By handling routine prep and cleaning tasks, our robots free up your staff to focus on cooking and customer service, leading to faster and more consistent kitchen operations.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 3 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(3)}>
                                    <h6 className={isActive.key == 3 ? "toggle-title active" : "toggle-title"}><span>03.</span> Can the robots be customized for specific kitchen needs?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                        <p>
                                        Yes, we offer customization options to meet the unique needs and layout of your kitchen.
                                        </p>
                                    </div>
                                </div>
                                <div className={isActive.key == 4 ? "flat-toggle active" : "flat-toggle"} onClick={() => handleToggle(4)}>
                                    <h6 className={isActive.key == 4 ? "toggle-title active" : "toggle-title"}><span>04.</span> What kind of support is available?<span className="icon-plus" /></h6>
                                    <div className="toggle-content" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                        <p>
                                        We provide comprehensive training, ongoing support, and maintenance to ensure your robots remain fully functional.
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
