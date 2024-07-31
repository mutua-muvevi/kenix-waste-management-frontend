import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { connect } from "react-redux";

import ReusableBanner from "src/components/sections/banner";
import SingleServiceEntry from "./sections/entry";
import Page from "src/components/ui/Page";
import ParagraphList from "src/components/sections/paragraphList";

const image = "https://res.cloudinary.com/dbj0t0zym/image/upload/v1688897567/teck_background_flkexe.jpg"

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const Services = ({service}) => {
	return (
		<Page title={service.title + " || Kenix Waste Solutions Services || Kenix Waste Solutions | Leading Waste Management Solutions"}>
			<StyledWrapper>
				<ReusableBanner
					title={service.title}
					subtitle={service.subtitle}
					image={image}
					height="60vh"
					alignItems="center"
				/>
				<SingleServiceEntry/>
				<ParagraphList
					content={service.content}
					modalTitle={service.title}
					buttonText="Make a move now"
					icon="game-icons:chess-knight"
					iconWidth={35}
				/>
			</StyledWrapper>
		</Page>
	)
}

const mapStateToProps = ({service}) => ({
	service: service.service
})

export default connect(mapStateToProps)(Services)