import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import TitleSubtitle from "./titlesubtitle";
import { truncateStr } from "src/utils/formatStrings";
import { selectNews } from "src/redux/news/action";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const StyledWrapper = styled(Container)(({ theme }) => ({
	paddingTop: "100px",
	paddingBottom: "100px",
}))

const StyledCard = styled(Card)(({ theme }) => ({
	borderRadius: theme.shape.borderRadius,
	minHeight: 450
}))

const StyledCardActionArea = styled(CardActionArea)(({ theme }) => ({
	height: "100%"
}))

const ReusableNewsCards = ({title, subtitle, alignItems, chipText, list, setNews}) => {

	const navigate = useNavigate()

	const handleSelectNews = (news) => {
		setNews(news)
		navigate("/landing/news/single")
	}

	return (
		<StyledWrapper maxWidth="xl">
			<Stack direction="column" spacing={5} justifyContent="center">
				<TitleSubtitle
					title={title}
					subtitle={subtitle}
					chipText={chipText}
					alignItems={alignItems ? alignItems : "flex-start"}
				/>
				<div>
					<Grid container spacing={3}>
						{
							list.map((news, i) => (
								<Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={i}>
									<StyledCard raised>
										<StyledCardActionArea onClick={() => handleSelectNews(news)}>
											<CardMedia
												component="img"
												src={news.thumbnail}
												alt={`${news.title} : Kenix Waste Solutions Blog thumbnail`}
												height={250}
											/>
											<CardContent>
												<Stack direction="column" spacing={3}>
													<Typography variant="h6">
														{ truncateStr(news.title, 55) }
													</Typography>
													<Typography variant="body1" textAlign="justify">
														{truncateStr(news.mainParagraphs[0], 100)}
													</Typography>
												</Stack>
											</CardContent>
										</StyledCardActionArea>
									</StyledCard>
								</Grid>
							))
						}
					</Grid>
				</div>
			</Stack>
		</StyledWrapper>
	)
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = (dispatch) => ({
	setNews : (news) => dispatch(selectNews(news))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(ReusableNewsCards)