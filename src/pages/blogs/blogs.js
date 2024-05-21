import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Page from "src/components/ui/Page";
import ReusableBanner from "src/components/sections/banner";

import BlogList from "src/content/blogs";
import ReusableBlogsCards from "src/components/sections/blogscards";

const image = "https://res.cloudinary.com/dbj0t0zym/image/upload/v1689116307/blogs_uoga2t.jpg";
const subtitle =  "Embark on an extraordinary tech adventure with our captivating blog, where we unravel the untapped potential of cutting-edge technologies. Delve into captivating articles that decode complex concepts, explore emerging trends, and provide practical insights to revolutionize your business strategies. From enlightening case studies to thought-provoking analyses, our blog is your go-to resource for staying ahead in the dynamic world of technology. Immerse yourself in a world of innovation, unlock actionable knowledge, and fuel your journey towards digital transformation. Let our expert writers be your trusted guides as we unravel the secrets of technological excellence."

const newsTitle = "Empowering You with Tech Knowledge: Exploring the Cutting-Edge Advancements, Practical Insights, and Future Possibilities in the World of Technology"
const newsSubtitle="Step into the world of technology through our blog section, where we strive to empower you with the latest tech knowledge. Delve into the realm of cutting-edge advancements, gain practical insights from industry experts, and uncover the endless possibilities that technology has to offer. With engaging and informative articles, we aim to keep you at the forefront of technological innovation. Join us on this exciting journey as we unravel the complexities of the tech world and inspire you to embrace the digital future."

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const Blogs = () => {
	return (
		<Page title="Blogs Articles || Kenix Waste Management No 1 Tech Provider">
			<StyledWrapper>
				<ReusableBanner
					title="Blog Articles"
					subtitle={subtitle}
					image={image}
					height="60vh"
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
	)
}

export default Blogs