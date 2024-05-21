import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardContent,
	Container,
	Grid,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import { connect } from "react-redux";

import Iconify from "src/components/iconify/iconify";
import TitleSubtitle from "src/components/sections/titlesubtitle";
import DomainList from "src/content/domain";

import ModalComponent from "src/components/ui/Modal";
import QuotationForm from "src/components/sections/quotationform";

import { selectDomain } from "src/redux/domain/action";
import { truncateStr } from "src/utils/formatStrings";

const subtitle =
	"Experience the rhythm of innovation as we harmonize the varied chords of technology to resonate with your unique needs. We strum the strings of diverse sectors, translating the language of tech into real-world applications that transform lives. As the baton waves, our orchestra of experts plays the symphony of secure, efficient, and tailored solutions. Each composition is a testament to our commitment, our pursuit of excellence, echoing our dedication to empowering your success story. Journey with us, as we conduct the symphony of digital transformation, one note of innovation at a time.";

const StyledWrapper = styled(Box)(({ theme }) => ({}));

const StyledContainer = styled(Container)(({ theme }) => ({
	paddingTop: "100px",
	paddingBottom: "100px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
	padding: "10px",
}));

const DomainCards = ({ selectDomain }) => {
	const [open, setOpen] = useState(false);

	const navigate = useNavigate();
	const theme = useTheme();

	const selectDomainHandler = (domain) => {
		selectDomain(domain);
		navigate("/landing/domain/single");
	};

	return (
		<>
			<StyledWrapper>
				<StyledContainer maxWidth="xl">
					<Stack direction="column" spacing={5}>
						<TitleSubtitle
							chipText="Our domain"
							title="Crafting the Digital Rhythm of Africa"
							subtitle={subtitle}
						/>
						<div>
							<Grid container spacing={3}>
								{DomainList.map((domain, i) => (
									<Grid
										item
										key={i}
										xs={12}
										sm={6}
										md={6}
										lg={4}
										xl={4}
									>
										<Card>
											<CardActionArea
												onClick={() =>
													selectDomainHandler(domain)
												}
											>
												<CardContent>
													<Stack
														direction="column"
														spacing={3}
													>
														<Stack
															direction="row"
															justifyContent="left"
															spacing={3}
														>
															<Iconify
																icon={
																	domain.icon
																}
																width={50}
															/>
															<Stack direction="column">
																<Typography variant="h5">
																	{
																		domain.title
																	}
																</Typography>
																<Typography
																	variant="subtitle2"
																	color={
																		theme
																			.palette
																			.mode ===
																		"light"
																			? undefined
																			: "text.secondary"
																	}
																>
																	{
																		domain.subtitle
																	}
																</Typography>
															</Stack>
														</Stack>
														<Typography variant="body1">
															{truncateStr(
																domain.mainText,
																200
															)}
														</Typography>
													</Stack>
												</CardContent>
											</CardActionArea>
										</Card>
									</Grid>
								))}
								<Grid
									item
									xs={12}
									sm={12}
									md={12}
									lg={12}
									xl={12}
								>
									<Stack>
										<StyledButton
											variant="contained"
											color="primary"
											onClick={() => setOpen(true)}
											endIcon={
												<Iconify
													width={35}
													icon="game-icons:cash"
												/>
											}
										>
											<Typography variant="h5">
												Capitalize Now
											</Typography>
										</StyledButton>
									</Stack>
								</Grid>
							</Grid>
						</div>
					</Stack>
				</StyledContainer>
			</StyledWrapper>
			<ModalComponent
				header="Quotation"
				open={open}
				close={() => setOpen(false)}
				width="75vw"
				children={<QuotationForm />}
			/>
		</>
	);
};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = (dispatch) => ({
	selectDomain: (domain) => dispatch(selectDomain(domain)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DomainCards);
