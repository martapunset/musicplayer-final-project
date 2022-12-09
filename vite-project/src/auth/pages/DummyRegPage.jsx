import React from "react";

export const RegisterPage = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();

    //2.fetch post
    (async () => {
      const rawResponse = await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        //1.recoger info del formulario
        body: JSON.stringify({
          name: e.target.userName.value,
          email: e.target.userEmail.value,
          password: e.target.userPass.value,
        }),
      });
      const content = await rawResponse.json();
      console.log(content);
    })();
  };

  return (
    <>
      <h1 className="text-center text-white">Register page</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="userName"
          className="form-control"
          placeholder="Tu nombre"
        />
        <input
          type="text"
          name="userEmail"
          className="form-control"
          placeholder="Tu email"
        />
        <input
          type="text"
          name="userPass"
          className="form-control"
          placeholder="Tu password"
        />
        <button type="submit" className="btn btn-success">
          Send
        </button>
      </form>
    </>
  );
};
