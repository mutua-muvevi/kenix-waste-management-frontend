import {
	Box,
	Card,
	CardContent,
	Container,
	Divider,
	Grid,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import { contactItems, helpList } from "./info";

import Iconify from "src/components/iconify/iconify";
import TitleSubtitle from "src/components/sections/titlesubtitle";
import HelpList from "src/content/help";

const subtitle =
	"Our dedicated team stands ready to assist you, responsive and resolute, whether it's an email query or a phone call discussion. Your success is our mission, and we strive to ensure your journey with us is smooth and rewarding.";

const StyledWrapper = styled(Box)(({ theme }) => ({}));

const StyledContainer = styled(Container)(({ theme }) => ({
	paddingBottom: "50px",
}));

const ContactCards = () => {
	const theme = useTheme();

	return (
		<StyledWrapper>
			<StyledContainer maxWidth="xl">
				<Stack direction="column" spacing={5}>
					<TitleSubtitle
						chipText="support"
						title="Seamless Support: Your Lifeline in the Tech Terrain"
						subtitle={subtitle}
						alignItems="center"
					/>

					<div>
						<Grid container spacing={3}>
							{contactItems
								? contactItems.map((el, i) => (
										<Grid
											item
											xs={12}
											sm={12}
											md={6}
											lg={4}
											xl={4}
										>
											<Card>
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
																width={45}
																icon={el.icon}
															/>

															<Stack direction="column">
																<Typography variant="h5">
																	{el.title}
																</Typography>
																<Typography
																	variant="subtitle"
																	color={
																		theme
																			.palette
																			.mode ===
																		"light"
																			? undefined
																			: "text.secondary"
																	}
																>
																	{el.subtitle}
																</Typography>
															</Stack>
														</Stack>
														<Typography variant="body1">
															{el.text}
														</Typography>
													</Stack>
												</CardContent>
											</Card>
										</Grid>
								  ))
								: ""}

							{HelpList.classification.map((el, i) => (
								<Grid
									item
									xs={12}
									sm={12}
									md={12}
									lg={4}
									xl={4}
									key={i}
								>
									<Card>
										<CardContent>
											<Stack
												direction="column"
												spacing={2}
											>
												<Iconify
													icon={el.icon}
													width={50}
												/>
												<Typography variant="h5">
													{el.title}
												</Typography>
												<Typography
													variant="body1"
													color={
														theme
															.palette
															.mode ===
														"light"
															? undefined
															: "text.secondary"
													}
													textAlign="justify"
												>
													{el.mainText}
												</Typography>

												<Stack
													direction="column"
													spacing={1.5}
												>
													{el.items.map(
														(item, index) => (
															<Stack
																direction="row"
																spacing={3}
																justifyContent="left"
																key={index}
															>
																<Iconify
																	icon={
																		item.icon
																	}
																/>
																<Typography
																	variant="body1"
																	textAlign="justify"
																>
																	{item.text}
																</Typography>
															</Stack>
														)
													)}
												</Stack>
											</Stack>
										</CardContent>
									</Card>
								</Grid>
							))}
						</Grid>
					</div>
				</Stack>
			</StyledContainer>
		</StyledWrapper>
	);
};

export default ContactCards;
