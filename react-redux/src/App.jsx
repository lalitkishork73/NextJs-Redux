import { connect } from 'react-redux'
import { useState } from 'react';
import { action_change_name, action_add_wish } from './store/action'

function App(props) {
  const [input, setInput] = useState('');
  console.log(props)
  return (
    <div style={{ color: 'black' }}>
      <h1>Welcome to Redux Development</h1>
      <h1>My name is {props.name}</h1>
      {
        props.wish.map((i) => {
          return <>
            <h1>{i}</h1>
          </>
        })
      }
      <input type="text" placeholder='Input' value={input}
        onChange={(e) => { setInput(e.target.value) }} />
      <button onClick={() => {
        props.changeName(input);
      }}>change</button>
      <button onClick={() => {
        props.addWish(props.name);
      }}>AddElem</button>
    </div>
  );
}



const mapStateToProps = (state) => {
  return {
    myname: state.name,
    name: state.name,
    wish: state.wish
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    //   changeName: () => { dispatch(action_change_name()) },
    changeName: (number) => { dispatch(action_change_name(number)) },
    addWish: (input) => { dispatch(action_add_wish(input)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
