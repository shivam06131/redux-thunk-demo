import { useSelector, useDispatch } from "react-redux";
import { increment, decriment } from "./actions";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const isLoggedIn = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>increase</button>
      <button onClick={() => dispatch(decriment())}>decrease</button>
    </div>
  );
};

export default App;
