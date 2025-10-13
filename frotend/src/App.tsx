import Header from "./common/Header"
import CardTask from "./component/CardTask"

function App() {

  return (
    <>
    <Header/>
      <main className="bg-neutral-900 h-dvh flex justify-center">
        <CardTask/>
      </main>
    </>
  )
}

export default App
