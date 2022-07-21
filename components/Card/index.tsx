import styles from './card.module.css'

const Card = ({children}:any) => {
  return (
    <div className={`${styles.container}`}>
     {children}
    </div>
  )
}

export default Card