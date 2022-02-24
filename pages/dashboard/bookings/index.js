import Link from "next/link";
import NavbarTwo from "../../../components/_App/NavbarTwo";
import DashboardNavbar from "../../../components/Dashboard/DashboardNavbar";

const Bookings = ({user}) => {
	return (
		<>
			<DashboardNavbar />
			<div className="main-content d-flex flex-column">
				<NavbarTwo userRole={user} />

				<div className="breadcrumb-area">
					<h1>Bookings</h1>
					<ol className="breadcrumb">
						<li className="item">
							<Link href="/dashboard">
								<a>Home</a>
							</Link>
						</li>
						<li className="item">
							<Link href="/dashboard">
								<a>Dashboard</a>
							</Link>
						</li>
						<li className="item">Bookings</li>
					</ol>
				</div>

				<div className="bookings-listings-box">
					<h3>Booking Requests</h3>

					<div className="table-responsive">
						<table className="table">
							<thead>
								<tr>
									<th>Customer</th>
									<th>Details</th>
									<th>Action</th>
								</tr>
							</thead>

							<tbody>
								<tr>
									<td className="name">
										<img
											src="/images/user1.jpg"
											alt="image"
										/>
										<div className="info">
											<span>James Anderson</span>
											<ul>
												<li>
													<a href="tel:+21444556521">
														+214 4455 6521
													</a>
												</li>
												<li>
													<a href="mailto:hello@james.com">
														hello@james.com
													</a>
												</li>
											</ul>
											<a
												href="mailto:hello@james.com"
												className="default-btn"
											>
												<i className="bx bx-envelope"></i>{" "}
												Send Message
											</a>
										</div>
									</td>

									<td className="details">
										<h4>
											Farmis Hotel & Restaurant{" "}
											<span className="bookings-status pending">
												Pending
											</span>
										</h4>

										<ul>
											<li>
												<i className="bx bx-map"></i>
												<span>Address:</span>
												40 Journal Square, NG USA
											</li>
											<li>
												<i className="bx bx-calendar"></i>
												<span>Date:</span>
												20/05/2020
											</li>
											<li>
												<i className="bx bx-purchase-tag"></i>
												<span>Price:</span>
												$1500
											</li>
											<li>
												<i className="bx bx-group"></i>
												<span>Persons:</span>4 Peoples
											</li>
											<li>
												<i className="bx bx-credit-card-front"></i>
												<span>Payment:</span>
												<strong className="paid">
													Paid
												</strong>{" "}
												using Paypal
											</li>
										</ul>
									</td>

									<td className="action">
										<a href="#" className="default-btn">
											<i className="bx bx-check-circle"></i>{" "}
											Approve
										</a>
										<a
											href="#"
											className="default-btn danger"
										>
											<i className="bx bx-x-circle"></i>{" "}
											Reject
										</a>
									</td>
								</tr>

								<tr>
									<td className="name">
										<img
											src="/images/user2.jpg"
											alt="image"
										/>
										<div className="info">
											<span>Alina Smith</span>
											<ul>
												<li>
													<a href="tel:+21444556521">
														+214 4455 6521
													</a>
												</li>
												<li>
													<a href="mailto:hello@alina.com">
														hello@alina.com
													</a>
												</li>
											</ul>
											<a
												href="mailto:hello@alina.com"
												className="default-btn"
											>
												<i className="bx bx-envelope"></i>{" "}
												Send Message
											</a>
										</div>
									</td>

									<td className="details">
										<h4>
											Skyview Shopping Center{" "}
											<span className="bookings-status approved">
												Approved
											</span>
										</h4>

										<ul>
											<li>
												<i className="bx bx-map"></i>
												<span>Address:</span>
												55 County Laois, Ireland
											</li>
											<li>
												<i className="bx bx-calendar"></i>
												<span>Date:</span>
												19/05/2020
											</li>
											<li>
												<i className="bx bx-purchase-tag"></i>
												<span>Price:</span>
												$200
											</li>
											<li>
												<i className="bx bx-credit-card-front"></i>
												<span>Payment:</span>
												<strong className="paid">
													Paid
												</strong>{" "}
												using Paypal
											</li>
										</ul>
									</td>

									<td className="action">
										<a
											href="#"
											className="default-btn danger"
										>
											<i className="bx bx-x-circle"></i>{" "}
											Cancel
										</a>
									</td>
								</tr>

								<tr>
									<td className="name">
										<img
											src="/images/user3.jpg"
											alt="image"
										/>
										<div className="info">
											<span>James Andy</span>
											<ul>
												<li>
													<a href="tel:+21444556521">
														+214 4455 6521
													</a>
												</li>
												<li>
													<a href="mailto:hello@andy.com">
														hello@andy.com
													</a>
												</li>
											</ul>
											<a
												href="mailto:hello@andy.com"
												className="default-btn"
											>
												<i className="bx bx-envelope"></i>{" "}
												Send Message
											</a>
										</div>
									</td>

									<td className="details">
										<h4>
											Gym Training Center{" "}
											<span className="bookings-status pending">
												Pending
											</span>
										</h4>

										<ul>
											<li>
												<i className="bx bx-map"></i>
												<span>Address:</span>
												Tilt Tilbury, United Kingdom
											</li>
											<li>
												<i className="bx bx-calendar"></i>
												<span>Date:</span>
												18/05/2020
											</li>
											<li>
												<i className="bx bx-purchase-tag"></i>
												<span>Price:</span>
												$214
											</li>
											<li>
												<i className="bx bx-group"></i>
												<span>Persons:</span>2 Peoples
											</li>
											<li>
												<i className="bx bx-credit-card-front"></i>
												<span>Payment:</span>
												<strong className="unpaid">
													Unpaid
												</strong>
											</li>
										</ul>
									</td>

									<td className="action">
										<a href="#" className="default-btn">
											<i className="bx bx-check-circle"></i>{" "}
											Approve
										</a>
										<a
											href="#"
											className="default-btn danger"
										>
											<i className="bx bx-x-circle"></i>{" "}
											Reject
										</a>
									</td>
								</tr>

								<tr>
									<td className="name">
										<img
											src="/images/user4.jpg"
											alt="image"
										/>
										<div className="info">
											<span>Steven Smith</span>
											<ul>
												<li>
													<a href="tel:+21444556521">
														+214 4455 6521
													</a>
												</li>
												<li>
													<a href="mailto:hello@steven.com">
														hello@steven.com
													</a>
												</li>
											</ul>
											<a
												href="mailto:hello@steven.com"
												className="default-btn"
											>
												<i className="bx bx-envelope"></i>{" "}
												Send Message
											</a>
										</div>
									</td>

									<td className="details">
										<h4>
											The Magician Restaurant{" "}
											<span className="bookings-status canceled">
												Canceled
											</span>
										</h4>

										<ul>
											<li>
												<i className="bx bx-map"></i>
												<span>Address:</span>
												40 Journal Square, NG USA
											</li>
											<li>
												<i className="bx bx-calendar"></i>
												<span>Date:</span>
												17/05/2020
											</li>
											<li>
												<i className="bx bx-purchase-tag"></i>
												<span>Price:</span>
												$200
											</li>
											<li>
												<i className="bx bx-credit-card-front"></i>
												<span>Payment:</span>
												<strong className="paid">
													Paid
												</strong>{" "}
												using Paypal
											</li>
										</ul>
									</td>

									<td className="action"></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<div className="flex-grow-1"></div>

				<div className="copyrights-area">
					<div className="row align-items-center">
						<div className="col-lg-6 col-sm-6 col-md-6">
							<p>
								<i className="bx bx-copyright"></i>2020{" "}
								<a href="#">Indice</a>. All rights reserved
							</p>
						</div>

						<div className="col-lg-6 col-sm-6 col-md-6 text-right">
							<p>
								Designed by ❤️{" "}
								<a
									href="https://envytheme.com/"
									target="_blank"
									rel="noreferrer"
								>
									EnvyTheme
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Bookings;
