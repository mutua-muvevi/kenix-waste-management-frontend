import { Box, Chip, Stack, Typography } from "@mui/material";
import { styled } from"@mui/system"

const StyledWrapper = styled(Stack)(({ theme }) => ({

}))

const TitleSubtitle = ({ title, chipText, chipColor, subtitle, chipWidth, alignItems, backgroundColor }) => {
	
	const StyledBoxChip = styled(Stack)(({ theme }) => ({
		backgroundColor: chipColor && chipColor === "white" ? "#ffffff" : theme.palette.primary.main,
		color: chipColor && chipColor === "white" ?  theme.palette.primary.main : "#ffffff",
		borderRadius: theme.shape.borderRadius,
		width: chipWidth ? chipWidth : "200px",
		padding: "10px",
		display: chipText ? "block" : "none",
	}));

	return (
		<StyledWrapper spacing={1.5} alignItems={alignItems ? alignItems : "flex-start"}>
			<StyledBoxChip direction="row" justifyContent="center" alignItems="center">
				<Typography variant="subtitle1" textAlign="center" sx={{textTransform: "uppercase"}}>
					{chipText}
				</Typography>
			</StyledBoxChip>
			
			<Typography variant="h3" textAlign={alignItems ? alignItems : "justify"}>
				{title}
			</Typography>

			<Typography variant="h6" textAlign={alignItems ? alignItems : "justify"}>
				{subtitle}
			</Typography>

		</StyledWrapper>
	)
}

export default TitleSubtitle