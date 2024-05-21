import { Box, Card, CardMedia, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { connect } from "react-redux";

const StyledWrapper = styled(Box)(({theme }) => ({
	paddingTop: "100px",
}));

const StyledContainer = styled(Container)(({theme }) => ({

}));

const SingleServiceEntry = ({service}) => {
	return (
		<StyledWrapper>
			<StyledContainer maxWidth="xl">
				<Stack direction="column" spacing={3}>
					<Card>
						<CardMedia
							component="img"
							src={service.thumbnail}
							alt={service.title}
							height={500}
						/>
					</Card>
					<Typography variant="h6">
						{service.mainText}
					</Typography>
				</Stack>
			</StyledContainer>
		</StyledWrapper>
	)
}

const mapStateToProps = ({service}) => ({
	service: service.service
})

export default connect(mapStateToProps)(SingleServiceEntry)