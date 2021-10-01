export const convertMonthNumToStr = (date) => {
    const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];

    const d = new Date(date);
    return d.getDay() + ' ' + monthNames[d.getMonth()] + ' ' + d.getFullYear()
}

export const ratingFilter = (data, direction) => {
    return data.sort((a, b) => {
        if (a.stars > b.stars) {
            return (direction === 'up') ? -1 : 1;
        }
        if (a.stars < b.stars) {
            return (direction === 'up') ? 1 : -1;
        }
        return 0;
    });
}

export const priceFilter = (data, direction) => {
    return data.sort((a, b) => {
        if (a.priceAvg > b.priceAvg) {
            return (direction === 'up') ? -1 : 1;
        }
        if (a.priceAvg < b.priceAvg) {
            return (direction === 'up') ? 1 : -1;
        }
        return 0;
    });
}