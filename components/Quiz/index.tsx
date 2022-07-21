import styles from './quiz.module.css'
import Card from '../Card'
import Center from '../Center'

const Quiz = () => {
  return (
    <Center>
      <Card>
        <div className={styles.heading}>
          <div className={styles.clossBtn}>x</div>
          <h1>This is the quiz heading</h1>
          <div className={styles.countBox}>
            {["1", "2", "3", "4", "5"].map((count) => {
              return (
                <div className={count === "1" ? styles.activeCount : styles.count}>
                  <Center>
                    {count}
                  </Center>
                </div>
              )
            })}
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.quest}>
            <h3>Question</h3>
          </div>
          <div className={styles.quest}>
            <div className={styles.options}><span>ONE</span></div>
            <div className={styles.options}><span>TWO</span></div>
            <div className={styles.options}><span>THREE</span></div>
            <div className={styles.options}><span>FOUR</span></div>
          </div>
          <div className={styles.submitdiv}>
            <button className={styles.submitbtn} type="submit" >submit</button>
          </div>
        </div>
      </Card>
    </Center>
  )
}

export default Quiz