import PropTypes from "prop-types";
import { forwardRef } from "react";
import { Link as RouterLink } from "react-router-dom";
// @mui
import { useTheme } from "@mui/material/styles";
import { Box, Link } from "@mui/material";

const logoImage = "https://res.cloudinary.com/dt0uaru3j/image/upload/v1722438649/KENIX%20WASTE%20SOLUTIONS%20LTD/LOGO_Web_vj0af4.png";

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
	const theme = useTheme();

	const PRIMARY_LIGHT = theme.palette.primary.light;

	const PRIMARY_MAIN = theme.palette.primary.main;

	const PRIMARY_DARK = theme.palette.primary.dark;

	// OR using local (public folder)
	// -------------------------------------------------------
	// const logo = (
	//   <Box
	//     component="img"
	//     src="/logo/logo_single.svg" => your path
	//     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
	//   />
	// );

	const logo = (
		<Box
			ref={ref}
			component="div"
			sx={{
				width: 40,
				height: 40,
				display: "inline-flex",
				backgroundColor: theme.palette.secondary.main,
				borderRadius: "50%",
				...sx,
			}}
			{...other}
		>
			<img src={logoImage} alt="Kenix Waste Solutions logo"/>
		</Box>
	);

	if (disabledLink) {
		return logo;
	}

	return (
		<Link component={RouterLink} to="/" sx={{ display: "contents" }}>
			{logo}
		</Link>
	);
});

Logo.propTypes = {
	sx: PropTypes.object,
	disabledLink: PropTypes.bool,
};

export default Logo;
