import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Page from "src/components/ui/Page";
import ReusableBanner from "src/components/sections/banner";

import SingleNewsBody from "./sections/body";

import { connect } from "react-redux";

const StyledWrapper = styled(Box)(({ theme }) => ({

}));

const SingleNews = ({news}) => {
	return (
		<Page title={`${news.title} || Kenix Waste Solutions News || Kenix Waste Solutions | Leading Waste Management Solutions`}>
			<StyledWrapper>
				<ReusableBanner
					title={news.title}
					subtitle={news.subtitle}
					image={news.thumbnail}
					height="60vh"
				/>
				<SingleNewsBody/>
			</StyledWrapper>
		</Page>
	)
}

const mapStateToProps = ({news}) => ({
	news: news.news
})

export default connect(mapStateToProps)(SingleNews)