import { useState } from 'react'

const EditRobot = ({product, onUpd}) => {
    const id = product.id
    const [text, setText] = useState(product.text)
    const [carac, setCarac] = useState(product.carac)
    const [valeur, setValeur] = useState(product.valeur)
    const [solaire, setSolaire] = useState(product.solaire)
    

    const onSubmit = (e) =>{
        e.preventDefault()
        onUpd({id, text, carac, valeur, solaire})
    }

    return(
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>
                    Robot
                    <input
                    type='text'
                    value={text}
                    onChange = {(e) => setText(e.target.value)}
                    />
                </label>
            </div>
            <div className="form-control">
                <label>
                    Caractéristiques
                    <input
                    type='text'
                    value={carac}
                    onChange = {(e) => setCarac(e.target.value)}
                    />
                </label>
            </div>
            <div className="form-control">
                <label>
                    Valeur
                    <input
                    type='text'
                    value={valeur}
                    onChange = {(e) => setValeur(e.target.value)}
                    />
                </label>
            </div>
            <div className="form-control form-control-check">
                <label>
                    Fonctionne à l'énergie solaire
                    <input
                    type='checkbox'
                    checked={solaire}
                    onChange = {(e) => setSolaire(e.currentTarget.checked)}
                    />
                </label>
            </div>
            <input type="submit" className="btn btn-block" value="Enregistrer"/>
        </form>
    )
}
export default EditRobot