import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import QuizProvider from "./context/QuizContext";
import Home from "./pages/Home";
import LeaderBoard from "./pages/LeaderBoard";
import Quiz from "./pages/Quiz";
const Result = lazy(() => import("./pages/Result"));

function App() {
  return (
    <QuizProvider>
      <Router>
        <Suspense fallback={<h2 className="text-center mt-5">Loading....</h2>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/result" element={<Result />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/leader" element={<LeaderBoard />} />
          </Routes>
        </Suspense>
      </Router>
    </QuizProvider>
  );
}

export default App;
