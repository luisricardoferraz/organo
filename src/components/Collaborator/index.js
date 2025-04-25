import './Collaborator.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const Collaborator = ({id, name, image, role, backgroundColor, onDelete, favorite, onMarkFavorite}) => {
    function handleFavorite () {
        onMarkFavorite(id)
    }

    const propsFavorite = {
        size: 25,
        onClick: handleFavorite
    }
    
    return (
        <div className='collaborator'>
            <AiFillCloseCircle
                size={25}
                className='delete'
                onClick={() => onDelete(id)}
            />
            <div className='collaborator-header' style={{backgroundColor}}>
                <img src={image} alt={name} />
            </div>
            <div className='collaborator-footer'>
                <h4>{name.toUpperCase()}</h4>
                <h5>{role}</h5>
                <div className='favorite'>
                    {favorite
                        ? <AiFillHeart {...propsFavorite} color='#FF0000' />
                        : <AiOutlineHeart {...propsFavorite} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Collaborator