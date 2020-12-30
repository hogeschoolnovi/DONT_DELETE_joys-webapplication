import React, {useEffect, useState} from "react";
import Typography from "@material-ui/core/Typography";
import {Button, Divider} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";
import Utils from "../clientServices/Utils";
import {useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        marginTop: 0,
        marginBottom: 60,
        padding: theme.spacing(4),
        height: 150,
        textAlign: 'center',
        background: 'none',
        color: '#6F2DBD',
        fontSize: 40,
    },
    challengePaper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        background: '#B388EB',
        margin: 10,
    },
    typographyTitle: {
        color: '#FFD166',
        fontSize: 18,
    },
    typographyChallenge: {
        color: '#FFD166',
        fontSize: 23,
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
    },
    typographyJoined: {
        color: '#6F2DBD',
        fontSize: 10,
        fontStyle: 'oblique',
        textAlign: "left",
        marginRight: 150,

    },
    typographyProfile: {
        color: '#6F2DBD',
        fontSize: 18,
    },
}));
function Challenge(challenge) {
    const classes = useStyles();
    const user = useSelector((state) => state.user);
    const history = useHistory();
    // const [request, setRequest] = useState({state: "loading", data: null});
    // if (user == null) {
    //     history.push('/401');
    // }
    const [request, setRequest] = useState({state: "loading", data: null});
    useEffect(() => {
        if (user == null) {
            history.push('/401');
        }
        const accessToken = user.accessToken;
        Utils.protectedGet(`/api/challenge/${challenge.id}`, accessToken).then((res) => {
            console.log(res);
            setRequest({state: "done", data: res.data});
        })

    },[])

    return (
        <div className={classes.root}>
            {request.state === "done" &&
            <Paper key={request.data.challenge.id} elevation={5} className={classes.challengePaper}>
            <Typography variant="body2" className={classes.typographyJoined}>
                amy +7 anderen joined this challenge
                <br/>
                bla +2 anderen completed this challenge
            </Typography>
            <Typography gutterBottom variant={"subtitle1"} className={classes.typographyTitle}>
                {request.data.challenge.value}XP * {request.data.challenge.level}
            </Typography>
            <Typography variant="body2" gutterBottom className={classes.typographyChallenge}>
                {request.data.challenge.name}
            </Typography>
            <Divider/>
            <Typography variant="body2" className={classes.typographyDescription}>
                {request.data.challenge.description}
            </Typography>
            <Grid item>
                <Tooltip title={"Add challenge to your public to do list"}>
                    <Button variant={"contained"} className={classes.completeButton} onClick={() => {
                        const accessToken = user.accessToken;
                        Utils.protectedPost(`/api/profile/publictodo/${challenge.id}`, accessToken).then((res) => {
                            if(res.data) {
                                console.log(res);
                                alert('Challenge is added to your public to do list. Good luck!');
                                history.push('/games');
                            } else {
                                console.log("error");
                            }
                        }).catch((error) => {
                            console.log(error);
                            alert("fout opgetreden");
                        });
                    }}><LockOpenIcon/> Add</Button>
                </Tooltip>
                <Tooltip title={"Complete this challenge"}>
                    <Button variant={"contained"} className={classes.completeButton} onClick={() => {
                        const accessToken = user.accessToken;
                        Utils.protectedPost(`/api/profile/completedtodo/${challenge.id}`, accessToken).then((res) => {
                            if(res.data) {
                                console.log(res);
                                alert('Challenge is added to your private to do list. Good luck!');
                                history.push('/games');
                            } else {
                                console.log("error");
                            }
                        }).catch((error) => {
                            console.log(error);
                            alert("fout opgetreden");
                        });
                    }}>Completed
                    </Button>
                </Tooltip>
                <Tooltip title={"Add challenge to your private to do list"}>
                    <Button variant={"contained"} className={classes.completeButton} onClick={() => {
                        const accessToken = user.accessToken;
                        Utils.protectedPost(`/api/profile/privatetodo/${challenge.id}`, accessToken).then((res) => {
                            if(res.data) {
                                console.log(res);
                                alert('Challenge is added to your private to do list. Good luck!');
                                history.push('/games');
                            } else {
                                console.log("error");
                            }
                        }).catch((error) => {
                            console.log(error);
                            alert("fout opgetreden");
                        });
                    }}><LockIcon/> Add</Button>
                </Tooltip>
            </Grid></Paper>
            }
            {/*// {request.state === "loading" && <p>aan het laden</p>}*/}
            {/*// {request.state === "error" && <p>error</p>}*/}
        </div>

    )
}

export default Challenge;