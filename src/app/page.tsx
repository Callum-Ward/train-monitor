import React from 'react';
import Link from 'next/link';
import {store} from '../store/store';
import {Provider} from 'react-redux'



const Home: React.FC = () => {
  return (
    <>
      <h1>Train Board</h1>
      <div>
        <Link href="/ssr">Server side rendered</Link>
      </div>
      
      <div>
        <Link href="/client-side-render">Client side rendered</Link>
      </div>
    </>
  );
};


export default Home;

