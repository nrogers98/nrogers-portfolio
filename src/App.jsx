import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { HashRouter, Routes, Route} from "react-router-dom"
import { Toaster } from "@/components/ui/toaster.jsx";

function App() {

  return (
    <>
      <Toaster />
      <HashRouter>
        <Routes>
          <Route 
            path="/home" 
            element={<Home />}
          />
          <Route 
            path="*" 
            element={<NotFound />} 
          />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
