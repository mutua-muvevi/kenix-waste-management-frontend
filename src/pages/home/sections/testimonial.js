import {  Box, Card, CardContent, Container, Grid, Rating, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ReusableCarousel from "src/components/sections/carousel";

import TitleSubtitle from "src/components/sections/titlesubtitle";
import TestimonialsList from "src/content/testimonials";

const subtitle=  "Discover what our clients have to say about their experiences with our services. Read these glowing testimonials and see why we're the best choice for your needs.";

const StyledWrapper = styled(Box)(({ theme }) => ({
	paddingTop: "100px",
	paddingBottom: "100px",
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
	
}))

const StyledGridItem = styled(Grid)(({ theme }) => ({
	minHeight: "40vh",
}))

const StyledCard = styled(Card)(({ theme }) => ({
	minHeight: "450px",
	width: "380px",
}))

const styledImage ={
	width: "50px",
	height: "50px",
	borderRadius: "50%"
}

const HomeTestimonial = () => {
	return (
		<StyledWrapper>
			<Container maxWidth="xl">
				<StyledGrid container spacing={3}>
					<StyledGridItem item xs={12} sm={12} md={12} lg={4} xl={4}>
						<TitleSubtitle
							title="Words of Appreciation from our Customers"
							subtitle={subtitle}
							chipText="testimonials"
						/>
					</StyledGridItem>
					<StyledGridItem item xs={12} sm={12} md={12} lg={8} xl={8}>
						<ReusableCarousel speed={2000} visibleItems={2}>
							{
								TestimonialsList.map((el, i) => (
									<Grid item xs={12} sm={12} md={12} lg={4} xl={3} key={i}>
										<StyledCard>
											<CardContent>
												<Stack direction="column" spacing={3}>
													<img src={el.image} alt={el.fullname} style={styledImage}/>

													<Typography variant="body1" textAlign="justify">
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
						</ReusableCarousel>
					</StyledGridItem>
				</StyledGrid>
			</Container>
		</StyledWrapper>
	)
}

export default HomeTestimonial;
