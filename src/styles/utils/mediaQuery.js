import {makeStyles} from "@mui/styles";

export const MediaQuery = makeStyles(({ palette, ...theme }) => ({
  "@global": {
    "@media screen and (max-width: 767px)": {
      ".h1, h1": { fontSize: "1.9rem" },
      ".h2, h2": { fontSize: "1.75rem" },
      ".h3, h3": { fontSize: "1rem" },
      ".h4, h4": { fontSize: "1.25rem" },
      ".h5, h5": { fontSize: "1rem" },
      ".h6, h6": { fontSize: "0.875rem" },
    },
  },
}));
