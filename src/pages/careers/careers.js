import { Box } from "@mui/material";
import { styled } from "@mui/system";

import ReusableBanner from "src/components/sections/banner";

import Page from "src/components/ui/Page";
import CarreerBody from "./sections/body";

const image = "https://res.cloudinary.com/dbj0t0zym/image/upload/v1689109132/domainbanner_untiej.jpg";
const subtitle = "Unlock your potential and embark on an exciting journey with Kenix Waste Solutions. We are a dynamic and innovative waste management company that values passion, creativity, and collaboration. As part of our team, you will have the opportunity to work on cutting-edge projects, collaborate with industry experts, and make a significant impact towards the sustainability of our world. We offer a supportive and inclusive work environment where your ideas are valued, and your professional growth is nurtured. Take the next step in your career and explore the exciting opportunities waiting for you at Kenix Waste Solutions."

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const Careers = () => {
	return (
		<Page title="Careers || Kenix Waste Solutions | Leading Waste Management Solutions">
			<StyledWrapper>
				<ReusableBanner
					title="Job Openings"
					subtitle={subtitle}
					image={image}
					height="60vh"
				/>
				<CarreerBody/>
			</StyledWrapper>
		</Page>
	)
}

export default Careers