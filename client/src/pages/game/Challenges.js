import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Button, Divider} from "@material-ui/core";
import * as axios from "axios";
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';

import {
    useHistory,
    useParams
} from "react-router-dom";
import {AddCircle} from "@material-ui/icons";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import {useSelector} from "react-redux";
import Utils from "../../clientServices/Utils";
import Tooltip from "@material-ui/core/Tooltip";
import RandomChallengeCard from "../../components/RandomChallengeCard";

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


function RandomChallenge(challenges){
    return challenges[Math.floor(Math.random() * challenges.length)];
}

function Challenges(props) {
    const classes = useStyles();
    const user = useSelector((state) => state.user);
    const history = useHistory();
    const [request, setRequest] = useState({state: "loading", data: null});
    const [randomChallenge, setRandomChallenge] = useState(null);
    let {id} = useParams();
    if (user == null) {
        history.push('/401');
    }

    useEffect(() => {
        if (user != null) {
            const accessToken = user.accessToken;
            Utils.protectedGet(`/api/games/${id}`, accessToken).then((res) => {
                if (res.data) {
                    console.log(res);
                    setRandomChallenge(RandomChallenge(res.data.challenges));
                    setRequest({state: "done", data: {game: res.data}});
                } else {
                    setRequest({state: "error", data: null});
                }
            })
        }
    },[])


    // const add = () => {
    //     const accessToken = user.accessToken;
    //     Utils.protectedPost(`api/profile/privatetodo/${randomChallenge.id}`, accessToken).then((res) => {
    //         if(res.data) {
    //             console.log(res);
    //             alert('Challenge is added to your private to do list. Good luck!')
    //         } else {
    //             console.log("error");
    //         }
    //     })
    // }


    return (
        <div className={classes.root}>
            {request.state === "done" &&
                <RandomChallengeCard randomChallenge={RandomChallenge} add={() => {
                    const accessToken = user.accessToken;
                    Utils.protectedPost(`api/profile/privatetodo/${randomChallenge.id}`, accessToken).then((res) => {
                        if(res.data) {
                            console.log(res);
                            alert('Challenge is added to your private to do list. Good luck!')
                        } else {
                            console.log("error");
                        }
                    })}} onShuffleClick={() => {
                    console.log(request);
                    setRandomChallenge(RandomChallenge(request.data.game.challenges));
                    console.log("new generated challenge");
                    }
                }/>
            }
            {request.state === "loading" && <p>aan het laden</p>}
            {request.state === "error" && <p>error</p>}
        </div>
    );
}
export default Challenges;
