import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {Button, Divider} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {RemoveCircle} from "@material-ui/icons";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import {Link, useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {GrTooltip} from "react-icons/all";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paperHeader: {
        marginTop: 0,
        padding: theme.spacing(4),
        // height: 150,
        textAlign: 'center',
        background: 'none',
        color: '#6F2DBD',
        fontSize: 40,
    },
    explanationPaper: {
        margin: 60,
        marginTop: 10,
        padding: theme.spacing(2),
        textAlign: 'center',
        // height: 140,
        color: theme.palette.text.secondary,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 10,
        marginTop: 30,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        maxWidth: 463,

    },
    challengePaper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        background: '#B388EB',
        margin: 10,
        maxWidth: 411,

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
    joinButton: {
        background: '#6F2DBD',
        color: '#FFD166',
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
    typographyLog: {
        color: '#6F2DBD',
        fontSize: 18,
        fontWeight: 'medium',
        fontStyle: 'italic',
    },
}))

function Wall() {
    const classes = useStyles();
    const publicChallenges = [
        {id: 1, title: "public challenge1", description: "description description description description description description description ", value: 10, level: "10 minute challenge"},
        {id: 2, title: "public challenge2", description: "description description description description description description description description description description ", value: 20, level: "15 minute challenge"},
        {id: 3, title: "public challenge3", description: "description description description ", value: 100, level: "24 hour challenge"},
        {id: 4, title: "public challenge2", description: "description description description description description description description description description description description ", value: 20, level: "15 minute challenge"},
        {id: 5, title: "public challenge3", description: "description description description description description description description description description description description description description description description description description ", value: 10, level: "10 minute challenge"},
    ]
    const user = useSelector((state) => state.user);
    const history = useHistory();
    if (user == null) {
        history.push('/401');
    }


    return(
        <div className={classes.root}>
        <Grid container direction={"column"} justify={"center"} alignItems={"center"}>
            <Grid item xs={12}>
                <Paper className={classes.paperHeader} elevation={0}>Joys' Logbook</Paper>
                <Grid item>
                        <Paper className={classes.explanationPaper}>
                            <Typography className={classes.typographyDescription}>
                            This is the place where users can help each other to stay motivated by joining each other's challenges. This way we are all in this together working towards a more positive (moment in our) day. You don't have to write a post or share a picture. You just have to add or complete a challenge that's on your public to do list. This way your private to do list stays private just for you. You can also see it when someone has joined a challenge and you can join a challenge yourself.
                            </Typography>
                        </Paper>
                    </Grid>
            </Grid>
            {publicChallenges.map(challenge =>
                <Grid item>
                <Paper className={classes.paper}>
                <Grid container direction={"row"} justify={"center"} alignItems={"center"} spacing={0}>
                    <Grid item xs={6}>
                        <Typography className={classes.typographyLog}>
                            @naamnaam completed this challenge
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Tooltip title={"Join this challenge and add challenge to your public to do"}>
                            <Button size={"small"} variant={"contained"} className={classes.joinButton}>join challenge</Button>

                        </Tooltip>
                    </Grid>
                </Grid>

                <Grid item>
                    <Paper key={challenge.id} elevation={5} className={classes.challengePaper}>
                        <Typography variant="body2" className={classes.typographyJoined}>
                            amy +7 anderen joined this challenge
                            <br/>
                            bla +2 anderen completed this challenge
                        </Typography>
                        <Typography gutterBottom variant={"subtitle1"} className={classes.typographyTitle}>
                            {challenge.value}XP * {challenge.level}
                        </Typography>
                        <Typography variant="body2" gutterBottom className={classes.typographyChallenge}>
                            {challenge.title}
                        </Typography>
                        <Divider/>
                        <Typography variant="body2" className={classes.typographyDescription}>
                            {challenge.description}
                        </Typography>
                        {/*<Grid item>*/}
                        {/*    <Button variant={"contained"} className={classes.completeButton}><RemoveCircle/> PUBLIC</Button>*/}
                        {/*    <Button variant={"contained"} className={classes.completeButton}>Completed*/}
                        {/*    </Button>*/}
                        {/*    <Button variant={"contained"} className={classes.completeButton}><AddCircleOutlineIcon/> PRIVATE</Button>*/}
                        {/*</Grid>*/}
                </Paper>
                </Grid>
                </Paper>
                </Grid>
            )}
        </Grid>
        </div>
    )
}

export default Wall;