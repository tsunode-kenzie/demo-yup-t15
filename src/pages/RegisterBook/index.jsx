import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { api } from "../../services/api";
import { schema } from "./validations";

// books
// [GET] /books busca todos os livros
// [GET] /books/1 busca um livro especifico
// [DELETE] /books/1 busca um livro especifico
// [POST] /books busca um livro especifico

const RegisterBook = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  console.log("Teste", errors);

  const registerBook = async (data) => {
    console.log(data);

    try {
      const response = await api.post("/books", data);
      console.log(response);
      const id = response.data.id;

      toast("Cadastrado com sucesso");
      navigate(`/${id}`);
      // toast
    } catch (error) {
      console.error(error);
      reset();
      // toast
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit(registerBook)}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input id="name" type="text" {...register("name")} />
          <p>{errors.name?.message}</p>
        </div>
        <div>
          <label htmlFor="name">Capa:</label>
          <input type="text" {...register("cover")} />
          <p>{errors.cover?.message}</p>
        </div>
        <div>
          <label htmlFor="name">Publicado em:</label>
          <input type="text" {...register("published")} />
          <p>{errors.published?.message}</p>
        </div>
        <div>
          <label htmlFor="name">Editora:</label>
          <input type="text" {...register("publishingCompany")} />
          <p>{errors.publishingCompany?.message}</p>
        </div>
        <div>
          <label htmlFor="name">Número de páginas:</label>
          <input type="text" {...register("numberPages")} />
          <p>{errors.numberPages?.message}</p>
        </div>
        <div>
          <label htmlFor="name">Licenciador:</label>
          <input type="text" {...register("licensor")} />
          <p>{errors.licensor?.message}</p>
        </div>
        <div>
          <label htmlFor="name">Categoria:</label>
          <input type="text" {...register("category")} />
          <p>{errors.category?.message}</p>
        </div>
        <div>
          <label htmlFor="name">Gênero:</label>
          <input type="text" {...register("genre")} />
          <p>{errors.genre?.message}</p>
        </div>
        <div>
          <label htmlFor="name">Artista:</label>
          <input type="text" {...register("art")} />
          <p>{errors.art?.message}</p>
        </div>
        <div>
          <label htmlFor="name">Editor:</label>
          <input type="text" {...register("editor")} />
          <p>{errors.editor?.message}</p>
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </main>
  );
};

export default RegisterBook;
