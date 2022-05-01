import { useContext } from 'react';
import { PhotoContext } from '../contexts/photo';

const Paging = () =>  {
  const [photoState, dispatch] = useContext(PhotoContext);
  
  return (
      <div>
        <button
          onClick={() => dispatch({type:"PREVIOUS_PAGE"})}
        >
          {'<'}-Previous page
        </button>
        <button
          onClick={() => dispatch({type:"NEXT_PAGE"})}
        >
          Next page -{'>'}
        </button>

        <div>{photoState.currentPage + 1}/{photoState.pagesCount}</div>
      </div>
    );
  }
  
  export default Paging;