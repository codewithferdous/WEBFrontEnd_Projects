import React from "react";
import Footer from "F:/Project/codecrux/src/Components/Footer";
import Header from "F:/Project/codecrux/src/Components/Header";
import Question from "F:/Project/codecrux/src/Components/Question";
import questionArr from "F:/Project/codecrux/src/Components/QuestionArray";


function CreateQuestion(question){
    return <Question no={question.no} data={question.data} output={question.output} />
}
function QuestionsPage(){
    return(
        <div>
            <Header />

          {questionArr.map(CreateQuestion)}

            <Footer />
           
        </div>
        
    );
}
export default QuestionsPage;