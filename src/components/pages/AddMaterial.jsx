import { useRef } from 'react';
import { postMaterial,updateMaterial } from '../../services/materials';
import './MaterialsList.css';
import './AddMaterial.css'
const AddMaterial = () => {
    const nameRef = useRef();
    const linktodownloadRef = useRef();
    const imageUrlRef = useRef();

    const submitHandler = ( event ) => {
        event.preventDefault(); 
    
        const material = {
            name: nameRef.current.value,
            linktodownload: linktodownloadRef.current.value,
            imageUrl: imageUrlRef.current.value,
        };
    
        if (material.name.trim() === '' || material.linktodownload.trim() === '' || material.imageUrl.trim() === '') {
            alert('Fill out all inputs');
            return;
        }
    
        const materialId = updateMaterial;
    
        if (materialId) {
            // this is an update request
            const updatedMaterial = { ...material, _id: materialId };
            postMaterial(updatedMaterial)
                .then(() => {
                    alert('Material updated successfully');
                    localStorage.removeItem('materialId');
                    window.location.reload();
                })
                .catch(() => alert('Failed to update material'));
        } else {
            // this is a new material
            postMaterial(material)
                .then(() => {
                    alert('Material added successfully');
                    window.location.reload();
                })
                .catch(() => alert('Failed to add material'));
        }
    };
    
    return (
        <div className='materials-list'>
            <h1>Add Material</h1>
            <hr />
            <form onSubmit={submitHandler}>
                <div className="row mb-3">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="name" ref={nameRef} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="linktodownload" className="col-sm-2 col-form-label">Link</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="linktodownload" ref={linktodownloadRef} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="imageUrl" className="col-sm-2 col-form-label">Image URL</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="imageUrl" ref={imageUrlRef} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Add Material</button>
            </form>
        </div>
    );
}
 
export default AddMaterial;