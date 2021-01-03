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
    challengePaper: {
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
}));
function Challenge() {
    const classes = useStyles();
    const user = useSelector((state) => state.user);
    const history = useHistory();
    if (user == null) {
        history.push('/401');
    }
    let {id} = useParams();
    const [request, setRequest] = useState({state: "loading", data: null});
    useEffect(() => {
        if (user == null) {
            history.push('/401');
        }
        const accessToken = user.accessToken;
        Utils.protectedGet(`/api/challenge/${id}`, accessToken).then((res) => {
            console.log(res);
            setRequest({state: "done", data: res.data});
        })

    },[])

    return (
        <div className={classes.root}>
            {request.state === "done" &&
            <Paper key={id} elevation={5} className={classes.challengePaper}>
            <Typography variant="body2" className={classes.typographyJoined}>
                amy +7 anderen joined this challenge
                <br/>
                bla +2 anderen completed this challenge
            </Typography>
            <Typography gutterBottom variant={"subtitle1"} className={classes.typographyTitle}>
                {request.data.value}XP * {request.data.level}
            </Typography>
            <Typography variant="body2" gutterBottom className={classes.typographyChallenge}>
                {request.data.name}
            </Typography>
            <Divider/>
            <Typography variant="body2" className={classes.typographyDescription}>
                {request.data.description}
            </Typography>
            <Grid item>
                <Tooltip title={"Add challenge to your public to do list"}>
                    <Button variant={"contained"} className={classes.completeButton} onClick={() => {
                        const accessToken = user.accessToken;
                        Utils.protectedPost(`/api/profile/publictodo/${id}`, accessToken).then((res) => {
                            if(res) {
                                console.log(res);
                                alert('Challenge is added to your public to do list. Good luck!');
                                history.push('/profile');
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
                        Utils.protectedPost(`/api/profile/completedtodo/${id}`, accessToken).then((res) => {
                            if(res) {
                                console.log(res);
                                alert('Challenge completed! You can find the challenge in your completed challenges list.');
                                history.push('/profile');
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
                        Utils.protectedPost(`/api/profile/privatetodo/${id}`, accessToken).then((res) => {
                            if(res) {
                                console.log(res);
                                alert('Challenge is added to your private to-do list. Good luck!');
                                history.push('/profile');
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
             {request.state === "loading" && <p>aan het laden</p>}
             {request.state === "error" && <p>error</p>}
        </div>

    )
}

export default Challenge;