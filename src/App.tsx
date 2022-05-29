import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Board from './views/board'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/board/:id' element={<Board />} />
      </Routes>
    </Router>
  )
}

export default App
