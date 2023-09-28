import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Accueil from "./components/Accueil.js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AjoutRobot from './components/AjoutRobot'	//Insp. de AddTask 
import EditRobot from './components/EditRobot'	 
import ListeRobots from './components/ListeRobots' //Insp. de ManyTasks 


function App() {

//GLOBAL
const [robots, setRobots] = useState([])
useEffect(() =>{
    const getRobots = async () => {
        const robotsFromServer = await fetchRobots()
        setRobots(robotsFromServer)
    }
    getRobots()
}, [])

const fetchRobots = async () => {
    const res = await fetch('http://localhost:5000/robots')
    const data = await res.json()
    //console.log(data)
    return data
} 

//DELETE
const deleteRobot = async (id) => {
    //console.log(id)
    await fetch(`http://localhost:5000/robots/${id}`,{
        method: 'DELETE',
    })
    setRobots(robots.filter((robot) => robot.id !== id))
}
//update
const editRobot = async (updRobot) => {
   // console.log(id)
   await fetch(`http://localhost:5000/robots/${updRobot.id}`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updRobot)
   })

setRobots(robots.map((robot) => robot.id === updRobot.id ? updRobot : robot ))

}
//Add
const ajoutRobot = async (robot) => {
    const res = await fetch('http://localhost:5000/robots', {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(robot)
    })
    const newRobot = await res.json()
    setRobots([...robots, newRobot])
}

// toggle form
const toggleEdit = (product) => {
    setShowEditRobot(product);
}


//Partie la plus difficile
// Le state de showAjoutRobot placé false pour le transformer à true si l'utilisateur fait "Ajout". On affiche ;e le fomulaire. 

const [showAjoutRobot, setShowAjoutRobot] = useState(false)

// Mon showEditRobot stockera les données du produit (mon collègue me suggère ce mot pour mieux comprendre PRODUCT ligne 85) si on fait "modifier". On part à null au début, selon quelle partie l'utilisateur transforme, c'est elle qu'on va garder"modifier. J'envoie ça dans EditFormulaire pour afficher. 
const [showEditRobot, setShowEditRobot] = useState(null)

  return (
    <BrowserRouter>
        <div className='container'>
            <Header onAddBtn={() => setShowAjoutRobot(!showAjoutRobot)} showAdd={showAjoutRobot}/>
            {showAjoutRobot && <AjoutRobot onAdd={ajoutRobot}/>}
            {showEditRobot && <EditRobot product = {showEditRobot} onUpd={editRobot}/>}
            <Routes>
                <Route path='/gestion' element={<ListeRobots robots={robots} toggleEdit={toggleEdit} onDeleteMany={deleteRobot} />}/>
                <Route path='/' element={<Accueil/>}/>
            </Routes>
            <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;
