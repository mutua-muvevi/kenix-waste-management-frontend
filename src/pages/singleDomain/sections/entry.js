import { Box, Card, CardMedia, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { connect } from "react-redux";

const StyledWrapper = styled(Box)(({theme }) => ({
	paddingTop: "100px",
}));

const StyledContainer = styled(Container)(({theme }) => ({

}));

const SingleDomainEntry = ({domain}) => {
	return (
		<StyledWrapper>
			<StyledContainer maxWidth="xl">
				<Stack direction="column" spacing={3}>
					<Typography variant="h6" >
						{domain.mainText}
					</Typography>
					
					<Card>
						<CardMedia
							component="img"
							src={domain.thumbnail}
							alt={domain.title}
							height={600}
						/>
					</Card>
				</Stack>
			</StyledContainer>
		</StyledWrapper>
	)
}

const mapStateToProps = ({domain}) => ({
	domain: domain.domain
})

export default connect(mapStateToProps)(SingleDomainEntry)