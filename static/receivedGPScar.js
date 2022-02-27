function receiveGpsCar()
{
    var result = httpGet('/get_location');
    console.log(result);
    if(result != "")
    {
        var data = JSON.parse(result);
        console.log(data['lat'])
        marker.setLatLng([data["lat"],data["lng"]]);
        marker.setOpacity(1);
        map.setView([data["lat"],data["lng"]],150);
    }
}
setInterval(() => {
    receiveGpsCar();
}, 100);
