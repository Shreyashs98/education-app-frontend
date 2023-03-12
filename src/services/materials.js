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

export {
    getMaterials,
    postMaterial
};