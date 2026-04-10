import React from "react";

const Login = () => {

  const handleLogin = () => {
    const domain = "https://us-east-131ra1kfjf.auth.us-east-1.amazoncognito.com";
    const clientId = "48aq8ofivmu35lqbmno1m2ktpg";
    const redirectUri = "https://d84l1y8p4kdic.cloudfront.net";

    // ✅ IMPORTANT: response_type=token
    const url = `${domain}/login?client_id=${clientId}&response_type=token&scope=email+openid&redirect_uri=${redirectUri}`;

    window.location.href = url;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login with Cognito</button>
    </div>
  );
};

export default Login;