import Card from '../Card'
import Center from '../Center'
import McqView from './McqView'
import { useState } from "react"
import styles from './quiz.module.css'

type Mcq = {
  question: string;
  options: string[];
}


const Quiz = () => {

  var questionPool: Mcq[] = [
    {
      question: "What is your favorite language 1",
      options: ["Python", "JavaScript", "Java", "Kotlin"]
    },
    {
      question: "What is your favorite language 2",
      options: ["Python", "JavaScript", "Java", "Kotlin"]
    },
    {
      question: "What is your favorite language 3",
      options: ["Python", "JavaScript", "Java", "Kotlin"]
    },
    {
      question: "What is your favorite language 4",
      options: ["Python", "JavaScript", "Java", "Kotlin"]
    },
    {
      question: "What is your favorite language 5",
      options: ["Python", "JavaScript", "Java", "Kotlin"]
    },
    {
      question: "What is your favorite language 6",
      options: ["Python", "JavaScript", "Java", "Kotlin"]
    },
  ];

  //add a usestate for question change with index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  return (
    <Center>
      <Card>
        <div className={styles.heading}>
          <div className={styles.clossBtn}>x</div>
          <h1>This is the quiz heading</h1>
          <div className={styles.countBox}>
            {questionPool.map((_, index) => {
              return (
                <div className={index === 0 ? styles.activeCount : styles.count}>
                  <Center>
                    <span>{index + 1}</span>
                  </Center>
                </div>
              )
            })}
          </div>
        </div>
        {/*pass current question mcq view and display next question in mcq view  */}
        <McqView {...questionPool[currentQuestionIndex]} onNext={() => setCurrentQuestionIndex(currentQuestionIndex + 1)} />
      </Card>
    </Center>
  )
}

export default Quiz
