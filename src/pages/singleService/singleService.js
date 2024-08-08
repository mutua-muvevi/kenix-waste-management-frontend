import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { connect } from "react-redux";

import ReusableBanner from "src/components/sections/banner";
import SingleServiceEntry from "./sections/entry";
import Page from "src/components/ui/Page";
import ParagraphList from "src/components/sections/paragraphList";

const image = "https://res.cloudinary.com/dt0uaru3j/image/upload/v1723144895/KENIX%20WASTE%20SOLUTIONS%20LTD/two-brown-african-kenix-employees-collecting-waste-NCYbsED1TBSI7dmlrlP-Lw-n6Y86nEiRqqzjYX-mBRhAw_bgllwt.jpg"

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