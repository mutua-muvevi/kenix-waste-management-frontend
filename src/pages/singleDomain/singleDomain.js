import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { connect } from "react-redux";

import ReusableBanner from "src/components/sections/banner";
import SingleDomainEntry from "./sections/entry";
import Page from "src/components/ui/Page";
import ParagraphList from "src/components/sections/paragraphList";

const image =
	"https://res.cloudinary.com/dt0uaru3j/image/upload/v1723239867/KENIX%20WASTE%20SOLUTIONS%20LTD/istockphoto-1604931037-612x612_codz95_srm79k.png";

const StyledWrapper = styled(Box)(({ theme }) => ({}));

const SingleDomain = ({ domain }) => {
	return (
		<Page
			title={
				domain.title +
				" || Kenix Waste Solutions Domains || Kenix Waste Solutions | Leading Waste Management Solutions"
			}
		>
			<StyledWrapper>
				<ReusableBanner
					title={domain.title}
					subtitle={domain.subtitle}
					image={image}
					height="85vh"
					alignItems="center"
				/>
				<SingleDomainEntry />
				<ParagraphList
					content={domain.content}
					icon="game-icons:cash"
					iconWidth={35}
					buttonText={`Capitalize on ${domain.title} Now`}
					modalTitle={domain.title}
				/>
			</StyledWrapper>
		</Page>
	);
};

const mapStateToProps = ({ domain }) => ({
	domain: domain.domain,
});

export default connect(mapStateToProps)(SingleDomain);
