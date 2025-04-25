import './Form.css';
import Field from '../Field';
import DropdownList from '../DropdownList';
import Button from '../Button';
import { useState } from 'react';

const Form = (props) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')
    
    const [teamName, setTeamName] = useState('')
    const [teamColor, setTeamColor] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.onPersonRegistered({name, role, image, team})
        setName('')
        setRole('')
        setImage('')
        setTeam('')
    }

    const onSaveTeam = (event) => {
        event.preventDefault()
        props.onTeamRegistered({name: teamName, color: teamColor})
        setTeamName('')
        setTeamColor('')
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Fill the data to create employee's card</h2>
                <Field
                    required={true}
                    label="Name"
                    placeholder="Type your name"
                    value={name}
                    onUpdated={value => setName(value)}
                />
                <Field
                    required={true}
                    label="Role"
                    placeholder="Type your role"
                    value={role}
                    onUpdated={value => setRole(value)}
                />
                <Field
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
            <form onSubmit={onSaveTeam}>
                <h2>Fill the data to create a new team</h2>
                <Field
                    required
                    label="Name"
                    placeholder="Type the team's name"
                    value={teamName}
                    onUpdated={value => setTeamName(value)}
                />
                <Field
                    required
                    type="color"
                    label="Color"
                    placeholder="Type the team's color"
                    value={teamColor}
                    onUpdated={value => setTeamColor(value)}
                />
                <Button>Create new team</Button>
            </form>
        </section>
    )
}

export default Form