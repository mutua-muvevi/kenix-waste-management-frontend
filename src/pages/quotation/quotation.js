import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Page from "src/components/ui/Page";

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const Quotation = () => {
	return (
		<Page title="Quotation Articles || Kenix Waste Solutions | Leading Waste Management Solutions">
			<StyledWrapper>
				<div>Quotation Articles</div>
			</StyledWrapper>
		</Page>
	)
}

export default Quotation