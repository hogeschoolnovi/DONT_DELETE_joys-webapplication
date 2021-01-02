import React, {useEffect, useState} from "react";
import Typography from "@material-ui/core/Typography";
import {Button, Divider} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {AddCircle} from "@material-ui/icons";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import {Link, useHistory, useParams} from "react-router-dom";
import Utils from "../clientServices/Utils";
import {useSelector} from "react-redux";

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
        // marginRight: 150,

    },
    typographyProfile: {
        color: '#6F2DBD',
        fontSize: 18,
    },
}));


function PublicChallengeCard({challenge}) {
    // const user = useSelector((state) => state.user);
    const classes = useStyles();
    // const history = useHistory();
    // let {id} = useParams();
    // const [request, setRequest] = useState({state: "loading", data: null});
    // useEffect(() => {
    //     if (user == null) {
    //         history.push('/401');
    //     }
    //     const accessToken = user.accessToken;
    //     Utils.protectedGet(`/api/challenge/${id}`, accessToken).then((res) => {
    //         console.log(res);
    //         setRequest({state: "done", data: res.data});
    //     })})
    return (
        <Paper key={challenge.id} elevation={5} className={challenge.challengePaper}>
            {/*<Link to={`/challenge/${challenge.id}`} style={{textDecoration: 'none'}}>*/}
                <Typography variant="body2" className={classes.typographyJoined}>
                    amy +7 anderen joined this challenge
                    <br/>
                    bla +2 anderen completed this challenge
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
            {/*</Link>*/}
           </Paper>
    )
}

export default PublicChallengeCard;