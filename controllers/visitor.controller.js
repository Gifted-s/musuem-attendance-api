const axios = require('axios')
const LACITY_CONFIG = require('../config/lacity.config')
const computeAttendance = require('../helpers/compute_attendance')
const { fromMillisecondsToISOString } = require("../helpers/convert_time.util")
const { isValidDate } = require('../helpers/validate_body.util')

class VisitorController {
    async getAttendance(req, res) {
        // get date and musuem to ignore from request query  
        const { date, ignore } = req.query
        // check if date is valid
        if (!isValidDate(date)) {
            return res.status(400).send({ error: "date must be in milliseconds and must must be less than or equal to todays date" })
        }
        // convert time from milliseconds to ISO string
        const dateToISOString = fromMillisecondsToISOString(date)
        try {
            // fetch all the museums using the LA city API
            let museums = await axios.get(`${LACITY_CONFIG.API_ROOT}/?month=${dateToISOString}-01T00:00:00.000`)
            // if LA city API does not have any record for that particular month
            if(museums.data.length===0){
                return res.status(200).send({message:"LA city: sorry no record was taken for this particular month"})
            }
            // compute the attendance
            let create_response = computeAttendance(museums.data[0], ignore)
            return res.status(200).send(create_response)
        } catch (error) {
            let message = error.message
            return res.status(500).send({ error: message })
        }

    }
}


module.exports = VisitorController