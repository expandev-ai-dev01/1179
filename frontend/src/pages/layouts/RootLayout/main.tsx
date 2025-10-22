/**
 * @layout RootLayout
 * @summary Root layout component with header and main content area
 * @domain core
 * @type layout-component
 * @category layout
 */

import { Outlet } from 'react-router-dom';
import { Header } from './_impl/Header';

export const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};
