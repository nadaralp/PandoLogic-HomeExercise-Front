import { createMuiTheme } from "@material-ui/core";

export const MuiDarkTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#2196f3",
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
                color: "#fff",
            },
        },
    },
});

export const MuiLightTheme = createMuiTheme({
    palette: {
        type: "light",
    },
});
