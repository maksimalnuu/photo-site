import { useContext, useState } from "react";
import { PhotoContext } from "../contexts/photo";
import PhotoBox from "./PhotoBox";
import style from '../style/photo.module.css';
import Modal from '../modal/Modal';

const Photos = () =>  {
    const [photoState, dispatch] = useContext(PhotoContext);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalPhoto, setModalPhoto] = useState();

    return (
      <div className={style.photos}>
        {photoState.photoOnPage.map(photo => (
            <PhotoBox 
              key={photo.id} 
              photo={photo} 
              onDeletePhoto={(photoId) => 
                dispatch({type: 'DELETE_PHOTO', payload: photoId})
              }
              onSetModalOpen={setModalOpen}
              onPhotoChoosing={setModalPhoto}
            />
        ))}

        {modalOpen && <Modal setOpenModal={setModalOpen} modalPhoto={modalPhoto} />}
      </div>
    );
  }
  
  export default Photos;