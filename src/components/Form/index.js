import './Form.css';
import TextField from '../TextField';
import DropdownList from '../DropdownList';
import Button from '../Button';
import { useState } from 'react';

const Form = (props) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.onPersonRegistered({name, role, image, team})
        setName('')
        setRole('')
        setImage('')
        setTeam('')
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Fill the data to create employee's card</h2>
                <TextField
                    required={true}
                    label="Name"
                    placeholder="Type your name"
                    value={name}
                    onUpdated={value => setName(value)}
                />
                <TextField
                    required={true}
                    label="Role"
                    placeholder="Type your role"
                    value={role}
                    onUpdated={value => setRole(value)}
                />
                <TextField
                    label="Image"
                    placeholder="Type the image file path"
                    value={image}
                    onUpdated={value => setImage(value)}
                />
                <DropdownList
                    required={true}
                    label="Team"
                    items={props.teams}
                    value={team}
                    onUpdated={value => setTeam(value)}
                />
                <Button>Create card</Button>
            </form>
        </section>
    )
}

export default Form