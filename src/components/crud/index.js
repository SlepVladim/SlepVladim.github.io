import React from "react";
import StartFirebase from "../firebaseConfig/index";
import { ref, set, get, update, remove, child } from "firebase/database";

import './index.css'

export class Crud extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            db: '',
            username: '',
            fullname: '',
            phonenumber: '',
        }
        this.interface = this.interface.bind(this)
    }
    componentDidMount() {
        this.setState({
            db: StartFirebase(),
        })
    }

    render() {
        return(
            <>
                <label>Enter username</label>
                <input type='text' id='userbox' value={this.state.username} onChange={e => {this.setState({username: e.target.value})}} />
                <br/><br/>
                <label>Enter full name</label>
                <input type='text' id='userbox' value={this.state.fullname} onChange={e => {this.setState({fullname: e.target.value})}} />
                <br/><br/>
                <label>Enter phonenumber</label>
                <input type='text' id='userbox' value={this.state.phonenumber} onChange={e => {this.setState({phonenumber: e.target.value})}} />
                <br/><br/>
            
                <button id="addBtn" onClick={this.interface}>Add Data</button>
                <button id="updateBtn" onClick={this.interface}>Update Data</button>
                <button id="deleteBtn" onClick={this.interface}>Delete Data</button>
                <button id="selectBtn" onClick={this.interface}>Get Data from DB</button>
            </>
        )
    }

    interface(event) {
        const id = event.target.id;

        if (id === 'addBtn') {
            this.insertData();
        }
        if (id === 'updateBtn') {
            this.updateData();
        }
        if (id === 'deleteBtn') {
            this.deleteData();
        }
        if (id === 'selectBtn') {
            this.selectData();
        }
    }

    getAllInputs() {
        return {
            username: this.state.username,
            name: this.state.fullname,
            phonenumber: this.state.phonenumber,
        }
    }

    insertData() {
        const db = this.state.db;
        const data = this.getAllInputs();

        set(ref(db, 'Users/' + data.username), 
        {
            Fullname: data.name,
            Phonenumber: data.phonenumber,
        })
        .then(() => {
            alert('success')
        })
        .catch((error) => {
            alert('error: ' + error)
        })
    }

    updateData() {
        const db = this.state.db;
        const data = this.getAllInputs();

        update(ref(db, 'Users/' + data.username), 
        {
            Fullname: data.name,
            Phonenumber: data.phonenumber,
        })
        .then(() => {
            alert('success')
        })
        .catch((error) => {
            alert('error: ' + error)
        })
    }

    deleteData() {
        const db = this.state.db;
        const username = this.getAllInputs().username;

        remove(ref(db, 'Users/' + username))
        .then(() => {
            alert('successs')
        })
        .catch((error) => {
            alert(error)
        })
    }

    selectData() {
        const dbref = ref(this.state.db)
        const username = this.getAllInputs().username

        get(child(dbref, 'Users/' + username))
        .then((snapshot) => {
            if (snapshot.exists()) {
                this.setState({
                    fullname: snapshot.val().Fullname,
                    phonenumber: snapshot.val().Phonenumber,
                })
            } else {
                alert('sdfasf')
            }
        })
        .catch((error) => {
            alert(error)
        })
    }
}