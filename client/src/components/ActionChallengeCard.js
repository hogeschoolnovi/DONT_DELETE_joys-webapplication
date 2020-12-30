import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {Button, Divider} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import Paper from "@material-ui/core/Paper";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

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

function ActionChallengeCard({randomChallenge, onAddPrivateClick, onAddPublicClick, onCompletedClick, onShuffleClick}) {
    const classes = useStyles();

    return (
        <Paper key={randomChallenge.id} elevation={5} className={classes.paper}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" className={classes.typographyTitle}>
                                {randomChallenge.value} XP * {randomChallenge.level}
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
                            <Tooltip title={"Add challenge to your public to do list"}>
                                <Button variant={"contained"} className={classes.completeButton} onClick={() => {onAddPublicClick()}}><LockOpenIcon/> Add</Button>
                            </Tooltip>
                            <Tooltip title={"Complete this challenge"}>
                                <Button variant={"contained"} className={classes.completeButton} onClick={() => {onCompletedClick()}}>Completed
                                </Button>
                            </Tooltip>
                            <Tooltip title={"Add challenge to your private to do list"}>
                                <Button variant={"contained"} className={classes.completeButton} onClick={() => {onAddPrivateClick()}}><LockIcon/> Add</Button>
                            </Tooltip>
                        </Grid>
                        <Tooltip title={"Get a different challenge"}>
                            <Button variant={"contained"} className={classes.completeButton} startIcon={<ShuffleIcon/>} onClick={() => {onShuffleClick()}}>
                                Shuffle challenge
                            </Button>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}
export default ActionChallengeCard;