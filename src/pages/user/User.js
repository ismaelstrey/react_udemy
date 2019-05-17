import React, { Component } from 'react';
import UserForm from './UserForm';

class User extends Component {
    render() {
       
        const list = [
            {
                id: "1",
                name: "ismael strey Pereira",
                email: "ismaelstrey@hotmail.com"

            },
            {
                id: "2",
                name: "rafasel strey Pereira",
                email: "rafaselstrey@hotmail.com"

            }
        ]
        return (
            <div>
                <UserForm></UserForm>
                <table border="1px">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            list.map((item, index) => {
                            return <tr  key={index} >
                                <td>{item.name} </td>
                                <td>{item.email}</td>
                            </tr>
                        })}


                    </tbody>
                </table>
            </div>
        );
    }

}

export default User;
