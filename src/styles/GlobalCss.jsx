
import { variableStyles } from "./utils/variables";
import {StyledUtils} from "./utils/StyledUtils";
import {MediaQuery} from "./utils/mediaQuery";

const GlobalCss = ({ children }) => {
  StyledUtils();
  variableStyles();
  MediaQuery();
  return children;
};

export default GlobalCss;
