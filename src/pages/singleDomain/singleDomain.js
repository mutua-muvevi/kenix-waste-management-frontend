import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { connect } from "react-redux";

import ReusableBanner from "src/components/sections/banner";
import SingleDomainEntry from "./sections/entry";
import Page from "src/components/ui/Page";
import ParagraphList from "src/components/sections/paragraphList";

const image = "https://res.cloudinary.com/dbj0t0zym/image/upload/v1688897567/teck_background_flkexe.jpg"

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const SingleDomain = ({domain}) => {
	

	return (
		<Page title={domain.title + " || Kenix Waste Management Domains || Kenix Waste Management | Leading Waste Management Solutions"}>
			<StyledWrapper>
				<ReusableBanner
					title={domain.title}
					subtitle={domain.subtitle}
					image={image}
					height="60vh"
					alignItems="center"
				/>
				<SingleDomainEntry/>
				<ParagraphList
					content={domain.content}
					icon="game-icons:cash"
					iconWidth={35}
					buttonText={`Capitalize on ${domain.title} Now`}
					modalTitle={domain.title}
				/>
			</StyledWrapper>
		</Page>
	)
}

const mapStateToProps = ({domain}) => ({
	domain: domain.domain
})

export default connect(mapStateToProps)(SingleDomain)