import { useState } from "react"

function App() {
  const [voto, setVoto] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault()
    const votoHandle = Number(voto);
    if (votoHandle === 0 || comment.trim() === "") {
      setMessage("inserisci tutti i campi per inviare");

      return;
    }
    if (votoHandle < 4 && votoHandle > 0) {
      setIsSubmitted(true);
      setMessage("ci dispiace dobbiamo fare meglio")
    } else {
      setMessage("grazie per la recensione positiva")
      setIsSubmitted(true);
    }
  }
  return (
    <>
      {
        !isSubmitted &&
        <form onSubmit={handleSubmit}>
          <input type="text" value={comment} onChange={event => (setComment(event.target.value))} />
          <input type="radio" name="votes" value="1" onChange={event => (setVoto(event.target.value))} />
          <input type="radio" name="votes" value="2" onChange={event => (setVoto(event.target.value))} />
          <input type="radio" name="votes" value="3" onChange={event => (setVoto(event.target.value))} />
          <input type="radio" name="votes" value="4" onChange={event => (setVoto(event.target.value))} />
          <input type="radio" name="votes" value="5" onChange={event => (setVoto(event.target.value))} />
        </form>
      }
      {message &&
        <p>{message}</p>
      }

    </>
  )
}

export default App
