import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './Details.css';

export default () => {
    const [pet, setPet ] = useState({})
    const {id} = useParams();
    const [likes, setLikes] = useState(pet.likes);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pet/" + id)
            .then(res => {
                setPet({
                    ...res.data
                });
                setLikes(res.data.likes);
            })
            .catch(err => {console.log(err)})
    }, [])

    const handleDelete = () => {
        axios.delete("http://localhost:8000/api/pet/delete/" + id)
        .then(() => window.location.replace('http://localhost:3000/'))
        .catch(err => console.log(err))
    }

    const handleLike = () => {
        axios.put("http://localhost:8000/api/pet/like/" + id)
        .then(res => {
            setLikes(res.data.likes)
            setLiked(true)
        })
        .catch(err => console.log(err))
    }

      return (
        <div className="pet-details-container">
            <h1>Pet Shelter!</h1>
            <h3>Información sobre {pet.name}</h3>
            <button className="red-button" onClick={handleDelete}>Adoptar!</button>
            <div className="pet-details">
                <p><strong>Tipo: </strong>{pet.type}</p>
                <p><strong>Descripción: </strong>{pet.description}</p>
                <p><strong>Skill 1: </strong>{pet.skill1}</p>
                <p><strong>Skill 2: </strong>{pet.skill2}</p>
                <p><strong>Skill 3: </strong>{pet.skill3}</p>
            </div>
            
            <button className="green-button" onClick={handleLike} disabled={liked}>{liked ? 'Liked' : 'Like!'}</button>
            <p><strong>Likes: {likes}</strong></p>
        </div>
    )
}
