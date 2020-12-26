import {
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography,
} from "@material-ui/core";
import { observer } from "mobx-react-lite";
import React from "react";
import useJobsStore from "../../infrastructure/hooks/useJobsStore";
import { JobsStore } from "../../infrastructure/store/JobsStore";
import { useStyles } from "./SelectedJobModal.styles";

interface Props {}

const SelectedJobModal = (props: Props) => {
    const JobsStore: JobsStore = useJobsStore();
    const classes = useStyles();

    const selectedJob = JobsStore.currentSelectedJob;

    if (!selectedJob) return <></>;

    return (
        <Dialog
            className={classes.dialog}
            open={selectedJob !== undefined}
            onClose={(_) => (JobsStore.currentSelectedJob = undefined)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Job description for job:
                <Typography variant="inherit" color="secondary">
                    {" "}
                    {JobsStore.currentSearchedJobTitle} ({selectedJob.jobId})
                </Typography>
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Typography variant="h5" gutterBottom>
                        Location:{" "}
                        <Typography variant="inherit">
                            {selectedJob.city}, {selectedJob.state}
                        </Typography>
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Applicants:{" "}
                        <Typography variant="inherit">
                            {selectedJob.applicants}
                        </Typography>
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Clicks:{" "}
                        <Typography variant="inherit">
                            {selectedJob.clicks}
                        </Typography>
                    </Typography>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
};

export default observer(SelectedJobModal);
