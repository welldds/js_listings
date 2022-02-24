import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
	loop: true,
	margin: 0,
	nav: false,
	mouseDrag: false,
	items: 3,
	dots: true,
	autoplay: true,
	smartSpeed: 500,

	navText: [
		"<i class='flaticon-left-chevron'></i>",
		"<i class='flaticon-right-chevron'></i>",
	],
};
const optionsTwo = {
	loop: true,
	margin: 0,
	nav: true,
	mouseDrag: false,
	items: 1,
	dots: false,
	autoplay: true,
	smartSpeed: 500,

	navText: [
		"<i class='flaticon-left-chevron'></i>",
		"<i class='flaticon-right-chevron'></i>",
	],
};

const ListingAreaTwo = ({
	titleOne,
	titleTwo,
	bgColor,
	paddingBottom70,
	ListingButton,
	listings,
}) => {
	const [display, setDisplay] = useState(false);
	const [isMounted, setisMounted] = useState(false);

	useEffect(() => {
		setisMounted(true);
		setDisplay(true);
		setisMounted(false);
	}, []);
	return (
		<>
			<section
				className={`listings-area pt-100 ${paddingBottom70} ${bgColor}`}
			>
				<div className="container">
					{titleOne ? (
						<div className="section-title">
							<h2>Most Visited Listings</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
								Quis ipsum suspendisse ultrices gravida. Risus
								commodo viverra.
							</p>
						</div>
					) : titleTwo ? (
						<div className="section-title text-left">
							<h2>Best Rated: Top Listings</h2>
							<a href="#" className="link-btn">
								Show All{" "}
								<i className="flaticon-right-chevron"></i>
							</a>
						</div>
					) : (
						<div className="section-title text-left">
							<h2>Travelers’ Choice: Top Listings</h2>
							<a href="#" className="link-btn">
								Show All{" "}
								<i className="flaticon-right-chevron"></i>
							</a>
						</div>
					)}

					<div className="row">
						{listings &&
							listings.map(
								(list) =>
									list.status === "active" && (
										<div
											className="col-xl-4 col-lg-6 col-md-6"
											key={list.id}
										>
											<div className="single-listings-box">
												<div className="listings-image">
													<div className="listings-image-slides owl-theme">
														{display ? (
															<OwlCarousel
																{...optionsTwo}
															>
																{list.gallery
																	.length >
																	0 &&
																	list.gallery.map(
																		(
																			gal,
																			i
																		) => (
																			<div
																				className="single-image"
																				key={
																					i
																				}
																			>
																				<img
																					src={
																						gal
																					}
																					alt="image"
																				/>
																				<Link
																					href={`/listing/${list.id}`}
																				>
																					<a className="link-btn"></a>
																				</Link>
																			</div>
																		)
																	)}
															</OwlCarousel>
														) : (
															""
														)}
													</div>
													<a
														href="#"
														className="bookmark-save"
													>
														<i className="flaticon-heart"></i>
													</a>
													<a
														href="#"
														className="category"
													>
														<i className="flaticon-cooking"></i>
													</a>
												</div>

												<div className="listings-content">
													<div className="author">
														<div className="d-flex align-items-center">
															<img
																src="/images/user4.jpg"
																alt="image"
															/>
															<span>Andy</span>
														</div>
													</div>
													<ul className="listings-meta">
														<li>
															<a href="#">
																<i className="flaticon-cleansing"></i>{" "}
																Beauty
															</a>
														</li>
														<li>
															<a href="#">
																<i className="flaticon-pin"></i>{" "}
																{list.city},
																{list.state}
															</a>
														</li>
													</ul>
													<h3>
														<Link
															href={`/listing/${list.id}`}
														>
															<a>
																{
																	list.listingTitle
																}
															</a>
														</Link>
													</h3>
													<span className="status">
														<i className="flaticon-save"></i>{" "}
														Disponibil acum
													</span>
													<div className="d-flex align-items-center justify-content-between">
														<div className="rating">
															<i className="bx bxs-star"></i>
															<i className="bx bxs-star"></i>
															<i className="bx bxs-star"></i>
															<i className="bx bx-star"></i>
															<i className="bx bx-star"></i>
															<span className="count">
																(15)
															</span>
														</div>
														<div className="price">
															Start From{" "}
															<span>
																${list.pricing}
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									)
							)}

						{ListingButton && (
							<div className="col-xl-12 col-lg-12 col-md-12">
								<div className="more-listings-box">
									<Link href="/grid-listtings-with-map">
										<a className="default-btn">
											More Listings
										</a>
									</Link>
								</div>
							</div>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default ListingAreaTwo;
