import React, { Component } from "react";
import {
  Label,
  Rating,
  Image,
  Card,
  Modal,
  Header,
  Button,
  Icon,
  Popup,
  Dimmer
} from "semantic-ui-react";
import defaultBook from "../images/defaultBook.jpg";

export class BookCard extends Component {
  state = {};

  handleShow = () => {
    this.setState({ active: true });
  };

  handleHide = () => {
    this.setState({ active: false });
  };

  handleClick = () => {
    this.props.onFavoriteBook(this.props.book);
    debugger;
  };

  addDefaultSrc(event) {
    event.target.src = { defaultBook };
  }

  render() {
    const { active } = this.state;
    const content = <div>Click for more details!</div>;

    return (
      <div className="cards">
        <div className="card">
          <Modal
            trigger={
              <div>
                <Card.Group>
                  <Card>
                    <Dimmer.Dimmable
                      as={Image}
                      dimmed={active}
                      dimmer={{ active, content }}
                      onMouseEnter={this.handleShow}
                      onMouseLeave={this.handleHide}
                      size="medium"
                      bordered
                      rounded
                      src={this.props.book.volumeInfo.imageLinks.thumbnail}
                      onError={this.addDefaultSrc}
                    />

                    <Card.Content>
                      <Card.Header>
                        {this.props.book.volumeInfo.title}
                      </Card.Header>
                      <Card.Meta>
                        {this.props.book.volumeInfo.authors}
                      </Card.Meta>
                    </Card.Content>
                    <Card.Content textAlign="centered" extra>
                      <Rating
                        icon="star"
                        defaultRating={this.props.book.volumeInfo.averageRating}
                        maxRating={5}
                        clearable
                      ></Rating>
                    </Card.Content>
                    <Card.Content extra>
                      <Label color="blue">
                        Reviews
                        <Label.Detail>
                          {this.props.book.volumeInfo.ratingsCount}
                        </Label.Detail>
                      </Label>
                    </Card.Content>
                  </Card>
                </Card.Group>
              </div>
            }
          >
            <Header content="Description" />
            <Modal.Content>
              <p>{this.props.book.volumeInfo.description}</p>
            </Modal.Content>
            <Modal.Actions>
              <Button color="red" onClick={() => this.handleClick()}>
                <Popup
                  trigger={<Icon size="large" name="heart" />}
                  content="You favorited this book."
                  inverted
                />
              </Button>
            </Modal.Actions>
          </Modal>
        </div>
      </div>
    );
  }
}

export default BookCard;
