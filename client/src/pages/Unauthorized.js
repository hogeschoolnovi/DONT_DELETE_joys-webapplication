import React from "react";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paperHeader: {
        padding: theme.spacing(4),
        height: 150,
        textAlign: 'center',
        background: 'none',
        color: 'red',
        fontSize: 50,
    },
    typographyDescription: {
        color: '#6F2DBD',
        fontSize: 15,
        fontStyle: 'oblique',
    },
    completeButton: {
        background: '#6F2DBD',
        color: '#FFD166',
        margin: 6,
        '&:hover': {
            background: '#FFD166',
            color: '#6F2DBD',
        }
    },
}))


function Unauthorized() {
    const classes = useStyles();
    return(
        <Paper elevation={0} className={classes.paperHeader} >
            401 Unauthorized
            <Typography className={classes.typographyDescription}>
                You are not allowed to open this page. Please return to a public page or log in to gain authorization.
            </Typography>
            <Link to={'/'}><Button variant={"containerd"} className={classes.completeButton}>Home</Button>
            </Link>
            <Link to={'/login'}><Button variant={"containerd"} className={classes.completeButton}>Log in</Button>
            </Link>
        </Paper>
    )
}

export default Unauthorized;