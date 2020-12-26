import { createMuiTheme } from "@material-ui/core";

export const MuiDarkTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#39ace7",
            light: "#4dabf5",
            dark: "#1769aa",
        },
        secondary: {
            dark: "#b28704",
            main: "#ffc107",
            light: "#ffcd38",
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
        type: "dark",
    },
    overrides: {
        MuiButton: {
            text: {
                color: "#0784b5",
            },
        },
    },
});

export const MuiLightTheme = createMuiTheme({
    palette: {
        type: "light",
        primary: {
            main: "#06c",
        },
    },
});
