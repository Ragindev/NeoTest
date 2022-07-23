import { useState } from "react"
import McqView from './McqView'
import Card from '../Card'
import Center from '../Center'
import Timer from '../Timer'
import styles from './quiz.module.css'

type Mcq = {
  question: string;
  options: string[];
  selection?: string;
}



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

const Quiz = () => {

  //add a usestate for question change with index
  const [currentIndex, setCurrentIndex] = useState(0);
  // create a new questionSet Array with schuffled options
  const [qp, setQp] = useState(
    questionPool.map(q => {
      return q;
      // return { ...q, options: q.options.sort((_, __) => 0.5 - Math.random()) }
    })
  )

  return (
    <Center>
      <Card>
        <div className={styles.heading}>
          <div className={styles.clossBtn}>x</div>
          <Timer />
          <h1>This is the quiz heading</h1>
          <div className={styles.countBox}>
            {questionPool.map((_, index) => {
              return (
                <div
                  key={'count-' + index}
                  className={index <= currentIndex ? styles.activeCount : styles.count}
                  onClick={()=>setCurrentIndex(index)}
                  >
                  <Center>
                    <span>{index + 1}</span>
                  </Center>
                </div>
              )
            })}
          </div>
        </div>
        {/*pass current question mcq view and display next question in mcq view  */}
        <McqView
          {...qp[currentIndex]}
          onSelectAns={(selection: string) =>
            setQp(
              qp.map((qSet, i) => {
                if (currentIndex === i) {
                  return {
                    ...qSet,
                    selection
                  };
                }
                return qSet;
              })
            )
          }
        />
        <div className={styles.submitdiv}>
          {
            currentIndex > 0 &&
            <button
              className={styles.submitbtn}
              onClick={() => setCurrentIndex(currentIndex - 1)}>
              Previous
            </button>
          }
          {
            currentIndex < qp.length - 1 &&
            <button
              className={styles.submitbtn}
              onClick={() => setCurrentIndex(currentIndex + 1)}>
              Next
            </button>
          }
        </div>
      </Card>
    </Center>
  )
}

export default Quiz
