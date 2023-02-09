import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import Card from "../../components/Card";
import { api } from "../../services/api";
import { CardsContainer, Section } from "./styles";

const Home = () => {
  const [books, setBooks] = useState([]);
  const { bookId } = useParams();

  useEffect(() => {
    async function loadBooksData() {
      try {
        const response = await api.get("/books");
        setBooks(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadBooksData();
  }, []);

  return (
    <Section>
      <Link to='/register'>Cadastrar Livro</Link>
      {bookId ? <Outlet /> : <h1>Selecione um livro abaixo</h1>}

      <CardsContainer>
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </CardsContainer>
    </Section>
  );
};

export default Home;
