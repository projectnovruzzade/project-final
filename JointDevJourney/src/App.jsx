import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage/landing"

function App() {

  return (
     <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/auth" element={<AuthPage />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/profile" element={<Profile />} /> */}
     </Routes> 
  )
}

export default App
