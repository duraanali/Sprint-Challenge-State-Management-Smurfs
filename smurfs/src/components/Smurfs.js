import React from 'react';

import Smurf from './Smurf';
import { connect } from 'react-redux';
function Smurfs(props) {

  return (
    <div className="Smurfs">
      <h1>Smurf Village</h1>
      <ul>
        {props.allSmurfs.map(smurf => {
          return (
            <Smurf
              name={smurf.name}
              id={smurf.id}
              age={smurf.age}
              height={smurf.height}
              key={smurf.id}
            />
          );
        })}
      </ul>
    </div>
  );

}

const mapStateToProps = state => {
  return {
    allSmurfs: state.smurfs
  };
};
export default connect(
  mapStateToProps,
  {}
)(Smurfs);