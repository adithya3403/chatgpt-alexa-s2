// we succesfully added our data into the backend 
// now we need to display it in the frontend

import React, { useState, useEffect } from "react";
import DeleteUserButton from "./DeleteUserButton.js";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        getUsers();
    }
    , []);

    const getUsers = async () => {
        const response = await axios.get("http://localhost:5050/data");
        setUser(response.data);
    }

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:5050/data/${id}`);
            getUsers();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="columns mt-5">
            <div className="column is-20">
                <Link to="add" className="button is-success">Add New</Link>
                {/* increase size of the table towards the right so that it fills the whole page*/}
                <table className="table is-striped is-fullwidth mt-2">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Topics</th>
                            <th>Question</th>
                            <th>Student Answer</th>
                            {/* <th>ChatGPT Answer</th> */}
                            <th>Rating</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.studentName}</td>
                                <td>{user.topic}</td>
                                <td>{user.question}</td>
                                <td>{user.studentAns}</td> 
                                {/* <td>{user.chatGPTAns}</td> */}
                                <td>{user.rating}</td>
                                <td>
                                    <Link to={`edit/${user._id}`} className="button is-info is-small mr-1">Edit</Link>
                                    <DeleteUserButton user={user} onDelete={deleteUser} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserList;