import React, { Component } from 'react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export class NavBar extends Component {
    render() {
        return (
            <div>
            <Button.Group widths='2' color="black" size="large">
                <Button><Link to="/">Welcome Kelliann</Link></Button>
                <Button><Link to="/favorites">Your Favorites</Link></Button>
            </Button.Group>
            </div>
        )
    }
}

export default NavBar
