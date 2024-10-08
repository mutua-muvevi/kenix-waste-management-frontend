import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import useTypewriter from "src/hooks/useTypewriter";

const Image = "https://res.cloudinary.com/dt0uaru3j/image/upload/v1720638205/KENIX%20WASTE%20SOLUTIONS%20LTD/recycle-background-with-recycle-sign-rubbish_y0cv7b.jpg";
const subtitle = "Kenix Waste Solutions provides tailored waste management solutions designed to meet your specific requirements. Our dedicated team works closely with clients to deliver efficient and sustainable waste management strategies. Trust us to handle your waste management needs with expertise and commitment."

const StyledWrapper = styled(Box)(({ theme }) => ({
	minHeight: "75vh",
	backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.75)), url(${Image})`,
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
		"Recycling and Resource Recovery",
		"Hazardous Waste Management",
		"Organic Waste Composting",
		"E-Waste Recycling",
		"Waste Management Consulting",
		"Industrial Waste Services",
		"Biomedical Waste Management",
	];
	
	const typing = useTypewriter(words);

	return (
		<StyledWrapper>
			<StyledContainer maxWidth="xl">
				<Stack direction="column" spacing={5} justifyContent="flex-end">
				
					<Typography variant="h2" sx={{color: "#ffffff"}}>
						What we do: {typing}
					</Typography>

					<Typography variant="h4" textAlign="justify" sx={{ color: "#ffffff", fontWeight: 500 }}>
						{subtitle}
					</Typography>
				</Stack>

			</StyledContainer>
		</StyledWrapper>
	);
};

export default Banner;
