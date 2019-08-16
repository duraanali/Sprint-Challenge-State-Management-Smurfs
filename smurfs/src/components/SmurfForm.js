import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postData } from "../actions";
function SmurfForm(props) {

  const [smurf, setSmurf] = useState([]);

  const addSmurf = e => {
    e.preventDefault();

  };

  const handleInputChange = e => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  return (
    <div className="SmurfForm">
      <form onSubmit={addSmurf}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={smurf.name}
          name="name"
        />
        <input
          onChange={handleInputChange}
          placeholder="age"
          value={smurf.age}
          name="age"
        />
        <input
          onChange={handleInputChange}
          placeholder="height"
          value={smurf.height}
          name="height"
        />
        <button type="submit" onClick={() => props.postData(smurf)}>Add to the village</button>
      </form>
    </div>
  );
}

export default connect(
  null,
  {
    postData
  }
)(SmurfForm);