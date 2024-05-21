import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import ParagraphImageList from "src/components/sections/paragraphImageList";
import { connect } from "react-redux"

const StyledWrapper = styled(Box)(({ theme }) => ({}));

const StyledContainer = styled(Container)(({ theme }) => ({
	paddingTop: "100px",
	paddingBottom: "100px",
}));

const StyledChipStack = styled(Stack)(({ theme }) => ({
	border: `1px solid ${theme.palette.primary.main}`,
	borderRadius: theme.shape.borderRadius,
	padding: "5px",
}));

const StyledChipBox = styled(Box)(({ theme }) => ({
	border: `1px solid ${theme.palette.primary.main}`,
	borderRadius: theme.shape.borderRadius,
	padding: "5px",
	maxWidth: "300px",
}));

const SingleNewsBody = ({ blog }) => {
	return (
		<StyledWrapper>
			<StyledContainer maxWidth="xl">
				<Stack direction="column" spacing={5}>
					<Stack direction="column" spacing={3}>
						{blog.mainParagraphs
							? blog.mainParagraphs.map((paragraph, i) => (
									<Typography
										variant="h6"
										textAlign="justify"
										key={i}
									>
										{paragraph}
									</Typography>
							  ))
							: ""}
					</Stack>
				</Stack>
			</StyledContainer>

			<ParagraphImageList content={blog.content} />

			<StyledContainer maxWidth="xl">
				<Stack direction="column" spacing={5}>		
					<Stack direction="column" spacing={1.5}>
						<Typography variant="subtitle1">Tags :</Typography>
						<div>
							<Grid container spacing={3}>
								{blog.tags
									? blog.tags.map((tag, i) => (
											<Grid
												item
												xs={12}
												sm={6}
												md={3}
												lg={2.4}
												key={i}
											>
												<StyledChipStack
													justifyContent="center"
													alignItems="center"
												>
													<Typography
														variant="body1"
														textAlign="center"
													>
														{tag}
													</Typography>
												</StyledChipStack>
											</Grid>
									))
									: ""}
							</Grid>
						</div>
					</Stack>

					<Stack direction="column" spacing={1.5}>
						<Typography variant="subtitle1">Category :</Typography>

						<StyledChipBox>
							<Typography variant="body1" textAlign="center">
								{blog.category}
							</Typography>
						</StyledChipBox>
					</Stack>
				</Stack>
			</StyledContainer>
		</StyledWrapper>
	);
};

const mapStateToProps = ({ blog }) => ({
	blog: blog.blog,
});

export default connect(mapStateToProps)(SingleNewsBody);
