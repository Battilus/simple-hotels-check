
let fetchData = {
    location: 'Москва',
    checkIn: '2021-09-14',
    checkOut: '2021-09-20'
}

const Api = (data) => {
    const fetchHotels = (data) =>
        fetch('http://engine.hotellook.com/api/v2/cache.json?location='+data.location+
            '&currency=rub&checkIn='+data.checkIn+
            '&checkOut='+data.checkOut+''
        )
    return fetchHotels
}

// const fetchHotelsFromApi = () => fetch('http://engine.hotellook.com/api/v2/cache.json')