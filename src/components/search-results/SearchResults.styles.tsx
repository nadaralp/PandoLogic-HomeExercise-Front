import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  resultsTitle: {
    fontSize: theme.typography.h6.fontSize,
    fontWeight: 'bold',
    
  },
  resultsList: {
    height: '500px',
    padding: `${theme.spacing(2)} 0`,
    overflowY: 'scroll'
  },
  resultItem: {
    cursor: 'pointer',
    transition: 'all 250ms ease-in-out',
    '&:hover': {
      backgroundColor: 'rgba(48, 48, 48, 0.3)',
    }
  },
  resultCaption: {
    color: '#fafafa',
    opacity: 0.7,
    marginBottom: theme.spacing(3),
    fontStyle: 'italic',
    display: 'block'

  }
}));