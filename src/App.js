import Header from "./components/header/Header";
import './assets/styles/styles.scss'
import {useEffect, useState} from "react";
import Api from './utils/Api'
import Card from "./components/cards/Card";
function App() {
    const [toDoList, setToDoList] = useState([])

    useEffect(() => {
        getList()
    }, [])

    const getList = async () => {
       const data =  await Api.getToDoList()
       if(data) {
           setToDoList([...data])
       }
    }

  return (
    <div className="container">
        <div className="content_container">
             <Header count={Array.isArray(toDoList) ? toDoList.length : 0}/>
            <Card/>
        </div>
    </div>
  );
}

export default App;
