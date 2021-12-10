const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function fromMillisecondsToISOString(date) {
    date = parseInt(date)
    date = new Date(date).toISOString()
    date = date.slice(0, date.length - 1)
    return date
}

function getMonthAndYear(date) {
    date = new Date(date)
    const month = monthNames[date.getMonth()]
    const year = date.getFullYear()
    return { month, year }
}



module.exports = { fromMillisecondsToISOString, getMonthAndYear }