import { FormEvent, useRef, useState } from "react";

type FormDataType = {
  name: string;
  email: string;
  password: string;
};

export const FormComp = () => {
  const [submitData, setSubmitData] = useState<FormDataType>({
    name: "",
    email: "",
    password: "",
  });

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const passwordValue = password.current!.value;

    setSubmitData({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your name" ref={name} />
      <input type="email" placeholder="Enter your email" ref={email} />
      <input type="password" placeholder="Enter your password" ref={password} />
      <button type="submit">Submit</button>

      <section>
        <h1>Name: {submitData.name}</h1>
        <h1>Email: {submitData.email}</h1>
        <h1>Password: {submitData.password}</h1>
      </section>
    </form>
  );
};
