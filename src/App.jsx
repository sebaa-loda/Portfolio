import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import {ThemeProvider} from "./auth/themeContext"


export const App = () => {
  return (
    <ThemeProvider> 
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </ThemeProvider>
  );
};
