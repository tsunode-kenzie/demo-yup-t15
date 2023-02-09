import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

const Info = () => {
   const { bookId } = useParams(); 
   const [book, setBook] = useState(null);

   useEffect(() => {
      async function loadBook() {
         try {
            const response = await api.get(`/books/${bookId}`);
            setBook(response.data);
         } catch (error) {
            console.log(error);
         }
      }
      loadBook();
   }, []);

   return (
      <main>
         {book ? (
            <div>
               <h1>{book.name}</h1>
               <p>
                  {book.published} - {book.publishingCompany}
               </p>
               <p>{book.art}</p>
            </div>
         ) : (
            <p>Carregando...</p>
         )}
      </main>
   );
};

export default Info;
