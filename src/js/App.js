import React, { useState } from 'react'
import SearchBar from './components/SearchBar';
import Images from './components/Images';

export const topicContext = React.createContext("");
export const settopicContext = React.createContext(null);

function TopicProvider({children}) {
    const[topic,setTopic] = useState("");
    
    function setCurrentTopic(value) {
        setTopic(value);
    }

    return(
        <topicContext.Provider value={topic}>
            <settopicContext.Provider value={setCurrentTopic}>
                {children}
            </settopicContext.Provider>
        </topicContext.Provider>
    )
}


function App() {
  
    return (
        <TopicProvider>
            <SearchBar/>
            <Images/>
        </TopicProvider>
  )
}

export default App