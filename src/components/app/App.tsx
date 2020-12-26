import { Box, Card, Container, Grid } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import React from "react";
import Header from "../header/Header";
import SearchResults from "../search-results/SearchResults";
import Search from "../search/Search";
import { useStyles } from "./App.styles";

interface Props {}

const App = (props: Props) => {

    return (
        <Box component="main" paddingX={10}>
            <Header />
            <Container maxWidth="md">
                <Search />
                <SearchResults />
            </Container>
        </Box>
    );
};

export default observer(App);