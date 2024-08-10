import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import TitleSubtitle from "./titlesubtitle";

const textGridBackground =
	"https://res.cloudinary.com/dt0uaru3j/image/upload/v1723057071/KENIX%20WASTE%20SOLUTIONS%20LTD/istockphoto-1711082030-612x612_bbhvll.jpg";

const StyledWrapper = styled(Box)(({ theme }) => ({}));

const LeftRight = ({
	title,
	subtitle,
	chipText,
	chipWidth,
	chipColor,
	list,
	ImageminHeight,
	paragraphs,
	imgPosition,
	image,
}) => {
	const StyledTextGrid = styled(Grid)(({ theme }) => ({
		color: "#ffffff",
		paddingRight: "30px",
		backgroundImage: `linear-gradient(to bottom, rgba(2, 10, 25, 0.7), rgba(2, 10, 25, 0.91)), url(${textGridBackground})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		minHeight: "60vh",
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
	}));

	const StyledImageGrid = styled(Grid)(({ theme }) => ({
		backgroundImage: `url(${image})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		minHeight: ImageminHeight ? ImageminHeight : "50vh",
	}));

	const ImageSection = (
		<StyledImageGrid
			item
			xs={12}
			sm={12}
			md={12}
			lg={6}
			xl={6}
		></StyledImageGrid>
	);

	const TextSection = (
		<StyledTextGrid item xs={12} sm={12} md={12} lg={6} xl={6}>
			<Stack direction="column" spacing={2} sx={{ pl: 2 }}>
				<TitleSubtitle
					title={title}
					subtitle={subtitle}
					chipText={chipText}
					chipWidth={chipWidth}
					chipColor={chipColor}
				/>
				{paragraphs
					? paragraphs.map((par, i) => (
							<Typography
								variant="subtitle1"
								key={i}
								textAlign="justify"
								sx={{fontWeight : 500}}
							>
								{par}
							</Typography>
					  ))
					: ""}
			</Stack>
		</StyledTextGrid>
	);

	return (
		<StyledWrapper>
			<Grid container spacing={3}>
				{imgPosition === "left"
					? [ImageSection, TextSection]
					: [TextSection, ImageSection]}
			</Grid>
		</StyledWrapper>
	);
};

export default LeftRight;
