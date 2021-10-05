import { useState } from "react";
import QuizPage from "./quiz";

function App() {
  const [quizStarted, changeState] = useState(false);

  return (
    <div className="bg-gradient-to-r from-bg-blue to-bg-black w-screen h-screen">
      <div className="bg-smoke-element bg-center w-full h-full flex flex-col">

        {quizStarted ? <QuizPage /> : <div className=" w-full h-full flex justify-center items-center flex-col">
          <h1 className="font-serif text-custom-yellow text-8xl py-6 text-center">Mystery Quiz</h1>
          <div className="lg:w-1/2 w-2/3 pb-28">
            <p className="text-white text-center text-xl">Do you want to play a little game with us ;)</p>
          </div>
          <button onClick={() => changeState(!quizStarted)}>
            <div className="border border-custom-yellow w-80 px-24 py-4 rounded-md hover:border-yellow-400 hover:text-yellow-400">
              <p className="text-base text-custom-yellow">Take the Quiz</p>
            </div>
          </button>
        </div>}
      </div>
    </div>
  );
}


export default App;
