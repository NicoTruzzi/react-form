import { useState } from "react"

function App() {
  const [isSent, setIsSent] = useState(false);
  const [text, setText] = useState("");
  function handleSubmit(event) {
    console.log(text);
    event.preventDefault();
    setIsSent(true);
  }
  return (
    <>
      {
        isSent ? (
          <p>Grazie per esserti iscritto 😉​</p>
        ) :
          (
            <form onSubmit={handleSubmit}>
              <input type="email" style={{ width: "270px" }} placeholder="inserisci l'email per iscriverti alla newsletter" value={text} onChange={(event => (setText(event.target.value)))} />
            </form>
          )
      }

    </>
  )
}

export default App
