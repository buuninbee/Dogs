import React from "react";
import Input from "../Form/Input";
import Button from "../Form/Button";
import useForm from "../../Hooks/useForm";
import { USER_POST } from "../../api";
import { UserContext } from "../../UserContext";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helpers/Error";
import Head from "../Helpers/Head";

const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <Head title="Crie sua conta" />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input type="text" label="Nome" name="username" {...username} />
        <Input type="email" label="Email" name="email" {...email} />
        <Input type="password" label="Senha" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        {<Error error={error} />}
      </form>
    </section>
  );
};

export default LoginCreate;
