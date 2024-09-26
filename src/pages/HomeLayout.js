import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Home/NavBar';
import Footer from '../components/Home/Footer';

const HomeLayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-primary">
        <NavBar />
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default HomeLayout;