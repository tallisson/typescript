// S => State
// T => Type
// K => Key
// V => Value
// E => Element
function useState<S extends number | string = string>() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState
  }

  return {  getState, setState };
}

const newState = useState();
newState.setState('Oi');
console.log(newState.getState());