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
import PublicChallengeCard from "../components/PublicChallengeCard";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import { DataGrid } from '@material-ui/data-grid';
import Utils from "../clientServices/Utils";


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
    dividePaper: {
        width: 650,
        // background: "#e3f2fd",
        margin: 30
    },
    table: {
        height: 640,
        width: '100%',
    },
    tableRow: {
        background: '#B388EB',
        '&:hover': {
            background: '#FFD166',
            color: '#6F2DBD',
        }
    },
    tableUsername: {
        color: '#6F2DBD',
        fontWeight: 'bold'
    },
    tableXP: {
        fontWeight: 'bold',
        color: '#FFD166',
    },
    tableHeader: {
        fontWeight: 'bold',
        background: '#FFD166',
        color: '#6F2DBD',
        fontSize: 20,
    }
}))

function Wall() {
    const classes = useStyles();
    const publicChallenges = [
        { id: 1,value: 10, level: "10 minute challenge", name: "public challenge1", description: "description description description description description description description " },
        { id: 2,value: 20, level: "15 minute challenge",name: "public challenge2", description: "description description description description description description description description description description "},
        { id: 3, value: 100, level: "24 hour challenge", name: "public challenge3", description: "description description description " },
        { id: 4, value: 20, level: "15 minute challenge", name: "public challenge2", description: "description description description description description description description description description description description " },
        { id: 5, value: 10, level: "10 minute challenge", name: "public challenge3", description: "description description description description description description description description description description description description description description description description description "},
    ]
    const user = useSelector((state) => state.user);
    const history = useHistory();
    if (user == null) {
        history.push('/401');
    }
    const columns = [
        { field: 'firstName', headerName: 'User name', width: 130 },
        {
            field: 'XP',
            headerName: 'XP',
            type: 'number',
            width: 90,
        },
    ];
    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', XP: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', XP: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', XP: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', XP: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', XP: null },
        { id: 6, lastName: 'Melisandre', firstName: null, XP: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', XP: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', XP: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', XP: 65 },
        { id: 10, lastName: 'Snow', firstName: 'Jon', XP: 35 },
        { id: 11, lastName: 'Lannister', firstName: 'Cersei', XP: 42 },
        { id: 12, lastName: 'Lannister', firstName: 'Jaime', XP: 45 },
        { id: 13, lastName: 'Stark', firstName: 'Arya', XP: 16 },
        { id: 14, lastName: 'Targaryen', firstName: 'Daenerys', XP: null },
        { id: 16, lastName: 'Melisandre', firstName: null, XP: 150 },
        { id: 17, lastName: 'Clifford', firstName: 'Ferrara', XP: 44 },
        { id: 18, lastName: 'Frances', firstName: 'Rossini', XP: 36 },
        { id: 19, lastName: 'Roxie', firstName: 'Harvey', XP: 65 },
    ];



    return(
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <Grid container justify={"center"}>
                    <Grid item>
                        <Paper className={classes.dividePaper}>
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
                                                        <Button size={"small"} variant={"contained"} className={classes.joinButton} onClick={() => {
                                                            const accessToken = user.accessToken;
                                                            Utils.protectedPost(`/api/profile/publictodo/${challenge.id}`, accessToken).then((res) => {
                                                                if(res) {
                                                                    console.log(res);
                                                                    alert('Joined challenge is saved in your public to-do list!');
                                                                    history.push('/profile');
                                                                } else {
                                                                    console.log("error");
                                                                }
                                                            }).catch((error) => {
                                                                console.log(error);
                                                                alert("fout opgetreden");
                                                            });
                                                        }}>join challenge</Button>
                                                    </Tooltip>
                                                </Grid>
                                            </Grid>

                                            <Grid item>
                                                <PublicChallengeCard challenge={publicChallenges}/>
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

                                                </Paper>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                )}
                            </Grid>
                        </Paper>
            </Grid>
                    <Grid item>
                        <Paper className={classes.dividePaper}>
                            <Grid item xs={12}>
                                <Paper className={classes.paperHeader} elevation={0}>Connect</Paper>
                                <Grid item>
                                    <Paper className={classes.explanationPaper}>
                                        <Typography className={classes.typographyDescription}>
                                            Here you can find other users and see their public to-do lists. Help each other complete the challenge by joining them.
                                        </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item>
                                    <TableContainer component={Paper} elevation={4} pageSize={5}>
                                        <Table aria-label="simple table" className={classes.table}>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell className={classes.tableHeader}>Username</TableCell>
                                                    <TableCell align="center"className={classes.tableHeader}>XP</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rows.map((row) => (
                                                    <TableRow key={row.id} className={classes.tableRow}>
                                                        <TableCell component="th" scope="row" className={classes.tableUsername}>
                                                            {row.lastName}
                                                        </TableCell>
                                                        {/*<TableCell align="right">{row.lastName}</TableCell>*/}
                                                        <TableCell align="center" className={classes.tableXP}>{row.XP} XP</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Wall;
