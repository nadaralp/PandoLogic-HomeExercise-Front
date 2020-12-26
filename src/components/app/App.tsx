import { Box, Card, Container, Grid } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import React from "react";
import Header from "../header/Header";
import SearchResults from "../search-results/SearchResults";
import Search from "../search/Search";
import SelectedJobModal from "../selected-job-modal/SelectedJobModal";
import { useStyles } from "./App.styles";

interface Props {}

const App = (props: Props) => {
    return (
        <Box component="main" paddingX={10}>
            <Header />
            <Container maxWidth="sm">
                <Search />
                <SearchResults />
            </Container>
            <SelectedJobModal />
        </Box>
    );
};

export default observer(App);
