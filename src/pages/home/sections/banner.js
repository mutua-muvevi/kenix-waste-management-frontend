import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import useTypewriter from "src/hooks/useTypewriter";

const Image = "https://res.cloudinary.com/dt0uaru3j/image/upload/v1720638776/KENIX%20WASTE%20SOLUTIONS%20LTD/road-8003640_1920_zsm9pf.jpg";
const subtitle = "Kennix Waste Management provides tailored waste management solutions designed to meet your specific requirements. Our dedicated team works closely with clients to deliver efficient and sustainable waste management strategies. Trust us to handle your waste management needs with expertise and commitment."

const StyledWrapper = styled(Box)(({ theme }) => ({
	minHeight: "75vh",
	backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${Image})`,
	backgroundSize: "cover",
	backgroundAttachment: "fixed",
	backgroundPosition: "bottom",
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
		"Commercial Waste Collection",
		"Recycling and Reuse Solutions",
		"Hazardous Waste Management",
		"Organic Waste Composting",
		"E-Waste Recycling",
		"Waste Management Consulting",
		"Sustainable Waste Solutions",
		"Industrial Waste Services",
		"Medical Waste Disposal",
		"Sale of recyclables"
	];
	
	const typing = useTypewriter(words);

	return (
		<StyledWrapper>
			<StyledContainer maxWidth="xl">
				<Stack direction="column" spacing={5} justifyContent="flex-end">
				
					<Typography variant="h2" sx={{color: "#ffffff"}}>
						What we do: {typing}
					</Typography>

					<Typography variant="h5" textAlign="justify" sx={{ color: "#ffffff" }}>
						{subtitle}
					</Typography>
				</Stack>

			</StyledContainer>
		</StyledWrapper>
	);
};

export default Banner;
