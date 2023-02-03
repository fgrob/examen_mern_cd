import React, { useState } from 'react';
import axios from 'axios';

export default () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");

    const [errorName, setErrorName] = useState("");
    const [errorType, setErrorType] = useState("");
    const [errorDescription, setErrorDescription] = useState("");

    const onSubmitHandler = async (e) => {
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
          try {
            await axios.post('http://localhost:8000/api/crear', {
              name,
              type,
              description,
              skill1,
              skill2,
              skill3
            });
            window.location.replace('http://localhost:3000');
          } catch (err) {
            console.log(err);
          }
        }
      };


return (
    <div className="form-container">
      <h2>Agregar Mascota al refugio</h2>  
      <form onSubmit={onSubmitHandler}>
        <div className="form-left">
          <p>
            <label><strong>Nombre</strong></label><br />
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
            <br/>
            {errorName && <span>{errorName}</span>}
          </p>
          <p>
            <label><strong>Tipo</strong></label><br />
            <input type="text" onChange={(e) => setType(e.target.value)} value={type} />
            <br/>
            {errorType && <span>{errorType}</span>}
          </p>
          <p>
            <label><strong>Descripción</strong></label><br />
            <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
            <br/>
            {errorDescription && <span>{errorDescription}</span>}
          </p>
        </div>
        <div className="form-right">
          <p>
            <label><strong>Skill 1</strong></label><br />
            <input type="text" onChange={(e) => setSkill1(e.target.value)} value={skill1} />
          </p>
          <p>
            <label><strong>Skill 2</strong></label><br />
            <input type="text" onChange={(e) => setSkill2(e.target.value)} value={skill2} />
          </p>
          <p>
            <label><strong>Skill 3</strong></label><br />
            <input type="text" onChange={(e) => setSkill3(e.target.value)} value={skill3} />
          </p>
        </div>
        <input type="submit" />
      </form>
    </div>
)

}
