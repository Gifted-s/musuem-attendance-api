const { getMonthAndYear } = require("./convert_time.util")

function computeAttendance(museums, ignore) {
    // get the month and year of search
    const date = getMonthAndYear(museums["month"])
    // get the names of the museums with the exception of "month" key and the name of musuem to ignore
    const musuem_names = Object.keys(museums).filter(name => name != "month" && name != ignore)
    let ignored = {}
    // check if there is a musuem to ignore
    if (ignore) {
        // create the ignored museum object
        ignored = { museum: ignore, visitors: parseInt(museums[ignore]) }
    }
    let first_museum_name = musuem_names[0]
    let highest_museum_visited = { museum: first_museum_name, visitors: museums[first_museum_name] }
    let lowest_museum_visited = { museum: first_museum_name, visitors: museums[first_museum_name] }
    let total = 0;
    musuem_names.forEach(museum_name => {
        const musuem_visitors = parseInt(museums[museum_name])
        // if the current number of visitors is greater than highest_museum_visited 
        if (musuem_visitors > highest_museum_visited.visitors) {
            // reset highest_museum_visited  to current museum
            highest_museum_visited = { museum: museum_name, visitors: musuem_visitors }
        }
        // if the current number of visitors is less than lowest_museum_visited
        if (musuem_visitors < lowest_museum_visited.visitors) {
            // reset lowest_museum_visited  to current museum
            lowest_museum_visited = { museum: museum_name, visitors: musuem_visitors }
        }
        // add museum visitors to total
        total += musuem_visitors

    })
    // if there is a museum to ignore then add it to the result object otherwise don't add it
    const result = ignore ? {
        month: date.month,
        year: date.year,
        heihest: highest_museum_visited,
        lowest: lowest_museum_visited,
        ignored,
        total
    }
        :
        {
            month: date.month,
            year: date.year,
            heihest: highest_museum_visited,
            lowest: lowest_museum_visited,
            total
        }
    return {
        attendance: result
    }

}
// export computeAttendance function
module.exports = computeAttendance