import {makeStyles} from "@mui/styles";

export const StyledUtils = makeStyles(({palette, ...theme}) => ({
    "@global": {
        ".h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6": {
            margin: "0 0 0.5rem",
            lineHeight: "1",
        },
        ".h1, h1": {
            color: `${palette.textPrimary} !important`,
            fontSize: "98px"
        },

        ".h2, h2": {
            color: `${palette.textPrimary} !important`,
            fontSize: "1.75rem"
        },
        ".h3, h3": {
            color: `${palette.textPrimary} !important`,
            fontSize: "1.5rem !important"
        },
        ".h4, h4": {
            color: `${palette.textPrimary} !important`,
            fontSize: "1.25rem"
        },
        ".h5, h5": {
            color: `${palette.textPrimary} !important`,
            fontSize: "20px"
        },
        ".h6, h6": {
            color: `${palette.textPrimary} !important`,
            fontSize: "16px"
        },
        a: {textDecoration: "none", color: "inherit"},
        ".p, p": {
            color: `${palette.textPrimary} !important`,
            fontSize: "16px !important"
        },
        ".p2, p2": {
            color: `${palette.textLight} !important`,
            fontSize: "16px !important"
        },
        // BORDER STYLING
        ".border": {border: "1px solid"},
        ".border-radius-0": {borderRadius: "0px !important", overflow: "hidden"},
        ".border-radius-4": {borderRadius: "4px !important", overflow: "hidden"},
        ".border-radius-8": {borderRadius: "8px !important", overflow: "hidden"},
        ".border-radius-12": {borderRadius: "12px !important", overflow: "hidden"},
        ".border-none": {border: "none !important"},

        // COLOR STYLING
        ".bg-primary": {background: `${palette.primary.main} !important`},
        ".bg-secondary": {background: `${palette.secondary.main} !important`},
        ".bg-white": {background: "#fff !important", color: "inherit"},
        ".avatar-bg": {background: `${palette.secondary.main} !important`},
        ".text-white": {color: "#fff !important"},
        ".border-color-primary": {
            borderColor: `${palette.borderColor} !important`,
        },
        "@media screen and (max-width: 1024px)": {
            ".container": {
                padding: "0px 1rem",
                maxWidth: "960px !important",
                margin: "0 auto",
            },
        },
        ".cursor-pointer": {cursor: "pointer",},
        ".shahdow:hover": {boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)"},


        // POSITION STYLING
        ".flex": {display: "flex"},
        ".flex-column": {display: "flex", flexDirection: "column"},
        ".flex-wrap": {flexWrap: "wrap"},
        ".justify-start": {justifyContent: "flex-start !important"},
        ".justify-center": {justifyContent: "center"},
        ".justify-end": {justifyContent: "flex-end"},
        ".justify-between": {justifyContent: "space-between !important"},
        ".justify-around": {justifyContent: "space-around"},
        ".items-center": {alignItems: "center"},
        ".items-start": {alignItems: "flex-start"},
        ".items-end": {alignItems: "flex-end"},
        ".items-stretch": {alignItems: "stretch"},
        ".flex-grow": {flexGrow: "1"},
        ".overflow-auto": {overflow: "auto !important"},
        ".overflow-hidden": {overflow: "hidden !important"},
        ".overflow-unset": {overflow: "unset !important"},
        ".overflow-visible": {overflow: "visible !important"},
        ".scroll-y": {overflowX: "hidden", overflowY: "scroll"},
        ".relative": {position: "relative"},
        ".position-bottom": {position: "absolute", bottom: "0"},
        ".text-center": {textAlign: "center"},
        ".align-middle": {verticalAlign: "middle"},
        ".text-right": {textAlign: "right"},
        ".text-left": {textAlign: "left"},
        ".x-center": {left: "50%", transform: "translateX(-50%)"},
        ".y-center": {top: "50%", transform: "translateY(-50%)"},
        ".m-auto": {margin: "auto !important"},
        ".mx-auto": {marginLeft: "auto !important", marginRight: "auto !important",},
        ".w-full": {width: "100%"},
        ".max-w-full": {maxWidth: "100% !important"},
        ".min-w-full": {minWidth: "100% !important"},
        ".w-full-screen": {width: "100vw"},
        ".pro-img-w": {maxWidth: "15%"},
        ".pro-img-wi": {maxWidth: "25%"},
        ".min-w-750": {minWidth: "750px"},
        ".max-w-320": {maxWidth: "320px"},
        ".max-w-450": {maxWidth: "450px"},
        ".max-w-750": {maxWidth: "750px"},
        ".max-w-550": {maxWidth: "550px"},
        ".max-w-600": {maxWidth: "600px"},
        ".max-h-500": {maxHeight: "500px"},
        ".max-w-770": {maxWidth: "770px"},
        ".max-w-720": {maxWidth: "705px"},
        ".max-w-220": {maxWidth: "220px"},
        ".max-w-120": {maxWidth: "120px"},
        ".min-h-full": {minHeight: "100% !important"},
        ".h-full": {height: "100% !important"},
        ".h-auto": {height: "auto"},
        ".h-full-screen": {height: "100vh"},
        ".h-150px": {height: "150px !important"},
        ".font-height-heading": {lineHeight: "1"},
        "@media screen and (max-width: 767px)": {
            ".hide-on-mobile": {display: "none !important"},
        },
        ...generateMarginPadding(0, 25, 0.25, "rem"),
        ...generateMarginPadding(1, 16, 1, "px"),
        ...generateMarginPadding(-25, -1, 0.25, "rem"),
        ...generateMarginPadding(-16, -1, 1, "px"),
        ...generateHeightWidh(),
    },
}));


