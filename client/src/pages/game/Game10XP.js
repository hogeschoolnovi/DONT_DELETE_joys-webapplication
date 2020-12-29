import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Button, Divider} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        marginTop: 250,
        margin: 'auto',
        maxWidth: 400,
        maxHeight: 300,
        background: '#B388EB',
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
        '&:hover': {
            background: '#FFD166',
            color: '#6F2DBD',
        }
    }
}));


function Game10XP(props) {
    const classes = useStyles();

    // Stond eerst in useState
    const easyChallenges = [
        { id: 1, title: "This is challenge 1", content: "This is your explanation for challenge 1", value: 10},
        { id: 2, title: "This is challenge 2", content: "This is your explanation for challenge 2", value: 10},
        { id: 3, title: "This is challenge 3", content: "This is your explanation for challenge 3", value: 10},
        { id: 4, title: "This is challenge 4", content: "This is your explanation for challenge 4", value: 10},
        { id: 5, title: "This is challenge 5", content: "This is your explanation for challenge 5", value: 10},
        { id: 6, title: "This is challenge 6", content: "This is your explanation for challenge 6", value: 10},
        { id: 7, title: "This is challenge 7", content: "This is your explanation for challenge 7", value: 10},
        { id: 8, title: "This is challenge 8", content: "This is your explanation for challenge 8", value: 10},
        { id: 9, title: "This is challenge 9", content: "This is your explanation for challenge 9", value: 10},
        { id: 10, title: "This is challenge 10", content: "This is your explanation for challenge 10", value: 10}
    ];
    const [easyPickedChallenge, setEasyPickedChallenge] = useState(null);
    useEffect(() =>  {
        const randomChallenge = easyChallenges[Math.floor(Math.random() * easyChallenges.length)];
        setEasyPickedChallenge(randomChallenge);
    });

    return (
        <div className={classes.root}>
            <Paper elevation={5} className={classes.paper}>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" className={classes.typographyTitle}>
                                    10 XP
                                </Typography>
                                <Typography variant="body2" gutterBottom className={classes.typographyChallenge}>
                                    {easyPickedChallenge.title}
                                </Typography>
                                <Divider/>
                                <Typography variant="body2" className={classes.typographyDescription}>
                                    {easyPickedChallenge.content}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button className={classes.completeButton}>Completed
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
export default Game10XP;




