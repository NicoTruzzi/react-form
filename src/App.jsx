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
              <input type="text" value={text} onChange={(event => (setText(event.target.value)))} />
            </form>
          )
      }

    </>
  )
}

export default App
