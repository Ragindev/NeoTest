import type { NextPage } from 'next'

import styles from '../styles/Home.module.css'

import Quiz from '../components/Quiz'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Quiz/>
    </div>
  )
}

export default Home
