import React from 'react';
import PropTypes from "prop-types";

import { sentenceCase } from "change-case"

import { Box, Container, IconButton, Modal, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { BsXLg } from "react-icons/bs";
import { FaExclamationTriangle } from 'react-icons/fa';
import { useTheme } from '@emotion/react';
import Iconify from '../iconify/iconify';

const StyledModalHeader = styled(Container)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	paddingTop: "10px",
	paddingBottom: "10px",
	paddingLeft: "20px",
	borderBottom: "1px solid grey"
}))

const StyledModalBody = styled(Box)(({ theme }) => ({
	minHeight: 200
}))

const IconStyle={
	fontSize: "inherit"
}

const ModalComponent = ({header, open, close, width, children, type, icon, iconWidth}) => {
	
	const theme = useTheme()
	
	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		bgcolor:  type === "delete" ? "error.lighter" : "background.paper",
		boxShadow: 24,
		p: 0,
		width: width,
		overflow: "hidden",
		borderRadius: 2
	};

	const styledExclamationIcon = {
		color: theme.palette.error.main,
		fontSize: "25px",
		marginRight: "15px"
	}


	return (
		<Modal
			open={open}
			//onClose={close}
			aria-labelledby={`${header} + modal`}
		>
			<Box sx={style}>
				<StyledModalHeader maxWidth="xl">
					<Stack direction="row" alignItems="center" spacing={3}>
						{
							type === "delete" ? (
								<FaExclamationTriangle style={styledExclamationIcon}/>
							) : null
						}
						{
							icon ? (
								<Iconify icon={icon} width={iconWidth}/>
							) : null
						}
						<Typography id={`${header} + modal`} variant="h4">
							{ header ? sentenceCase(header) : "" }
						</Typography>
					</Stack>

					<IconButton
						onClick={close}
					>
						<BsXLg style={ IconStyle }/>
					</IconButton>
				</StyledModalHeader>
				
				<StyledModalBody>
					{children}
				</StyledModalBody>
			</Box>
		</Modal>
	)
}

ModalComponent.propTypes = {
	header: PropTypes.string,
	close: PropTypes.func,
	children: PropTypes.node.isRequired
}

export default ModalComponent