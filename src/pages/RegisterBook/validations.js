export const schema = yup
  .object({
    name: yup.string().required("Nome é obrigatório"),
    published: yup.string().required("Data de publicação é obrigatória"),
    publishingCompany: yup.string().required("Editora é obrigatória"),
    cover: yup.string().url("Deve ser uma url").required("Capa é obrigatória"),
    numberPages: yup
      .number()
      .typeError("Deve ser um número")
      .required("Quantidade de páginas é obrigatória"),
    licensor: yup.string().required("Licenciador é obrigatório"),
    category: yup.string().required("Categoria é obrigatória"),
    genre: yup.string().required("Gênero é obrigatório"),
    art: yup.string().required("Artista é obrigatório"),
    editor: yup.string().required("Editor é obrigatório"),
  })
  .required();
