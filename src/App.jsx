import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { HashRouter, Routes, Route} from "react-router-dom"
import { Toaster } from "@/components/ui/toaster.jsx";

function App() {

  return (
    <section className="App">
      <Toaster />
      <HashRouter
        basename={import.meta.env.DEV ? '/' : '/nrogers-portfolio'}
      >
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </HashRouter>
    </section>
  )
}

export default App
