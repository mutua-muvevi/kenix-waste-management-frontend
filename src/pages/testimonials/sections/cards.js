import { Box, Card, CardContent, Container, Grid, Rating, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import TitleSubtitle from "src/components/sections/titlesubtitle";
import TestimonialsList from "src/content/testimonials";

const subtitle="Our valued clients have shared their stories, highlighting the outstanding results, seamless experiences, and the transformative impact of our solutions. From small businesses to industry leaders, their testimonials showcase the value we bring to their organizations. ";

const StyledWrapper = styled(Box)(({ theme }) => ({
	
}))

const StyledContainer = styled(Container)(({ theme }) => ({
	paddingTop: "100px",
	paddingBottom: "100px",
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
	
}))

const StyledGridItem = styled(Grid)(({ theme }) => ({
	minHeight: "40vh",
}))

const StyledCard = styled(Card)(({ theme }) => ({
	width: "350px"
}))

const styledImage ={
	width: "50px",
	height: "50px",
	borderRadius: "50%"
}

const TestimonialsCards = () => {
	return (
		<StyledWrapper>
			<StyledContainer maxWidth="xl">
				<Stack direction="column" spacing={3}>
					<TitleSubtitle
						chipText="testimonials"
						title="Trusted all around the world"
						subtitle={subtitle}
						alignItems="center"
					/>

					<div>
						<Grid container spacing={3}>
							{
								TestimonialsList.map((el, i) => (
									<Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={i}>
										<StyledCard>
											<CardContent>
												<Stack direction="column" spacing={3}>
													<img src={el.image} alt={el.fullname} style={styledImage}/>

													<Typography variant="body1">
														{el.description}
													</Typography>
													<Stack direction="column" spacing={1.5}>
														<Typography variant="subtitle1">
															{el.fullname}
														</Typography>
														<Typography variant="subtitle2">
															{el.professional}
														</Typography>
														<Rating readOnly value={el.rating} precision={0.5} />
													</Stack>
												</Stack>
											</CardContent>
										</StyledCard>
									</Grid>
								))
							}
						</Grid>
					</div>
				</Stack>
			</StyledContainer>
		</StyledWrapper>
	)
}

export default TestimonialsCards