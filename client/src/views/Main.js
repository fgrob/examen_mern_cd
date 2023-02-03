import React, { useEffect, useState } from 'react';
import PetList from '../components/PetList';
import axios from 'axios';

export default () => {
    const[pet, setPet] = useState([]);
    const[loaded, setLoaded] = useState(false);
    useEffect(()=>{
      axios.get('http://localhost:8000/api/pets')
        .then(res => {
          setPet(res.data);
          setLoaded(true);
        })
        .catch(err => console.log(err))
    }, [])

    return (
      <div className='App'>
        {loaded && <PetList pets={pet}/>}
      </div>
    );
}