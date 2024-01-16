import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    title_wrapper: {
        backgroundColor: 'white',
        height: "50px",
        justifyContent: "center",
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
        fontFamily: "monospace",
        fontWeight: "700",
        //letterSpacing: '.3rem',
    }
}));

export default useStyles;