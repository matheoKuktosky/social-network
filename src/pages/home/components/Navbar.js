import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2), // 8*2
        width: 275
    },
    button: {
        width: '100%'
    }
}));

const tags = [
    { id: 1, name: 'Darth_Vader' },
    { id: 2, name: 'Rick_Sanchez' },
    { id: 3, name: 'Sherlock_Holmes' },
    { id: 4, name: 'Kakashi_Hatake' },
    { id: 5, name: 'John_Wick' },
    { id: 6, name: 'Kratos' }
]

function Navbar(){
    const classes = useStyles();

    return(
        <Paper className={classes.root}>
            <Button className={classes.button} variant="outlined" color="secondary">Free register</Button>
            <ListSubheader>{`Trendind Tags`}</ListSubheader>
            {
                tags.map((item) => (
                    <ListItem dense button key={`item-${item.id}-${item.name}`}>
                        <ListItemText primary={`#${item.name}`} />
                    </ListItem>
                ))                
            }
            <ListItem button>
                    Show more tags
            </ListItem>
        </Paper>
    )
}
export default Navbar;