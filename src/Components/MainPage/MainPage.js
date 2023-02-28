import React, { useState } from "react";
import { MainContainer, Form, Input } from "./styles";
import { useForm } from "../../hooks/useForm";

function MainPage() {
  const { form, onChangeForm } = useForm({
    nome: "",
    idade: "",
    email: "",
    profissao: "",
  });
  // const [nome, setNome] = useState("");
  // const [idade, setIdade] = useState("");
  // const [email, setEmail] = useState("");
  // const [form, setForm] = useState({ nome: "", idade: "", email: "" });

  // const onChangeNome = (event) => {
  //   setNome(event.target.value);
  // };

  // const onChangeIdade = (event) => {
  //   setIdade(event.target.value);
  // };

  // const onChangeEmail = (event) => {
  //   setEmail(event.target.value);
  // };

  // const onChangeForm = (event) => {
  //   const { name, value } = event.target;
  //   setForm({ ...form, [name]: value });
  // };

  const handleClick = (event) => {
    event.preventDefault();

    console.log(
      `nome: ${form.nome}, idade: ${form.idade}, e-mail: ${form.email}, profissão: ${form.profissao}`
    );
  };

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome:</label>
        <Input
          id="nome"
          name="nome"
          value={form.nome}
          onChange={onChangeForm}
          required
        />

        <label htmlFor="idade">Idade:</label>
        <Input
          id="idade"
          name="idade"
          type="number"
          value={form.idade}
          onChange={onChangeForm}
          required
        />

        <label htmlFor="email">E-mail:</label>
        <Input
          id="email"
          name="email"
          // type="email"
          pattern="\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b"
          placeholder="nome@email.com"
          title="e-mail precisa ser no formato nome@email.com"
          value={form.email}
          onChange={onChangeForm}
          required
        />

        <label htmlFor="profissao">Profissão:</label>
        <Input
          id="profissao"
          name="profissao"
          value={form.profissao}
          onChange={onChangeForm}
          required
        />

        <button type="submit">Enviar dados</button>
      </Form>
    </MainContainer>
  );
}

export default MainPage;
