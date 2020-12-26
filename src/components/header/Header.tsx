import {
    Box,
    FormControlLabel,
    Grid,
    Switch,
    Typography,
} from "@material-ui/core";
import { observer } from "mobx-react-lite";
import React from "react";
import useConfigStore from "../../infrastructure/hooks/useConfigStore";
import { ConfigStore } from "../../infrastructure/store/ConfigStore";
import { useStyles } from "./Header.styles";
const pandoLogicLogo = require("../../static/images/pando-logic.png");

interface Props {}

const Header = (props: Props) => {
    const classes = useStyles();
    const ConfigStore: ConfigStore = useConfigStore();

    return (
        <Box
            component="header"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
        >
            <Box display="flex" alignItems="center">
                <img src={pandoLogicLogo.default} alt="pando-logic" className={classes.pandoLogicLogo} />
                <Box>
                    <Typography variant="h6" className={classes.nadarLogo}>
                        NADAR.A
                    </Typography>
                </Box>
            </Box>

            <Box>
                <FormControlLabel
                    control={
                        <Switch
                            checked={ConfigStore.isDarkThemeEnabled}
                            onChange={() => {
                                ConfigStore.isDarkThemeEnabled = !ConfigStore.isDarkThemeEnabled
                            }}
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Dark Theme"
                />
            </Box>
        </Box>
    );
};

export default observer(Header);
