import { createMuiTheme, CssBaseline, Theme, ThemeProvider } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import {
    MuiDarkTheme,
    MuiLightTheme,
} from "../../infrastructure/config/MuiTheme";
import useConfigStore from "../../infrastructure/hooks/useConfigStore";
import { ConfigStore } from "../../infrastructure/store/ConfigStore";
import App from "./App";

interface Props {}

const AppProviderSetup = (props: Props) => {
  const ConfigStore: ConfigStore = useConfigStore();
  const theme = ConfigStore.isDarkThemeEnabled ? MuiDarkTheme : MuiLightTheme;


    return (
        <ThemeProvider
            theme={createMuiTheme(theme)}
        >
            <CssBaseline />
            <App />
        </ThemeProvider>
    );
};

export default observer(AppProviderSetup);
