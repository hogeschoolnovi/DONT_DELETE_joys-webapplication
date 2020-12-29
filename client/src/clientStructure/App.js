import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import {Provider, useStore} from 'react-redux';
import {createStore} from "redux";
import {
    SignUp,
    Profile,
    Login,
    Game,
    Challenges,
    Welcome,
    Wall,
    Unauthorized
} from './index';
import NavBar from "../components/menu/Navbar";
import {userReducer} from "../hooks/UserReducer";

const userStore = createStore(userReducer);
function App () {

    return (
        <Provider store = {userStore}>
        <Router>
            <NavBar/>
                <Switch>
                     <Route exact path={"/sign-up"}>
                         <SignUp/>
                     </Route>
                     <Route exact path={"/profile"}>
                         <Profile/>
                     </Route>
                    <Route exact path={"/login"}>
                        <Login/>
                    </Route>
                    <Route exact path={"/games"}>
                        <Game/>
                    </Route>
                    <Route exact path={"/games/:id"}>
                        <Challenges/>
                    </Route>
                    <Route exact path={"/"}>
                        <Welcome/>
                    </Route>
                    <Route exact path={"/wall"}>
                        <Wall/>
                    </Route>
                    <Route exact path={"/401"}>
                        <Unauthorized/>
                    </Route>
                </Switch>
        </Router>
        </Provider>
     );
 }

export default App;


