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
        '&:hover': {
            background: '#FFD166',
            color: '#6F2DBD',
        }
    }
}));


function Game100XP(props) {
    const classes = useStyles();
    const [difficultChallenges, setDifficultChallenges] = useState(["This is challenge 1", "This is challenge 1","This is challenge 2", "This is challenge 3", "This is challenge 4", "This is challenge 5", "This is challenge 6", "This is challenge 7", "This is challenge 8", "This is challenge 9", "This is challenge 10",])
    const [difficultPickedChallenge, setDifficultPickedChallenge] = useState(null);
    useEffect(() =>  {
        const randomChallenge = difficultChallenges[Math.floor(Math.random() * difficultChallenges.length)];
        setDifficultPickedChallenge(randomChallenge);
    });

    return (
        <div className={classes.root}>
            <Paper elevation={5} className={classes.paper}>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" className={classes.typographyTitle}>
                                    100 XP
                                </Typography>
                                <Typography variant="body2" gutterBottom className={classes.typographyChallenge}>
                                    {difficultPickedChallenge}
                                </Typography>
                                <Divider/>
                                <Typography variant="body2" className={classes.typographyDescription}>
                                    This is your explanation
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
export default Game100XP;



