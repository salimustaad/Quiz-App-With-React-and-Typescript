import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import ScoreBoard from "./components/ScoreBoard";
import PageNotFound from "./components/PageNotFound";


function Routing() {

    const [score, setScore] = useState<number>(0)
    const [toQuiz, setToQuiz] = useState<boolean>(false)
    const [toScoreboard, setToScoreboard] = useState<boolean>(false)
    const [userInfo, setUserInfo] = useState<UserInfo>(
        {
            username: '',
            totalQuestion: 0,
            category: 0,
            diffculty: 'e',
        }
    )


    // Getting User Info Before Starting Quiz
    const getUserInfo: GetUserInfo = (userData: UserInfo) => {
        setUserInfo(userData)
    }

    // Getting User Score
    const getUserScore: GetUserScore = (scoreData: number) => {
        setScore(scoreData)
    }

    // Path to Quiz
    const getToPath: GetToPath = (path: string) => {

        if (path === 'quiz') setToQuiz(true)
        else if (path === 'scoreboard') setToScoreboard(true)
    }

    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home getUserInfo={getUserInfo} getToPath={getToPath} />
                    </Route>
                    {toQuiz ?
                        <Route path="/quiz">
                            <Quiz userInfo={userInfo} getUserScore={getUserScore} getToPath={getToPath} />
                        </Route> :
                        <Route path="/">
                            <Home getUserInfo={getUserInfo} getToPath={getToPath} />
                        </Route>
                    }
                    {toScoreboard ?
                        <Route path="/score-board">
                            <ScoreBoard score={score} userInfo={userInfo} />
                        </Route> :
                        <Route exact path="/">
                            <Home getUserInfo={getUserInfo} getToPath={getToPath} />
                        </Route>
                    }
                    <Route path="*"><PageNotFound /></Route>
                </Switch>
            </div>
        </Router >
    )
}

export default Routing