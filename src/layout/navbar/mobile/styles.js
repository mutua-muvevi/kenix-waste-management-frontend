// @mui
import { styled, alpha } from "@mui/material/styles";
import { ListItemButton } from "@mui/material";
// config
import { NAV } from "../../../config";

// ----------------------------------------------------------------------

export const ListItem = styled(ListItemButton, {
	shouldForwardProp: (prop) => prop !== "active",
})(({ active, theme }) => ({
	...theme.typography.body2,
	color: theme.palette.text.secondary,
	height: NAV.H_DASHBOARD_ITEM,
	// Active
	...(active && {
		color: theme.palette.secondary.main,
		...theme.typography.subtitle2,
		backgroundColor: alpha(
			theme.palette.primary.main,
			0.9
		),
	}),
}));
