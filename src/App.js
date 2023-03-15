import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import Spinner from './Components/Spinner/Spinner';
import router from './Routers/Router';

function App() {
  const [loading, setLoading] = useState(true);
  //useEffect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='App'>
        {loading ? <Spinner /> : <RouterProvider router={router} />}
      </div>
    </>
  );
}

export default App;
