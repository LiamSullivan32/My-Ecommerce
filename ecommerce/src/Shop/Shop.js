import useStyles from "./Shop_Style";
import React from 'react';
import { Typography, InputBase, Divider, Toolbar, ListItem, ListItemIcon, Drawer, List, ListItemText, Box, Chip, Button, Slider, Modal, Paper, Grid } from '@material-ui/core';
import Toolbar_Component from "../Toolbar/Toolbar"
import HouseIcon from '@material-ui/icons/House';
import { MainListItems } from "./List_Items";
import { pink } from '@material-ui/core/colors';
import ListItemButton from '@mui/material/ListItemButton';
import ReplayIcon from '@material-ui/icons/Replay';
import FilterIcon from '@material-ui/icons/Filter';
import SearchIcon from '@material-ui/icons/Search';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ProductGrid from "./products";


const minDistance = 10;

function valuetext(value) {
    return `$ ${value}`;
}



function ShopPage() {
    const classes = useStyles();
    const [openModal, setOpenModal] = React.useState(false);
    const [value, setValue] = React.useState([20, 50]);
    const [appliedPriceRange, setAppliedPriceRange] = React.useState({ minPrice: 20, maxPrice: 50 });
    const [text, setText] = React.useState(""); // Initialize text state
    const [appliedtext, setAppliedText] = React.useState("");

    // ... other functions

    //need to add specific values

    const handleChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }

    };

    const handleFilterClick = () => {
        setOpenModal(!openModal);
    };

    const handleApplyClick = () => {
        setAppliedPriceRange({ minPrice: value[0], maxPrice: value[1] });
        setAppliedText(text);
        console.log(appliedtext)
    };

    const handleInputChange = (event) => {
        setText(event.target.value); // Update text state on input change
    };


    return (
        <div>
            <div className={classes.title_wrapper}>
                <Typography variant="h6" className={classes.title}>
                    Shop
                </Typography>
            </div>
            <Toolbar_Component />
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className={classes.mainContainer}>
                <Grid item xs={2} sm={2}>
                    <div className={classes.toolbar}>
                        <Toolbar
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-evenly',
                            }}
                        >
                            <div className={classes.reverse}>

                                <Button color="inherit">
                                    <ReplayIcon /></Button></div>
                            <div className={classes.reverse}>

                                <Button color="inherit">
                                    <ReplayIcon /></Button></div>
                        </Toolbar>
                        <Divider />
                        <Box sx={{
                            width: '100%', maxWidth: 360, bgcolor: 'inherit',
                        }}>
                            <nav aria-label="main mailbox folders">
                                <List>
                                    <ListItem>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <SearchIcon />
                                            </ListItemIcon>
                                        </ListItemButton>
                                        <InputBase
                                            placeholder="Search…"
                                            inputProps={{ 'aria-label': 'search' }}
                                            value={text}
                                            onChange={handleInputChange}
                                        />
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemButton onClick={handleFilterClick}>
                                            <ListItemIcon>
                                                <FilterIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Filter" />
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <AttachMoneyIcon style={{ color: 'grey', marginLeft: '15px', marginRight: '30px' }} />
                                        <Slider
                                            getAriaLabel={() => 'Minimum distance'}
                                            value={value}
                                            onChange={handleChange}
                                            valueLabelDisplay="auto"
                                            getAriaValueText={valuetext}
                                            disableSwap
                                            aria-labelledby="track-false-slider"
                                            className={classes.slider}
                                        />
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <HouseIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Search" />
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <HouseIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Search" />
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemButton onClick={handleApplyClick}>
                                            <ListItemIcon>
                                                <HouseIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Apply" />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </nav>
                        </Box>
                    </div>
                </Grid>
                <Modal
                    open={openModal}
                    onClose={handleFilterClick}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        height: '30%'
                    }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Filter Options
                        </Typography>
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item xs={5} key={1}>
                                <Paper elevation={2} sx={{ height: "90%", display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'green' }}>
                                    <p>hello</p>
                                </Paper>
                            </Grid>
                            <Grid item xs={5} key={2}>
                                <Paper elevation={2} sx={{ height: "90%", display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'green' }}>
                                    <p>hello</p>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Box>
                </Modal>
                <Grid item xs={8} sm={8} style={{ marginTop: "20px", marginLeft: "20px", backgroundColor: "#dfd9e2" }}>
                    <ProductGrid minPrice={appliedPriceRange.minPrice} maxPrice={appliedPriceRange.maxPrice} text={appliedtext} />
                </Grid>
            </Grid>
        </div>

    );
};


export default ShopPage;