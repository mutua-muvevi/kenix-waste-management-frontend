import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import Iconify from "src/components/iconify/iconify";
import RefundPolicyList from "src/content/refundPolicy";

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const StyledContainer = styled(Container)(({ theme }) => ({
	paddingTop: "100px",
	paddingBottom: "100px",
}))

const RefundsPolicyBody = () => {
	return (
		<StyledWrapper>
			<StyledContainer maxWidth="xl">
				<Stack direction="column" spacing={5}>
					{
						RefundPolicyList.map((refund, i) => (
							<Stack direction="column" key={i} spacing={2}>
								<Stack direction="row" alignItems="center" spacing={3}>
									<Iconify icon={refund.icon} width={30}/>
									<Typography variant="h5">
										{refund.title}
									</Typography>
								</Stack>
								<Typography variant="body1" textAlign="justify">
									{refund.paragraph}
								</Typography>
							</Stack>
						))
					}
				</Stack>
			</StyledContainer>
		</StyledWrapper>
	)
}

export default RefundsPolicyBody