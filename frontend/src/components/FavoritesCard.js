import React, { Component } from 'react'
import {Image, Card} from 'semantic-ui-react'

export class FavoritesCard extends Component {
    render() {
        return (
            <div className="ui-card">
                <Card.Group> 
                    <Card>
                        <Image 
                        size='medium'
                        bordered
                        rounded
                        src={this.props.book.image_url}
                        />
                        <Card.Content>
                            <Card.Header>{this.props.book.title}</Card.Header>
                            <Card.Meta>{this.props.book.authors}</Card.Meta>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </div>
        )
    }
}

export default FavoritesCard
