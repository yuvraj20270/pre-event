import Timeline from "./timeline";
import useGoogleSheets from "use-google-sheets";
// import {Questions} from 'getQuestions';
import ReactLoading from 'react-loading';
import { useState } from "react";
import CharacterReveal from "./characterReveal";

var textQuestion = null;
export default function QuizPage() {
    const { data, loading, error } = useGoogleSheets({
        apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID,
        sheetsNames: ['questions']
    });
    // console.log(data);
    if (data && data[0]) {
        // console.log(data[0].data[0].QUESTIONS);
        // data[0].data.forEach(question => {
        //     questions.push(new Questions());
        // });
        // console.log(questions);
        if (!textQuestion) {
            textQuestion = data[0].data[data[0].data.length - 1];
            // data[0].data.pop();
        }
        // console.log(data[0].data);
    }
    const [formComplete, changeFormState] = useState(false);
    const [charactersShow, changeShow] = useState(false);
    return (
        <>{
            formComplete ?

                <>{charactersShow ? <CharacterReveal /> :<div className="w-full h-screen flex flex-col justify-center items-center">
                    <ReactLoading type="bubbles" color="#D4A661" />
                    <h1 className="text-custom-yellow text-xl">Submitting..</h1>
                    {setTimeout(() => {  changeShow(!charactersShow) }, 3000)}
                </div>} </>:
                <div className="">
                    {data && data[0] ?
                        <Timeline data={data[0].data} textQuestion={textQuestion.QUESTIONS} formComplete={formComplete} changeFormState={changeFormState} /> :
                        <div className="w-full h-screen flex flex-col justify-center items-center">
                            <ReactLoading type="bubbles" color="#D4A661" />
                            <h1 className="text-serif text-custom-yellow text-xl">Loading questions</h1>
                        </div>
                    }
                    <div className="w-full flex justify-end absolute lg:bottom-2 lg:right-2 bottom-4 mx-auto">
                        <p className="text-gray-400">
                            Website designed by Prakhar Prasad and developed by <a href="https://www.linkedin.com/in/yuvraj-singh-296654190/" target="_blank" className="hover:text-white">Yuvraj Singh</a>
                        </p>
                    </div>
                </div>
        }
        </>
    );
}
