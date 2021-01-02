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
import {Link, useHistory, useParams} from "react-router-dom";
import Utils from "../clientServices/Utils";
import ChallengeCard from "../components/ChallengeCard";
import {isEmptyArray} from "formik";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import PublicChallengeCard from "../components/PublicChallengeCard";

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
    emptyListPaper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        background: '#B388EB',
        margin: 10,
        maxWidth: 380,
    },
    typographyEmpty: {
        color: '#6F2DBD',
        fontSize: 15,
    },
    typographyTitle: {
        color: '#6F2DBD',
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
    table: {
        marginTop: 10,
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
        background: '#6F2DBD',
        color: '#FFD166',
        fontSize: 15,
    }
}));

export default function Profile() {
    const history = useHistory();
    const classes = useStyles();
    const user = useSelector((state) => state.user);
    const [request, setRequest] = useState({state: "loading", data: null});
    const accessToken = user?.accessToken;
    let {id} = useParams();

    if (user == null) {
        history.push('/401');
    }
    // const id = user.id;
    // if (user.id != {id}){
    //     history.push('/401');
    // }
    const getProfile = (user, setRequest) => {
        if (user != null) {
            // if (user.id != {id}){
            //     history.push('/401');
            // }
            Utils.protectedGet(`/api/profile/public/${id}`, user.accessToken).then((res) => {
                if (res) {
                    console.log(res);
                    setRequest({state: "done", data: res.data});
                } else {
                    setRequest({state: "error", data: null});
                }
            })
        }
    }

    useEffect(() => {
        getProfile(user, setRequest)
    },[])

    const publicChallenges= request.state!=="done"?[]:request.data.publicToDo;
    const completedChallenges= request.state!=="done"?[]:request.data.completedToDo;

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

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Paper elevation={0} className={classes.paper}><Typography className={classes.typographyProfile}>
                        {user?.username}
                        <br/>
                        {user?.email}
                    </Typography> </Paper>
                </Grid>
            </Grid>

            <Grid container spacing={3} justify={"center"} alignItems={"flex-start"}>
                <Grid item xs={12} sm={6} lg={3} justify={"center"} alignItems={"flex-start"}>
                    <Paper className={classes.toDoPaper}>Your public to-do list</Paper>
                    {request.state === "loading" &&
                    <p>aan het laden</p>}
                    {request.state === "done" | publicChallenges.length !== 0 &&
                    publicChallenges.map((publicChallenge, index)=>
                        <PublicChallengeCard challenge={publicChallenge} key={`pub-${index}`}/>
                    )}
                    {publicChallenges.length === 0 &&
                    <Link to={`/games`} style={{textDecoration: 'none'}}>
                        <Typography gutterBottom variant={"subtitle1"} className={classes.typographyEmpty}>
                            Your public to-do list is empty. Click here to play the game and start adding challenges to your public to-do list.
                        </Typography>
                    </Link>
                    }
                </Grid>
                <Grid item xs={12} sm={6} lg={3} justify={"center"} alignItems={"flex-start"}>
                    <Paper className={classes.toDoPaper}>Your completed challenges</Paper>
                    {request.state === "loading" &&
                    <p>aan het laden</p>}
                    {request.state === "done"&&
                    completedChallenges.map((completedChallenge, index) =>
                        <PublicChallengeCard challenge={completedChallenge} key={`pub-${index}`}/>
                    )}
                    {completedChallenges.length === 0 &&
                    <Link to={`/games`} style={{textDecoration: 'none'}}>
                        <Typography gutterBottom variant={"subtitle1"} className={classes.typographyEmpty}>
                            You have not completed a challenge yet. Click here to play the game and complete a challenge.
                        </Typography>
                    </Link>
                    }
                </Grid>
                <Grid item xs={12} sm={3} lg={6}>
                    <Paper className={classes.toDoPaper}>Following</Paper>
                    <TableContainer component={Paper} elevation={4} pageSize={5} className={classes.table}>
                        <Table aria-label="simple table">
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
                                        <TableCell align="center" className={classes.tableXP}>{row.XP} XP</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} sm={3} lg={6}>
                    <Paper className={classes.toDoPaper}>Followers</Paper>
                    <TableContainer component={Paper} elevation={4} pageSize={5} className={classes.table}>
                        <Table aria-label="simple table">
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
                                        <TableCell align="center" className={classes.tableXP}>{row.XP} XP</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    );
}