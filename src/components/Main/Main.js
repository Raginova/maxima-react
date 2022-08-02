import './Main.scss';

function Main () {

    return (
        <>
            <div className={'main'}>
                <div className={'main__card-1 card-1'}>
                    <div className={'card-1__about'}>
                        <h1 className={'card-1__about-h'}>Привет, я Динара</h1>
                        <div className={'card-1__about-tell'}>Давай знакомиться. Мне 28 лет и уже 5 лет - я являюсь мастером по наращиванию ресниц. Очень открытый, мега-позитивный мастер. Люблю поговорить со воими клиентами в процессе работы, естественно я это делаю обоюдно.</div>
                    </div>
                    <img className={'card-1__img'} src={'https://sun9-west.userapi.com/sun9-64/s/v1/ig2/sdLSn5j5q54wWqReWTiLDyODgvXJON8rBuel4yXLjKg8V27grCPCzWnwtQlOpJZU7RsJmW3oHFsppeONGUi0aQz4.jpg?size=809x1080&quality=95&type=album'} alt={'me'}></img>
                </div>
                <div className={'main__card-2 card-2'}>
                    <img className={'card-2__img'} src={'https://sun2.megafon-nn.userapi.com/s/v1/ig2/Ea14IpibCVNseMUJ-LW_GmbXYugS99YY4UTidkFR7gtJwAbIbqcCKvms_03R8d9RIKA7IXgpEurbmUpTojQcjchL.jpg?size=810x1080&quality=95&type=album'} alt={'me'}></img>
                    <div className={'card-2__about'}>
                        <h1 className={'card-2__about-h'}>Студия</h1>
                        <div className={'card-2__about-tell'}>Я сделала все для того, чтобы во время процедуры ты чувствовала себя комфортно. Удобная кушетка, приятная музыка и аромат - тебе точно понравится.</div>
                    </div>
                </div>
            </div>
            
        </>
    );

}

export default Main