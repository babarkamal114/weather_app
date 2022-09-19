import {createTheme} from "@mui/material/styles";

const themeOptions = {
    palette: {
        type: "light",
        primary: {main: "#1e293b"},
        secondary: {main: "#334155"},
        borderColor: "#334155",
        textPrimary: "#f1f5f9",
        textLight: "#94a3b8",
        contrastThreshold: 3,
        tonalOffset: 0.2,

    },

    typography: {
        heading1: {
            fontSize: "88px"
        },
        h2: {
            fontSize: "23px"
        },
    },
    overrides: {
        MuiCard: {
            root: {
                borderRadius: 8,
            },
        },
        MuiInputBase: {
            input: {
                backgroundColor: "#fff",
                color: "#fff"
            }
        }
    },
};

export const Theme = createTheme({
    ...themeOptions,
});
