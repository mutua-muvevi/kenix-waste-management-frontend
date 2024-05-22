import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import useTypewriter from "src/hooks/useTypewriter";

const Image = "https://res.cloudinary.com/dbj0t0zym/image/upload/v1687983038/images/techbackground_f8nfzu.jpg";
const subtitle = "Kennix Waste Management provides tailored waste management solutions designed to meet your specific requirements. Our dedicated team works closely with clients to deliver efficient and sustainable waste management strategies. Trust us to handle your waste management needs with expertise and commitment."

const StyledWrapper = styled(Box)(({ theme }) => ({
	minHeight: "75vh",
	backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${Image})`,
	backgroundSize: "cover",
	backgroundAttachment: "fixed",
	backgroundPosition: "center",
}));

const StyledContainer = styled(Container)(({ theme }) => ({
	paddingTop: "100px",
	paddingBottom: "70px",
	minHeight: "70vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "flex-end",
}));

const Banner = () => {
	const words = [
		"Residential Waste Collection",
		"Commercial Waste Disposal",
		"Recycling and Reuse Solutions",
		"Hazardous Waste Management",
		"Organic Waste Composting",
		"E-Waste Recycling",
		"Waste Management Consulting",
		"Sustainable Waste Solutions",
		"Waste-to-Energy Projects",
		"Industrial Waste Services",
		"Medical Waste Disposal",
		"Waste Treatment Technologies"
	];
	
	const typing = useTypewriter(words);

	return (
		<StyledWrapper>
			<StyledContainer maxWidth="xl">
				<Stack direction="column" spacing={5} justifyContent="flex-end">
				
					<Typography variant="h2" sx={{color: "#ffffff"}}>
						What we do: {typing}
					</Typography>

					<Typography variant="h6" textAlign="justify" sx={{ color: "#ffffff" }}>
						{subtitle}
					</Typography>
				</Stack>

			</StyledContainer>
		</StyledWrapper>
	);
};

export default Banner;
