import Filter from "./components/Filter";
import Photos from "./components/Photos";
import Paging from "./components/Paging";
import { useContext, useEffect } from 'react';
import { PhotoContext } from "./contexts/photo";

const App = () =>  {
  const [photoState, dispatch] = useContext(PhotoContext);
  const apiUrl = "http://jsonplaceholder.typicode.com/photos";
  
  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        dispatch({type: 'LOADED_PHOTOS', payload: data});
      });
  }, []);

  return (
    <div>
      <Filter />
      <Photos />
      <Paging />
    </div>
  );
}

export default App;
