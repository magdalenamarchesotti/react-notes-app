import { useState } from "react";
import Note from "./components/Note"
import notes from "./notes"

//const createNotes = (noteItem) => {
 //   return <Note 
  //  key= {noteItem.key}
  //  title= {noteItem.title}
  //  content= {noteItem.content} 
  //  />
// }

const App = () => {
    const now = new Date().toLocaleTimeString();
    const [time, setTime] = useState(now)
    const updateTime = () => {
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime)
    }

    const [headingText, setHeadingText] = useState("KE ONDA")
    const handleClick = () => {
        setHeadingText("CHAU")
    }

    const [name, setName] = useState("");
    const handleChange = (event) => {
        setName (event.target.value);
    }

    return (
        <div>
            {notes.map(noteItem => (
                <Note 
                key= {noteItem.key}
                title= {noteItem.title}
                content= {noteItem.content} 
                />
            ))}
            <div>
                <h1>{time}</h1>
                <button onClick={updateTime}>GET TIME</button>
            </div>
            <div>
                <h2>{headingText}</h2>
                <input type="text" placeholder="What's your name?" />
                <button onClick={handleClick}>Submit</button>
            </div>
            <div>
                <h3>hello {name}</h3>
                <input onChange={handleChange} type="text" placeholder="What's your name?" value={name} />
                <button>Submit</button>
            </div>
        </div>
    )
}

export default App
