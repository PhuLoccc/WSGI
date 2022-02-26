function receiveGpsCar()
{
    var result = httpGet('/get_location');
    if(result != "")
    {
        var data = JSON.parse(result);
        marker.setLatLng([data["lat"],data["lng"]]);
        marker.setOpacity(1);
        map.setView([data["lat"],data["lng"]],150);
    }
}
setInterval(() => {
    receiveGpsCar();
}, 10000);