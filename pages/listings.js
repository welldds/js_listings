import axios from "axios";
import { withRouter } from "next/router";
import baseUrl from "../utils/baseUrl";
const listImage = "../images/empty-listing.png";

//components
import NavbarTwo from "../components/_App/Navbar";
import PopularPlacesFilter from "../components/Common/PopularPlacesFilter";
import ListingArea from "../components/Listings/ListingArea";
import Footer from "../components/_App/Footer";

const Listings = ({ user, listings, totalPages }) => {
	//get active listings for showing listing count
	// const activeListings = listings.filter((list) => list.status !== "pending");

	return (
		<>
			<NavbarTwo userRole={user} />

			<PopularPlacesFilter />

			{listings ? (
				<ListingArea listings={listings} totalPages={totalPages} />
			) : (
				<div className="empty-page-image">
					<img src={listImage} alt="" />
					<p>No Listings Available</p>
				</div>
			)}

			<Footer bgColor="bg-f5f5f5" />
		</>
	);
};

export async function getServerSideProps({ query }) {
	const page = query.page ? query.page : "1";
	const keyword = query.keyword;
	const title = query.title;
	const location = query.location;
	const category = query.category;

	const payload = {
		params: {
			page,
			limit: 6,
			keyword,
			title,
			location,
			category,
		},
	};
	const url = `${baseUrl}/api/v1/listings`;
	const response = await axios.get(url, payload);

	return {
		props: {
			listings: response.data.listings,
			totalPages: response.data.totalPages,
		},
	};
}

export default withRouter(Listings);
