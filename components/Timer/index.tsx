import { useState } from "react"
import { useEffect } from "react"
import React, { useRef } from 'react'

const useCountdown = (initialValue: number) => {
  let [counter, setCounter] = useState(initialValue);
  const intervalRef = useRef<number>();
  intervalRef.current = counter
  
  useEffect(() => {
    const _timer = setInterval(() => {
      if (intervalRef.current  == 0) {
        clearInterval(_timer);
      } else {
        setCounter(intervalRef.current -1);
      }
    }, 1000);
    return () => clearInterval(_timer);
  }, []);
 return [counter];
}
const Timer: React.FC<void> = () => {
  const [counter] = useCountdown(10);
  return <span>
    Time Left {counter}<br/>
    { (counter == 0) && <>All done</>}
  </span>;
}
export default Timer;



// const useCountDown = (
//     initialValue: number, 
//     onComplete:() => void,
//     restartValues:Array<any>) => {
//   let [counter, setCounter] = useState(initialValue);
//   let [timer, setTimer] = useState<NodeJS.Timeout>(null);
//   const intervalRef = useRef<number>();
//   intervalRef.current = counter
//   const interrupt = () => {
//     clearInterval(timer);
//   };
//   useEffect(() => {
//     setCounter(initialValue);
//     const _timer = setInterval(() => {
//       if (intervalRef.current  == 0) {
//         onComplete();
//         clearInterval(_timer);
//       } else {
//         setCounter(intervalRef.current -1);
//       }
//     }, 1000);
//     setTimer(_timer);
//     return () => clearInterval(_timer);
//   }, restartValues); // trigger new timer
//   return [counter, interrupt]; // return interrupt
// };