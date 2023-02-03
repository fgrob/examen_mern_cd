import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default props => {
    const { id } = useParams()
    const[name, setName] = useState('');
    const[type, setType] = useState('');
    const[description, setDescription] = useState('');
    const[skill1, setSkill1] = useState('');
    const[skill2, setSkill2] = useState('');
    const[skill3, setSkill3] = useState('');
    
    const [errorName, setErrorName] = useState("");
    const [errorType, setErrorType] = useState("");
    const [errorDescription, setErrorDescription] = useState("");
    
    const navigate = useNavigate();
    const [navigateToHome, setNavigateToHome] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + id)
            .then( res => {
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkill1(res.data.skill1);
                setSkill2(res.data.skill2);
                setSkill3(res.data.skill3);
            })
    }, [])

    const updatePet = async e => {
        e.preventDefault();
        let isValid = true;
        if (!name) {
            setErrorName("Se requiere nombre");
            isValid = false;
          } else if (name.length < 3) {
            setErrorName("El nombre debe tener al menos 3 caracteres");
            isValid = false;
          } else {
            setErrorName("");
          }
        
          if (!type) {
            setErrorType("Se requiere tipo de mascota");
            isValid = false;
          } else if (type.length < 3) {
            setErrorType("El tipo debe tener al menos 3 caracteres");
            isValid = false;
          } else {
            setErrorType("");
          }
        
          if (!description) {
            setErrorDescription("Se requiere descripción");
            isValid = false;
          } else if (description.length < 3) {
            setErrorDescription("La descripción debe tener al menos 3 caracteres");
            isValid = false;
          } else {
            setErrorDescription("");
          }
          if (isValid) {
              await axios.put('http://localhost:8000/api/pet/edit/' + id, {
              name,
              type,
              description,
              skill1,
              skill2,
              skill3
          });
          setNavigateToHome(true);
          }

    }

    useEffect(() => {
        if (navigateToHome) {
            window.location.replace('http://localhost:3000')
        }
    }, [navigateToHome, navigate]);

    return (
        <div>
            <h1>Actualizar mascota</h1>
            <form onSubmit={updatePet}>
                <p>
                    <label>Nombre</label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                    <br/>
                    {errorName && <span>{errorName}</span>} 
                </p>
                <p>
                    <label>Tipo</label><br />
                    <input type="text" 
                    name="type"
                    value={type} 
                    onChange={(e) => { setType(e.target.value) }} />
                    <br/>
                    {errorType && <span>{errorType}</span>} 
                    
                </p>
                <p>
                    <label>Descripción</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                    <br/>
                    {errorDescription && <span>{errorDescription}</span>} 
                </p>
                <p>
                    <label>Skill 1</label><br />
                    <input type="text" 
                    name="skill1"
                    value={skill1} 
                    onChange={(e) => { setSkill1(e.target.value) }} />
                </p>
                <p>
                    <label>Skill 2</label><br />
                    <input type="text" 
                    name="skill2"
                    value={skill2} 
                    onChange={(e) => { setSkill2(e.target.value) }} />
                </p>
                <p>
                    <label>Skill 3</label><br />
                    <input type="text" 
                    name="skill3"
                    value={skill3} 
                    onChange={(e) => { setSkill3(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
            
        </div>
    )
}