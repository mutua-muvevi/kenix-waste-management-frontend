import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Page from "src/components/ui/Page";

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const Research = () => {
	return (
		<Page title="Research Articles">
			<StyledWrapper>
				<div>Research Articles</div>
			</StyledWrapper>
		</Page>
	)
}

export default Research