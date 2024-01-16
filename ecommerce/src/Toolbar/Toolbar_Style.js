import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({

    appBar: {
        //backgroundColor: '#1565c0', // A shade of blue\
        //justifyContent: 'space-evenly',
        display: "flex"

    },
    Toolbar: {
        color: 'white',
        //alignItems: 'center',
        display: "flex"
        //justifyContent: 'space-between',

    },

    search: {
        //alignSelf: "right",
        //alignItems: "center",
        //ustifyContent: "flex-end",
        display: "flex",
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        //backgroundColor: theme.palette.common.white,
        marginLeft: 0,
        marginRight: "20px",
        width: '100%',
        height: '75%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(100),
            width: 'auto',
        },
    },
    SearchIconStyle: {
        //marginRight: "10px",
        padding: theme.spacing(0, 2),
        //width: "50%",
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        //textSizeAdjust: "auto"
    },
    IconWrapper: {
        '&:hover': {
            backgroundColor: "white",
        },
    },
    StyledInputBase: {
        color: 'white',
        //paddingRight: "56px",
        //width: '50%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 8),
            // vertical padding + font size from searchIcon
            //paddingLeft: `calc(1em + ${theme.spacing(3)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '14ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        }
    },
    shop: {
        width: "100%",
        marginRight: "20px",
        fontFamily: "monospace",
        fontWeight: "700",
        letterSpacing: '.3rem',
        //borderRight: "20px",
        //borderColor: "black",
        //backgroundColor: "grey",
        height: "100%"
    },
    sell: {
        width: "100%",
        marginRight: "20px",
        fontFamily: "monospace",
        fontWeight: "700",
        letterSpacing: '.3rem',
        //borderRight: "20px",
        //borderColor: "black",
        //backgroundColor: "grey",
        height: "100%",

    },
    home: {
        width: "100%",
        marginRight: "20px",
        //borderRight: "20px",
        //borderColor: "black",
        //backgroundColor: "grey",
        alignItems: 'center',
        height: "100%",
    }

}));

export default useStyles;