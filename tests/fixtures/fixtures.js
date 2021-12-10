function create_fake_museums(override){
 const fixed =  {
    "month": "2021-10-01T00:00:00.000",
    "america_tropical_interpretive_center": "2807",
    "avila_adobe": "7201",
    "chinese_american_museum": "502",
    "gateway_to_nature_center": "0",
    "firehouse_museum": "1762",
    "hellman_quon": "0",
    "iamla": "515",
    "pico_house": "0",
    "visitor_center_avila_adobe": "0",
    "museum_of_social_justice": "1347",
    "biscailuz_gallery": "0"
}

return {...fixed, ...override}
}

module.exports = create_fake_museums