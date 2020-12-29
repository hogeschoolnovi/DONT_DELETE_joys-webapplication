import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Button, Divider} from "@material-ui/core";
import * as axios from "axios";
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';

import {
    useHistory,
    useParams
} from "react-router-dom";
import {AddCircle} from "@material-ui/icons";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import {useSelector} from "react-redux";
import Utils from "../../clientServices/Utils";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        marginTop: 250,
        margin: 'auto',
        maxWidth: 450,
        maxHeight: 300,
        background: '#B388EB',
        textAlign: 'center',

    },
    typographyTitle: {
        color: '#FFD166',
        fontSize: 18,

    },
    typographyChallenge: {
        color: '#FFD166',
        fontSize: 28,
        fontWeight: 'medium',
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
    }
}));

function RandomChallenge(challenges){
    return challenges[Math.floor(Math.random() * challenges.length)];
}

function Challenges(props) {
    const classes = useStyles();
    const user = useSelector((state) => state.user);
    const history = useHistory();
    const [request, setRequest] = useState({state: "loading", data: null});
    const [randomChallenge, setRandomChallenge] = useState(null);
    let {id} = useParams();
    if (user == null) {
        history.push('/401');
    }

    useEffect(() => {
        if (user != null) {
            const accesToken = user.accessToken;
            Utils.protectedGet(`/api/games/${id}`, accesToken).then((res) => {
                if (res.data) {
                    console.log(res);
                    setRandomChallenge(RandomChallenge(res.data.challenges));
                    setRequest({state: "done", data: {game: res.data}});
                } else {
                    setRequest({state: "error", data: null});
                }
            })
        }
    },[])

    // const [mediumChallenges, setMediumChallenges] = useState(["This is challenge 1", "This is challenge 1","This is challenge 2", "This is challenge 3", "This is challenge 4", "This is challenge 5", "This is challenge 6", "This is challenge 7", "This is challenge 8", "This is challenge 9", "This is challenge 10",])
    // const [mediumPickedChallenge, setMediumPickedChallenge] = useState(null);
    // useEffect(() =>  {
    //     const randomChallenge = mediumChallenges[Math.floor(Math.random() * mediumChallenges.length)];
    //     setMediumPickedChallenge(randomChallenge);
    // });


    const add = () => {
        const accesToken = user.accessToken;
        Utils.protectedPost(`api/profile/privatetodo/${id}`, accesToken).then((res) => {
            if(res.data) {
                console.log(res);
                alert('Challenge is added to your private to do list. Good luck!')
            } else {
                console.log("error");
            }
        })
    }


    return (

        <div className={classes.root}>
            {request.state === "done" &&

            <Paper elevation={5} className={classes.paper}>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" className={classes.typographyTitle}>
                                    {randomChallenge.value} XP * {request.data.game.name}
                                </Typography>
                                <Typography variant="body2" gutterBottom className={classes.typographyChallenge}>
                                    {randomChallenge.name}
                                </Typography>
                                <Divider/>
                                <Typography variant="body2" className={classes.typographyDescription}>
                                    {randomChallenge.description}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button variant={"contained"} className={classes.completeButton}><AddCircle/> PUBLIC</Button>
                                <Tooltip title={"Add to public to do list"}>
                                    <Button variant={"contained"} className={classes.completeButton}><LockOpenIcon/> Add</Button>
                                </Tooltip>

                                <Button variant={"contained"} className={classes.completeButton}>Completed
                                </Button>
                                <Button variant={"contained"} className={classes.completeButton}><AddCircleOutlineIcon/> PRIVATE</Button>
                                <Tooltip title={"Add to private to do list"}>
                                    <Button variant={"contained"} className={classes.completeButton} onClick={add}><LockIcon/> Add</Button>
                                </Tooltip>

                            </Grid>
                            <Button variant={"contained"} className={classes.completeButton} startIcon={<ShuffleIcon/>} onClick={() => {
                                console.log(request);
                                setRandomChallenge(RandomChallenge(request.data.game.challenges));
                                // randomChallenge();
                                console.log("new generated challenge");
                            }}>
                                Shuffle challenge
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            }
            {request.state === "loading" && <p>aan het laden</p>}
            {request.state === "error" && <p>error</p>}

        </div>
    );
}
export default Challenges;
