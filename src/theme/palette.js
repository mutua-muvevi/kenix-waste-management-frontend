import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

function createGradient(color1, color2) {
	return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const GREY = {
	0: "#FFFFFF",
	100: "rgba(247, 250, 255, 1)",
	200: "rgba(245, 247, 255, 1)",
	300: "rgba(240, 246, 255, 1)",
	400: "rgba(239, 245, 255, 1)",
	500: "rgba(238, 244, 255, 1)",
	600: "rgba(237, 243, 255, 1)",
	700: "#454F5B",
	800: "#212B36",
	900: "#161C24",
	500_8: alpha("rgba(247, 250, 255, 1)", 0.12),
	500_12: alpha("rgba(245, 247, 255, 1)", 0.16),
	500_16: alpha("rgba(240, 246, 255, 1)", 0.24),
	500_24: alpha("rgba(239, 245, 255, 1)", 0.32),
	500_32: alpha("rgba(238, 244, 255, 1)", 0.40),
	500_48: alpha("#919EAB", 0.48),
	500_56: alpha("#919EAB", 0.56),
	500_80: alpha("#919EAB", 0.8),
};

export const PRIMARY = {
	halfOpacity: alpha("#1b4a2d", 0.5),
	lighter: "#496e57",
	light: "#325c42",
	main: "#1b4a2d",
	dark: "#184329",
	darker: "#163b24",
	contrastText: "#fff",
};

export const SECONDARY = {
	lighter: "fdc280",
	light: "fc9d33",
	main: "#FB8500",
	dark: "#e27800",
	darker: "#c96a00",
	contrastText: "#000000",
};

export const INFO = {
	lighter: "#D0F2FF",
	light: "#74CAFF",
	main: "#1890FF",
	dark: "#0C53B7",
	darker: "#04297A",
	contrastText: "#fff",
};

export const SUCCESS = {
	lighter: "#E9FCD4",
	light: "#AAF27F",
	main: "#54D62C",
	dark: "#229A16",
	darker: "#08660D",
	contrastText: GREY[800],
};

export const WARNING = {
	lighter: "#FFF7CD",
	light: "#FFE16A",
	main: "#FFC107",
	dark: "#B78103",
	darker: "#7A4F01",
	contrastText: GREY[800],
};

export const ERROR = {
	lighter: "#FFE7D9",
	light: "#FFA48D",
	main: "#FF4842",
	dark: "#B72136",
	darker: "#7A0C2E",
	contrastText: "#fff",
};

const GRADIENTS = {
	primary: createGradient(PRIMARY.light, PRIMARY.main),
	info: createGradient(INFO.light, INFO.main),
	success: createGradient(SUCCESS.light, SUCCESS.main),
	warning: createGradient(WARNING.light, WARNING.main),
	error: createGradient(ERROR.light, ERROR.main),
};

const COMMON = {
	common: { black: "#000000", white: "#FFFFFF" },
	primary: PRIMARY,
	secondary: SECONDARY,
	info: INFO,
	success: SUCCESS,
	warning: WARNING,
	error: ERROR,
	grey: GREY,
	gradients: GRADIENTS,
	divider: alpha(GREY[500], 0.24),
	action: {
		active: GREY[600],
		hover: GREY[500_8],
		selected: GREY[500_16],
		disabled: GREY[500_80],
		disabledBackground: GREY[500_24],
		focus: GREY[500_24],
		hoverOpacity: 0.08,
		disabledOpacity: 0.48,
	},
};


export const palette = (themeMode) => {
	const light = {
		...COMMON,
		mode: "light",
		text: {
			primary: GREY[800],
			secondary: GREY[600],
			disabled: GREY[500],
		},
		background: {
			paper: "#a4b7ab",
			default: "#e8edea",
			neutral: GREY[200],
		},
		action: {
			...COMMON.action,
			active: GREY[600],
		},
	};

	const dark = {
		...COMMON,
		mode: "dark",
		text: {
			primary: "#E4F1FF",
			secondary: "#93A9C2",
			disabled: GREY[600],
		},
		background: {
			paper: "#2b2b2b",
			default: "#1c1c1c",
			neutral: alpha(GREY[500], 0.16),
		},
		action: {
			...COMMON.action,
			active: GREY[500],
		},
	};

	return themeMode === "light" ? light : dark;
};

export default palette;
