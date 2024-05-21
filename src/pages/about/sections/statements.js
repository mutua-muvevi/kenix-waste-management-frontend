import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { statements } from "./info";
import ReusableCounter from "src/hooks/useCounter";

const StyledWrapper = styled(Box)(({ theme }) => ({
}))

const StyledContainer = styled(Container)(({ theme }) => ({
	paddingTop: "70px",
	paddingBottom: "70px",
}))

const MisionStatements = () => {
	
	return (
		<StyledWrapper>
			<StyledContainer maxWidth="xl">
				<Grid container spacing={3}>
					<Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
						<Stack direction="column" spacing={2}>
							<ReusableCounter number={100} duration={2000} variant="h1" sx={{fontSize: "100px"}}/>
							
							<Typography variant="h6">
								Work Done
							</Typography>
						</Stack>
					</Grid>
					{
						statements.map((el, i) => (
							<Grid item xs={12} sm={12} md={12} lg={4} xl={4} key={i}>
								<Stack direction="column" spacing={3}>
									<Typography variant="h4">
										{el.title}
									</Typography>
									<Typography variant="body1">
										{el.text}
									</Typography>
								</Stack>
							</Grid>
						))
					}
				</Grid>
			</StyledContainer>
		</StyledWrapper>
	)
}

export default MisionStatements