import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'


const Header = (props) => {
    // const onClick = () => {
    //     console.log('Click component')
    // }
    const location = useLocation()
    return(
        <header className="header">
            {/* {<h1 style={{ color: 'red', backgroundColor: 'black'}}>{props.title}</h1>} */}
            {/* {<h1 style={headingStyle}>{props.title}</h1>} */}
            <h1 className="fw-bold">{props.title}</h1>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <img src="/robotUne.png" alt="Robot maison" width="200" />
            
            {/*<button className='btn'>Ajouter</button>*/}
            {location.pathname === '/' && (
            <Button text={props.showAdd ? 'Fermer' : 'Ajouter' } color={props.showAdd ? 'red' : 'green' } onClick={props.onAddBtn}/>
            )}
            
        </header>
    )
}

Header.defaultProps = {
    title: 'Manufacture de robots'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }
export default Header