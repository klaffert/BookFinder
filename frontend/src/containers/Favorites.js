import React, { Component } from 'react'
import FavoritesCard from '../components/FavoritesCard'
import {Container, Grid} from 'semantic-ui-react'

export class Favorites extends Component {

    state = {
        favoriteBooks: []
    }

    showFavoriteBooks = () => {
        var favoriteBooks = 'http://localhost:3001/favorites';
  
        fetch(favoriteBooks)
        .then(response => {
        return response.json();
        })
        .then(data => {
            this.setState({
                favoriteBooks: data
            })
        });
        };
  
    componentDidMount() {
        this.showFavoriteBooks()
    }


    render() {
        return (
            <div>
            <Container>
            <Grid divided padded="vertically">
                {this.state.favoriteBooks.map((book,index) => (
                <FavoritesCard book={book}/>
                ))}   
            </Grid>
            </Container>
            </div>
        )
    }
}

export default Favorites
