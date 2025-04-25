import hexToRgba from 'hex-to-rgba'
import Collaborator from '../Collaborator'
import './Team.css'

const Team = (props) => {
    return (
        (props.collaborators.length > 0) && <section className='team' style={{backgroundColor: hexToRgba(props.color, '0.25')}}>
            <input value={props.color} type='color' className='input-color' onChange={event => props.onChangeColor(event.target.value, props.id)} />
            <h3 style={{borderColor: props.color}}>{props.name}</h3>
            <div className='collaborators'>
            {props.collaborators.map(collaborator => {
                return (
                    <Collaborator
                        key={collaborator.id}
                        id={collaborator.id}
                        name={collaborator.name}
                        role={collaborator.role}
                        image={collaborator.image}
                        backgroundColor={props.color}
                        onDelete={props.onDelete}
                        favorite={collaborator.favorite}
                        onMarkFavorite={props.onMarkFavorite}
                    />
                )
            })}
            </div>
        </section>
    )
}

export default Team