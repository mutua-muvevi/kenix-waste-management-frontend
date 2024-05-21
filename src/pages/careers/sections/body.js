import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const StyledContainer = styled(Container)(({ theme }) => ({
	paddingTop: "100px",
	paddingBottom: "100px",
}))

const CarreerBody = () => {
	return (
		<StyledWrapper>
			<StyledContainer maxWidth="xl">
				<Typography variant="h5">
					Currently We have no positions availabe. Check in soon!!
				</Typography>
			</StyledContainer>
		</StyledWrapper>
	)
}

export default CarreerBody