// List_Items.js
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Divider from '@material-ui/core/Divider';

// Define your custom styles here
const useStyles = makeStyles((theme) => ({
    DashboardIcon: {
        color: "black",
        // Add additional styles if needed
    },
    ListItem: {
        alignItems: "center",
        // Add additional styles if needed
    },
    // ... other styles
}));

// Create the main list items component
export const MainListItems = () => {
    const classes = useStyles();

    return (
        <div>
            <ListItem className={classes.ListItem} button>
                <ListItemIcon>
                    <DashboardIcon className={classes.DashboardIcon} />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
            <Divider />
            {/* Repeat for other list items as needed */}
        </div>
    );
};

// If you want to export it as the default export as well
export default MainListItems;



