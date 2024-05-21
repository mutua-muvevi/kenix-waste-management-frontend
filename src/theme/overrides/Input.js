import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function Input(theme) {
	return {
		// MuiInputBase: {
		// 	styleOverrides: {
		// 		root: {
		// 			"&.Mui-disabled": {
		// 				"& svg": {
		// 					color: theme.palette.primary.lighter,
		// 				},
		// 			},
		// 		},
		// 		input: {
		// 			"&::placeholder": {
		// 				opacity: 1,
		// 				color: theme.palette.primary.main,
		// 			},
		// 		},
		// 	},
		// },
		MuiInput: {
			styleOverrides: {
				underline: {
					"&:before": {
						borderBottomColor: theme.palette.primary.lighter,
					},
					"&:after": {
						borderBottomColor: theme.palette.primary.lighter,
					},
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					"& .MuiInputLabel-root.Mui-focused": {
						color: theme.palette.primary.main,
					},
				},
			},
		},
		// MuiFilledInput: {
		// 	styleOverrides: {
		// 		root: {
		// 			borderRadius: theme.shape.borderRadius,
		// 			backgroundColor: alpha(theme.palette.grey[500], 0.08),
		// 			"&:hover": {
		// 				backgroundColor: alpha(theme.palette.grey[500], 0.16),
		// 			},
		// 			"&.Mui-focused": {
		// 				backgroundColor: alpha(theme.palette.grey[500], 0.16),
		// 			},
		// 			"&.Mui-disabled": {
		// 				backgroundColor:
		// 					theme.palette.action.disabledBackground,
		// 			},
		// 		},
		// 		underline: {
		// 			"&:before, :after": {
		// 				display: "none",
		// 			},
		// 		},
		// 	},
		// },
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					"& .MuiOutlinedInput-notchedOutline": {
						borderColor: theme.palette.primary.main,
						
					},
					"&.Mui-focused": {
						"& .MuiOutlinedInput-notchedOutline": {
							borderWidth: 1,
							borderColor: theme.palette.primary.main,
						},
					},
					"&.Mui-disabled": {
						"& .MuiOutlinedInput-notchedOutline": {
							borderColor:
								theme.palette.action.disabledBackground,
						},
					},
				},
			},
		},
	};
}
