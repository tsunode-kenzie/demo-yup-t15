import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// 1aA$sdsdsdds

const schema = yup
  .object({
    password: yup
      .string()
      .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
      .matches(/(\d)/, "Deve conter ao menos 1 número")
      .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
      .matches(/(\W|_)/, "Deve conter no mínimo 1 caracter especial")
      .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres"),
    passwordConfirmation: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "Confirmação de senha deve ser igual a senha"
      ).required('Confirmação de senha é obrigatória'),
  })
  .required();

const RegisterUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log("Teste", errors);

  const registerUser = async (data) => {
    console.log(data);
  };

  return (
    <main>
      <form onSubmit={handleSubmit(registerUser)}>
        <div>
          <label htmlFor="password">Senha:</label>
          <input id="password" type="text" {...register("password")} />
          <p>{errors.password?.message}</p>
        </div>
        <div>
          <label htmlFor="passwordConfirmation">Confirmar senha:</label>
          <input type="text" {...register("passwordConfirmation")} />
          <p>{errors.passwordConfirmation?.message}</p>
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </main>
  );
};

export default RegisterUser;
