import {
	Box,
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
import { useNavigate } from "react-router-dom";
import Iconify from "src/components/iconify/iconify";
import TitleSubtitle from "src/components/sections/titlesubtitle";

import ServiceList from "src/content/services";
import { selectService } from "src/redux/services/action";
import { truncateStr } from "src/utils/formatStrings";

const StyledWrapper = styled(Box)(({ theme }) => ({
	paddingTop: "100px",
	paddingBottom: "100px",
}));

const subtitle =
	"With our comprehensive suite of innovative services, we empower you to thrive in the digital age. Experience the difference of our cutting-edge technologies, expert guidance, and unparalleled customer service. Together, let's embark on a journey of digital transformation and achieve new heights of success.";

const HomeServices = ({ selectService }) => {
	const navigate = useNavigate();
	const theme = useTheme();

	const selectServiceHandler = (service) => {
		selectService(service);
		navigate("/landing/service/single");
	};

	return (
		<StyledWrapper>
			<Container maxWidth="xl">
				<Stack diretion="column" spacing={5} alignItems="center">
					<TitleSubtitle
						title="What we offer"
						subtitle={subtitle}
						chipText="Our Services"
						alignItems="center"
					/>

					<div>
						<Grid container spacing={3}>
							{ServiceList.map((service, i) => (
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
												selectServiceHandler(service)
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
															icon={service.icon}
															width={50}
														/>
														<Stack direction="column">
															<Typography variant="h5">
																{service.title}
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
																	service.subtitle
																}
															</Typography>
														</Stack>
													</Stack>
													<Typography variant="body1">
														{truncateStr(
															service.mainText,
															200
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
			</Container>
		</StyledWrapper>
	);
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
	selectService: (service) => dispatch(selectService(service)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeServices);
