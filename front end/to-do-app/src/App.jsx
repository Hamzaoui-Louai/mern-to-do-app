import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Notes from "./pages/Notes.jsx"
import Page404 from "./pages/Page404.jsx"

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Notes/>}>

          </Route>
        </Route>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </Router>
  )
}

export default App
