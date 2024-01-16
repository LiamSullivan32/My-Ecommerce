import useStyles from "./Homepage_Style";
import React from 'react';
import { Typography } from '@material-ui/core';
import Toolbar_Component from "../Toolbar/Toolbar"


function HomePage() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.title_wrapper}>
                <Typography variant="h6" className={classes.title}>
                    Home
                </Typography>
            </div>
            <Toolbar_Component />
        </div>
    );
};

export default HomePage;