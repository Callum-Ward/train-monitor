import React from 'react';
import Link from 'next/link';


const Home: React.FC = () => {
  return (
    <div>
      <h1>Train Board</h1>
      <div>
        <Link href="/ssr">Server side rendered</Link>
      </div>
  
      <div>
        <Link href="/client-side-render">Client side rendered</Link>
      </div>
    </div>
  );
};

export default Home;

