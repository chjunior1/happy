// create map
const map = L.map(mapid).setView([-27.222633, -49.6455874], 15)

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
})

let marker;

// create and add marker

map.on('click',(event) =>{
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    console.log(lat)
    // remove icon form map
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat,lng], { icon })
    .addTo(map)
})

// photos upload
function addPhotoField() {
    
    const container = document.querySelector('#images')
    const fieldsContainer = document.querySelectorAll('.new-upload')
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    
    const input = newFieldContainer.children[0]
    if (input.value == ""){
        return
    }
    input.value = "" 
    container.appendChild(newFieldContainer)
}
// remove photo upload
function removePhotoField(event) {
    const span = event.currentTarget
    
    const fieldsContainer = document.querySelectorAll('.new-upload')
    if (fieldsContainer.length < 2) {
        span.parentNode.children[0].value = ""
        return
    }
    span.parentNode.remove();
}

// select yes or no button

function toggleSelect(event){

    document.querySelectorAll('.button-select button')
    .forEach( function(button) { 
        button.classList.remove('active')
    })

    const button = event.currentTarget
    button.classList.add('active')

    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value;
}

// function validate(event) {
//     const latLngValidate = true

//     if (latLngValidate) {
//     event.preventDefault()
//     alert('Selecione um ponto no mapa')
//     }
