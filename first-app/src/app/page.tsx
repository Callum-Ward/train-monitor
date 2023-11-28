import React from 'react';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { fetchTrainData } from './api/train';

type trainDataJson = {
  trains: JSON
}

const Home: React.FC = () => {
  return (
    <div>
      <h1>Train Board</h1>
      <div>
        <Link href="/ssr">Server side rendered</Link>
      </div>
  
      <div>
        <Link href="/client-fetch-api">Client side rendered</Link>
      </div>
    </div>
  );
};

export default Home;

