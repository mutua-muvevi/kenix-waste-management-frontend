import {
	Box,
	Card,
	CardMedia,
	Container,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import { styled } from "@mui/system";

import TitleSubtitle from "./titlesubtitle";
import Iconify from "../iconify/iconify";


const StyledContainer = styled(Container)(({ theme }) => ({

}));

const LeftRightContainered = ({
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
	
	const StyledWrapper = styled(Box)(({ theme }) => ({
		paddingTop: "70px",
		paddingBottom: "70px",
		backgroundColor: backgroundColor ? theme.palette.background.paper : "inherit"
	}));
	
	const StyledListIconBox = styled(Box)(({ theme }) => ({
		padding: "0",
		backgroundColor: chipColor && chipColor === "white" ? "#ffffff" : theme.palette.primary.main,
		color: chipColor && chipColor === "white" ?  theme.palette.primary.main : "#ffffff",
		borderRadius: theme.shape.borderRadius,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
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
				<Stack direction="column" spacing={1.5}>
					{paragraphs &&
						paragraphs.map((p, i) => (
							<Typography
								variant="body2"
								textAlign="justify"
								key={i}
							>
								{p}
							</Typography>
						))}
				</Stack>
				<Stack direction="column" spacing={2}>
					{list &&
						list.items.map((el, i) => (
							<Stack direction="row" spacing={2} key={i}>
								{el.icon && (
									<StyledListIconBox>
										<Iconify icon={el.icon} width="35px"/>
									</StyledListIconBox>
								)}
								<Stack direction="column" spacing={1}>
									<Typography variant="h5" >
										{el.title}
									</Typography>
									<Typography variant="body1"  textAlign="justify">
										{el.text}
									</Typography>
								</Stack>
							</Stack>
						))}
				</Stack>
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

export default LeftRightContainered;
