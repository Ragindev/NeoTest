import styles from './quiz.module.css'

const McqView = ({ question, options, onNext }: {
  question: string;
  options: string[];
  onNext: Function;
}) => {

  //question options shuffling
  options = options.sort((a, b) => 0.5 - Math.random());
  return (
    <div className={styles.content}>
      <div className={styles.quest}>
        <h3>{question}</h3>
      </div>
      <div className={styles.quest}>
        <div className={styles.options}><span>{options[0]}</span></div>
        <div className={styles.options}><span>{options[1]}</span></div>
        <div className={styles.options}><span>{options[2]}</span></div>
        <div className={styles.options}><span>{options[3]}</span></div>
      </div>
      <div className={styles.submitdiv}>
        <button className={styles.submitbtn} onClick={() => onNext()}>Next</button>
      </div>
    </div>
  );
}

export default McqView;