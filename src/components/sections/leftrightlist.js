import { Box, Card, CardMedia, Container, Grid, Stack, Typography,  useTheme, useMediaQuery, Divider  } from "@mui/material";
import { styled } from "@mui/system";

import TitleSubtitle from "./titlesubtitle";
import Iconify from "../iconify/iconify";

const StyledContainer = styled(Container)(({ theme }) => ({

}));

const LeftRightList = ({
	title,
	subtitle,
	chipText,
	chipWidth,
	chipColor,
	list,
	paragraphs,
	imgPosition,
	image,
	imageHeight,
	backgroundColor
}) => {
	const theme = useTheme();
	const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));


	const StyledWrapper = styled(Box)(({ theme }) => ({
		paddingTop: "70px",
		paddingBottom: "70px",
		backgroundColor: backgroundColor
			? theme.palette.primary.main
			: "inherit",
	}));

	const ImageSection = (
		<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
			<Card>
				<CardMedia
					height={imageHeight}
					component="img"
					src={image}
					alt={`${title} image`}
				/>
			</Card>
		</Grid>
	);

	const ListSection = (
		<Stack direction="column" spacing={1}>
			<Grid container spacing={2}>
				{list.map((el, i) => (
					<Grid item xs={12} sm={6} md={6} lg={isLargeScreen ? 6 : 12} key={i}>
						<Stack direction="row" justifyContent="left" spacing={2}>
							<Iconify icon="ic:round-check-box" sx={{color: theme.palette.primary.main}}/>
							<Typography variant="body1">
								{el}
							</Typography>
						</Stack>
					</Grid>
				))}
			</Grid>
		</Stack>
	);


	const TextSection = (
		<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
			<Stack direction="column" spacing={2}>
				<TitleSubtitle
					title={title}
					subtitle={subtitle}
					chipText={chipText}
					chipWidth={chipWidth}
					chipColor={chipColor}
				/>
				<Stack direction="column" spacing={2}>
					{paragraphs &&
						paragraphs.map((p, i) => (
							<Typography
								variant="body1"
								textAlign="justify"
								key={i}
							>
								{p}
							</Typography>
						))}
				<Divider/>
				</Stack>

				
				{ListSection}
			</Stack>
		</Grid>
	);

	return (
		<StyledWrapper>
			<StyledContainer maxWidth="xl">
				<Grid container spacing={3}>
					{imgPosition === "left"
						? [ImageSection, TextSection]
						: [TextSection, ImageSection]}
				</Grid>
			</StyledContainer>
		</StyledWrapper>
	);
};

export default LeftRightList;
