import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import User from './components/getuser/User';
import Add from './components/adduser/Add';
import Edit from './components/updateuser/Edit';

function App() {

  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <Add />,
    },
    {
      path: "/edit/:id",
      element: <Edit />,
    },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-title">CRUD Based Application</h1>
        <p className="app-subtitle">ProdigalAI Internship Assignment</p>
        <p></p><a href="https://github.com/ajju-devs/CRUD-app-ProdigalAI-assignment" target="_blank" rel="noopener noreferrer" className="project-link">
          For GitHub Repository Click Here
        </a>
      </header>
      <RouterProvider router={route}></RouterProvider>
      <footer className="App-footer">
        <p>Built by: Ajay Kumar 10219011621 USAR AI-ML 4th year</p>
        <p>Github: <a href="https://github.com/ajju-devs" target="_blank" rel="noopener noreferrer">https://github.com/ajju-devs</a></p>
      </footer>
    </div>
  );
}

export default App;
