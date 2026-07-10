import { useState } from "react"

function App() {
  const [promoCode, setPromoCode] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (promoCode === "SUMMER10") {
      setMessage("codice valido")
    }
    else
      setMessage("codice errato riprova")
  }
  return (
    <>
      <form onSubmit={handleSubmit}>

        <input type="text" placeholder="inserisci il codice promo" value={promoCode} onChange={(event) => (setPromoCode(event.target.value))} />

      </form>
      {message && <p>{message}</p>}
    </>
    //il paragrafo viene creato solo se c'è qualcosa dentro message
  )
}

export default App
