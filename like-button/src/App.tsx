import "./App.css";
import {useState} from "react";

function App() {
  return (
    <>
      <div style={{marginBottom: '30px' }}>
        <CounterButton icon="❤️" initialCount={0} incrementAmount={1} className="likeButton"/>
      </div>
      <div>
        <CounterButton icon="👍" initialCount={0} incrementAmount={10} className="goodButton" />
      </div>
    </>
  );
}

interface CounterButtonProps {
  icon: string;
  initialCount: number;
  incrementAmount: number;
  className?: string;
}

function CounterButton({ icon, initialCount, incrementAmount, className}: CounterButtonProps) {
  const [count, setCount] = useState(initialCount);
  const handleClick = () => {
    setCount(count + incrementAmount);
  }
  return (
    <span className={className} onClick={handleClick}>{icon} {count}</span>
  )
}

// function LikeButton() {
//   const [count_heart, setCount_heart] = useState(0);
//   const handleClick_heart = () => {
//     setCount_heart(count_heart + 1);
//   }
//   return (
//     <span className="likeButton" onClick={handleClick_heart}>❤️ {count_heart}</span>
//   );
// }

// function GoodButton() {
//   const [count_good, setCount_good] = useState(0);
//   const handleClick_good = () => {
//     setCount_good(count_good + 10);
//   }
//   return (
//     <span className="goodButton" onClick={handleClick_good}>👍 {count_good}</span>
//   );
// }

export default App;