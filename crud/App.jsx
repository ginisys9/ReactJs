import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserList from "./pages/UserList"
import EditList from "./pages/EditList"
import MainLayout from "./layout/MainLayout"
import React, { useRef } from 'react';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
function App() {
  const toast = useRef(null)
  return (
    <Router>
      <Toast ref={toast} />
      <ConfirmDialog />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<UserList toast={toast} />} />
          <Route path="/add" element={<EditList toast={toast} />} />
          <Route path="/edit/:id" element={<EditList
            toast={toast}
          />} />
        </Route>
      </Routes>
    </Router>
  )
}
export default App

// npx json-server --watch db.json --port 5000