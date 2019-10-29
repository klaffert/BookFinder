import React, { Component } from 'react'
import BookCollection from '../components/BookCollection'
import { Divider, Icon, Input} from 'semantic-ui-react'


export class BookContainer extends Component {
    
    state = {
        searchValue: '',
        books: []
    }
  
    getBooks = searchInput => {
        var searchUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchInput}&maxResults=36`;
  
        fetch(searchUrl)
        .then(response => {
        return response.json();
        })
        .then(data => {
            this.setState({
                books: data.items
            })
        });
        };
  
    handleOnChange = event => {
        this.setState({
            searchValue: event.target.value
        })
    }
  
    handleSearch = () => {
        this.getBooks(this.state.searchValue)
    }

    handleKeyPress = event => {
        if(event.key === 'Enter') {
            this.getBooks(this.state.searchValue)
        }
    }
  
    render() {
        return (
            <div>
                <Input
                    size='massive'
                    onChange={event => this.handleOnChange(event)}
                    value={this.state.searchValue}
                    icon={<Icon 
                        name='search' inverted circular link
                        onClick={this.handleSearch}
                        />}
                    placeholder='Search book titles...'
                    onKeyPress={this.handleKeyPress}
                />
                <Divider hidden />
                <BookCollection user_id={this.props.user_id} books={this.state.books}/>
            </div>
        )
    }
}

export default BookContainer
