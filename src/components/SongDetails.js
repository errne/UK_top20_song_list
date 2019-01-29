import React from 'react'
import '../App.css';

const SongDetails = (props)=> {
  return (
    <div className="song">
    <img id="artwork" src={props.artwork} alt="artwork"/>
    <h2>{props.position}. </h2>
    <h4>{props.title}</h4>
    <h4>{props.artist}</h4>
    <p>{props.genre}</p>
    <audio src={props.sample} controls="controls"/>
    </div>
  );
}

export default SongDetails;
