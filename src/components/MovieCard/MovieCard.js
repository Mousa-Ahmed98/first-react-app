import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export function MovieCard(props) {
  
  const navigate = useNavigate();
  return (
    <>
      <div className="card p-0">
                <div className="card-body  text-center">

                    <img src={`https://image.tmdb.org/t/p/w500/${props.movieDetails.backdrop_path}`} className="card-img-top rounded  mx-auto" alt="..." />
                    <h5 className="card-title text-danger ">{props.movieDetails.original_language}</h5>
                    <h4 className="card-title">{props.movieDetails.original_title}</h4>
                    <h4 className="card-title">{props.movieDetails.release_date}</h4>
                    <button className="btn btn-info " onClick={()=>navigate(`details/${props.movieDetails.id}`)} >Details</button>

                </div>
            </div>
    </>
  );
}
