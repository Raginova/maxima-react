import './Footer.scss'
import { GeoObject, Map, TrafficControl, YMaps } from '@pbe/react-yandex-maps';






function Footer() {
    

    return(
        <footer className={'footer-container'}>
            <div className={'footer-card'}>
                <div className={'footer-card__txt'}>
                    <ul className={'footer-card__ul'}>Мы располагаемся по адрессу:</ul>
                    <li className={'footer-card__li'}>2-я Юго-Западная, 3А</li>
                </div>
                <YMaps>
                    <div className={'footer-card__map'}>
                    <Map defaultState={{
                        center: [55.817871, 49.087145],
                        zoom: 12,
                        controls: []
                    }}>
                        <GeoObject geometry={{
                            type: 'Point',
                            coordinates: [55.817871, 49.087145]
                        }} />
                        <TrafficControl options={{
                            float: 'right'
                        }} />
                    </Map>
                    </div>
                </YMaps>
            </div>
            <div className={'footer-card2'}>
                <ul className={'footer-card2__h'}>Для записи со мной можно связаться по телефону:</ul>
                <p className={'footer-card2__p'}>+7-9053-111-654</p>
            </div>
            
        </footer>
    );
}

export default Footer