import { Box, Button, Card, CardMedia, Container, Grid, Stack, Typography } from "@mui/material";

import { styled } from "@mui/system";

import TitleSubtitle from "./titlesubtitle";
import Iconify from "../iconify/iconify";

import { useTheme } from "@emotion/react";

const StyledWrapper = styled(Stack)(({ theme }) => ({}));
const StyledContentWrapper = styled(Box)(({ theme }) => ({}));
const StyledContainer = styled(Container)(({ theme }) => ({}));

const StyledGrid = styled(Grid)(({ theme }) => ({
	paddingTop: "50px",
	paddingBottom: "50px",
}));

const StyledImageCard = styled(Card)(({ theme }) => ({
	height: "100%"
}))

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
	height: "100%",
	minHeight: "250px"
}))

const ParagraphImageList = ({ content, }) => {
	
	const theme = useTheme();

	return (
		<StyledWrapper direction="column">
			{content
				? content.map((cont, index) => (
						<StyledContentWrapper
							sx={{
								backgroundColor:
									index % 2 === 0 ? theme.palette.background.paper : "",
							}}
						>
							<StyledContainer maxWidth="xl">
								<StyledGrid container spacing={3} key={index}>
									<Grid
										item
										xs={12}
										sm={12}
										md={12}
										lg={6}
										xl={6}
										style={{ order: index % 2 === 1 ? 2 : 1 }} // Here's the change
									>
										<Stack direction="column" spacing={3}>
											<TitleSubtitle
												title={cont.title}
												subtitle={cont.subtitle}
											/>
											{cont.paragraphs.map(
												(paragraph, i) => (
													<Typography
														variant="body1"
														key={i}
													>
														{paragraph}
													</Typography>
												)
											)}
										</Stack>
									</Grid>

									<Grid
										item
										xs={12}
										sm={12}
										md={12}
										lg={6}
										xl={6}
										style={{ order: index % 2 === 1 ? 1 : 2 }} // Here's the change
									>
										<StyledImageCard>
											<StyledCardMedia
												component="img"
												src={cont.image}
											/>
										</StyledImageCard>
									</Grid>
								</StyledGrid>
							</StyledContainer>
						</StyledContentWrapper>
				  ))
				: ""}

		</StyledWrapper>
	);
};

export default ParagraphImageList;
