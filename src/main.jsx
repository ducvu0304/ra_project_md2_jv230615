import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";
import store from "./store";
import { GoogleOAuthProvider } from "@react-oauth/google";
// Initialization for ES Users
import { Toast, initTE } from "tw-elements";

initTE({ Toast });

const clientGoogleId =
  "355217634639-p7unptikl0jpq1jiuug2db4jmjee727c.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <Provider store={store}>
        <GoogleOAuthProvider clientId={clientGoogleId}>
          <App />
        </GoogleOAuthProvider>
      </Provider>
    </ThemeProvider>
  </BrowserRouter>,
);
