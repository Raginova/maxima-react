import './Reviews.scss';

function Reviews () {

    return (
        <div className={'feedback-container'}>
            <div className={'feedback'}>
                <h3 className={'feedback__h'}>Оставить отзыв</h3>
                <form className={'feedback__form'}>
                    <input className={'feedback__name'} name={'Name'} placeholder={'Имя'} type={'text'} id={'input-1'} required />
                    <input className={'feedback__email'} name={'email'} placeholder={'E-mail адрес'} type={'email'} id={'input-2'} required />
                    <textarea className={"feedback__text"} name={"text"} placeholder={"Введите сообщение..."}></textarea>
                    <div className={"feedback__agree-agree"}>
                        <input type={"checkbox"} name={"checkbox"} id={'input-3'} required />
                        <label className={'feedback__agree'} for={'checkbox'}>Принимаю условия <a href={' '} className={'feedback__add'}> Пользовательского Cоглашения</a></label>
                    </div>    
                    <button className={'feedback__submit'} type={'submit'}>Отправить</button>
                </form>
            </div>
        </div>
    );
}

export default Reviews


                
