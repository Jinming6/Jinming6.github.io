import { ThemeProvider } from "@/components/theme-provider";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";
import "./App.css";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Terminal>
        <TypingAnimation>&gt; 你上房干嘛？</TypingAnimation>
        <TypingAnimation delay={1200} className="text-green-500">
          &gt; 我上房找枪！
        </TypingAnimation>
        <TypingAnimation delay={2200}>&gt; 地上有五把你不拿？</TypingAnimation>
        <TypingAnimation delay={3200} className="text-green-500">
          &gt; 我忘了！
        </TypingAnimation>
      </Terminal>
    </ThemeProvider>
  );
}

export default App;
