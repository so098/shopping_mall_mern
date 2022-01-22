import React, { useState } from "react";

function LoginPage() {
  // const [Email, setEmail] = useState(initialState);
  return (
    <div>
      <form>
        <label>Email</label>
        <input type="email" value onChange />
        <label>Password</label>
        <input type="password" value onChange />
      </form>
    </div>
  );
}

export default LoginPage;
