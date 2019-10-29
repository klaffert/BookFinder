import React, { Component } from 'react'
import {Form, Button} from 'semantic-ui-react'

export class Login extends Component {

    constructor() {
        super()
    
        this.state = {
             name: ''
        }
    }

    handleLoginSubmit = () => {
        console.log("you are in handleLoginSubmit")
    }

    render() {
        return (
            <div 
                style={{
                position: 'absolute', 
                left: '50%', 
                top: '50%',
                transform: 'translate(-50%, -50%)' }}>
                <Form>
                    <Form.Field inline >
                        <label>Name</label>
                        <input placeholder='Enter name here...'  />
                    </Form.Field>
                        <Button type='submit' onClick={() => this.handleLoginSubmit()}>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default Login
