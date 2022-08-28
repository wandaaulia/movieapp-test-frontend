import React from 'react'
import './App.css';
import { QueryClientProvider, QueryClient} from 'react-query';
import Routers from './Routers';


const queryClient = new QueryClient();

function App() {

  return (
     <QueryClientProvider client={queryClient}> 
          <Routers />
    </QueryClientProvider>
  );
}

export default App;
