import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"
import { Repos } from "./pages/repos"
import { RepoDetails } from "./pages/repoDetails"
import { NotFound } from "./pages/notFound"
import Layout from "./components/Layout"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:username/repos" element={<Repos />} />
          <Route path="/:owner/:repo" element={<RepoDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
