use geofun;
db.dropDatabase();

db.users.insertMany([
    {
        "name": "Emilio",
        "age": 10,
        "savedCountries": [
            "GBR",
            "FRA",
            "ES"
        ]
    },
    {
        "name": "Matt",
        "age": 11,
        "savedCountries": [
            "ITA",
            "GRE"
        ]
    },
    {
        "name": "Jazz",
        "age": 11,
        "savedCountries": [
            "POR",
            "GRE"
        ]
    },    
    {
        "name": "Derek",
        "age": 9,
        "savedCountries": [
            "POL",
            "RUS"
        ]
    }
])