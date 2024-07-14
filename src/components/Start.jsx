import QuizImg from '../assets/quiz-start.png'

function Start({ startgame }) {
    return (
        <div className="start">
            <div className="start-container">
                <div className="start-text">
                    <h1>Welcome to the <br /><span>Quiz App</span></h1>
                    <button onClick={startgame}>Start Quiz</button>
                </div>
                <div className="start-image">
                    <img src={QuizImg} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Start