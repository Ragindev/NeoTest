import { useState, useEffect } from 'react'
import styles from './quiz.module.css'

const McqView = ({ question, options, selection, onSelectAns }: {
  question: string;
  options: string[];
  selection?: string;
  onSelectAns: Function;
}) => {
  return (
    <div className={styles.container}>
      <h3>{question}</h3>
      {options.map((opt, i) =>
        <div
          key={'option-' + i}
          className={`${styles.options} ${selection === opt ? styles.selectedOption : ''}`}
          onClick={() => onSelectAns(opt)} >
          {opt}
        </div>
      )}
    </div>
  );
}

export default McqView;