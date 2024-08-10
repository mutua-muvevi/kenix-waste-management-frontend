import { Box } from "@mui/material";
import { styled } from "@mui/system";
import ReusableBanner from "src/components/sections/banner";

import Page from "src/components/ui/Page";
import ServicesCards from "./sections/cards";

const image = "https://res.cloudinary.com/dt0uaru3j/image/upload/v1723141395/KENIX%20WASTE%20SOLUTIONS%20LTD/a-heartwarming-photo-of-two-african-kenix-employee-kjSLSFC9Q1GELud0D-1HRQ-0Q08VU_PTLqpguT3XP45CA_iph4b8.jpg"
const subtitle = "In the evolving landscape of waste management, our comprehensive range of sustainable solutions are designed to keep your environment clean and green. From customized waste collection services to advanced recycling programs, our team of experts are committed to delivering outstanding results. Experience the impact of environmentally responsible solutions tailored to your specific needs, backed by our dedication to sustainability. Together, let's build a cleaner, greener future and achieve your environmental, social and governance goals."

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