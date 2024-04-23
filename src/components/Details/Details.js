import { useNavigate, useParams } from 'react-router-dom';
import { axiosInstance } from '../api/config';
import { useEffect, useState } from 'react';
export function Details(){
    const params = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        axiosInstance.get(`/${params.id}?api_key=e6ae548569ab7760959157768fb86a81`)
        .then((res) => setMovieDetails(res.data))
        .catch();
    }, []);
    return(
        <>
        <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="row g-0">
              <div className="col-md-5">
                <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`} className="img-fluid rounded-start" alt="Movie Poster" />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h3 className="card-title">{movieDetails.original_title}</h3>
                  <p className="card-text"><strong>Release Date:</strong> {movieDetails.release_date}</p>
                  <p className="card-text"><strong>Language:</strong> {movieDetails.original_language}</p>
                  <p className="card-text"><strong>Overview:</strong> {movieDetails.overview}</p>
                </div>
              </div>
            </div>
            <div className="card-footer bg-transparent d-flex justify-content-center">
              <button className="btn btn-warning" onClick={() => navigate('/')}>Back To List</button>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    );
}