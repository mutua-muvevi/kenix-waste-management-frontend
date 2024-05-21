import { Box } from "@mui/material";
import { styled } from "@mui/system";
import ReusableBanner from "src/components/sections/banner";

import Page from "src/components/ui/Page";
import TermsOfServiceBody from "./sections/body";


const image = "https://res.cloudinary.com/dbj0t0zym/image/upload/v1689508751/carreer_vaq9ru.jpg";
const subtitle = "Thank you for choosing Our Tech Solutions. Our terms of service outline the rules and guidelines that govern the use of our services. By accessing or using our services, you agree to comply with these terms. We value transparency and are committed to protecting your rights and privacy. Please read these terms carefully and feel free to contact us if you have any questions or concerns." ;

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const TermsOfService = () => {
	return (
		<Page title="Terms Of Service || Kenix Waste Management | Leading Waste Management Solutions">
			<StyledWrapper>
				<ReusableBanner
					title="Terms of service"
					subtitle={subtitle}
					height="60vh"
					image={image}
				/>
				<TermsOfServiceBody/>
			</StyledWrapper>
		</Page>
	)
}

export default TermsOfService