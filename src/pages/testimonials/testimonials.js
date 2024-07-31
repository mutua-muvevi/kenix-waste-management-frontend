import { Box } from "@mui/material";
import { styled } from "@mui/system";
import ReusableBanner from "src/components/sections/banner";

import Page from "src/components/ui/Page";
import TestimonialsCards from "./sections/cards";


const image = "https://res.cloudinary.com/dbj0t0zym/image/upload/v1688897567/teck_background_flkexe.jpg";
const subtitle = " From their genuine stories of success to the transformative impact our solutions have made, these testimonials highlight the dedication, expertise, and outstanding support our team provides. Join the ranks of our delighted clients and experience the difference of partnering with Kenix Waste Solutions . Let their words of appreciation inspire your confidence and trust in our commitment to your success."


const StyledWrapper = styled(Box)(({ theme }) => ({}));

const Testimonials = () => {
	return (
		<Page title="Testimonials || Kenix Waste Solutions | Leading Waste Management Solutions">
			<StyledWrapper>
				<ReusableBanner
					title="Our Testimonials"
					subtitle={subtitle}
					image={image}
					height="60vh"
					alignItems="center"
				/>
				<TestimonialsCards/>
			</StyledWrapper>
		</Page>
	);
};

export default Testimonials;
