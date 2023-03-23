import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMaterials, deleteMaterial } from "../../services/materials";
//import { updateMaterial} from '../../services/materials';
import "./MaterialsList.css";

const MaterialsList = () => {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const materials = await getMaterials();
        setMaterials(materials);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMaterials();
  }, []);

  const handleDelete = async (_id) => {
    try {
      await deleteMaterial(_id);
      setMaterials((prevMaterials) =>
        prevMaterials.filter((material) => material._id !== _id)
      );
    } catch (error) {
      setError(error);
    }
  };

  const handleUpdate = (_id) => {
    // const materialToUpdate = materials.find((material) => material._id === _id);
    // if (materialToUpdate) {
    //updateMaterial(materialToUpdate);
    handleDelete(_id);
    navigate(`/materials/add?_id=${_id}`);
    // }
  };

  return (
    <div className="materials-list">
      <br/>
      <h1 className="title"> List of Materials</h1>
      <hr />
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error.message}
        </div>
      )}
      {materials.length !== 0 ? (
        <div className="row">
          {materials.map((material) => (
            <div className="col-12 col-md-3 col-lg-4 d-flex" key={material._id}>
              <div className="card p-3 w-100 my-3">
                <img
                  src={material.imageUrl}
                  className="card-img-top"
                  alt={material.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{material.name}</h5>
                  <div className="card-text">
                    <button
                      className="btn btn-primary"
                      style={{
                        backgroundColor: "blue",
                        color: "white",
                        fontWeight: "bold",
                        position: "absolute",
                        bottom: "0",
                        right: "0",
                        margin: "auto",
                        left: "0",
                      }}
                      onClick={() =>
                        window.open(material.linktodownload, "_blank")
                      }
                    >
                      Link
                    </button>
                  </div>
                  <button
                    className="btn btn-primary"
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      fontWeight: "bold",
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      margin: "0px",
                    }}
                    onClick={() => handleDelete(material._id)}
                  >
                    Delete
                  </button>
                  <div className="card-text">
                    <button
                      className="btn btn-primary"
                      style={{
                        backgroundColor: "green",
                        color: "white",
                        fontWeight: "bold",
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        margin: "0px",
                      }}
                      onClick={() => handleUpdate(material._id)}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="alert alert-info" role="alert">
          No materials found
        </div>
      )}
    </div>
  );
};

export default MaterialsList;
