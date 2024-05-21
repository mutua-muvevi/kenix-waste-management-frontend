import Router from "./routes";
import "./App.css";

import React, { useEffect, useState } from "react";
import { IconButton, Snackbar } from "@mui/material";
import Iconify from "./components/iconify/iconify";

const App = () => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const handleCopyCut = (event) => {
			if (event.ctrlKey && (event.key === "c" || event.key === "x")) {
				event.preventDefault();
				setOpen(true);
			}
		};

		const handleRightClick = (event) => {
			event.preventDefault(); // Prevent the context menu from opening
		};

		document.addEventListener("keydown", handleCopyCut);
		document.addEventListener("contextmenu", handleRightClick);

		return () => {
			document.removeEventListener("keydown", handleCopyCut);
			document.removeEventListener("contextmenu", handleRightClick);
		};
	}, []);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	const action = (
		<React.Fragment>
			<IconButton
				size="small"
				aria-label="close"
				color="inherit"
				onClick={handleClose}
			>
				<Iconify icon="ep:close-bold" />
			</IconButton>
		</React.Fragment>
	);

	return (
		<div className="App">
			<Router />

			<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
				message="Copy and Cut functionality is disabled"
				action={action}
			/>
		</div>
	);
};

export default App;
