import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { CharacterPage } from './pages/CharacterPage/CharacterPage';
import { HomePage } from './pages/HomePage/HomePage';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path=':characterId' element={<CharacterPage />} />

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};
