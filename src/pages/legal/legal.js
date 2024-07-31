import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Page from "src/components/ui/Page";

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const Legal = () => {
	return (
		<Page title="Our Legal || Kenix Waste Solutions | Leading Waste Management Solutions">
			<StyledWrapper>
				<div>Legal</div>
			</StyledWrapper>
		</Page>
	)
}

export default Legal