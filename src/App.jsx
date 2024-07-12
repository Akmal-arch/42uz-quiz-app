import { jsQuizz } from './assets/data'
import Quiz from './Quiz'


function App() {
  return(
    <Quiz questions={jsQuizz.questions}/>
  )
}
export default App