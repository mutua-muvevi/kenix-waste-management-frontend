import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import TitleSubtitle from "./titlesubtitle";
import { truncateStr } from "src/utils/formatStrings";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectBlog } from "src/redux/blogs/action";

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

const ReusableBlogsCards = ({title, subtitle, alignItems, chipText, list, setBlogs}) => {

	const navigate = useNavigate()

	const handleSelectBlogs = (blog) => {
		setBlogs(blog)
		navigate("/landing/blog/single")
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
							list.map((blog, i) => (
								<Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={i}>
									<StyledCard raised>
										<StyledCardActionArea onClick={() => handleSelectBlogs(blog)}>
											<CardMedia
												component="img"
												src={blog.thumbnail}
												alt={`${blog.title} : Kenix Waste Solutions Blog thumbnail`}
												height={250}
											/>
											<CardContent>
												<Stack direction="column" spacing={3}>
													<Typography variant="h6">
														{ truncateStr(blog.title, 55) }
													</Typography>
													<Typography variant="body1" textAlign="justify">
														{truncateStr(blog.mainParagraphs[0], 100)}
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
	setBlogs : (blog) => dispatch(selectBlog(blog))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(ReusableBlogsCards)