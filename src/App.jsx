import Layout from './layout/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CRUD from './pages/crud-operation-raw/CRUD.jsx';
import Employee from './pages/manage-employees/Employee';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="CRUD" element={<CRUD />} />
          <Route path="employee" element={<Employee />} />
        </Route>
        {/* <Route path="about" element={<AboutPage />} /> */}
      </Routes>
    </Router>
  );
}
