import { useState } from "react";
import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	Container,
	Divider,
	Grid,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import { styled } from "@mui/system";

import TitleSubtitle from "src/components/sections/titlesubtitle";
import Iconify from "src/components/iconify/iconify";
import ModalComponent from "src/components/ui/Modal";

import { truncateStr } from "src/utils/formatStrings";
import { selectVariety } from "src/redux/variety/action";
import { VarietyList } from "src/content/variety";

import Varietychildren from "./varietychildren";

import { connect } from "react-redux";

const subtitle =
	"Harness the Power of Innovative Waste Solutions. From Planning to Implementation, Optimization to Sustainability, Compliance to Innovation—we drive your success. Experience cleaner operations, improved efficiency, and transformative impact with tailored waste management strategies. Rely on our expertise in resolving complex waste challenges and maximizing environmental potential. Stay ahead of industry standards and embrace sustainable transformation with our forward-thinking approach.";

const StyledWrapper = styled(Box)(({ theme }) => ({}));

const StyledContainer = styled(Container)(({ theme }) => ({
	paddingTop: "70px",
	paddingBottom: "70px",
}));

const Variety = ({ varieties, variety, setVariety }) => {
	const [open, setOpen] = useState(false);
	const theme = useTheme();

	const handleClick = (variety) => {
		setVariety(variety);
		setOpen(true);
	};

	return (
		<>
			<StyledWrapper>
				<StyledContainer maxWidth="xl">
					<Divider
					
						sx={{
							backgroundColor: theme.palette.primary.main,
							mb: 15,
						}}
					/>
					<Stack direction="column" spacing={5}>
						<TitleSubtitle
							title="Empowering Business Success through Comprehensive Waste Solutions"
							subtitle={subtitle}
							chipText="In a nutshell"
						/>

						<div>
							<Grid container spacing={3}>
								{VarietyList.map((variety, i) => (
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
													handleClick(variety)
												}
											>
												<CardContent
													sx={{ minHeight: 240 }}
												>
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
																	variety.icon
																}
																width={50}
															/>
															<Stack direction="column">
																<Typography variant="h5">
																	{
																		variety.title
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
																		variety.subtitle
																	}
																</Typography>
															</Stack>
														</Stack>
														<Typography variant="body1">
															{truncateStr(
																variety.mainText,
																190
															)}
														</Typography>
													</Stack>
												</CardContent>
											</CardActionArea>
										</Card>
									</Grid>
								))}
							</Grid>
						</div>
					</Stack>
				</StyledContainer>
			</StyledWrapper>

			<ModalComponent
				header={variety ? variety.title : ""}
				open={open}
				close={() => setOpen(false)}
				width="75vw"
				children={<Varietychildren />}
				icon={variety ? variety.icon : ""}
				iconWidth={30}
			/>
		</>
	);
};

const mapStateToProps = ({ variety }) => ({
	variety: variety.variety,
	varieties: variety.allVarieties,
});

const mapDispatchToProps = (dispatch) => ({
	setVariety: (variety) => dispatch(selectVariety(variety)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Variety);
