// import React, {Component}from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
//
// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     paper: {
//         padding: theme.spacing(6),
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//         height: 50,
//     }
// }));
//
//
// function Profile(){
//     const classes = useStyles();
//     return(
//         <div className={classes.root}>
//             <Grid container spacing={3}>
//                 <Grid item xs={12}>
//                 <Paper className={classes.paper}>Profiel</Paper>
//                 </Grid>
//             </Grid>
//             <Grid item xs={6}>
//                 <Paper className={classes.paper}>Public to do list</Paper>
//             </Grid>
//             <Grid item xs={6}>
//                 <Paper className={classes.paper}>Private to do list</Paper>
//             </Grid>
//         </div>
//     )
// }
// export default Profile;


import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {useSelector} from "react-redux";
import * as axios from "axios";
import {Button, CardActionArea, Divider, IconButton} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {AddCircle, RemoveCircle} from "@material-ui/icons";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import {useHistory, useParams} from "react-router-dom";
import Utils from "../clientServices/Utils";
import ChallengeCard from "../components/ChallengeCard";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        // padding: theme.spacing(2),
        // textAlign: 'center',
        // background: '#B388EB',
        // // color: theme.palette.text.secondary,
        // height: 150,
        marginTop: 0,
        marginBottom: 60,
        padding: theme.spacing(4),
        height: 150,
        textAlign: 'center',
        background: 'none',
        color: '#6F2DBD',
        fontSize: 40,
    },

    toDoPaper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        height: 50,
        color: '#6F2DBD',
        background: '#FFD166',

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

const getProfile = (user, setRequest) => {
    if (user != null) {
        const id = user.id;
        Utils.protectedGet(`/api/profile/${id}`, user.accessToken).then((res) => {
            if (res.data) {
                console.log(res);
                setRequest({state: "done", data: res.data});
            } else {
                setRequest({state: "error", data: null});
            }
        })
    }
}

