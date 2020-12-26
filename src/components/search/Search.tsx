import { Box, Button, Grid } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./Search.styles";
import { RootStoreContext } from "../../infrastructure/store/RootStoreContext";
import { observer } from "mobx-react-lite";
import { JobTitleResponseModel } from "../../infrastructure/models/JobTitles/JobTitleResponseModel";
import useJobsStore from "../../infrastructure/hooks/useJobsStore";

interface Props {}

const Search = (props: Props) => {
    const JobsStore = useJobsStore();
    const [jobTitles, setJobTitles] = useState<JobTitleResponseModel[]>();
    const [jobSearchText, setJobSearchText] = useState<string>("");

    const classes = useStyles();
    const defaultProps = {
        options: jobTitles,
        getOptionLabel: (jobTitle: JobTitleResponseModel) =>
            jobTitle.jobTitleName,
    };

    const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setJobSearchText(e.target.value);
    };

    const handleSearch = async () => {
        await JobsStore.FilterSelectedJobAndGetJobs(jobSearchText);
    };

    useEffect(() => {
        (async () => {
            const jobTitles = await JobsStore.GetAllJobTitlesAsync();
            setJobTitles(jobTitles);
        })();
    }, []);

    return (
        <Grid container spacing={2} alignItems="center" alignContent="center">
            <Grid item xs={10} md={8}>
                <Autocomplete
                    {...defaultProps}
                    onChange={(e: any) => setJobSearchText(e.target.innerText)}
                    id="job-titles"
                    debug
                    renderInput={(params) => (
                        <TextField
                            value={jobSearchText}
                            onChange={handleTextFieldChange}
                            {...params}
                            label="Search Job !"
                            margin="normal"
                        />
                    )}
                />
            </Grid>
            <Grid item xs={2} md={4}>
                <Button
                    onClick={handleSearch}
                    variant="contained"
                    color="primary"
                    className={classes.searchBotton}
                    endIcon={<SearchIcon />}
                >
                    Search
                </Button>
            </Grid>
        </Grid>
    );
};

export default observer(Search);
