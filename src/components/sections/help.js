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

import TitleSubtitle from "src/components/sections/titlesubtitle";
import Iconify from "../iconify/iconify";

import HelpList from "src/content/help";

const StyledWrapper = styled(Box)(({ theme }) => ({}));

const StyledContainer = styled(Container)(({ theme }) => ({
	paddingTop: "100px",
	paddingBottom: "100px",
}));

const Help = () => {
	const theme = useTheme();

	return (
		<StyledWrapper>
			<StyledContainer maxWidth="xl">
				<Stack direction="column" spacing={5}>
					<TitleSubtitle
						chipText="Need Help"
						title={HelpList.title}
						subtitle={HelpList.subtitle}
						alignItems="center"
					/>

					<div>
						<Grid container spacing={3}>
							{HelpList.classification.map((help, i) => (
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
													icon={help.icon}
													width={50}
												/>
												<Typography variant="h5">
													{help.title}
												</Typography>
												<Typography
													variant="body1"
													color={
														theme.palette.mode ===
														"light"
															? undefined
															: "text.secondary"
													}
												>
													{help.mainText}
												</Typography>

												<Stack
													direction="column"
													spacing={1.5}
												>
													{help.items.map(
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

export default Help;
