import PropTypes from "prop-types";
import { m } from "framer-motion";
import { forwardRef } from "react";
import { Link as RouterLink } from "react-router-dom";
// @mui
import { Link, CardActionArea, Typography } from "@mui/material";
// components
import Iconify from "../../../components/iconify";
//
import { ListItem } from "./styles";

// ----------------------------------------------------------------------

export const NavItem = forwardRef(
	(
		{ item, open, isOffset, active, subItem, isExternalLink, ...other },
		ref
	) => {
		const { title, path, children } = item;

		const renderContent = (
			<ListItem
				ref={ref}
				disableRipple
				isOffset={isOffset}
				subItem={subItem}
				active={active}
				open={open}
				{...other}
			>
				<Typography sx={{color: "#fff"}} variant="subtitle1">
					{title}
				</Typography>

				{!!children && (
					<Iconify
						width={16}
						icon="eva:arrow-ios-downward-fill"
						sx={{ ml: 1, color: "#ffffff", fontWeight: "600" }}
					/>
				)}
			</ListItem>
		);

		// ExternalLink
		if (isExternalLink) {
			return (
				<Link
					href={path}
					target="_blank"
					rel="noopener"
					underline="none"
				>
					{renderContent}
				</Link>
			);
		}

		// Has child
		if (children) {
			return renderContent;
		}

		// Default
		return (
			<Link component={RouterLink} to={path} underline="none">
				{renderContent}
			</Link>
		);
	}
);

NavItem.propTypes = {
	open: PropTypes.bool,
	item: PropTypes.object,
	active: PropTypes.bool,
	subItem: PropTypes.bool,
	isOffset: PropTypes.bool,
	isExternalLink: PropTypes.bool,
};

// ----------------------------------------------------------------------

NavItemDashboard.propTypes = {
	item: PropTypes.object,
	sx: PropTypes.object,
};

export function NavItemDashboard({ item, sx, ...other }) {
	return (
		<Link
			component={RouterLink}
			to={item.path}
			sx={{ width: 1 }}
			{...other}
		>
			<CardActionArea
				sx={{
					py: 5,
					px: 10,
					minHeight: 400,
					borderRadius: 1,
					color: "text.disabled",
					bgcolor: "background.neutral",

					...sx,
				}}
			>
			</CardActionArea>
		</Link>
	);
}
