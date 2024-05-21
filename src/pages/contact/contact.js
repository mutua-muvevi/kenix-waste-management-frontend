import { Box } from "@mui/material";
import { styled } from "@mui/system";
import ReusableBanner from "src/components/sections/banner";
import ContactForm from "src/components/sections/contactform";

import Page from "src/components/ui/Page";
import ContactCards from "./sections/cards";

const image ="https://res.cloudinary.com/dbj0t0zym/image/upload/v1689622613/techbg1_pgjpsp.jpg";
const subtitle="Ignite your journey towards unparalleled digital growth by getting in touch with us today. Your conquest of the future starts with this vital connection - let's chart your course together."

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const Contact = () => {
	return (
		<Page title="Contact us || Kenix Waste Management | Leading Waste Management Solutions">
			<StyledWrapper>
				<ReusableBanner
					title="Contact us"
					subtitle={subtitle}
					image={image}
					height="60vh"
					alignItems="center"
				/>
				<ContactForm/>
				<ContactCards/>
			</StyledWrapper>
		</Page>
	)
}

export default Contact