import {ThemeProvider} from "@mui/styles";
import GlobalCss from "./styles/GlobalCss";
import {Theme} from "./theme";
import HomePage from "./Components/HomePage/HomePage";
import {Provider} from "react-redux";
import store from './store/store'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React from "react";
import NotFound from "./Components/Common/NotFoundPage/NotFound";
import ForecastSelected from "./Components/HomePage/ModelsComponent/ForecastSelected";

function App() {
  return [
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <GlobalCss>
          <Router>
            <Routes>
              <Route exact path="/" element={<HomePage/>}/>
              <Route exact path="/:datetime" element={<ForecastSelected/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </Router>
        </GlobalCss>
      </ThemeProvider>

    </Provider>
  ]
}

export default App;

