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
	"Experience the harmony of sustainability as we synchronize the diverse elements of waste management to align with your unique environmental goals. We navigate various sectors, transforming waste challenges into opportunities that positively impact communities. Our team of experts conducts a symphony of efficient, responsible, and customized waste solutions, each initiative reflecting our unwavering commitment to excellence. Join us as we lead the way in sustainable transformation, composing a greener future, one innovative solution at a time.";

const StyledWrapper = styled(Box)(({ theme }) => ({}));

const StyledContainer = styled(Container)(({ theme }) => ({
	paddingTop: "100px",
	paddingBottom: "100px",
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
							title="Orchestrating Sustainable Solutions for a Greener Africa"
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
														<Typography variant="body1" textAlign="justify">
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
										<Button
											variant="contained"
											color="secondary"
											onClick={() => setOpen(true)}
											endIcon={
												<Iconify
													width={35}
													icon="clarity:cursor-hand-solid"
												/>
											}
										>
											<Typography variant="h5">
												Request a service
											</Typography>
										</Button>
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
