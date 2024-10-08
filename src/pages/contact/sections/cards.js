import {
	Box,
	Card,
	CardContent,
	Container,
	Grid,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import { contactItems } from "./info";

import Iconify from "src/components/iconify/iconify";
import TitleSubtitle from "src/components/sections/titlesubtitle";
import HelpList from "src/content/help";


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
						title={HelpList.title}
						subtitle={HelpList.subtitle}
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
											key={i}
										>
											<Card>
												<CardContent sx={{minHeight: 200}}>
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
