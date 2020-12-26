import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  resultsTitle: {
    fontSize: theme.typography.h6.fontSize,
    fontWeight: 'bold',
    marginBottom: theme.spacing(2)
  },
  resultsList: {
    height: '500px',
    padding: `${theme.spacing(2)} 0`,
    overflowY: 'scroll'
  },
  resultItem: {
    cursor: 'pointer'
  },
  resultCaption: {
    marginLeft: theme.spacing(2),
    color: theme.palette.secondary.main

  }
}));