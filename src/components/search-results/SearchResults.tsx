import {
    Box,
    Card,
    CircularProgress,
    List,
    ListItem,
    ListItemText,
    Typography,
} from "@material-ui/core";
import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import useJobsStore from "../../infrastructure/hooks/useJobsStore";
import { JobResponseModel } from "../../infrastructure/models/Jobs/JobResponseModel";
import { JobsStore } from "../../infrastructure/store/JobsStore";
import { useStyles } from "./SearchResults.styles";

interface Props {}

const SearchResults = (props: Props) => {
    const JobsStore: JobsStore = useJobsStore();
    const classes = useStyles();

    if (JobsStore.areJobsLoading) {
        return <CircularProgress style={{ marginTop: "50px" }} />;
    }

    if (JobsStore.relevantSearchJobs.length === 0) return <></>;

    return (
        <Card>
            <Box padding={2}>
                <Typography variant="body2" className={classes.resultsTitle}>The relevant jobs for <Typography variant="inherit" color="secondary">{ JobsStore.currentSearchedJobTitle}</Typography> are:</Typography>
                <div>
                    <List className={classes.resultsList}>
                        {JobsStore.relevantSearchJobs.map(
                            (job: JobResponseModel) => (
                                <ListItem key={job.jobId} className={classes.resultItem}>
                                    <ListItemText>
                                        {JobsStore.currentSearchedJobTitle} in {job.city}, {job.state}
                                        <Typography variant="caption" className={classes.resultCaption}>(Click me to get information !)</Typography>
                                    </ListItemText>
                                </ListItem>
                            )
                        )}
                    </List>
                </div>
            </Box>
        </Card>
    );
};

export default observer(SearchResults);
