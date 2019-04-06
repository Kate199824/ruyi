import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const DefaultLayout = ({ component: Component }) => {
  return (
    <div>
      <Header />

      <Footer />
    </div>
  );
};
