import React from 'react'
import { YMaps, Map, GeolocationControl } from 'react-yandex-maps'
import "./Drawer.css"
import './geo.css';
import Drawer from "react-bottom-drawer";

const Drawer1 = () => {
    const [isVisible, setIsVisible] = React.useState(true);
    const openDrawer = React.useCallback(() => setIsVisible(true), []);
    const closeDrawer = React.useCallback(() => setIsVisible(false), []);
    return (
        <div className="App">

            <YMaps query={{ apikey: '5f2a84d5-b3ca-4b64-a09b-bbf924469d67' }}>
            <Map 
            height="100vh"   
            width="100%"
            defaultState={{
                center: [62.0397, 129.7422],
                zoom: 20,
            }}
            >
                <GeolocationControl options={{
                    float: 'left'
                }} />
            </Map>
        </YMaps>
            
            <Drawer
                duration={250}
                hideScrollbars={true}
                onClose={closeDrawer}
                isVisible={isVisible}
            >
                <div className="drawer-content">
                    <h1>React Bottom Drawers</h1>
                    <hr />
                    <h3>Friendly dialogs made simple</h3>
                    <p>
                        This is a basic example of how to use this package. Just import the{" "}
                        <i>Drawer</i> component, and place your content as its children.
                    </p>

                    <p>
                        Note that you have to control the component visibility, providing an{" "}
                        <strong>isVisible</strong> boolean prop and an <strong>onClose</strong>{" "}
                        callback.
                    </p>
                    <p>
                        If your content is too tall (like this example), it will be scrollable.
                        In that case <b>scrollbars should be visible</b>, but you can hide them
                        with the <b>hideScrollbars</b> prop.
                    </p>
                    <h3>How do I close it?</h3>
                    <div className="how-to-close">
                        <div>
                        Pressing
                        <span className="esc-key">ESC</span>
                        </div>

                        <div>Slide down from the handle</div>
                        <div>Click outside the Drawer</div>
                    </div>
                    </div>
            </Drawer>
        </div>
    )
}

export default Drawer1