import { useState } from "react"

function App() {
  const [tariffa, setTariffa] = useState(50);
  const [ore, setOre] = useState(2);
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    let totale = ore * tariffa;
    if (ore <= 0 || tariffa <= 0) {
      setMessage("la tariffa e le ore lavorative devono essere maggiori di 0")
      return;
    }
    if (ore > 4) {
      totale = totale + 50;
    }
    setMessage(`Il totale del preventivo è di ${totale}€`)
    setIsSubmitted(true);
  }

  return (
    <>
      {
        !isSubmitted &&
        <form onSubmit={handleSubmit}>
          <p>tariffa per ora <input type="number" name="tariffa" style={{ width: "30px" }} value={tariffa} onChange={event => setTariffa(Number(event.target.value))} /></p>

          <p>ore di lavoro <input type="number" name="ore" style={{ width: "30px" }} value={ore} onChange={event => setOre(Number(event.target.value))} />
          </p>
          <button type="submit">invia preventivo</button>
        </form>
      }
      {
        message &&
        <p>{message}</p>
      }
    </>
  )
}

export default App
