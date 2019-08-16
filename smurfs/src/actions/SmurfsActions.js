import axios from 'axios';

export const FETCH_SMURFS_DATA_START = 'FETCH_SMURFS_DATA_START';
export const FETCH_SMURFS_DATA_SUCCESS = 'FETCH_SMURFS_DATA_SUCCESS';
export const FETCH_SMURFS_DATA_FAILURE = 'FETCH_SMURFS_DATA_FAILURE';

export const getData = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_DATA_START });
    axios
        .get("https://swapi.co/api/people")
        .then(res => {
            dispatch({ type: FETCH_SMURFS_DATA_SUCCESS, payload: res.data.results });
            console.log(res)
        })
        .catch(err => console.log(err));
};



export const getData = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_DATA_START });
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: FETCH_SMURFS_DATA_SUCCESS, payload: res.data });
            // this.setState(() => ({ smurfs: res.data }));
        })
        .catch(err => {
            console.error('Problem smurfing your smurf', err)
        })
}

export const postData = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_DATA_START });
    axios
        .post(`http://localhost:3333/smurfs`, smurf)
        .then(res => {
            // console.log(res)
            alert('A new Smurf has entered the vilage!')
            dispatch({ type: FETCH_SMURFS_DATA_SUCCESS, payload: res.data });
            // this.setState({ smurfs: res.data })
        })
        .catch(err => console.log(err))
}