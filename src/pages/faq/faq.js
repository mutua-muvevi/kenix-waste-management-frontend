import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Page from "src/components/ui/Page";
import ReusableBanner from "src/components/sections/banner";
import QuestionAnswer from "./section/qa";
import Help from "../../components/sections/help";
import Subscribe from "src/components/sections/subscribe";

const image = "https://res.cloudinary.com/dt0uaru3j/image/upload/v1723033723/KENIX%20WASTE%20SOLUTIONS%20LTD/group-happy-african-volunteers-with-garbage-bags-cleaning-area-park-africa-volunteering-charity-people-ecology-concept_bnactb.jpg"
const subtitle = "Backed by extensive resources and a team of dedicated waste management experts, our Support & Help Center is here to assist you in overcoming any challenges you face. Whether you need guidance on sustainable practices, compliance with regulations, or optimizing waste disposal and recycling processes, we're committed to providing you with the answers, tips, and step-by-step guides you need. Your waste management success is our priority, and our comprehensive Help Center is designed to empower you with the knowledge and support necessary to achieve your sustainability goals."


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