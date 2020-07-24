import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    getUserInfo: GetUserInfo
    getToPath: GetToPath
}

const Home: React.FC<Props> = ({ getUserInfo, getToPath }) => {

    let username: string = 'User1'
    let diffculty: string = 'easy'
    let totalQuestion: number = 10
    let category: number = 9

    let userInfo: UserInfo = {
        username, totalQuestion, category, diffculty
    }

    return (
        <div className="home-container">
            <h1>Select Quiz</h1>
            <form>
                <p><b>Username:</b></p>
                <input type="text" placeholder="Enter your username"
                    onChange={(e) => { username = e.target.value }} required />

                <p><b>Number of Questions:</b></p>
                <input type="number" min="1" max="50" placeholder="Enter no. of questions (e.g. 1 - 50)"
                    onChange={(e) => {
                        const tot = Number(e.target.value)
                        totalQuestion = tot > 50 || tot < 1 ? 10 : tot
                    }
                    } />

                <p><b>Select Catergory</b></p>
                <select
                    onChange={(e) => { category = Number(e.target.value) }}>
                    <option value="9">General Knowldge</option><option value="10">Entertainment: Books</option><option value="11">Entertainment: Film</option><option value="12">Entertainment: Music</option><option value="13">Entertainment: Musicals &amp; Theatres</option><option value="14">Entertainment: Television</option><option value="15">Entertainment: Video Games</option><option value="16">Entertainment: Board Games</option><option value="17">Science &amp; Nature</option><option value="18">Science: Computers</option><option value="19">Science: Mathematics</option><option value="20">Mythology</option><option value="21">Sports</option><option value="22">Geography</option><option value="23">History</option><option value="24">Politics</option><option value="25">Art</option><option value="26">Celebrities</option><option value="27">Animals</option><option value="28">Vehicles</option><option value="29">Entertainment: Comics</option><option value="30">Science: Gadgets</option><option value="31">Entertainment: Japanese Anime &amp; Manga</option><option value="32">Entertainment: Cartoon &amp; Animations</option>
                </select>

                <p><b>Select Difficulty:</b></p>
                <select onChange={(e) => { diffculty = e.target.value }}>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>

                <div>
                    <Link to="/quiz">
                        <button
                            className="btn"
                            onClick={() => {
                                userInfo = { username, totalQuestion, category, diffculty }
                                getUserInfo(userInfo)
                                getToPath('quiz')
                            }}>
                            Let's Start
                    </button>
                    </Link>
                </div>
            </form>
        </div >

    )
}

export default Home