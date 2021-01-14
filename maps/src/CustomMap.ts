import User from "./User"
import Company from "./Company" 

interface Mappable {
    location: {
        lat: number
        lng: number
    }
    markerContent(): string
}

class CustomMap {
    googleMap: google.map.Map

    constructor(elementId) {
        this.googleMap = new google.maps.Map(document.getElementById(elementId), {
            zoom: 1,
            center: {lat: 1, lng: 1}
        })
    }

    addMarker(mappable: Mappable):void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })

        marker.addListener('click', ()  => {
            const infoWindow = new this.googleMap.maps.InfoWindow({
                content: mappable.markerContent()
            })

            infoWindow.open(this.googleMap, marker)
        })
    }
}

export default CustomMap