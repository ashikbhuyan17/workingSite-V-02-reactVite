import Layout from './layout/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="messages" element={<DashboardMessages />} />
          <Route path="tasks" element={<DashboardTasks />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}
