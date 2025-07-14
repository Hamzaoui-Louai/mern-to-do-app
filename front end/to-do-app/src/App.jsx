import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Notes from "./pages/Notes.jsx"
import NoteEditor from "./pages/NoteEditor.jsx";
import ShortTermGoals from "./pages/ShortTermGoals.jsx";
import Page404 from "./pages/Page404.jsx"
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {

  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/notes"/>}/>
            <Route element={<Layout/>}>
              <Route path="/notes" element={<Notes/>}/>
              <Route path="/notes/:initialTitle" element={<NoteEditor/>}/>
              <Route path="/short-term-goals" element={<ShortTermGoals/>}/>
            </Route>
            <Route path="*" element={<Page404/>}/>
          </Routes>
        </Router>
        <ToastContainer theme="dark"/>
        <ReactQueryDevtools/>
      </QueryClientProvider>
    </>
  )
}

export default App