export default function Profile() {
    const classes = useStyles();
    const user = useSelector((state) => state.user);
    const history = useHistory();
    const [request, setRequest] = useState({state: "loading", data: null});
    const accessToken = user?.accessToken;

    if (user == null) {
        history.push('/401');
    }

    useEffect(() => {
        getProfile(user, setRequest)
    },[])

    const privateChallenges= request.state!=="done"?[]:request.data.privateToDo;
    const publicChallenges= request.state!=="done"?[]:request.data.publicToDo;
    const completedChallenges= request.state!=="done"?[]:request.data.completedToDo;

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Paper elevation={0} className={classes.paper}><Typography className={classes.typographyProfile}>
                        {user?.username}
                        <br/>
                        {user?.email}</Typography> </Paper>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item lg>
                    <Paper className={classes.toDoPaper}>Your public to do list</Paper>
                    {request.state === "loading" &&
                        <p>aan het laden</p>}
                    {request.state === "done"&&
                        publicChallenges.map((publicChallenge, index)=>
                            <ChallengeCard challenge={publicChallenge} key={`pub-${index}`} onRemoveClick={() => {
                                Utils.protectedDelete(`/api/profile/publictodo/${publicChallenge.id}`, accessToken).then((res) => {
                                    getProfile(user, setRequest)
                                })}}/>
                    )}
                    {request.state === "done" && publicChallenges.length === null &&
                    <p>You have not added any challenge to your to do list. Play the game te get started.</p>}
                </Grid>
                <Grid item lg>
                    <Paper className={classes.toDoPaper}>Your private to do list</Paper>
                    {request.state === "loading" &&
                        <p>aan het laden</p>}
                    {request.state === "done"&&
                        privateChallenges.map((privateChallenge, index) =>
                            <ChallengeCard challenge={privateChallenge} key={`pub-${index}`} onRemoveClick={() => {
                                Utils.protectedDelete(`/api/profile/privatetodo/${privateChallenge.id}`, accessToken).then((res) => {
                                    getProfile(user, setRequest)
                                })}}/>
                    )}
                </Grid>
                <Grid item lg>
                    <Paper className={classes.toDoPaper}>Your completed challenges</Paper>
                    {request.state === "loading" &&
                        <p>aan het laden</p>}
                    {request.state === "done"&&
                        completedChallenges.map((completedChallenge, index) =>
                            <ChallengeCard challenge={completedChallenge} key={`pub-${index}`} onRemoveClick={() => {
                                Utils.protectedDelete(`/api/profile/completedtodo/${completedChallenge.id}`, accessToken).then((res) => {
                                    getProfile(user, setRequest)
                                })}}/>
                    )}
                </Grid>
            </Grid>





                {/*<Grid container direction={"column"} justify={"flex-start"} alignItems={"flex-start"}>*/}
                {/*    /!*request.challenges.map((challenges) => {*!/*/}
                {/*    <Grid key={challenges.id} item>*/}
                {/*        <Paper elevation={5} className={classes.challengePaper}>*/}
                {/*            <Grid item xs={6}>*/}
                {/*                <Typography gutterBottom variant="subtitle1" className={classes.typographyTitle}>*/}
                {/*                    20XP*/}
                {/*                    /!*{request.data.randomChallenge.value} XP * {request.data.game.name}*!/*/}
                {/*                </Typography>*/}
                {/*                <Typography variant="body2" gutterBottom className={classes.typographyChallenge}>*/}
                {/*                    Titel*/}
                {/*                    /!*{request.data.randomChallenge.name}*!/*/}
                {/*                </Typography>*/}
                {/*                <Divider/>*/}
                {/*                <Typography variant="body2" className={classes.typographyDescription}>*/}
                {/*                    Uitleg*/}
                {/*                    /!*{request.data.randomChallenge.description}*!/*/}
                {/*                </Typography>*/}
                {/*            </Grid>*/}
                {/*            <Grid item>*/}
                {/*                <Button className={classes.completeButton}>Completed*/}
                {/*                </Button>*/}
                {/*            </Grid>*/}
                {/*        </Paper>*/}
                {/*    </Grid>*/}
                {/*    // }*/}
                {/*</Grid>*/}





    {/*<Grid container direction={"column"} justify={"space-around"} alignItems={"flex-start"}>*/}
    {/*                {request.state !== "loading" &&*/}
    {/*                request.data.*/}
    {/*                    challenges.map((challenges) => (*/}
    {/*                    <Grid key={challenges.id} item>*/}
    {/*                        <Paper className={classes.challengePaper}>*/}
    {/*                            {challenges.title}*/}
    {/*                        </Paper>*/}
    {/*                    </Grid>*/}

    {/*                ))}}*/}
    {/*            </Grid>*/}



                {/*<Grid container className={classes.root} spacing={2}>*/}
                {/*    <Grid item xs={6}>*/}
                {/*        <Grid container justify={"left"} spacing={2}>*/}
                {/*            {request.state !== "loading" &&*/}
                {/*            request.data.map((challenge) => (*/}
                {/*                <Grid key={challenge.id} item>*/}
                {/*                    <Paper className={classes.challengePaper}/>*/}
                {/*                </Grid>*/}

                {/*            ))}}*/}
                {/*            {request.state === "loading" &&*/}
                {/*            <Grid item xs={6}>*/}
                {/*                <Grid container justify={"left"} spacing={2}>*/}
                {/*                    <Paper className={classes.challengePaper}>aan het laden</Paper>*/}
                {/*                </Grid>*/}
                {/*            </Grid>*/}
                {/*                }*/}
                {/*            {request.data === null &&*/}
                {/*            <Grid item xs={6}>*/}
                {/*                <Grid container justify={"left"} spacing={2}>*/}
                {/*                    <Paper className={classes.challengePaper}>You don't have any challenge added to your public to do list</Paper>*/}
                {/*                </Grid>*/}
                {/*            </Grid>}*/}
                {/*        </Grid>*/}
                {/*    </Grid>*/}
                {/*</Grid>*/}
             {/*</Grid>*/}
         </div>
     );
 }