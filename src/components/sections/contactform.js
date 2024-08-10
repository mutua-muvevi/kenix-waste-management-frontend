import {
	Box,
	Button,
	Container,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextfieldWrapper from "../formui/textfield/textfield";
import TitleSubtitle from "./titlesubtitle";
import Iconify from "../iconify/iconify";
import { sendMessage } from "src/redux/contact/action";
import { connect } from "react-redux";

const INITIAL_FORM_STATE = {
	fullname: "",
	telephone: "",
	email: "",
	message: "",
};

const FORM_VALIDATION = Yup.object().shape({
	fullname: Yup.string()
		.min(5, "Too short name")
		.max(100, "Too long name")
		.required("Please add your name"),
	telephone: Yup.string()
		.min(5, "Too short telephone number")
		.max(50, "Too long telephone number")
		.required("Please add your telephone number"),
	email: Yup.string()
		.email("Please use a valid email")
		.min(5, "Too short email")
		.max(80, "Too long email")
		.required("Please add an email"),
	message: Yup.string()
		.min(20, "Message too short, expound further")
		.max(800, "Message too long")
		.required("Your message to us is required"),
});

const subtitle = "To learn more about Kenix waste management solutions, our waste management services and products, please fill out the form below. We will get back to you as soon as possible. Together, we can work to transform your waste management journey and build a greener future."

const StyledWrapper = styled(Box)(({ theme }) => ({
	paddingTop: "100px",
	paddingBottom: "100px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
	width: "250px",
	padding: "10px",
}));

const ContactForm = ({ send }) => {
	const theme = useTheme();

	const submitHandler = (values, { resetForm }) => {
		send(values);
		resetForm();
	};

	return (
		<StyledWrapper>
			<Container maxWidth="xl">
				<Stack direction="column" spacing={4}>
					<TitleSubtitle
						title="Join Us in Building a Greener Future Together"
						subtitle={subtitle}
						chipText="Get in Touch"
					/>
					<Formik
						initialValues={{
							...INITIAL_FORM_STATE,
						}}
						validationSchema={FORM_VALIDATION}
						onSubmit={submitHandler}
					>
						<Form>
							<Stack
								direction="column"
								alignItems="left"
								spacing={4}
							>
								<TextfieldWrapper
									name="fullname"
									label="Your name"
									variant={
										theme.palette.mode === "light"
											? "standard"
											: "filled"
									}
								/>
								<TextfieldWrapper
									name="email"
									label="Your Email"
									variant={
										theme.palette.mode === "light"
											? "standard"
											: "filled"
									}
								/>
								<TextfieldWrapper
									name="telephone"
									label="Your Telephone Number"
									variant={
										theme.palette.mode === "light"
											? "standard"
											: "filled"
									}
								/>
								<TextfieldWrapper
									name="message"
									label="Your Message"
									variant={
										theme.palette.mode === "light"
											? "standard"
											: "filled"
									}
									multiline
									rows={5}
								/>
								<StyledButton
									type="submit"
									variant="contained"
									color="secondary"
									endIcon={
										<Iconify icon="vaadin:paperplane" />
									}
								>
									<Typography variant="subtitle1">
										Get in touch
									</Typography>
								</StyledButton>
							</Stack>
						</Form>
					</Formik>
				</Stack>
			</Container>
		</StyledWrapper>
	);
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
	send: (values) => dispatch(sendMessage(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
