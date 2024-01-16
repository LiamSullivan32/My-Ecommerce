import useStyles from "./Toolbar_Style";
import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Button, Divider, makeStyles, StyledInput } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useNavigate } from 'react-router-dom';
import HouseIcon from '@material-ui/icons/House';



function Toolbar_Component() {
    const classes = useStyles();
    let history = useNavigate();

    function handleShopClick() {
        history("/shop"); // This changes the URL to /shop and navigates to the ShopPage component
    }
    function handleHomeClick(url) {
        history("/"); // This changes the URL to /shop and navigates to the ShopPage component
    }


    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar className={classes.Toolbar}>
                <div className={classes.home}>
                    <Button onClick={handleHomeClick} color="inherit">
                        <HouseIcon /></Button></div>
                <div className={classes.shop}>
                    <Button onClick={handleShopClick} color="inherit">Shop</Button></div>
                <div className={classes.sell}>
                    <Button color="inherit">Sell</Button></div>


                <div className={classes.search}>
                    <div className={classes.IconWrapper}>
                        <SearchIcon className={classes.SearchIconStyle} /></div>
                    <InputBase
                        className={classes.StyledInputBase}
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
            </Toolbar>
        </AppBar>

        /*
            return (
                <div className={classes.bar}>
                    <Button color="inherit" className={classes.button_last}>Shop</Button>
                    <Button color="inherit" className={classes.button_last}>Sell</Button>
                    <Button color="inherit" className={classes.button}>Sell</Button>
        
                </div>
        
            );*/
    )
};

export default Toolbar_Component;