import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {CardActionArea} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import * as axios from "axios";
import {useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import Utils from "../../clientServices/Utils";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 350,
        width: 300,
        marginTop: 200,
        backgroundColor: '#B388EB',
        padding: 20,
        borderRadius: 8,
        textAlign: 'center',
        '&:hover': {
            padding: 30,
        }
    },
    control: {
        padding: theme.spacing(4),
    },
    challengeTitle: {
        color: '#6F2DBD',
        fontSize: 25,
    },
    challengeContent: {
        color: '#FFD166',
        fontSize: 20,
        fontWeight: 'bold',
    }
}));

function Game() {
    const history = useHistory();
    const [spacing] = React.useState(4);
    const classes = useStyles();

    const user = useSelector((state) => state.user);
    if (user == null) {
        history.push('/401');
    }


    const [request, setRequest] = useState({state: "loading", data: null});
    useEffect(() => {
        const accessToken = user.accessToken;
        Utils.protectedGet("/api/games", accessToken).then((res) => {
                console.log(res);
                setRequest({state: "done", data: res.data});
            })

    },[])


    return (

        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    {request.state !== "loading" &&
                    request.data.map((challenge) => (
                        <Grid key={challenge.id} item>
                            <Link to={`games/${challenge.id}`} style={{textDecoration: 'none'}}>
                                <Paper className={classes.paper}>
                                    <Typography className={classes.challengeTitle}>
                                        {challenge.name}
                                    </Typography>
                                    <br/>
                                    <Typography className={classes.challengeContent}>
                                        {challenge.description}
                                    </Typography>
                                </Paper>
                            </Link>
                        </Grid>
                    ))}
                    {request.state === "loading" && <p>aan het laden</p> }
                </Grid>
            </Grid>
            <Grid item xs={12}></Grid>
        </Grid>
    );
}
export default Game;