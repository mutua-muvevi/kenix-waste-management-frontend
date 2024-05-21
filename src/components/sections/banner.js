import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";


const ReusableBanner = ({ image, height, title, subtitle }) => {
	
	const StyledWrapper = styled(Box)(({ theme }) => ({
		backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${image})`,
		backgroundSize: "cover",
		backgroundAttachment: "fixed",
		backgroundPosition: "bottom",
	}));
	
	const StyledContainer = styled(Container)(({ theme }) => ({
		minHeight: height,
		paddingTop: "100px",
		paddingBottom: "70px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-end",
	}));

	return (
		<StyledWrapper>
			<StyledContainer maxWidth="xl">
				<Stack direction="column" spacing={5}>
					<Typography variant="h2" sx={{ color: "#ffffff" }}>
						{title}
					</Typography>
					<Typography variant="h6" textAlign="justify" sx={{ color: "#ffffff" }}>
						{subtitle}
					</Typography>
				</Stack>
			</StyledContainer>
		</StyledWrapper>
	);
};

export default ReusableBanner;
