use geofun;
db.dropDatabase();

db.users.insertMany([
    {
        "name": "Emilio",
        "age": 10,
        "avatar": "monster_1",
        "savedCountries": [
            "GBR",
            "FRA",
            "ES"
        ]
    },
    {
        "name": "Matt",
        "age": 11,
        "avatar": "monster_2",
        "savedCountries": [
            "ITA",
            "GRE"
        ]
    },
    {
        "name": "Jazz",
        "age": 11,
        "avatar": "monster_3",
        "savedCountries": [
            "POR",
            "GRE"
        ]
    },    
    {
        "name": "Derek",
        "age": 9,
        "avatar": "monster_4",
        "savedCountries": [
            "POL",
            "RUS"
        ]
    }
])