import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import HomeView from './views/HomeView';
import StationDetailView from './views/StationDetailView';
import './styles/App.scss';

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/station/:id" element={<StationDetailView />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
