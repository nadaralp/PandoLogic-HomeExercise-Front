import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import { RootStoreProvider } from "./infrastructure/store/RootStoreContext";
import reportWebVitals from "./reportWebVitals";
import AppProviderSetup from "./components/app/AppProviderSetup";

ReactDOM.render(
    <RootStoreProvider>
        <React.StrictMode>
            <AppProviderSetup />
        </React.StrictMode>
    </RootStoreProvider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
