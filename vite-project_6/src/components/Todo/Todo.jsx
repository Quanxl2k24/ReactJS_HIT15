import { useReducer } from "react";
import "./Todo.scss";

//state
const initSate = {
  job: "",
  jobs: [],
};

// action
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DEL_JOB = "del_job";

const set_job = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};

const add_job = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};

const del_job = (payload) => {
  return {
    type: DEL_JOB,
    payload,
  };
};

// const up_job = (payload) =>{
//     tyo
// }
//reducer

const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
      break;

    case DEL_JOB:
      const newjobs = [...state.jobs];
      newjobs.splice(action.payload, 1);
      newState = {
        ...state,
        jobs: newjobs,
      };
      break;
    default:
      throw new Error("Invalid action");
  }
  return newState;
};

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initSate);
  const { job, jobs } = state;

  const handleSubmit = () => {
    dispatch(add_job(job));
    dispatch(set_job(""));
  };

  const handleDel = (index) => {
    dispatch(del_job(index));
  };
  return (
    <div>
      <h1>To do app</h1>
      <section>
        <input
          type="text"
          value={job}
          onChange={(e) => dispatch(set_job(e.target.value))}
          placeholder="Nhap cong viec vao day"
        />
        <button onClick={() => job && handleSubmit()}>Add</button>
      </section>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <button onClick={() => handleDel(index)}>Del</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
