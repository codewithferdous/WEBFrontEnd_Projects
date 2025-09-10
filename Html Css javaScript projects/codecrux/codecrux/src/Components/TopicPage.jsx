import React from "react";
import Footer from "F:/Project/codecrux/src/Components/Footer";
import Header from "F:/Project/codecrux/src/Components/Header";
import TopicNames from "F:/Project/codecrux/src/Components/TopicNames";
import topics from "F:/Project/codecrux/src/Components/Topics";
function CreateTopic(topics){
    return <TopicNames name={topics.name} no={topics.no}/>
    }
function TopicPage(probs){
    return(
        <div>
            <Header />
            {topics.map(CreateTopic)}
            <Footer />
        </div>
        
    );
}
export default TopicPage;