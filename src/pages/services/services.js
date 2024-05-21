import { Box } from "@mui/material";
import { styled } from "@mui/system";
import ReusableBanner from "src/components/sections/banner";

import Page from "src/components/ui/Page";
import ServicesCards from "./sections/cards";

const image = "https://res.cloudinary.com/dbj0t0zym/image/upload/v1688914613/techbg_jycucy.jpg"
const subtitle = "In the fast-paced world of technology, our comprehensive range of innovative services is designed to propel your business forward. From custom software development to advanced cybersecurity solutions, our team of experts is dedicated to delivering exceptional results.  Experience the power of technology-driven solutions tailored to your unique needs, backed by our unwavering commitment to excellence. Together, let's unlock your full potential and embrace the limitless possibilities of the digital era."

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const Services = () => {
	return (
		<Page title="Our Services || Kenix Waste Management | Leading Waste Management Solutions">
			<StyledWrapper>
				<ReusableBanner
					title="What we do"
					subtitle={subtitle}
					image={image}
					height="60vh"
					alignItems="center"
				/>
				<ServicesCards/>
			</StyledWrapper>
		</Page>
	)
}

export default Services