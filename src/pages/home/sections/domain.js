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

import Iconify from "src/components/iconify/iconify";
import TitleSubtitle from "src/components/sections/titlesubtitle";
import DomainList from "src/content/domain";

import { selectDomain } from "src/redux/domain/action";
import { truncateStr } from "src/utils/formatStrings";

import { connect } from "react-redux";

const subtitle =
	"Experience the harmony of sustainability as we synchronize the diverse elements of waste management to align with your unique environmental goals. We navigate various sectors, transforming waste challenges into opportunities that positively impact communities. Our team of experts conducts a symphony of efficient, responsible, and customized waste solutions, each initiative reflecting our unwavering commitment to excellence. Join us as we lead the way in sustainable transformation, composing a greener future, one innovative solution at a time.";

const StyledWrapper = styled(Box)(({ theme }) => ({
	paddingTop: "100px",
	paddingBottom: "100px",
}));

const SlicedDomainList = DomainList.slice(0, 9);

const HomeDomain = ({ selectDomain }) => {
	const navigate = useNavigate();
	const theme = useTheme();

	const goToDomain = () => {
		navigate("/landing/domain");
	};

	const selectDomainHandler = (domain) => {
		selectDomain(domain);
		navigate("/landing/domain/single");
	};

	return (
		<StyledWrapper>
			<Container maxWidth="xl">
				<Stack direction="column" spacing={5}>
					<TitleSubtitle
						chipText="Our Domain"
						title="Orchestrating Sustainable Solutions for a Greener Africa"
						subtitle={subtitle}
					/>

					<div>
						<Grid container spacing={3}>
							{SlicedDomainList.map((domain, i) => (
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
															icon={domain.icon}
															width={50}
														/>
														<Stack direction="column">
															<Typography variant="h5">
																{domain.title}
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
						</Grid>
					</div>
					<Button
						variant="contained"
						color="secondary"
						sx={{ p: "10px" }}
						onClick={goToDomain}
						endIcon={
							<Iconify icon="clarity:cursor-hand-solid" width={25} />
						}
					>
						<Typography variant="subtitle1">
							Wait! There is more!!
						</Typography>
					</Button>
				</Stack>
			</Container>
		</StyledWrapper>
	);
};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = (dispatch) => ({
	selectDomain: (domain) => dispatch(selectDomain(domain)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeDomain);
