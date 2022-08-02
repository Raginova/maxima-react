import './Works.scss'

function Works ({ title, volum, image }) {

    return (
            <div className={'works-card'}>
                <h3 className={'works-card__h'}>Изгиб {title}</h3>
                <div className={'works-card__volum'}>Объем: {volum}</div>
                <img className={'works-card__img'} src={image} alt={'работы'}></img>
            </div>
    )
}

export default Works