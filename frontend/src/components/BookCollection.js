import React, { Component } from "react";
import BookCard from "./BookCard";
import { Grid, Container } from "semantic-ui-react";

var favoritesUrl = "http://localhost:3001/favorites";

export class BookCollection extends Component {
  favoriteBook = book => {
    const { user_id } = this.props;
    var book_string = JSON.stringify(book);

    fetch(favoritesUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: user_id,
        title: book.volumeInfo.title,
        book_string: book_string,
        authors: book.volumeInfo.authors[0],
        image_url: book.volumeInfo.imageLinks.thumbnail
      })
    });
  };

  render() {
    return (
      <div>
      <Container>
        <Grid divided>
          {this.props.books.map((book, index) => (
            <div key={index}>
              <BookCard onFavoriteBook={this.favoriteBook} book={book} />
            </div>
          ))}
        </Grid>
      </Container>
      </div>
    );
  }
}

export default BookCollection;

