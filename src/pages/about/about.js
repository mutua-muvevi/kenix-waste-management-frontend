import { Box } from "@mui/material";
import { styled } from "@mui/system";
import ReusableBanner from "src/components/sections/banner";
import LeftRightList from "src/components/sections/leftrightlist";

import Page from "src/components/ui/Page";
import { valueProposition } from "./info";
import Variety from "./sections/variety";
import MisionStatements from "./sections/statements";
import Subscribe from "src/components/sections/subscribe";

const image = "https://res.cloudinary.com/dbj0t0zym/image/upload/v1688897567/teck_background_flkexe.jpg"
const subtitle = "Accelerating digital transformation journeys for enterprises worldwide through strategic insights, seamless integration, and advanced technologies. Experience a new era of agility, productivity, and competitive advantage."

const standOutImage = "https://res.cloudinary.com/dbj0t0zym/image/upload/v1689496515/stand_out_ued6rq.jpg";

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const About = () => {
	return (
		<Page title="About us || Kenix Waste Solutions the Leading Waste Management Solutions">
			<StyledWrapper>
				<ReusableBanner
					title="About Us"
					subtitle={subtitle}
					image={image}
					height="60vh"
				/>
				<LeftRightList
					title={valueProposition.title}
					subtitle={valueProposition.subtitle}
					chipText="stand out"
					list={valueProposition.list}
					imgPosition="right"
					image={standOutImage}
					imageHeight="530"
					chipWidth="200px"
				/>
				<Variety/>
				<MisionStatements/>
				<Subscribe/>
			</StyledWrapper>
		</Page>
	)
}

export default About