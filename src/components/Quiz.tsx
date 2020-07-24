import React, { useEffect, useState } from 'react'
import { Redirect } from "react-router-dom";
import quizService from "../services/quizService";

interface Props {
    userInfo: UserInfo
    getUserScore: GetUserScore
    getToPath: GetToPath
}

const Quiz: React.FC<Props> = ({ userInfo, getUserScore, getToPath }) => {

    const [quiz, setQuiz] = useState<QuizType[]>([])
    const [next, setNext] = useState<number>(0)
    const [userOpt, setUserOpt] = useState<string[]>([])
    const [scoreBoard, setScoreBoard] = useState<boolean>(false)
    const [score, setScore] = useState<number>(0)

    useEffect(() => {
        async function getQuiz() {
            setQuiz(await quizService
                (
                    userInfo.totalQuestion,
                    userInfo.category,
                    userInfo.diffculty
                )
            )
        }
        getQuiz()
    },)

    // getting Score
    const getScore = (e: React.FormEvent<EventTarget>) => {

        e.preventDefault()

        if (next !== quiz.length - 1) {
            setNext(next + 1)
        }

        else {
            let s: number = 0
            for (let i = 0; i < userOpt.length; i++) {
                if (userOpt[i] === quiz[i].answer) {
                    s = s + 1
                }
            }
            setScore(s)
            setScoreBoard(true)
        }
    }

    if (scoreBoard) {
        getToPath('scoreboard')
        getUserScore(score)
        return <Redirect to="/score-board" />
    }

    if (!quiz.length) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="container">
            <div className="card">
                <label><b>Q{next + 1}</b>. {quiz[next].question}</label>
            </div>
            <div className="option">
                <form onSubmit={(e) => { getScore(e) }}>
                    {
                        quiz[next].option.map((opt: string, index: number) => {
                            return (
                                <button className="card opt-btn" key={index}
                                    onClick={(e) => { setUserOpt([...userOpt, opt]) }}>
                                    {index + 1}. {opt}
                                    
                                </button>
                            )
                        })
                    }
                </form>
            </div>
        </div>
    )
}

export default Quiz