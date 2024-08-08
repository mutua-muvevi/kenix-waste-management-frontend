import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Page from "src/components/ui/Page";
import ReusableBanner from "src/components/sections/banner";

import BlogList from "src/content/blogs";
import ReusableBlogsCards from "src/components/sections/blogscards";

const image =
	"https://res.cloudinary.com/dt0uaru3j/image/upload/v1723143395/2147664242_hb9ivl.jpg";
const subtitle =
	"Kenix Waste Solutions stives to be the market leader when it comes to offering superior waste management services. Visit our blog section to explore the latest trends, insights, and strategies to address waste management challenges.";

const newsTitle =
	"Empowering You with Tech Knowledge: Exploring the Cutting-Edge Advancements, Practical Insights, and Future Possibilities in the World of Technology";
const newsSubtitle =
	"Step into the world of technology through our blog section, where we strive to empower you with the latest tech knowledge. Delve into the realm of cutting-edge advancements, gain practical insights from industry experts, and uncover the endless possibilities that technology has to offer. With engaging and informative articles, we aim to keep you at the forefront of technological innovation. Join us on this exciting journey as we unravel the complexities of the tech world and inspire you to embrace the digital future.";

const StyledWrapper = styled(Box)(({ theme }) => ({}));

const Blogs = () => {
	return (
		<Page title="Blogs Articles || Kenix Waste Solutions No 1 ">
			<StyledWrapper>
				<ReusableBanner
					title="Blog Articles"
					subtitle={subtitle}
					image={image}
					height="70vh"
					fullHeight
				/>
				<ReusableBlogsCards
					title={newsTitle}
					subtitle={newsSubtitle}
					chipText="Blog Articles"
					alignItems="center"
					list={BlogList}
				/>
			</StyledWrapper>
		</Page>
	);
};

export default Blogs;
