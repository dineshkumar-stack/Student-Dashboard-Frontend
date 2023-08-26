import { BrowserRouter as Router } from 'react-router-dom';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
import NavBar from "./components/NavBar"
import Content from './components/Content';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext';
import { TaskProvider } from './context/TaskContext';
import { AttendanceProvider } from './context/AttendanceContext';
import './styles.css';
import React, { useState } from 'react';


function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (


    <AuthProvider>
      <TaskProvider>
        <AttendanceProvider>
          <Router>
            <div className="App" >
            <div class="bg"></div>
              <NavBar/>
              {/* <Header /> */}
                <div className="row">
                  <div className={`app ${sidebarOpen ? 'active' : ''}`}>
                    {/* <Sidebar /> */}
                    <div className="content-container">
                      <Content toggleSidebar={toggleSidebar} />
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </Router>
        </AttendanceProvider>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
