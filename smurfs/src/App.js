import React, { useEffect } from "react";
import { getData } from "./actions";
import Smurfs from "./components/Smurfs"

import { connect } from "react-redux";
import SmurfForm from "./components/SmurfForm";
const App = (props) => {


  useEffect(() => {
    props.getData();
  }, []);


  return (
    <div>
      <SmurfForm />
      <Smurfs />
    </div>
  );
}

export default connect(
  null,
  { getData }
)(App);