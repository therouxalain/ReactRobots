import { useState } from "react";
const AjoutRobot = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [carac, setCarac] = useState("");
  const [valeur, setValeur] = useState("");
  const [solaire, setSolaire] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Ajouter donc un robot");
      return;
    }
    onAdd({ text, carac, valeur, solaire });
    setText("");
    setCarac("");
    setValeur("");
    setSolaire(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>
          Nom du robot
          <input
            type="text"
            value={text}
            placeholder="Ajouter un robot"
            onChange={(e) => setText(e.target.value)}
          />
        </label>
      </div>
      <div className="form-control">
        <label>
          Description | Caractéristique
          <input
            type="text"
            placeholder="Donnez une caractéristique"
            value={carac}
            onChange={(e) => setCarac(e.target.value)}
          />
        </label>
      </div>
      <div className="form-control">
        <label>
          Valeur marchande
          <input
            type="text"
            placeholder="Il vaut combien ce robot?"
            value={valeur}
            onChange={(e) => setValeur(e.target.value)}
          />
        </label>
      </div>
      <div className="form-control form-control-check">
        <label>
          <b>CATÉGORIE</b>: Fonctionne à l'énergie solaire
          <input
            type="checkbox"
            checked={solaire}
            onChange={(e) => setSolaire(e.currentTarget.checked)}
          />
        </label>
      </div>
      <input type="submit" className="btn btn-block" value="Enregistrer" />
    </form>
  );
};
export default AjoutRobot;
