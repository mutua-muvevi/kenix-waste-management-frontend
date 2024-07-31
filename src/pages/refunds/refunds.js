import { Box } from "@mui/material";
import { styled } from "@mui/system";
import ReusableBanner from "src/components/sections/banner";

import Page from "src/components/ui/Page";
import RefundsPolicyBody from "./sections/body";


const image = "https://res.cloudinary.com/dbj0t0zym/image/upload/v1689508751/carreer_vaq9ru.jpg";
const subtitle = "Thank you for choosing Our Kenix Waste Solutions. Our terms of service outline the rules and guidelines that govern the use of our services. By accessing or using our services, you agree to comply with these terms. We value transparency and are committed to protecting your rights and privacy. Please read these terms carefully and feel free to contact us if you have any questions or concerns." ;

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const RefundsPolicy = () => {
	return (
		<Page title="Refunds Policy || Kenix Waste Solutions Technology Company">
			<StyledWrapper>
				<ReusableBanner
					title="Refunds Policy"
					subtitle={subtitle}
					height="60vh"
					image={image}
				/>
				<RefundsPolicyBody/>
			</StyledWrapper>
		</Page>
	)
}

export default RefundsPolicy