import { Box } from "@mui/material";
import { styled } from "@mui/system";
import ReusableBanner from "src/components/sections/banner";

import Page from "src/components/ui/Page";
import CookiePolicyBody from "./sections/body";

const image="https://res.cloudinary.com/dbj0t0zym/image/upload/v1689508751/carreer_vaq9ru.jpg";
const subtitle = "We respect your privacy and are committed to protecting your personal data. This privacy policy provides details about the type of data we collect, how we use it, and how we secure it. By using our services, you consent to our data practices as described in this policy. We encourage you to read this policy carefully to understand our approach towards the use and protection of your personal data.";

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const CookiePolicy = () => {
	return (
		<Page title="Cookie Policy || Kenix Waste Management | Leading Waste Management Solutions">
			<StyledWrapper>
				<ReusableBanner
					title="Our Cookie Policy"
					subtitle={subtitle}
					image={image}
					height="60vh"
				/>
				<CookiePolicyBody/>
			</StyledWrapper>
		</Page>
	)
}

export default CookiePolicy