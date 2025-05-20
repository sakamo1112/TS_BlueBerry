import "./App.css";
import {useState} from "react";


const initialButtonConfigs = [
  {id: "like", icon: "❤️", initialCount: 0, incrementAmount: 1, className: "likeButton"},
  {id: "good", icon: "👍", initialCount: 0, incrementAmount: 5, className: "goodButton"},
  {id: "star", icon: "⭐️", initialCount: 0, incrementAmount: 10, className: "starButton"}
];

let nextId = initialButtonConfigs.length;

function App() {
  const [buttonConfigs, setButtonConfigs] = useState(initialButtonConfigs);

  const addButton = () => {
    let newAmount = 5 * nextId;
    const newButton = {
      id: `new-${nextId++}`,
      icon: "✨",
      initialCount: 0,
      incrementAmount: newAmount,
      className: "newButton"
    };
    setButtonConfigs([...buttonConfigs, newButton]);
  };

  return (
    <>
      <button onClick={addButton} style={{ marginBottom: "20px"}}>新しいボタンを追加</button>
      {buttonConfigs.map((config, i) => (
        <div key={config.id} style={{marginBottom: "30px"}}>
          <p>{i}番目のボタン</p>
          <CounterButton
            icon={config.icon}
            initialCount={config.initialCount}
            incrementAmount={config.incrementAmount}
            className={config.className}
          />
        </div>
      ))}
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
    <>
      <span className={className} onClick={handleClick}>{icon} {count}</span>
      {count >= 5 && count < 10 && <p> たくさんクリックされました！</p>}
      {count >= 10 && count < 50 && <p> さらにたくさんクリックされました！</p>}
      {count >= 50 && <p> すごい!50回以上クリックされました!</p>}
    </>
  );
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