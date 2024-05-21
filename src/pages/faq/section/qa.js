import { Box, Container, Grid, Accordion, AccordionSummary, AccordionDetails, Typography, useTheme, useMediaQuery, Stack } from "@mui/material";
import { styled } from "@mui/system";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import TitleSubtitle from "src/components/sections/titlesubtitle";
import FAQList from "src/content/faq";

const subtitle = "Our FAQ section is your go-to resource for finding answers to the most commonly asked questions. We believe in providing exceptional support and ensuring that you have the information you need at your fingertips";

const StyledWrapper = styled(Box)(({ theme }) => ({

}));

const StyledContainer = styled(Container)(({ theme }) => ({
	paddingTop: "100px",
	paddingBottom: "100px",
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper
}))

const QuestionAnswer = () => {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

	return (
		<StyledWrapper>
			<StyledContainer maxWidth="xl">
				<Stack direction="column" spacing={5}>
					<TitleSubtitle
						chipText="Questions & Answers"
						chipWidth={250}
						title="Frequently Asked Question"
						subtitle={subtitle}
						alignItems="center"
					/>

					<div>
						<Grid container spacing={2}>
							{FAQList.map((qa, index) => (
								<Grid item xs={12} md={isDesktop ? 6 : 12} key={index}>
									<StyledAccordion>
										<AccordionSummary
											expandIcon={<ExpandMoreIcon />}
											aria-controls={`panel${index}-content`}
											id={`panel${index}-header`}
										>
											<Typography variant="h5">
												{qa.question}
											</Typography>
										</AccordionSummary>

										<AccordionDetails>
											<Typography variant="subtitle1" textAlign="justify">
												{qa.answer}
											</Typography>
										</AccordionDetails>
									</StyledAccordion>
								</Grid>
							))}
						</Grid>
					</div>
				</Stack>
			</StyledContainer>
		</StyledWrapper>
	);
};

export default QuestionAnswer;