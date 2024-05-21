import { useState } from "react";

import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { styled } from "@mui/system";

import QuotationForm from "./quotationform";
import TitleSubtitle from "./titlesubtitle";
import Iconify from "../iconify/iconify";
import ModalComponent from "../ui/Modal";


const StyledWrapper = styled(Stack)(({ theme }) => ({}));
const StyledContentWrapper = styled(Box)(({ theme }) => ({}));
const StyledContainer = styled(Container)(({ theme }) => ({}));

const StyledGrid = styled(Grid)(({ theme }) => ({
	paddingTop: "100px",
	paddingBottom: "100px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
	marginTop: "100px",
	marginBottom: "100px",
}));

const ParagraphList = ({ content, chipColor, icon, iconWidth, buttonText, modalTitle }) => {
	const [ open, setOpen ] = useState(false);
	const theme = useTheme();

	const StyledListIconBox = styled(Box)(({ theme }) => ({
		padding: "0",
		backgroundColor:
			chipColor && chipColor === "white"
				? "#ffffff"
				: theme.palette.primary.main,
		color:
			chipColor && chipColor === "white"
				? theme.palette.primary.main
				: "#ffffff",
		borderRadius: theme.shape.borderRadius,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	}));

	return (
		<>
			<StyledWrapper direction="column">
				{content
					? content.map((cont, index) => (
							<StyledContentWrapper
								sx={{
									backgroundColor:
										index % 2 === 0
											? ""
											: theme.palette.background.paper,
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
										>
											<Stack direction="column" spacing={3}>
												{cont.list &&
													cont.list.items ? cont.list.items.map(
														(item, i) => (
															<Stack
																direction="row"
																spacing={2}
																key={i}
															>
																{item.icon && (
																	<StyledListIconBox
																		sx={{
																			width: "70px",
																		}}
																	>
																		<Iconify
																			icon={
																				item.icon
																			}
																			width={
																				40
																			}
																		/>
																	</StyledListIconBox>
																)}
																<Stack
																	direction="column"
																	spacing={1}
																>
																	<Typography variant="h5">
																		{item.title}
																	</Typography>
																	<Typography variant="body2">
																		{item.text}
																	</Typography>
																</Stack>
															</Stack>
														)
													) : ""
												}
											</Stack>
										</Grid>
									</StyledGrid>
								</StyledContainer>
							</StyledContentWrapper>
					))
					: ""}

				<Container maxWidth="xl">
					<Stack>
						<StyledButton
							onClick={() => setOpen(true)}
							variant="contained"
							color="primary"
							endIcon={
								<Iconify
									width={iconWidth ? iconWidth: 25}
									icon={icon ? icon : "material-symbols:order-approve-rounded"}
								/>
							}
						>
							<Typography variant="h5">
								{ buttonText ? buttonText : "Request now" }
							</Typography>
						</StyledButton>
					</Stack>
				</Container>
			</StyledWrapper>
			<ModalComponent
				header={`Quotation for ${modalTitle}`}
				width="75vw"
				open={open}
				close={() => setOpen(false)}
				children={<QuotationForm/>}
			/>
		</>
	);
};


export default ParagraphList;
