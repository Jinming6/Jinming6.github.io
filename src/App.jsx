import "./App.css";
import BlurText from "./components/BlurText";

function App() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <div className="text-white/95 text-center">
      <BlurText
        text="🚧 施 工 中 ， 敬 请 期 待 。"
        delay={100}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-6xl"
      />
    </div>
  );
}

export default App;
