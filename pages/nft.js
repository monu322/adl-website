import NftModal from "@/components/elements/NftModal"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function Nft() {

    const [isToggled, setToggled] = useState(false)
    const toggleTrueFalse = () => setToggled(!isToggled)
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="NFTs">
                <section className="nft">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="filter">
                                    <form action="#" className="widget-search">
                                        <input type="text" placeholder="Search item here..." required />
                                        <Link className="btn-search" href="#">
                                            <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="9.7659" cy="9.76639" r="8.98856" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M16.0176 16.4849L19.5416 19.9997" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                    </form>
                                    <div id="category" className="dropdown">
                                        <Link href="#" className="btn-selector nolink ">All categories</Link>
                                        <ul >
                                            <li><span>All Items</span></li>
                                            <li><span>Bundles</span></li>
                                        </ul>
                                    </div>
                                    <div id="buy" className="dropdown">
                                        <Link href="#" className="btn-selector nolink ">Buy now</Link>
                                        <ul >
                                            <li><span>All Items</span></li>
                                            <li><span>Bundles</span></li>
                                        </ul>
                                    </div>
                                    <div id="item" className="dropdown">
                                        <Link href="#" className="btn-selector nolink ">All item</Link>
                                        <ul >
                                            <li><span>All Items</span></li>
                                            <li><span>Bundles</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="nft-item">
                                    <div className="card-media">
                                        <Link href="#"><img src="/assets/images/item/item-01.png" alt="Image" /></Link>
                                    </div>
                                    <div className="card-title">
                                        <Link href="#" className="h5">3D Digital Artwork</Link>
                                    </div>
                                    <div className="meta-info">
                                        <div className="author">
                                            <div className="avatar">
                                                <img src="/assets/images/layouts/avt-01.png" alt="Image" />
                                            </div>
                                            <div className="info">
                                                <span>Owned by</span>
                                                <Link href="/author02" className="h6">Roger Herwitz</Link>
                                            </div>
                                        </div>
                                        <a className="wishlist-button heart">
                                            <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.75 4.3125C11.75 2.86292 10.5256 1.6875 9.01533 1.6875C7.88658 1.6875 6.91708 2.34433 6.5 3.28175C6.08292 2.34433 5.11342 1.6875 3.98408 1.6875C2.475 1.6875 1.25 2.86292 1.25 4.3125C1.25 8.52417 6.5 11.3125 6.5 11.3125C6.5 11.3125 11.75 8.52417 11.75 4.3125Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span className="number-like"> 3432</span></a>
                                    </div>
                                    <div className="card-bottom style-explode">
                                        <div className="price">
                                            <span className="icon-logo-01" />
                                            <div className="price-details">
                                                <span> Current Bid</span>
                                                <h6>0.45 ETH</h6>
                                            </div>
                                        </div>
                                        <div className="button-place-bid">
                                            <a onClick={toggleTrueFalse} className="sc-button"><span>Place Bid</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="nft-item">
                                    <div className="card-media">
                                        <Link href="#"><img src="/assets/images/item/item-02.png" alt="Image" /></Link>
                                    </div>
                                    <div className="card-title">
                                        <Link href="#" className="h5">King Of Pirates</Link>
                                    </div>
                                    <div className="meta-info">
                                        <div className="author">
                                            <div className="avatar">
                                                <img src="/assets/images/layouts/avt-01.png" alt="Image" />
                                            </div>
                                            <div className="info">
                                                <span>Owned by</span>
                                                <Link href="/author02" className="h6">Roger Herwitz</Link>
                                            </div>
                                        </div>
                                        <a className="wishlist-button heart">
                                            <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.75 4.3125C11.75 2.86292 10.5256 1.6875 9.01533 1.6875C7.88658 1.6875 6.91708 2.34433 6.5 3.28175C6.08292 2.34433 5.11342 1.6875 3.98408 1.6875C2.475 1.6875 1.25 2.86292 1.25 4.3125C1.25 8.52417 6.5 11.3125 6.5 11.3125C6.5 11.3125 11.75 8.52417 11.75 4.3125Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span className="number-like"> 3432</span></a>
                                    </div>
                                    <div className="card-bottom style-explode">
                                        <div className="price">
                                            <span className="icon-logo-01" />
                                            <div className="price-details">
                                                <span> Current Bid</span>
                                                <h6>0.45 ETH</h6>
                                            </div>
                                        </div>
                                        <div className="button-place-bid">
                                            <a onClick={toggleTrueFalse} className="sc-button"><span>Place Bid</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="nft-item">
                                    <div className="card-media">
                                        <Link href="#"><img src="/assets/images/item/item-03.png" alt="Image" /></Link>
                                    </div>
                                    <div className="card-title">
                                        <Link href="#" className="h5">Pomeranian Doge</Link>
                                    </div>
                                    <div className="meta-info">
                                        <div className="author">
                                            <div className="avatar">
                                                <img src="/assets/images/layouts/avt-01.png" alt="Image" />
                                            </div>
                                            <div className="info">
                                                <span>Owned by</span>
                                                <Link href="/author02" className="h6">Roger Herwitz</Link>
                                            </div>
                                        </div>
                                        <a className="wishlist-button heart">
                                            <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.75 4.3125C11.75 2.86292 10.5256 1.6875 9.01533 1.6875C7.88658 1.6875 6.91708 2.34433 6.5 3.28175C6.08292 2.34433 5.11342 1.6875 3.98408 1.6875C2.475 1.6875 1.25 2.86292 1.25 4.3125C1.25 8.52417 6.5 11.3125 6.5 11.3125C6.5 11.3125 11.75 8.52417 11.75 4.3125Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span className="number-like"> 3432</span></a>
                                    </div>
                                    <div className="card-bottom style-explode">
                                        <div className="price">
                                            <span className="icon-logo-01" />
                                            <div className="price-details">
                                                <span> Current Bid</span>
                                                <h6>0.45 ETH</h6>
                                            </div>
                                        </div>
                                        <div className="button-place-bid">
                                            <a onClick={toggleTrueFalse} className="sc-button"><span>Place Bid</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="nft-item">
                                    <div className="card-media">
                                        <Link href="#"><img src="/assets/images/item/item-04.png" alt="Image" /></Link>
                                    </div>
                                    <div className="card-title">
                                        <Link href="#" className="h5">Nintendo Switch</Link>
                                    </div>
                                    <div className="meta-info">
                                        <div className="author">
                                            <div className="avatar">
                                                <img src="/assets/images/layouts/avt-01.png" alt="Image" />
                                            </div>
                                            <div className="info">
                                                <span>Owned by</span>
                                                <Link href="/author02" className="h6">Roger Herwitz</Link>
                                            </div>
                                        </div>
                                        <a className="wishlist-button heart">
                                            <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.75 4.3125C11.75 2.86292 10.5256 1.6875 9.01533 1.6875C7.88658 1.6875 6.91708 2.34433 6.5 3.28175C6.08292 2.34433 5.11342 1.6875 3.98408 1.6875C2.475 1.6875 1.25 2.86292 1.25 4.3125C1.25 8.52417 6.5 11.3125 6.5 11.3125C6.5 11.3125 11.75 8.52417 11.75 4.3125Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span className="number-like"> 3432</span></a>
                                    </div>
                                    <div className="card-bottom style-explode">
                                        <div className="price">
                                            <span className="icon-logo-01" />
                                            <div className="price-details">
                                                <span> Current Bid</span>
                                                <h6>0.45 ETH</h6>
                                            </div>
                                        </div>
                                        <div className="button-place-bid">
                                            <a onClick={toggleTrueFalse} className="sc-button"><span>Place Bid</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="nft-item">
                                    <div className="card-media">
                                        <Link href="#"><img src="/assets/images/item/item-05.png" alt="Image" /></Link>
                                    </div>
                                    <div className="card-title">
                                        <Link href="#" className="h5">The Strange Art</Link>
                                    </div>
                                    <div className="meta-info">
                                        <div className="author">
                                            <div className="avatar">
                                                <img src="/assets/images/layouts/avt-01.png" alt="Image" />
                                            </div>
                                            <div className="info">
                                                <span>Owned by</span>
                                                <Link href="/author02" className="h6">Roger Herwitz</Link>
                                            </div>
                                        </div>
                                        <a className="wishlist-button heart">
                                            <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.75 4.3125C11.75 2.86292 10.5256 1.6875 9.01533 1.6875C7.88658 1.6875 6.91708 2.34433 6.5 3.28175C6.08292 2.34433 5.11342 1.6875 3.98408 1.6875C2.475 1.6875 1.25 2.86292 1.25 4.3125C1.25 8.52417 6.5 11.3125 6.5 11.3125C6.5 11.3125 11.75 8.52417 11.75 4.3125Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span className="number-like"> 3432</span></a>
                                    </div>
                                    <div className="card-bottom style-explode">
                                        <div className="price">
                                            <span className="icon-logo-01" />
                                            <div className="price-details">
                                                <span> Current Bid</span>
                                                <h6>0.45 ETH</h6>
                                            </div>
                                        </div>
                                        <div className="button-place-bid">
                                            <a onClick={toggleTrueFalse} className="sc-button"><span>Place Bid</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="nft-item">
                                    <div className="card-media">
                                        <Link href="#"><img src="/assets/images/item/item-06.png" alt="Image" /></Link>
                                    </div>
                                    <div className="card-title">
                                        <Link href="#" className="h5">3D Digital Artwork</Link>
                                    </div>
                                    <div className="meta-info">
                                        <div className="author">
                                            <div className="avatar">
                                                <img src="/assets/images/layouts/avt-01.png" alt="Image" />
                                            </div>
                                            <div className="info">
                                                <span>Owned by</span>
                                                <Link href="/author02" className="h6">Roger Herwitz</Link>
                                            </div>
                                        </div>
                                        <a className="wishlist-button heart">
                                            <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.75 4.3125C11.75 2.86292 10.5256 1.6875 9.01533 1.6875C7.88658 1.6875 6.91708 2.34433 6.5 3.28175C6.08292 2.34433 5.11342 1.6875 3.98408 1.6875C2.475 1.6875 1.25 2.86292 1.25 4.3125C1.25 8.52417 6.5 11.3125 6.5 11.3125C6.5 11.3125 11.75 8.52417 11.75 4.3125Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span className="number-like"> 3432</span></a>
                                    </div>
                                    <div className="card-bottom style-explode">
                                        <div className="price">
                                            <span className="icon-logo-01" />
                                            <div className="price-details">
                                                <span> Current Bid</span>
                                                <h6>0.45 ETH</h6>
                                            </div>
                                        </div>
                                        <div className="button-place-bid">
                                            <a onClick={toggleTrueFalse} className="sc-button"><span>Place Bid</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="nft-item">
                                    <div className="card-media">
                                        <Link href="#"><img src="/assets/images/item/item-07.png" alt="Image" /></Link>
                                    </div>
                                    <div className="card-title">
                                        <Link href="#" className="h5">Pixel Art Addicted</Link>
                                    </div>
                                    <div className="meta-info">
                                        <div className="author">
                                            <div className="avatar">
                                                <img src="/assets/images/layouts/avt-01.png" alt="Image" />
                                            </div>
                                            <div className="info">
                                                <span>Owned by</span>
                                                <Link href="/author02" className="h6">Roger Herwitz</Link>
                                            </div>
                                        </div>
                                        <a className="wishlist-button heart">
                                            <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.75 4.3125C11.75 2.86292 10.5256 1.6875 9.01533 1.6875C7.88658 1.6875 6.91708 2.34433 6.5 3.28175C6.08292 2.34433 5.11342 1.6875 3.98408 1.6875C2.475 1.6875 1.25 2.86292 1.25 4.3125C1.25 8.52417 6.5 11.3125 6.5 11.3125C6.5 11.3125 11.75 8.52417 11.75 4.3125Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span className="number-like"> 3432</span></a>
                                    </div>
                                    <div className="card-bottom style-explode">
                                        <div className="price">
                                            <span className="icon-logo-01" />
                                            <div className="price-details">
                                                <span> Current Bid</span>
                                                <h6>0.45 ETH</h6>
                                            </div>
                                        </div>
                                        <div className="button-place-bid">
                                            <a onClick={toggleTrueFalse} className="sc-button"><span>Place Bid</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="nft-item">
                                    <div className="card-media">
                                        <Link href="#"><img src="/assets/images/item/item-08.png" alt="Image" /></Link>
                                    </div>
                                    <div className="card-title">
                                        <Link href="#" className="h5">3D Digital Artwork</Link>
                                    </div>
                                    <div className="meta-info">
                                        <div className="author">
                                            <div className="avatar">
                                                <img src="/assets/images/layouts/avt-01.png" alt="Image" />
                                            </div>
                                            <div className="info">
                                                <span>Owned by</span>
                                                <Link href="/author02" className="h6">Roger Herwitz</Link>
                                            </div>
                                        </div>
                                        <a className="wishlist-button heart">
                                            <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.75 4.3125C11.75 2.86292 10.5256 1.6875 9.01533 1.6875C7.88658 1.6875 6.91708 2.34433 6.5 3.28175C6.08292 2.34433 5.11342 1.6875 3.98408 1.6875C2.475 1.6875 1.25 2.86292 1.25 4.3125C1.25 8.52417 6.5 11.3125 6.5 11.3125C6.5 11.3125 11.75 8.52417 11.75 4.3125Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span className="number-like"> 3432</span></a>
                                    </div>
                                    <div className="card-bottom style-explode">
                                        <div className="price">
                                            <span className="icon-logo-01" />
                                            <div className="price-details">
                                                <span> Current Bid</span>
                                                <h6>0.45 ETH</h6>
                                            </div>
                                        </div>
                                        <div className="button-place-bid">
                                            <a onClick={toggleTrueFalse} className="sc-button"><span>Place Bid</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="nft-item">
                                    <div className="card-media">
                                        <Link href="#"><img src="/assets/images/item/item-05.png" alt="Image" /></Link>
                                    </div>
                                    <div className="card-title">
                                        <Link href="#" className="h5">Pixel Art Addicted</Link>
                                    </div>
                                    <div className="meta-info">
                                        <div className="author">
                                            <div className="avatar">
                                                <img src="/assets/images/layouts/avt-01.png" alt="Image" />
                                            </div>
                                            <div className="info">
                                                <span>Owned by</span>
                                                <Link href="/author02" className="h6">Roger Herwitz</Link>
                                            </div>
                                        </div>
                                        <a className="wishlist-button heart">
                                            <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.75 4.3125C11.75 2.86292 10.5256 1.6875 9.01533 1.6875C7.88658 1.6875 6.91708 2.34433 6.5 3.28175C6.08292 2.34433 5.11342 1.6875 3.98408 1.6875C2.475 1.6875 1.25 2.86292 1.25 4.3125C1.25 8.52417 6.5 11.3125 6.5 11.3125C6.5 11.3125 11.75 8.52417 11.75 4.3125Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span className="number-like"> 3432</span></a>
                                    </div>
                                    <div className="card-bottom style-explode">
                                        <div className="price">
                                            <span className="icon-logo-01" />
                                            <div className="price-details">
                                                <span> Current Bid</span>
                                                <h6>0.45 ETH</h6>
                                            </div>
                                        </div>
                                        <div className="button-place-bid">
                                            <a onClick={toggleTrueFalse} className="sc-button"><span>Place Bid</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="nft-item">
                                    <div className="card-media">
                                        <Link href="#"><img src="/assets/images/item/item-06.png" alt="Image" /></Link>
                                    </div>
                                    <div className="card-title">
                                        <Link href="#" className="h5">3D Digital Artwork</Link>
                                    </div>
                                    <div className="meta-info">
                                        <div className="author">
                                            <div className="avatar">
                                                <img src="/assets/images/layouts/avt-01.png" alt="Image" />
                                            </div>
                                            <div className="info">
                                                <span>Owned by</span>
                                                <Link href="/author02" className="h6">Roger Herwitz</Link>
                                            </div>
                                        </div>
                                        <a className="wishlist-button heart">
                                            <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.75 4.3125C11.75 2.86292 10.5256 1.6875 9.01533 1.6875C7.88658 1.6875 6.91708 2.34433 6.5 3.28175C6.08292 2.34433 5.11342 1.6875 3.98408 1.6875C2.475 1.6875 1.25 2.86292 1.25 4.3125C1.25 8.52417 6.5 11.3125 6.5 11.3125C6.5 11.3125 11.75 8.52417 11.75 4.3125Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span className="number-like"> 3432</span></a>
                                    </div>
                                    <div className="card-bottom style-explode">
                                        <div className="price">
                                            <span className="icon-logo-01" />
                                            <div className="price-details">
                                                <span> Current Bid</span>
                                                <h6>0.45 ETH</h6>
                                            </div>
                                        </div>
                                        <div className="button-place-bid">
                                            <a onClick={toggleTrueFalse} className="sc-button"><span>Place Bid</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="nft-item">
                                    <div className="card-media">
                                        <Link href="#"><img src="/assets/images/item/item-07.png" alt="Image" /></Link>
                                    </div>
                                    <div className="card-title">
                                        <Link href="#" className="h5">3D Digital Artwork</Link>
                                    </div>
                                    <div className="meta-info">
                                        <div className="author">
                                            <div className="avatar">
                                                <img src="/assets/images/layouts/avt-01.png" alt="Image" />
                                            </div>
                                            <div className="info">
                                                <span>Owned by</span>
                                                <Link href="/author02" className="h6">Roger Herwitz</Link>
                                            </div>
                                        </div>
                                        <a className="wishlist-button heart">
                                            <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.75 4.3125C11.75 2.86292 10.5256 1.6875 9.01533 1.6875C7.88658 1.6875 6.91708 2.34433 6.5 3.28175C6.08292 2.34433 5.11342 1.6875 3.98408 1.6875C2.475 1.6875 1.25 2.86292 1.25 4.3125C1.25 8.52417 6.5 11.3125 6.5 11.3125C6.5 11.3125 11.75 8.52417 11.75 4.3125Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span className="number-like"> 3432</span></a>
                                    </div>
                                    <div className="card-bottom style-explode">
                                        <div className="price">
                                            <span className="icon-logo-01" />
                                            <div className="price-details">
                                                <span> Current Bid</span>
                                                <h6>0.45 ETH</h6>
                                            </div>
                                        </div>
                                        <div className="button-place-bid">
                                            <a onClick={toggleTrueFalse} className="sc-button"><span>Place Bid</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="nft-item">
                                    <div className="card-media">
                                        <Link href="#"><img src="/assets/images/item/item-08.png" alt="Image" /></Link>
                                    </div>
                                    <div className="card-title">
                                        <Link href="#" className="h5">3D Digital Artwork</Link>
                                    </div>
                                    <div className="meta-info">
                                        <div className="author">
                                            <div className="avatar">
                                                <img src="/assets/images/layouts/avt-01.png" alt="Image" />
                                            </div>
                                            <div className="info">
                                                <span>Owned by</span>
                                                <Link href="/author02" className="h6">Roger Herwitz</Link>
                                            </div>
                                        </div>
                                        <a className="wishlist-button heart">
                                            <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.75 4.3125C11.75 2.86292 10.5256 1.6875 9.01533 1.6875C7.88658 1.6875 6.91708 2.34433 6.5 3.28175C6.08292 2.34433 5.11342 1.6875 3.98408 1.6875C2.475 1.6875 1.25 2.86292 1.25 4.3125C1.25 8.52417 6.5 11.3125 6.5 11.3125C6.5 11.3125 11.75 8.52417 11.75 4.3125Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span className="number-like"> 3432</span></a>
                                    </div>
                                    <div className="card-bottom style-explode">
                                        <div className="price">
                                            <span className="icon-logo-01" />
                                            <div className="price-details">
                                                <span> Current Bid</span>
                                                <h6>0.45 ETH</h6>
                                            </div>
                                        </div>
                                        <div className="button-place-bid">
                                            <a onClick={toggleTrueFalse} className="sc-button"><span>Place Bid</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
            <NftModal isToggled={isToggled} toggleTrueFalse={toggleTrueFalse} />

        </>
    )
}