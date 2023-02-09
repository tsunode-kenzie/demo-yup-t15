import { Link } from "react-router-dom";
import { Container } from "./styles";

const Card = ({book}) => {
  return (
    <Container>
      <Link to={`${book.id}`}>
        <h3>{book.name}</h3>
        <img src={book.cover} alt={book.name} />
        <p>Gênero: {book.genre}</p>
        <p>Artista: {book.art}</p>
      </Link>
    </Container>
  );
};

export default Card;
