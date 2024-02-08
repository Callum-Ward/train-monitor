'use client'

// Redux seems to require client side pages 
// Meaning the root page (server side) cannot be wrapped with a provider
// Instead this parent page will wrap all children

import { Provider } from 'react-redux';
import { store } from '../../store/store';

import ClientSideRender from './ClientSideRender'

export default function Page() {



  // Render data
  return (
    <Provider store={store}>
      <ClientSideRender></ClientSideRender>
    </Provider> 
  );
}
