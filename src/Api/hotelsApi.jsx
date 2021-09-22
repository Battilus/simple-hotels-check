
export const fetchHotels = () => 'http://engine.hotellook.com/api/v2/cache.json'
export const fetchHotelsPhotosID = () => 'https://yasen.hotellook.com/photos/hotel_photos'
export const fetchHotelsPhotos = (hotel_ID) => 'https://photo.hotellook.com/image_v2/limit/'+hotel_ID+'/520/520.auto'