
function isValidDate(date) {
    // return true if date is in milliseconds and less than or equal to days date
    if (/^\d+$/.test(date) && date <= Date.now()) {
        return true
    }
    return false
}
// export function
module.exports = { isValidDate }