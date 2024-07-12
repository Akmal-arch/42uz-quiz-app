function Result() {
    return(
        <div className="result-main">
            <h2>Quiz Result</h2>
            <p>You answered {score} questions correctly.</p>
            <p>Your final score is {score} out of {questions.length}.</p>
            <button onClick={resetQuiz}>Restart Quiz</button>
            <button onClick={shareScore}>Share Score</button>
            <button onClick={goToHome}>Go Back Home</button>
        </div>
    )
}
export default Result