import { useEffect, useState } from 'react';
import { getMaterials } from '../../services/materials';
import './MaterialsList.css';

const MaterialsList = () => {
    const [ materials, setMaterials ] = useState( [] );
    const [ loading, setLoading ] = useState( true );
    const [ error, setError ] = useState( null );

    useEffect(
    
        () => { 
            const helper = async () => {
                try {
                    const materials = await getMaterials();
                    console.log( materials ); 
                    setMaterials( materials );
                } catch( error ) {
                    setError( error );
                } finally {
                    setLoading( false );
                }
            };

            helper();
        },
       []
    );

    return (
        <div className='materials-list'>
            <h1>List of Materials</h1>
            <hr />
            {
                loading && (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )
            }
            {
                error && (
                    <div className="alert alert-danger" role="alert">
                        {error.message}
                    </div>
                )
            }
            {
                materials.length !== 0 && (
                    <div className="row">
                        {
                            materials.map( w => (
                                <div className="col-12 col-md-3 col-lg-4 d-flex">
                                    <div className="card p-3 w-100 my-3">
                                        <img src={w.imageUrl} className="card-img-top" alt={w.name} />
                                        <div className="card-body">
                                            <h5 className="card-title">{w.name}</h5>
                                            <div className="card-text">
                                                <button className="btn btn-primary" style={{backgroundColor: 'blue', color: 'white', fontWeight: 'bold',position: 'absolute', bottom: '0', right: '0', margin: '10px'}} onClick={() => window.open(w.linktodownload, "_blank")}>Link</button>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            ) )
                        }
                    </div>
                )
            }
        </div>

    );
}
 
export default MaterialsList;
