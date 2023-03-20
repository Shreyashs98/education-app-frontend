import axios from "axios";

const getMaterials = async () => {
  // const response = await axios.get( `` )
  const response = await axios.get(`http://localhost:3000/materials`);

  // return response.data;
  return response.data.data;
};

const postMaterial = async (material) => {
  const response = await axios.post(
    `http://localhost:3000/materials`,
    material,
    {
      "Content-Type": "application/json",
    }
  );

  // return response.data;
  return response.data.data;
};
const deleteMaterial = async (_id) => {
  console.log(_id);
  const response = await fetch(`http://localhost:3000/materials/${_id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete material");
  }
};

// Define the base URL for the API
const API_BASE_URL = "http://localhost:3000";

// Define the function for updating a material
const updateMaterial = async (_id, material) => {
  try {
    // Make a PUT request to the API to update the material with the specified _id
    const response = await axios.put(
      `${API_BASE_URL}/materials/${_id}`,
      material
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to update material: ${error.message}`);
  }
};

export { getMaterials, postMaterial, deleteMaterial, updateMaterial };
