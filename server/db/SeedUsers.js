use GeoFun;
db.dropDatabase();

db.users.insertMany ([
    {
        "name": "Emilio",
        "age": 10,
        "savedCountries": [
            "France",
            "Germany",
            "Spain"
        ]
    },
    {
        "name": "Jazz",
        "age": 9,
        "savedCountries": [
            "Ireland",
            "Poland",
            "Italy"
        ]
    },
    {
        "name": "Matt",
        "age": 11,
        "savedCountries": [
            "Portugal",
            "Iceland",
            "Finland",
            "United Kingdom"
        ]
    }
])