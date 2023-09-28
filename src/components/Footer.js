import { Link } from 'react-router-dom'
const Footer = () => {
    return(
        <footer>
            <Link to="/gestion">Module de gestion</Link><p>
            <Link to="/">Retour à l'accueil</Link></p>
            <p>Tous droits réservés ©2023</p>
        </footer>
    )
}
export default Footer