import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    score: number
    userInfo: UserInfo
}

const ScoreBoard: React.FC<Props> = ({ score, userInfo }) => {

    return (
        <div className="score-board">
            <h1>Score Board</h1>
            <div>
                <p><b>User Name:</b> {userInfo.username}</p>
                <p><b>Score:</b> {score}</p>
                <p><b>Number of Question:</b> {userInfo.totalQuestion}</p>
                <p><b>Mode:</b> {userInfo.diffculty[0].toUpperCase() + userInfo.diffculty.substring(1)}</p>
            </div>
            <div className="score-btn">
                <Link to="/">
                    <button className="btn-menu">Main Menu</button>
                </Link>


            </div>
        </div>
    )
}

export default ScoreBoard