const generateMarginPadding = (
    start = 0,
    end = 25,
    increament = 0.25,
    unit = "rem"
) => {
    let classList = {};

    for (let i = start; i <= end; i++) {
        classList[`.m-${i}${unit === "px" ? "px" : ""}`] = {
            margin: `${i * increament}${unit} !important`,
        };
        classList[`.mt-${i}${unit === "px" ? "px" : ""}`] = {
            marginTop: `${i * increament}${unit} !important`,
        };
        classList[`.mb-${i}${unit === "px" ? "px" : ""}`] = {
            marginBottom: `${i * increament}${unit} !important`,
        };
        classList[`.mr-${i}${unit === "px" ? "px" : ""}`] = {
            marginRight: `${i * increament}${unit} !important`,
        };
        classList[`.ml-${i}${unit === "px" ? "px" : ""}`] = {
            marginLeft: `${i * increament}${unit} !important`,
        };
        classList[`.mx-${i}${unit === "px" ? "px" : ""}`] = {
            marginLeft: `${i * increament}${unit} !important`,
            marginRight: `${i * increament}${unit} !important`,
        };
        classList[`.my-${i}${unit === "px" ? "px" : ""}`] = {
            marginTop: `${i * increament}${unit} !important`,
            marginBottom: `${i * increament}${unit} !important`,
        };

        classList[`.p-${i}${unit === "px" ? "px" : ""}`] = {
            padding: `${i * increament}${unit} !important`,
        };
        classList[`.pt-${i}${unit === "px" ? "px" : ""}`] = {
            paddingTop: `${i * increament}${unit} !important`,
        };
        classList[`.pb-${i}${unit === "px" ? "px" : ""}`] = {
            paddingBottom: `${i * increament}${unit} !important`,
        };
        classList[`.pr-${i}${unit === "px" ? "px" : ""}`] = {
            paddingRight: `${i * increament}${unit} !important`,
        };
        classList[`.pl-${i}${unit === "px" ? "px" : ""}`] = {
            paddingLeft: `${i * increament}${unit} !important`,
        };
        classList[`.px-${i}${unit === "px" ? "px" : ""}`] = {
            paddingLeft: `${i * increament}${unit} !important`,
            paddingRight: `${i * increament}${unit} !important`,
        };
        classList[`.py-${i}${unit === "px" ? "px" : ""}`] = {
            paddingTop: `${i * increament}${unit} !important`,
            paddingBottom: `${i * increament}${unit} !important`,
        };
    }

    return classList;
};

const generateHeightWidh = (
    start = 0,
    end = 400,
    increament = 4,
    unit = "px"
) => {
    let classList = {};

    for (let i = start; i <= end; i += increament) {
        classList[`.w-${i}`] = {
            width: `${i}${unit} !important`,
        };
        classList[`.min-w-${i}`] = {
            minWidth: `${i}${unit} !important`,
        };
        classList[`.max-w-${i}`] = {
            maxWidth: `${i}${unit} !important`,
        };
        classList[`.h-${i}`] = {
            height: `${i}${unit} !important`,
        };
        classList[`.min-h-${i}`] = {
            minHeight: `${i}${unit} !important`,
        };
        classList[`.max-h-${i}`] = {
            maxHeight: `${i}${unit} !important`,
        };
    }

    return classList;
};
