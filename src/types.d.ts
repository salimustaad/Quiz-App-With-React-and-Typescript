
type UserInfo = {
    username: string
    totalQuestion: number
    category: number
    diffculty: string
}

type GetUserInfo = (userInfo: UserInfo) => void

type GetUserScore = (userInfo: number) => void

type GetToPath = (path: string) => void

type quizPropType = {
    question: string
    option: string[]
    callback: (e: React.FormEvent<EventTarget>) => void
    qNo: number
    totalQuestion: number
    userInfo: UserInfo
}

type QuizType = {
    question: string
    option: string[]
    answer: string
}

type mainQuizType = {
    question: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
}
