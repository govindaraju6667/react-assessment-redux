import React, { useState } from "react";

const Login = () => {
  const [set, setName] = useState("");
  const [pass, setPass] = useState("");
  const [check, setCheck] = useState([]);

  function Submitting() {
    setCheck([...check, set, pass]);
    console.log(check);
    setName(" ");
    setPass(" ");
  }
  return (
    <div>
      <form>
        <h4>Login page</h4>
        <label>username</label>
        <br />
        <input
          type="text"
          id="text"
          value={set}
          onChange={(event) => setName(event.target.value)}
        ></input>
        <br />
        <label>password</label>
        <br />
        <input
          type="text"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          autoFocus
        />
        <br />

        <input
          type="button"
          value="submit"
          onClick={() => Submitting()}
        ></input>
      </form>
      {check?.map((item) => {
        return (
          <>
            <div>
              <h3>{item}</h3>
            </div>
            {/* <button> DELETE</button> */}
          </>
        );
      })}
    </div>
  );
};

export default Login;
