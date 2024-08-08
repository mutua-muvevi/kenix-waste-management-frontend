import {
	Box,
	Button,
	Container,
	FormGroup,
	Grid,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextfieldWrapper from "../formui/textfield/textfield";
import { connect } from "react-redux";
import { postEmail } from "src/redux/email/action";
import useResponsive from "src/hooks/useResponsive";

const Image =
	"https://res.cloudinary.com/dt0uaru3j/image/upload/v1723057070/KENIX%20WASTE%20SOLUTIONS%20LTD/istockphoto-1605157750-612x612_nfrlrt.jpg";
const Person =
	"https://res.cloudinary.com/dbj0t0zym/image/upload/v1687987718/images/whyus_uw0loc.jpg";

const emailCapture = {
	title: "Stay Informed",
	subtitle:
		"Subscribe to our newsletter to stay up-to-date with the latest developments, industry insights, and exclusive offers in waste management. Don't miss out on valuable information that can help optimize your waste management practices and drive sustainability.",
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
	backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${Image})`,
	backgroundSize: "cover",
	backgroundPosition: "center",
	height: "70vh",
}));

const StyledGrid = styled(Grid)(({ theme }) => ({}));

const StyledButton = styled(Button)(({ theme }) => ({
	color: "#ffffff",
	borderColor: "#ffffff",
	width: "200px",
	borderRadius: "5px",
}));

const Subscribe = ({ subscibe }) => {
	const theme = useTheme();

	const submitHandler = (values, { resetForm }) => {
		subscibe(values);
		resetForm();
	};

	const isDesktop = useResponsive("up", "lg");

	return (
		<StyledWrapper maxWidth="xl">
			<Stack
				direction="column"
				justifyContent="center"
				sx={{
					height: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					textAlign: "center",
					p: 5,
					width: isDesktop ? "60vw" : "100%",
					mx: "auto",
					my: 3,
				}}
			>
				<Formik
					initialValues={{
						...INITIAL_FORM_STATE,
					}}
					validationSchema={FORM_VALIDATION}
					onSubmit={submitHandler}
				>
					<Form>
						<Stack direction="column" spacing={3} sx={{}}>
							<Typography
								variant="h2"
								style={{ color: "#ffffff" }}
								textAlign="center"
							>
								{emailCapture.title}
							</Typography>

							<Typography
								variant="h5"
								style={{ color: "#ffffff" }}
								textAlign="justify"
							>
								{emailCapture.subtitle}
							</Typography>

							<Stack
								spacing={3}
								direction="row"
								alignItems="center"
								justifyContent="center"
							>
								<TextfieldWrapper
									name="email"
									variant="filled"
									label="Email"
									size="small"
									placeholder="Enter your email to subscribe"
									inputColor="#ffffff"
								/>
								<StyledButton variant="outlined" type="submit">
									Subscribe
								</StyledButton>
							</Stack>
						</Stack>
					</Form>
				</Formik>
			</Stack>
			<StyledGrid container spacing={3}></StyledGrid>
		</StyledWrapper>
	);
};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = (dispatch) => ({
	subscibe: (values) => dispatch(postEmail(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Subscribe);
