import { Box } from "@mui/material";
import { styled } from "@mui/system";
import ReusableBanner from "src/components/sections/banner";

import Page from "src/components/ui/Page";
import ServicesCards from "./sections/cards";

const image = "https://res.cloudinary.com/dt0uaru3j/image/upload/v1723141395/KENIX%20WASTE%20SOLUTIONS%20LTD/a-heartwarming-photo-of-two-african-kenix-employee-kjSLSFC9Q1GELud0D-1HRQ-0Q08VU_PTLqpguT3XP45CA_iph4b8.jpg"
const subtitle = "In the fast-paced world of technology, our comprehensive range of innovative services is designed to propel your business forward. From custom software development to advanced cybersecurity solutions, our team of experts is dedicated to delivering exceptional results.  Experience the power of technology-driven solutions tailored to your unique needs, backed by our unwavering commitment to excellence. Together, let's unlock your full potential and embrace the limitless possibilities of the digital era."

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const Services = () => {
	return (
		<Page title="Our Services || Kenix Waste Solutions | Leading Waste Management Solutions">
			<StyledWrapper>
				<ReusableBanner
					title="What we do"
					subtitle={subtitle}
					image={image}
					height="100vh"
					alignItems="center"
					fullHeight
				/>
				<ServicesCards/>
			</StyledWrapper>
		</Page>
	)
}

export default Services