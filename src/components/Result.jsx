import { useState } from "react"
import CircleProgressBar from "./CircleProgressBar";

function Result({ score, totalQuestions, skippedAns, wrongAns, resetQuiz }) {
    const [percentage, setPercentage] = useState(
        (score / totalQuestions) * 100
    );

    return (
        <div className="result">
            <div className="result-container">
                <div className="result-box">
                    <h1>Quiz Result</h1>
                    <h2 className="score-main">To'g'ri: {score}/{totalQuestions}</h2>
                    <h3>Noto'g'ri: {wrongAns}/{totalQuestions}</h3>
                    <h3>O'tkazib yuborildi: {skippedAns}/{totalQuestions}</h3>
                </div>
                <div className="result-box">
                    <CircleProgressBar
                        percentage={percentage}
                        circleWidth="340"
                    />
                </div>
            </div>

            <button onClick={resetQuiz}>Qayta ishlash</button>
        </div>
    )
}
export default Result