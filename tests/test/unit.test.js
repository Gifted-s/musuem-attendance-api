
const { fromMillisecondsToISOString, getMonthAndYear } = require("../../helpers/convert_time.util")
const { isValidDate } = require("../../helpers/validate_body.util")



describe('date validator', () => {
    it('must return false if date is not in milliseconds ', () => {
        expect(isValidDate("thisisawrongdateformat")).toBe(false)
    })
    it('must return true if date is in milliseconds ', () => {
        expect(isValidDate("1639122017254")).toBe(true)
        
    })

    it('must return false if date is greater than todays date', () => {
        expect(isValidDate("16391220172542343434")).toBe(false)
        
    })
})


describe('fromMillisecondsToISOString function', () => {
    it('must convert date in milliseconds to ISO date format ', () => {
        expect(fromMillisecondsToISOString("1404198000000")).toBe("2014-07")
    })
   
})
describe('getMonthAndYear function', () => {
    it('must return month and and year from date in ISO string format', () => {
        const test_date =getMonthAndYear("2014-07-01T00:00:00.000")
        expect(test_date).toBeDefined()
        expect(test_date.year).toBe(2014)
        expect(test_date.month).toBe("Jul")
    })
})
