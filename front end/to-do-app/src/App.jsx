import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Notes from "./pages/Notes.jsx"
import NoteEditor from "./pages/NoteEditor.jsx";
import Page404 from "./pages/Page404.jsx"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/notes"/>}/>
        <Route element={<Layout/>}>
          <Route path="/notes" element={<Notes/>}/>
          <Route path="/notes/:initialTitle" element={<NoteEditor/>}/>
        </Route>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </Router>
  )
}

export default App
