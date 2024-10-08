import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextfieldWrapper from "../formui/textfield/textfield";
import Iconify from "../iconify/iconify";

import { postQuotation } from "src/redux/quotation/action";
import { connect } from "react-redux";

const INITIAL_FORM_STATE = {
	fullname: "",
	telephone: "",
	email: "",
	service: "",
	description: "",
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
		.required("Please add your email"),
	service: Yup.string()
		.min(5, "Too short service")
		.max(100, "Too long service")
		.required("Please add the service"),
	description: Yup.string()
		.min(20, "Too short description")
		.max(800, "Too long description")
		.required("Please add the description"),
});

const StyledWrapper = styled(Box)(({ theme }) => ({}));

const QuotationForm = ({ sendQuotation }) => {
	const submitHandler = (values, { resetForm }) => {
		sendQuotation(values);
		resetForm();
	};

	return (
		<StyledWrapper>
			<Container maxWidth="xl">
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
							sx={{ paddingTop: 4, paddingBottom: 4 }}
						>
							<TextfieldWrapper
								name="fullname"
								label="Your name"
								variant="standard"
							/>
							<TextfieldWrapper
								name="email"
								label="Your Email"
								variant="standard"
							/>
							<TextfieldWrapper
								name="telephone"
								label="Your Telephone Number"
								variant="standard"
							/>
							<TextfieldWrapper
								name="service"
								label="Service"
								variant="standard"
							/>
							<TextfieldWrapper
								name="description"
								label="Description"
								multiline
								rows={4}
								variant="standard"
							/>
							<Button
								type="submit"
								variant="contained"
								color="secondary"
								sx={{ p: "10px", width: "250px" }}
								endIcon={<Iconify icon="vaadin:paperplane" />}
								
							>
								<Typography variant="subtitle1">
									Submit
								</Typography>
							</Button>
						</Stack>
					</Form>
				</Formik>
			</Container>
		</StyledWrapper>
	);
};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = (dispatch) => ({
	sendQuotation: (values) => dispatch(postQuotation(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuotationForm);
