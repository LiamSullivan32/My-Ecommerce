import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    title_wrapper: {
        //backgroundColor: '#80cbc4',
        //helloasdfasdfasdfasdfsadfsa
        height: "50px",
        justifyContent: "center",
    },
    shop: {
        backgroundColor: "black",
        height: "100%"
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
        fontFamily: "monospace",
        fontWeight: "700",
        //letterSpacing: '.3rem',
    },
    toolbar: {
        backgroundColor: 'white',
        borderWidth: "2px",
        //height: "100%",
        width: "100%"
    },
    ListItem: {
        fontFamily: "monospace",
        fontWeight: "700",
        justifyContent: "center",
        padding: theme.spacing(0.5, 0.5, 0.5, 0.5),
        width: "100%"

    },
    ListButton: {
        justifyContent: "center",
        padding: theme.spacing(0.5),
        width: "100%",
        margin: theme.spacing(0)
    },
    divider: {
        margin: theme.spacing(0, 0, 3, 3),
        color: "black",
        Width: "10px",
    },
    reverse: {
        //padding: theme.spacing(1, 0.5, 1, 0.5)
    },
    filtermodal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    },
    sliderlabel: {
        margin: theme.spacing(0, 0, 0, 2)
    },
    slider: {
        width: "45%"
    },
    mainContainer: {
        width: "100%",
        backgroundColor: "#dfd9e2"
    }
}));

export default useStyles;