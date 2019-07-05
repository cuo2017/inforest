import React,{Component,useState, useEffect} from 'react';
import * as ReactDOM from 'react-dom';
import { Card,PageHeader,Divider } from 'antd';
import { WebMap, WebScene,loadModules,Scene,Map  } from '@esri/react-arcgis';
import '../App.css';

import {Footer} from './home';



const BermudaTriangle = (props) => {

    const [graphic, setGraphic] = useState(null);
    useEffect(() => {

        loadModules(['esri/Graphic']).then(([Graphic]) => {
            // Create a polygon geometry
            const polygon = {
                type: "polygon", // autocasts as new Polygon()
                rings: [
                    [104,30],
                    [120.34650909,30.52227091],
                    [10.34679016,0.52128731],
                    [74.34649693,-30.51997539]
                ]
            };

            // Create a symbol for rendering the graphic
            const fillSymbol = {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: [227, 139, 79, 0.8],
                outline: { // autocasts as new SimpleLineSymbol()
                    color: [255, 255, 255],
                    width: 1
                }
            };

            // Add the geometry and symbol to a new graphic
            const graphic = new Graphic({
                geometry: polygon,
                symbol: fillSymbol
            });
            setGraphic(graphic);
            props.view.graphics.add(graphic);
        }).catch((err) => console.error(err));

        return function cleanup() {
            props.view.graphics.remove(graphic);
        };
    }, []);

    return null;

}


const MyFeatureLayer = (props) => {
    const [myFeatureLayer, setMyFeatureLayer] = useState(null);
    useEffect(() => {
        loadModules(['esri/layers/KMLLayer']).then(([FeatureLayer]) => {
            const myFeatureLayer = new FeatureLayer({
                url: props.featureLayerProperties.url
            });

            setMyFeatureLayer(myFeatureLayer);
            props.map.add(myFeatureLayer);
        }).catch((err) => console.error(err));

        return function cleanup() {
            props.map.remove(myFeatureLayer);
        }
    }, [ props ]);

    return null;
}


class MyMap extends Component{
	render(){
		return (
			<div className="map" title="监控地图">
				<PageHeader title="森林地图" subTitle="造林区域分布" />
				<div style={{ width: '80vw', height: '80vh' }}>
			        
				    <Map
				        mapProperties={{ basemap: 'topo' }}
				        viewProperties={{
				            center: [104.34687559,30.52137366],
				            zoom: 15
				        }}
				    >
				    	<MyFeatureLayer
					      featureLayerProperties={{
					        url: 'http://cuostudio.com/static/map.kml'
					      }}
					    />
				    </Map>
			    </div>
			    <Divider />

			</div>
		);
	};
} 

export default MyMap;