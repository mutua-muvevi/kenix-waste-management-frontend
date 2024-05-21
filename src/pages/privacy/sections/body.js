import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import Iconify from "src/components/iconify/iconify";
import PrivacyPolicyList from "src/content/privacyPolicy";

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const StyledContainer = styled(Container)(({ theme }) => ({
	paddingTop: "100px",
	paddingBottom: "100px",
}))

const PrivacyPolicyBody = () => {
	return (
		<StyledWrapper>
			<StyledContainer maxWidth="xl">
				<Stack direction="column" spacing={5}>
					{
						PrivacyPolicyList.map((term, i) => (
							<Stack direction="column" key={i} spacing={2}>
								<Stack direction="row" alignItems="center" spacing={3}>
									<Iconify icon={term.icon} width={30}/>
									<Typography variant="h5">
										{term.title}
									</Typography>
								</Stack>
								<Typography variant="body1" textAlign="justify">
									{term.paragraph}
								</Typography>
							</Stack>
						))
					}
				</Stack>
			</StyledContainer>
		</StyledWrapper>
	)
}

export default PrivacyPolicyBody