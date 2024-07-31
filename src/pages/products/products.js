import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Page from "src/components/ui/Page";

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const Products = () => {
	return (
		<Page title="Products Articles || Kenix Waste Solutions | Leading Waste Management Solutions">
			<StyledWrapper>
				<div>Products Articles</div>
			</StyledWrapper>
		</Page>
	)
}

export default Products