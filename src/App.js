import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/:id/tasks' element={<Tasks />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
