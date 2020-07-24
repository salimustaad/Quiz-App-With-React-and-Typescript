



async function quizService(totalQuestion: number, category: number, diffculty: string): Promise<QuizType[]> {

    const shuffleArray = (array: any[]) =>
        [...array].sort(() => Math.random() - 0.5)

    const url: string = `https://opentdb.com/api.php?amount=${totalQuestion}&category=${category}&difficulty=${diffculty}&type=multiple`

    const resp = await fetch(url)
    const { results } = await resp.json()
   
    const quiz: QuizType[] = results.map((mainQuiz: mainQuizType) => {
        return {
            question: mainQuiz.question,
            option: shuffleArray(mainQuiz.incorrect_answers.concat(mainQuiz.correct_answer)),
            answer: mainQuiz.correct_answer
        }
    })

    return quiz
}

export default quizService