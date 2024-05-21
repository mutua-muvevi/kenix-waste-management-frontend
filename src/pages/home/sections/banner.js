import { Box, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import useTypewriter from "src/hooks/useTypewriter";
import { bannerCards } from "./info";

const Image = "https://res.cloudinary.com/dbj0t0zym/image/upload/v1687983038/images/techbackground_f8nfzu.jpg";
const subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tortor enim, euismod non mattis vel, ullamcorper vel purus. Sed scelerisque varius dui, ac dapibus lacus aliquet porttitor. Mauris dictum dignissim augue a hendrerit. Aliquam gravida aliquam porttitor. Suspendisse quis metus urna. Vestibulum sed ultrices eros. Donec placerat orci ante. Suspendisse et pulvinar metus. Donec ac nulla commodo, varius nisi a, aliquet metus. Mauris ornare neque sit amet nisl tristique efficitur. Vivamus velit arcu, tempor non dapibus ac, consequat posuere nisl. Nulla vitae orci at ligula pretium eleifend. Praesent nunc ex, sollicitudin eu ligula sit amet, lacinia viverra elit.";

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
						Our niche include: {typing}
					</Typography>

					<Typography variant="h6" sx={{ color: "#ffffff" }}>
						{subtitle}
					</Typography>

					<div>
						<Grid container spacing={3}>
							{
								bannerCards.map((el, i) => (
									<Grid item xs={12} sm={6} md={6} lg={3} xl={3} key={i}>
										<Card>
											<CardContent>
												<Stack direction="column" spacing={1.5}>
													<Typography variant="h3">
														0{1 + i}
													</Typography>

													<Typography variant="h5">
														{el.title}
													</Typography>

													<Typography variant="body1" textAlign="justify">
														{el.text}
													</Typography>
												</Stack>
											</CardContent>
										</Card>
									</Grid>
								))
							}
						</Grid>
					</div>
				</Stack>

			</StyledContainer>
		</StyledWrapper>
	);
};

export default Banner;
