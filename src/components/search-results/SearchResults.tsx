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

    if (
        JobsStore.jobNotFoundJobNameAttemp ||
        (JobsStore.relevantSearchJobs &&
            JobsStore.relevantSearchJobs.length === 0)
    ) {
        return (
            <Typography
                style={{ marginTop: "4rem" }}
                color="error"
                variant="h6"
            >
                Couldn't find any jobs for:{" "}
                {JobsStore.jobNotFoundJobNameAttemp || JobsStore.currentSearchedJobTitle}
            </Typography>
        );
    }

    if (!JobsStore.relevantSearchJobs) return <></>;

    const handleJobSelect = (job: JobResponseModel) => (_) => {
        JobsStore.currentSelectedJob = job;
    };

    return (
        <Card>
            <Box padding={2}>
                <Typography variant="body2" className={classes.resultsTitle}>
                    The relevant jobs for{" "}
                    <Typography variant="inherit" color="primary">
                        {JobsStore.currentSearchedJobTitle}
                    </Typography>{" "}
                    are:
                </Typography>
                <Typography variant="inherit" className={classes.resultCaption}>
                    Click on the job to get more information !
                </Typography>
                <div>
                    <List className={classes.resultsList}>
                        {JobsStore.relevantSearchJobs.map(
                            (job: JobResponseModel) => (
                                <ListItem
                                    key={job.jobId}
                                    className={classes.resultItem}
                                    onClick={handleJobSelect(job)}
                                >
                                    {/* Text for the item */}
                                    <ListItemText>
                                        <Typography
                                            variant="caption"
                                            color="primary"
                                        >
                                            ({job.jobId}){" "}
                                        </Typography>
                                        {JobsStore.currentSearchedJobTitle} in{" "}
                                        {job.city}, {job.state}
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
