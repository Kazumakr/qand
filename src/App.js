import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Create from "./components/pages/Create";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import NotFound from "./components/pages/NotFound";
import Question from "./components/pages/Question";
import SearchResults from "./components/pages/SearchResults";
import Signup from "./components/pages/Signup";
import { QuestionProvider } from "./context/question/QuestionContext";

function App() {
  return (
    <QuestionProvider>
      <Router>
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/question/:id" element={<Question />} />
            <Route path="/create" element={<Create />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/notfound" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </QuestionProvider>
  );
}

export default App;
