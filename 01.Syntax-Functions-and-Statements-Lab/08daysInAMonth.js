function daysInAMonth(month, year) {
    
    let date = new Date(year, month, 0).toDateString();
    return date.substring(8, 10);
}