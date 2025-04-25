import './Field.css'

const Field = ({type = 'text', label, value, required, placeholder, onUpdated}) => {
    return (
        <div className={`field field-${type}`}>
            <label>{ label }</label>
            <input
                type={ type }
                value={ value }
                onChange={ event => onUpdated(event.target.value) }
                required={ required }
                placeholder={ placeholder } />
        </div>
    )
}

export default Field