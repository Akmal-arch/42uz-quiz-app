import correct from './assets/correct.png';
import incorrect from './assets/incorrect.png';
import checkbox from './assets/checkbox.png'
import { useState } from 'react';
import books from './assets/books.png'
import Result from './components/Result';
import Brain from './assets/brain.png'
import Start from './components/Start';

function Quiz({ questions }) {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answerIdx, setAnswerIdx] = useState(null);
    const [IsAnswer, setIsAnswer] = useState(null);
    const [selectedAns, setSelectedAns] = useState(null)
    const [showResult, setShowResult] = useState(false)
    const [lock, setLock] = useState(false)
    const [score, setScore] = useState(0)
    const [answerTrue, setAnswerTrue] = useState(null)
    const [skippedAns, setSkippedAns] = useState(0)
    const [wrongAns, setWrongAns] = useState(0)
    const { question, choices, correctAnswer } = questions[currentQuestion];

    const [showStart, setShowStart] = useState(true)

    const startgame = () => {
        if (showStart === true) {
            setShowStart(false)
        } else {
            setShowStart(true)
        }
    }

    const cancelClick = (e) => {
        if (selectedAns) {
            document.querySelector("li.selected-answer").classList.remove("selected-answer")
            setSelectedAns(null)
        }
    }

    const onAnswerClick = (answer, index) => {
        if (lock === false) {
            if (answer === correctAnswer) {
                setIsAnswer(true)
            } else {
                setIsAnswer(false)
            }
            setAnswerIdx(index);
            setSelectedAns(true)
        }
    }
    const handleSubmit = () => {
        if (IsAnswer) {
            setAnswerTrue(true)
            setScore(score + 1)
        } else {
            setWrongAns(wrongAns + 1)
            setAnswerTrue(false)
        }
        setSelectedAns(false)
        setLock(true)
    }
    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setAnswerIdx(null);
            setIsAnswer(null);
            setSelectedAns(false);
            setLock(false)
            setAnswerTrue(null)
        } else {
            setShowResult(true)
        }
        if (answerTrue === null) {
            setSkippedAns(skippedAns + 1)
        }
    }
    const resetQuiz = () => {
        setCurrentQuestion(0);
        setShowResult(false);
        setScore(0);
        setAnswerTrue(null);
        setSelectedAns(null);
        setSkippedAns(0);
        setWrongAns(0);
        setLock(false);
        setShowStart(true)
    };

    return (
        <>
            {
                showStart ? (
                    <Start 
                        startgame={startgame}
                    />
                ) : (
                    <div className="container">
                        {showResult ? (
                            <Result
                                score={score}
                                totalQuestions={questions.length}
                                skippedAns={skippedAns}
                                wrongAns={wrongAns}
                                resetQuiz={resetQuiz}
                            />
                        ) : (
                            <>
                                <header>
                                    <h1><img src={Brain} />Quiz App</h1>
                                    <span className='header-score'>To'g'ri: {score}</span>
                                    <div>
                                        <img src={books} alt="" width={50} />
                                        <span>{currentQuestion + 1}/{questions.length}</span>
                                    </div>
                                </header>
                                <div className="vr"></div>
                                <main>
                                    <h2 className='question-text'>{question}</h2>
                                    <ul>
                                        {
                                            choices.map((answer, index) => (
                                                <li key={answer}
                                                    onClick={() => onAnswerClick(answer, index)}
                                                    className={answerIdx === index ? 'selected-answer' : null}
                                                >{answer}</li>
                                            ))
                                        }
                                    </ul>
                                </main>
                                <div className="vr"></div>
                                <footer>
                                    <div>
                                        {answerTrue === true ? (
                                            <div>
                                                <img src={correct} alt="" />
                                                <h2>Siz to'g'ri topdingiz!</h2>
                                            </div>
                                        ) : answerTrue === false ? (
                                            <div>
                                                <img src={incorrect} alt="" />
                                                <h2>Siz noto'g'ri topdingiz!</h2>
                                            </div>
                                        ) : (
                                            <div>
                                                <img src={checkbox} alt="" />
                                                <h2>Tanlang</h2>
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        {selectedAns ? (
                                            <button onClick={cancelClick} className='cancel-button'>Bekor Qilish</button>
                                        ) : null}
                                        {selectedAns ? (
                                            <button onClick={handleSubmit}>Tasdiqlash</button>
                                        ) : showResult ? (
                                            <button>Tugatish</button>
                                        ) : selectedAns === null ? (
                                            <button onClick={nextQuestion}>O'tkazish</button>
                                        ) : (
                                            <button onClick={nextQuestion}>Keyingisi</button>
                                        )}
                                    </div>
                                </footer>
                            </>
                        )}

                    </div>
                )
            }
        </>
    )
}
export default Quiz