import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    useHistory,
    useParams
} from "react-router-dom";
import {useSelector} from "react-redux";
import Utils from "../../clientServices/Utils";
import ActionChallengeCard from "../../components/ActionChallengeCard";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
}}));

function getNewRandomChallenge(challenges){
    return challenges[Math.floor(Math.random() * challenges.length)];
}

function RandomChallenges() {
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
                    setRandomChallenge(getNewRandomChallenge(res.data.challenges));
                    setRequest({state: "done", data: {game: res.data}});
                } else {
                    setRequest({state: "error", data: null});
                }
            })
        }
    },[])

    return (
        <div className={classes.root}>
            {request.state === "done" && randomChallenge &&
                <ActionChallengeCard randomChallenge={randomChallenge} onAddPrivateClick={() => {
                    const accessToken = user.accessToken;
                    Utils.protectedPost(`/api/profile/privatetodo/${randomChallenge.id}`, accessToken).then((res) => {
                        if(res) {
                            console.log(res);
                            alert('Challenge is added to your private to do list. Good luck!');
                            history.push('/games');
                        } else {
                            console.log("error");
                        }
                    }).catch((error) => {
                        console.log(error);
                        alert("fout opgetreden");
                    });
                }} onAddPublicClick={() => {
                    const accessToken = user.accessToken;
                    Utils.protectedPost(`/api/profile/publictodo/${randomChallenge.id}`, accessToken).then((res) => {
                        if(res) {
                            console.log(res);
                            alert('Challenge is added to your public to do list. Good luck!');
                            history.push('/games');
                        } else {
                            console.log("error");
                        }
                    }).catch((error) => {
                        console.log(error);
                        alert("fout opgetreden");
                    });
                }} onCompletedClick={() => {
                    const accessToken = user.accessToken;
                    Utils.protectedPost(`/api/profile/completedtodo/${randomChallenge.id}`, accessToken).then((res) => {
                        if(res) {
                            console.log(res);
                            alert('Challenge completed! You can find the challenge in your completed to-do list.');
                            history.push('/games');
                        } else {
                            console.log("error");
                        }
                    }).catch((error) => {
                        console.log(error);
                        alert("fout opgetreden");
                    });
                }} onShuffleClick={() => {
                    console.log(request);
                    setRandomChallenge(getNewRandomChallenge(request.data.game.challenges));
                    console.log("new generated challenge");
                    }
                }/>
            }
            {request.state === "done" && !randomChallenge &&
            <p>There are no challenges for this level</p>}
            {request.state === "loading" && <p>aan het laden</p>}
            {request.state === "error" && <p>error</p>}
        </div>
    );
}
export default RandomChallenges;
