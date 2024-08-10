import PropTypes from "prop-types";
import { useRef, useState } from "react";
// @mui
import { useTheme } from "@mui/material/styles";
import { Box, Button, AppBar, Toolbar, Container, Link, Stack, Typography } from "@mui/material";
// hooks
import useOffSetTop from "../../hooks/useOffSetTop";
import useResponsive from "../../hooks/useResponsive";
// utils
import { bgBlur } from "../../utils/cssStyles";
// config
import { HEADER } from "../../config-global";
// routes
// import { PATH_DOCS, PATH_MINIMAL_ON_STORE } from "../../routes/paths";
// components
import Logo from "../../components/logo";
import Label from "../../components/label";
//
import {navConfig} from "./info";
import NavMobile from "./mobile";
import NavDesktop from "./desktop";
import ModalComponent from "src/components/ui/Modal";
import QuotationForm from "src/components/sections/quotationform";


// ----------------------------------------------------------------------

Shadow.propTypes = {
	sx: PropTypes.object,
};

function Shadow({ sx, ...other }) {
	return (
		<Box
			sx={{
				left: 0,
				right: 0,
				bottom: 0,
				height: 24,
				zIndex: -1,
				m: "auto",
				borderRadius: "50%",
				position: "absolute",
				width: `calc(100% - 48px)`,
				boxShadow: (theme) => theme.customShadows.z8,
				...sx,
			}}
			{...other}
		/>
	);
}

const Navbar = () => {
	const [ open, setOpen ] = useState(false)
	const carouselRef = useRef(null);

	const theme = useTheme();

	const isDesktop = useResponsive("up", "md");

	const isOffset = useOffSetTop(HEADER.H_MAIN_DESKTOP);

	return (
		<>
			<AppBar ref={carouselRef} color="transparent" sx={{ boxShadow: 0 }}>
				<Toolbar
					disableGutters
					sx={{
						height: {
							xs: HEADER.H_MOBILE,
							md: HEADER.H_MAIN_DESKTOP,
						},
						transition: theme.transitions.create(["height", "background-color"], {
							easing: theme.transitions.easing.easeInOut,
							duration: theme.transitions.duration.shorter,
						}),
						...(isOffset && {
							...bgBlur({ color: theme.palette.primary.main }),
							height: {
								md: HEADER.H_MAIN_DESKTOP - 16,
							},
						}),
					}}
				>
					<Container maxWidth="xl" sx={{ height: 1, display: "flex", alignItems: "center" }}>
						<Stack direction="row" spacing={2} justifyContent="left" alignItems="center">
							<Logo />
							<Typography variant="h5" sx={{color: "#ffffff"}}>
								Kenix Waste Solutions
							</Typography>
						</Stack>


						<Box sx={{ flexGrow: 1 }} />

						{isDesktop && <NavDesktop isOffset={isOffset} data={navConfig} />}

						<Button
							variant="contained"
							target="_blank"
							rel="noopener"
							onClick={() => setOpen(true)}
							color="secondary"
						>
							{isDesktop ? "Request Quotation" : "Quotation"}
						</Button>

						{!isDesktop && <NavMobile isOffset={isOffset} data={navConfig} />}
					</Container>
				</Toolbar>

				{isOffset && <Shadow />}
			</AppBar>
			<ModalComponent
				header="Request Quotation"
				open={open}
				close={() => setOpen(false)}
				width={ isDesktop ? "75vw" : "90vw" }
				children={<QuotationForm/>}
			/>
		</>
	);
}



export default Navbar