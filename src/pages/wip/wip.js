import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Page from "src/components/ui/Page";

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const WIP = () => {
	return (
		<Page title="Work in Progress">
			<StyledWrapper>
				<div>WIP</div>
			</StyledWrapper>
		</Page>
	)
}

export default WIP