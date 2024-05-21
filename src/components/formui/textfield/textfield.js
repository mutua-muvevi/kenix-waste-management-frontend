import { TextField } from "@mui/material";
import React from "react";
import { useField } from "formik";
import { useTheme } from "@mui/material/styles";

const TextfieldWrapper = ({
	name,
	variant,
	multiline,
	size,
	shrink,
	inputColor,
	...otherProps
}) => {
	const [field, meta] = useField(name);
	const theme = useTheme();

	const isLightMode = theme.palette.mode === "light";

	const configTextField = {
		...field,
		...otherProps,
		fullWidth: true,
		variant: variant ? variant : "outlined",
		size: size ? size : "small",
		multiline: multiline === true ? multiline : false,
		InputProps: {
			style: {
				color: inputColor ? inputColor : isLightMode ? theme.palette.primary.main : undefined,
				borderColor: inputColor ? inputColor : isLightMode
					? theme.palette.primary.main
					: undefined,
			},
		},
		InputLabelProps: {
			shrink: shrink ? null : true,
			style: {
				// Apply primary color to the input label in light mode
				color: inputColor ? inputColor : isLightMode ? theme.palette.primary.main : undefined,
			},
		},
	};

	if (meta && meta.touched && meta.error) {
		configTextField.error = true;
		configTextField.helperText = meta.error;
	}

	return <TextField {...configTextField} />;
};

export default TextfieldWrapper;
