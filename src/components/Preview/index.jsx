import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../services/api";

const Preview = ({abacaxi}) => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(abacaxi)

  useEffect(() => {
    setLoading(true);
    async function loadBook() {
      try {
        const response = await api.get(`/books/${bookId}`);
        setBook(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    loadBook();
  }, [bookId]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!book) {
    return <p>Livro não encontrado</p>;
  }

  return (
    <section>
      <img src={book.cover} alt={book.name} />
      <aside>
        <div>
          <h1>{book.name}</h1>
          <p>
            {book.published} - {book.publishingCompany}
          </p>
          <p>{book.art}</p>
        </div>

        <Link to={`/book/${book.id}`}>Mais infos</Link>
      </aside>
    </section>
  );
};

export default Preview;
