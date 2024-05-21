import { Box, Button, Container, FormGroup, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextfieldWrapper from "../formui/textfield/textfield";
import { connect } from "react-redux";
import { postEmail } from "src/redux/email/action";

const Image = "https://res.cloudinary.com/dbj0t0zym/image/upload/v1687991987/images/tech_imrfwj.jpg";
const Person ="https://res.cloudinary.com/dbj0t0zym/image/upload/v1687987718/images/whyus_uw0loc.jpg";
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod purus a turpis pretium volutpat. Aliquam erat volutpat. In dignissim vitae tortor nec suscipit. Nullam dictum viverra arcu, eu vestibulum mi bibendum a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; "

const emailCapture = {
	title: "Unlock Exclusive Offers",
	subtitle: "Join our community and be the first to know about the latest trends, exclusive promotions, and game-changing insights. Don't miss out on the opportunity to level up your business. Enter your email below to stay ahead of the competition and receive personalized updates tailored to your needs.",
};

const INITIAL_FORM_STATE = {
	email: "",
};

const FORM_VALIDATION = Yup.object().shape({
	email: Yup.string()
		.email("Please use a valid email")
		.min(5, "Too short email")
		.max(80, "Too long email")
		.required("Please add an email"),
});

const StyledWrapper = styled(Container)(({ theme }) => ({
	borderRadius: theme.shape.borderRadius,
	backgroundImage: `linear-gradient(to bottom, rgba(19, 102, 255, 0.4), rgba(19, 102, 255, 0.5)), url(${Image})`,
	backgroundSize: "cover"
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
	
}));

const StyledGridItemText = styled(Grid)(({ theme }) => ({
	paddingTop: "50px",
	paddingBottom: "50px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
	color: "#ffffff",
	borderColor: "#ffffff",
	width: "200px",
	borderRadius: "5px"
}))

const imageStyle = {
	width: "350px",
	position: "relative"
}

const Subscribe = ({subscibe}) => {
	const submitHandler = (values, { resetForm }) => {
		subscibe(values)
		resetForm();
	};

	return (
		<StyledWrapper maxWidth="xl">
			<StyledGrid container spacing={3}>
				<StyledGridItemText item xs={12} sm={12} md={12} lg={6} xl={6}>
					<Stack direction="column" justifyContent="center" sx={{ height: "100%"}}>
						<Formik
							initialValues={{
								...INITIAL_FORM_STATE,
							}}
							validationSchema={FORM_VALIDATION}
							onSubmit={submitHandler}
						>
							<Form>
								<Stack direction="column"  spacing={3}>
									<Typography variant="h2" style={{ color: "#ffffff" }} textAlign="justify">
										{emailCapture.title}
									</Typography>

									<Typography variant="subtitle1" style={{ color: "#ffffff" }} textAlign="justify">
										{emailCapture.subtitle}
									</Typography>

									<Stack spacing={3} direction="row" alignItems="center" justifyContent="left">
										<TextfieldWrapper
											name="email"
											variant="standard"
											size="small"
											placeholder="Enter your email to subscribe"
											inputColor="#ffffff"
										/>
										<StyledButton variant="outlined" type="submit">
											Join us
										</StyledButton>

									</Stack>
								</Stack>
							</Form>
						</Formik>
					</Stack>
				</StyledGridItemText>

				<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
					<Stack
						justifyContent="center"
						alignItems="center"
					>
						<img src={Person} alt="Subscribe to Afrogorithm Mail List" style={imageStyle}/>
					</Stack>
				</Grid>
			</StyledGrid>
		</StyledWrapper>
	);
};

const mapStateToProps = ({}) => ({})

const mapDispatchToProps = (dispatch) => ({
	subscibe: (values) => dispatch(postEmail(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(Subscribe);
