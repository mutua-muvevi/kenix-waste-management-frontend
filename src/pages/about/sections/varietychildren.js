import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { connect } from "react-redux";

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const StyledContentStack = styled(Stack)(({ theme }) => ({
	overflowY: "scroll",
	paddingRight: "30px"
}))

const VarietyChildren = ({ variety }) => {
	return (
		<StyledWrapper>
			<Container maxWidth="xl" sx={{paddingTop: 3, paddingBottom: 3}}>
				<StyledContentStack direction="column" spacing={3}>
					<Typography variant="h5" textAlign="justify">
						{variety.subtitle}
					</Typography>
					<Typography variant="subtitle1" textAlign="justify">
						{variety.mainText}
					</Typography>
					{
						variety.paragraphs ? variety.paragraphs.map((paragraph, i) => (
							<Typography variant="body1" textAlign="justify" key={i}>
								{paragraph}
							</Typography>
						)) : ""
					}
				</StyledContentStack>
			</Container>
		</StyledWrapper>
	)
}

const mapStateToProps = ({ variety }) => ({
	variety: variety.variety
})

export default connect(mapStateToProps)(VarietyChildren)