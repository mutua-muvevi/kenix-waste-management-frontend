import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// @mui
import { List, IconButton, Stack, Typography, Divider, SwipeableDrawer } from "@mui/material";
// config
import { NAV } from "../../../config";
// components
import Logo from "../../../components/logo";
import Iconify from "../../../components/iconify";
import Scrollbar from "../../../components/scrollbar";
//
import NavList from "./NavList";

// ----------------------------------------------------------------------

NavMobile.propTypes = {
	data: PropTypes.array,
	isOffset: PropTypes.bool,
};

export default function NavMobile({ isOffset, data }) {
	const { pathname } = useLocation();

	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (open) {
			handleClose();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<IconButton
				onClick={handleOpen}
				sx={{
					ml: 1,
					...(isOffset && {
						color: "text.primary",
					}),
				}}
			>
				<Iconify icon="iconamoon:menu-burger-horizontal-bold" width={35} />
			</IconButton>

			<SwipeableDrawer
				open={open}
				anchor="right"
				onClose={handleClose}
				onOpen={handleOpen}
				PaperProps={{
					sx: {
						pb: 5,
						width: NAV.W_BASE,
					},
				}}
			>
				<Scrollbar>
					<Stack
						direction="row"
						spacing={2}
						justifyContent="left"
						sx={{ mx: 2.5 }}
						alignItems="center"
					>
						<Logo sx={{ my: 3 }} />
						<Typography variant="h5" sx={{ color: "#ffffff" }}>
							Kenix Waste Solutions
						</Typography>
					</Stack>

					<Divider/>

					<List component="nav" disablePadding>
						{data.map((link) => (
							<NavList key={link.title} item={link} />
							))}
					</List>
				</Scrollbar>
			</SwipeableDrawer>
		</>
	);
}
