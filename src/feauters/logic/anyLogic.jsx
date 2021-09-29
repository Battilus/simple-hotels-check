export const convertMonthNumToStr = (date) => {
    const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];

    const d = new Date(date);
    return d.getDay() + ' ' + monthNames[d.getMonth()] + ' ' + d.getFullYear()
}