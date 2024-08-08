import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Page from "src/components/ui/Page";
import ReusableBanner from "src/components/sections/banner";
import QuestionAnswer from "./section/qa";
import Help from "../../components/sections/help";
import Subscribe from "src/components/sections/subscribe";

const image = "https://res.cloudinary.com/dt0uaru3j/image/upload/v1723033723/KENIX%20WASTE%20SOLUTIONS%20LTD/group-happy-african-volunteers-with-garbage-bags-cleaning-area-park-africa-volunteering-charity-people-ecology-concept_bnactb.jpg"
const subtitle = " With a wealth of resources and a dedicated team of experts, we strive to address your queries, resolve your issues, and guide you through any challenges you may encounter. Our Help Center is your one-stop destination for finding answers, troubleshooting tips, and step-by-step guides to ensure a seamless experience. We understand that your success is our success, and our comprehensive Help Center is here to empower you with the knowledge and support you need to excel."


const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const FAQ = () => {
	return (
		<Page title="FAQ || Kenix Waste Solutions | Leading Waste Management Solutions">
			<StyledWrapper>
				<ReusableBanner
					title="Support & Help Center"
					subtitle={subtitle}
					image={image}
					height="60vh"
					alignItems="center"
				/>
				<QuestionAnswer/>
				<Subscribe/>
				<Help/>
			</StyledWrapper>
		</Page>
	)
}

export default FAQ