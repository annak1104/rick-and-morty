import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Banner } from './components/Banner/Banner';
// import { MainButton } from './components/MainButton/MainButton';

export const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Outlet />
      {/* <MainButton /> */}
      <Footer />
    </>
  );
};
