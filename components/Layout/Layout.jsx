import React from 'react';

const Layout = ({ children, title }) => {
  return (
    <main className="mx-auto flex flex-col items-center justify-center my-10">
      <h1 className="my-10 font-semibold text-4xl">{title}</h1>
      {children}
    </main>
  );
};

export default Layout;
