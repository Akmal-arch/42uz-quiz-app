import { useState } from "react"
import CircleProgressBar from "./CircleProgressBar";

function Result({ score, totalQuestions, skippedAns, wrongAns, resetQuiz }) {
    const [percentage, setPercentage] = useState(
        (score / totalQuestions) * 100
    );

    return (
        <div className="result">
            <h1>Quiz Result</h1>
            <CircleProgressBar 
                percentage={percentage}  
                circleWidth="340"          
            />
            <h1 className="score-main">Correct: {score}/{totalQuestions}</h1>
            <h2>Wrong: {wrongAns}/{totalQuestions}</h2>
            <h3>Skipped: {skippedAns}/{totalQuestions}</h3>

            <button onClick={resetQuiz}>Restart</button>
        </div>
    )
}
export default Result