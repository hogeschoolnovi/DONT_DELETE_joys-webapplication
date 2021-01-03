import React from "react";
import Typography from "@material-ui/core/Typography";
import {Button, Divider} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {AddCircle} from "@material-ui/icons";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    challengePaper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        background: '#B388EB',
        margin: 10,
        '&:hover': {
            padding: 25,
        }
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
    Button: {
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
    },
}));
function ChallengeCard({challenge, onRemoveClick}) {
    const classes = useStyles();

    return (
        <Paper key={challenge.id} elevation={5} className={classes.challengePaper}>
            <Link to={`/challenge/${challenge.id}`} style={{textDecoration: 'none'}}>
            <Typography variant="body2" className={classes.typographyJoined}>
                Amyban +7 anderen joined this challenge
                <br/>
                Joycee +2 anderen completed this challenge
            </Typography>
            <Typography gutterBottom variant={"subtitle1"} className={classes.typographyTitle}>
                {challenge.value}XP * {challenge.level}
            </Typography>
            <Typography variant="body2" gutterBottom className={classes.typographyChallenge}>
                {challenge.name}
            </Typography>
            <Divider/>
            <Typography variant="body2" className={classes.typographyDescription}>
                {challenge.description}
            </Typography>
            </Link>
            <Grid item>
                {onRemoveClick &&
                <Button variant={"contained"} className={classes.Button} onClick={() => {onRemoveClick()}}><RemoveCircleOutlineIcon/>remove</Button>
                }
            </Grid></Paper>
    )
}

export default ChallengeCard;