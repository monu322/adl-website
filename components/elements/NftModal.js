
export default function NftModal({ toggleTrueFalse, isToggled }) {
    return (
        <>
            <div className={`modal fade popup ${isToggled ? "show" : ""}`} style={{ display: `${isToggled ? "block" : "none"}`, zIndex: "999999" }}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={toggleTrueFalse}>
                            <span aria-hidden="true">×</span>
                        </button>
                        <div className="modal-body">
                            <h4>Place a Bid</h4>
                            <p className="text-center mb-30">You must bid at least <span className="price color-popup">4.89 ETH</span>
                            </p>
                            <input type="text" className="form-control  mb-20" placeholder="00.00 ETH" />
                            <p className="mb-10">Enter quantity. <span className="color-popup">5 available</span>
                            </p>
                            <input type="text" className="form-control quantity mb-20" defaultValue={1} />
                            <div className="hr" />
                            <div className="d-flex justify-content-between mb-10">
                                <p> You must bid at least:</p>
                                <p className="text-right price color-popup"> 4.89 ETH </p>
                            </div>
                            <div className="d-flex justify-content-between mb-10">
                                <p> Service free:</p>
                                <p className="text-right price color-popup"> 0,89 ETH </p>
                            </div>
                            <div className="d-flex justify-content-between mb-20">
                                <p> Total bid amount:</p>
                                <p className="text-right price color-popup"> 4 ETH </p>
                            </div>
                            <a href="#" className="action-btn" data-toggle="modal" data-target="#popup_bid_success" data-dismiss="modal" aria-label="Close"> <span>Place a bid</span></a>
                        </div>
                    </div>
                </div>
            </div>

            {isToggled &&
                <div className={`modal-backdrop fade ${isToggled ? "show" : ""}`} onClick={toggleTrueFalse} style={{ zIndex: "999998" }} />

            }
        </>
    )
}
