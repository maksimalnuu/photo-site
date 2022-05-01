import no_image from '../static/images/no_image.jpg';

const PhotoBox = ({photo, onDeletePhoto, onSetModalOpen, onPhotoChoosing }) =>  {
    return (
      <div>
        {photo && (
          <img src={photo.thumbnailUrl} alt={photo.title} onClick={() => { onPhotoChoosing(photo.url); onSetModalOpen(true) }} />
        )}
        {!photo && (
          <img src={no_image} alt="" />
        )}
        <button onClick={() => onDeletePhoto(photo.id)}>Delete image</button>
      </div>
    );
  }
  
  export default PhotoBox;