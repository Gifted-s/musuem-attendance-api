const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function fromMillisecondsToISOString(date) {
    date = parseInt(date)
    date = new Date(date).toISOString()
     // since our search is based on month and year we will extract them from the ISO string
    date = date.slice(0, 7) 
    return date
}

function getMonthAndYear(date) {
    date = new Date(date)
    const month = monthNames[date.getMonth()]
    const year = date.getFullYear()
    return { month, year }
}



module.exports = { fromMillisecondsToISOString, getMonthAndYear }