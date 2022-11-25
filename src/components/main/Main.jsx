import { YMaps, Map, GeolocationControl, Placemark, Button } from 'react-yandex-maps'

import './geo.css';

import { useCallback, useState } from 'react';

import Drawer from "react-bottom-drawer";

import img from '../../images/Marker.svg'

import "./Drawer.css"


const Main = () => {
    const [isVisible, setIsVisible] = useState(false);
    const openDrawer = useCallback(() => setIsVisible(true), []);
    const closeDrawer = useCallback(() => setIsVisible(false), []);
    const [data, setData] = useState({
        coords: [100,100]
    })

    const handleData = (event) => {
        setData(prevstate => ({
            ...prevstate,
            coords: event.get("coords")
        }))
        console.log(event.get('coords'))
    }
    return (
        <div className="App">
            <center>
        <YMaps
        enterprise
        query={{ 
            apikey: '5f2a84d5-b3ca-4b64-a09b-bbf924469d67' 
        }}
        >
            <Map 
                onClick={(e) => {
                    handleData(e)
                    openDrawer(e)
                }}
                height="100vh"   
                width="100%"
                defaultState={{
                    center: [62.0397, 129.7422],
                    zoom: 20,
                }}
            >
                <GeolocationControl 
                    options={{
                        float: 'left'
                    }} 
                />
                <Placemark geometry={data.coords}
                    properties={{
                        hintContent: 'При наведении',
                        balloonContent: 'Содержание asdlfkjsf sdafs fas fsaf]asdf  asdfdasf',
                    }}
                    options={{
                        iconLayout: 'default#image',
                        iconImageHref: img,
                        iconImageSize: [45, 63],
                        iconImageOffset: [-5, -63],
                    }}
                    modules={
                        ['geoObject.addon.balloon', 'geoObject.addon.hint',]
                    }
                />
            </Map>
        </YMaps>
        </center>
        <Drawer
                duration={250}
                hideScrollbars={true}
                onClose={closeDrawer}
                isVisible={isVisible}
            >
                <div className="drawer-content">
                    <h1>Написать отзыв</h1>
                    <hr />
                    <h3>Сообщение</h3>
                    <p>
                    <textarea type="text" className='text'></textarea>
                    <button
                        className='btn' 
                        onClick={closeDrawer}
                    >Отравить</button>
                    </p>

                  
                    </div>
            </Drawer>
        </div>
    )
}



export default Main;