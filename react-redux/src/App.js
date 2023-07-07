import { connect } from 'react-redux'
import { useState } from 'react';
function App(props) {
  const [input, setInput] = useState('');
  console.log(props)
  return (
    <div style={{ color: 'black' }}>
      <h1>This is redux </h1>
      <h1>My name is {props.myname}</h1>
      <input type="text" placeholder='Input' value={input}
      onChange={(e)=>{setInput(e.target.value)}} />
      <button onClick={() => {
        props.changeName(input);
      }}>Add</button>
    </div>
  );
}



const mapStateToProps = (state) => {
  return {
    myname: state.name
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (name) => { dispatch({ type: 'change', payload: name }) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
