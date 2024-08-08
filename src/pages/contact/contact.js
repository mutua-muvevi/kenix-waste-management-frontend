import { Box } from "@mui/material";
import { styled } from "@mui/system";
import ReusableBanner from "src/components/sections/banner";
import ContactForm from "src/components/sections/contactform";

import Page from "src/components/ui/Page";
import ContactCards from "./sections/cards";

const image ="https://res.cloudinary.com/dt0uaru3j/image/upload/v1723142589/KENIX%20WASTE%20SOLUTIONS%20LTD/african-american-employee-using-headset-customer-service-job-asnwering-call-about-telemarketing-sales-male-operator-working-call-center-office-help-clients-helpline_tsqk1k.jpg";
const subtitle="Ignite your journey towards a greener future and a sustainable clean world by getting in touch with us. Your conquest of the future starts with this vital connection - let's chart your course together."

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const Contact = () => {
	return (
		<Page title="Contact us || Kenix Waste Solutions | Leading Waste Management Solutions">
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