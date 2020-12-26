import {
    Button,
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
                <Typography variant="inherit" color="primary">
                    {" "}
                    {JobsStore.currentSearchedJobTitle} ({selectedJob.jobId})
                </Typography>
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Typography variant="inherit" gutterBottom>
                        Location:{" "}
                        <Typography
                            variant="h5"
                            color="textPrimary"
                            className={classes.informationTab}
                        >
                            {selectedJob.city}, {selectedJob.state}
                        </Typography>
                    </Typography>
                    <Typography variant="inherit" gutterBottom>
                        Applicants:{" "}
                        <Typography
                            variant="h5"
                            color="textPrimary"
                            className={classes.informationTab}
                        >
                            {selectedJob.applicants}
                        </Typography>
                    </Typography>
                    <Typography variant="inherit" gutterBottom>
                        Clicks:{" "}
                        <Typography
                            variant="h5"
                            color="textPrimary"
                            className={classes.informationTab}
                        >
                            {selectedJob.clicks}
                        </Typography>
                    </Typography>

                    <a target="_blank" href="https://www.pandologic.com/" className={classes.applyButtonLink}>
                        <Button variant="contained" color="primary">
                            Apply Now
                        </Button>
                    </a>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
};

export default observer(SelectedJobModal);
