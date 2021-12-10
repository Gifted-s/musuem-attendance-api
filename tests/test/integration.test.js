const computeAttendance = require("../../helpers/compute_attendance")
const create_fake_museums = require("../fixtures/fixtures")

describe('computeAttendance function ', () => {
    it('must return month of search i.e Nov in response body', () => {
        const museums = create_fake_museums({ month: "2021-11-01T00:00:00.000" })
        const response = computeAttendance(museums, null)
        expect(response.attendance.month).toBe("Nov")
    })


    it('must return year of search in response body', () => {
        const museums = create_fake_museums({ month: "2012-11-01T00:00:00.000" })
        const response = computeAttendance(museums, null)
        expect(response.attendance.year).toBe(2012)
    })

    it('must return the heighest visited museum as test_museum since it has the largest visitors ', () => {
        const museums = create_fake_museums({ test_museum: "12000" })
        museums["test_museum"] = "12000"
        const response = computeAttendance(museums, null)
        expect(response.attendance.heihest.museum).toBe("test_museum")
    })



    it('must return the heighest visitor as 12000 since it is the highest visitors ', () => {
        const museums = create_fake_museums({ test_museum: "12000" })
        museums["test_museum"] = "12000"
        const response = computeAttendance(museums, null)
        expect(response.attendance.heihest.visitors).toBe(12000)
    })

    it('must return the lowest visited museum as test_museum since it has the lowest visitors ', () => {
        const museums = create_fake_museums({
            "month": "2021-10-01T00:00:00.000",
            "test_museum": "1",
            "america_tropical_interpretive_center": "2807",
            "avila_adobe": "7201",
            "chinese_american_museum": "502",
            "gateway_to_nature_center": "10",
            "firehouse_museum": "1762",
            "hellman_quon": "566",
            "iamla": "515",
            "pico_house": "300",
            "visitor_center_avila_adobe": "400",
            "museum_of_social_justice": "500",
            "biscailuz_gallery": "5000"
        })
        const response = computeAttendance(museums, null)
        expect(response.attendance.lowest.museum).toBe("test_museum")
    })



    it('must return the lowest visitor as 1 since it is the lowest visitors ', () => {
        const museums = create_fake_museums({
            "month": "2021-10-01T00:00:00.000",
            "test_museum": "1",
            "america_tropical_interpretive_center": "2807",
            "avila_adobe": "7201",
            "chinese_american_museum": "502",
            "gateway_to_nature_center": "10",
            "firehouse_museum": "1762",
            "hellman_quon": "566",
            "iamla": "515",
            "pico_house": "300",
            "visitor_center_avila_adobe": "400",
            "museum_of_social_justice": "500",
            "biscailuz_gallery": "5000"
        })
        const response = computeAttendance(museums, null)
        expect(response.attendance.lowest.visitors).toBe(1)
    })



    it('must return the total  visitors which is 19564 in this case', () => {
        const museums = create_fake_museums({
            "month": "2021-10-01T00:00:00.000",
            "test_museum": "1",
            "america_tropical_interpretive_center": "2807",
            "avila_adobe": "7201",
            "chinese_american_museum": "502",
            "gateway_to_nature_center": "10",
            "firehouse_museum": "1762",
            "hellman_quon": "566",
            "iamla": "515",
            "pico_house": "300",
            "visitor_center_avila_adobe": "400",
            "museum_of_social_justice": "500",
            "biscailuz_gallery": "5000"
        })
        const response = computeAttendance(museums, null)
        expect(response.attendance.total).toBe(19564)
    })


    it('must return the total  visitors which is 19564 in this case', () => {
        const museums = create_fake_museums({
            "month": "2021-10-01T00:00:00.000",
            "test_museum": "1",
            "america_tropical_interpretive_center": "2807",
            "avila_adobe": "7201",
            "chinese_american_museum": "502",
            "gateway_to_nature_center": "10",
            "firehouse_museum": "1762",
            "hellman_quon": "566",
            "iamla": "515",
            "pico_house": "300",
            "visitor_center_avila_adobe": "400",
            "museum_of_social_justice": "500",
            "biscailuz_gallery": "5000"
        })
        const response = computeAttendance(museums, null)
        expect(response.attendance.total).toBe(19564)
    })



    it('must return the ignored museum, test_museum in this case', () => {
        const museums = create_fake_museums({
            "month": "2021-10-01T00:00:00.000",
            "test_museum": "1",
            "america_tropical_interpretive_center": "2807",
            "avila_adobe": "7201",
            "chinese_american_museum": "502",
            "gateway_to_nature_center": "10",
            "firehouse_museum": "1762",
            "hellman_quon": "566",
            "iamla": "515",
            "pico_house": "300",
            "visitor_center_avila_adobe": "400",
            "museum_of_social_justice": "500",
            "biscailuz_gallery": "5000"
        })
        const response = computeAttendance(museums, "test_museum")
        expect(response.attendance.ignored.museum).toBe("test_museum")
    })

    it('must return the ignored museum visitors, 1 in this case', () => {
        const museums = create_fake_museums({
            "month": "2021-10-01T00:00:00.000",
            "test_museum": "1",
            "america_tropical_interpretive_center": "2807",
            "avila_adobe": "7201",
            "chinese_american_museum": "502",
            "gateway_to_nature_center": "10",
            "firehouse_museum": "1762",
            "hellman_quon": "566",
            "iamla": "515",
            "pico_house": "300",
            "visitor_center_avila_adobe": "400",
            "museum_of_social_justice": "500",
            "biscailuz_gallery": "5000"
        })
        const response = computeAttendance(museums, "test_museum")
        expect(response.attendance.ignored.visitors).toBe(1)
    })


    it('must not add ignored musuem visitors to total', () => {
        const museums = create_fake_museums({
            "month": "2021-10-01T00:00:00.000",
            "test_museum": "3000",
            "america_tropical_interpretive_center": "2807",
            "avila_adobe": "7201",
            "chinese_american_museum": "502",
            "gateway_to_nature_center": "10",
            "firehouse_museum": "1762",
            "hellman_quon": "566",
            "iamla": "515",
            "pico_house": "300",
            "visitor_center_avila_adobe": "400",
            "museum_of_social_justice": "500",
            "biscailuz_gallery": "5000"
        })
        const response = computeAttendance(museums, "test_museum")
        expect(response.attendance.total).toBe(19563)
    })




})

