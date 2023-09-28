import { FaRegWindowClose } from 'react-icons/fa'
import { FaWrench } from 'react-icons/fa'

const UnRobot = ({robot, onDelete, onToggleEdit}) => {
    return(
        <div className={`robot ${robot.solaire ? 'solaire' : ''}`} onDoubleClick={ () => console.log("Rien à cliquer!")}> 

            <h3>{robot.text}
                <FaRegWindowClose
                style={{ color: 'red'}}
                onClick = { () => onDelete(robot.id) }
                />
            </h3>
            <h3>
                <FaWrench
                style={{ color: 'orange'}}
                onClick = { () => onToggleEdit(robot) }
                />
            </h3>
            <p>Caractéristique : {robot.carac}</p>
            <p>Valeur marchande : {robot.valeur}</p>
        </div>
    )
}

export default UnRobot