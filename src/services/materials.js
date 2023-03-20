import axios from 'axios';

const getMaterials = async () => {
  
    // const response = await axios.get( `` )
    const response = await axios.get( `http://localhost:3000/materials` )
    
    // return response.data;
    return response.data.data;
};

const postMaterial = async ( material ) => {
    const response = await axios.post(
        `http://localhost:3000/materials`,
        material,
        {
            'Content-Type': 'application/json'
        }
    );

    // return response.data;
    return response.data.data;
};
const deleteMaterial = async (id) => {
    const response = await fetch(`http://localhost:3000/materials/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error("Failed to delete material");
    }
};


export {
    getMaterials,
    postMaterial,
    deleteMaterial
};