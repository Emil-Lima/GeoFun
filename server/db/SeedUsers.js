use geofun;
db.dropDatabase();

db.users.insertMany([
    {
        "name": "Emilio",
        "age": 10,
        "savedCountries": [
            {
                "name": {
                    "common": "France",
                    "official": "French Republic",
                    "nativeName": {
                        "fra": {
                            "official": "République française",
                            "common": "France"
                        }
                    }
                },
                "tld": [],
                "cca2": "FR",
                "ccn3": "250",
                "cca3": "FRA",
                "cioc": "FRA",
                "independent": true,
                "status": "officially-assigned",
                "unMember": true,
                "currencies": {
                    "EUR": {
                        "name": "Euro",
                        "symbol": "€"
                    }
                },
                "idd": {
                    "root": "+3",
                    "suffixes": [
                        "3"
                    ]
                },
                "capital": [
                    "Paris"
                ],
                "altSpellings": [
                    "FR",
                    "French Republic",
                    "République française"
                ],
                "region": "Europe",
                "subregion": "Western Europe",
                "languages": {
                    "fra": "French"
                },
                "translations": {
                    "ara": {
                        "official": "الجمهورية الفرنسية",
                        "common": "فرنسا"
                    },
                    "ces": {
                        "official": "Francouzská republika",
                        "common": "Francie"
                    },
                    "cym": {
                        "official": "French Republic",
                        "common": "France"
                    },
                    "deu": {
                        "official": "Französische Republik",
                        "common": "Frankreich"
                    },
                    "est": {
                        "official": "Prantsuse Vabariik",
                        "common": "Prantsusmaa"
                    },
                    "fin": {
                        "official": "Ranskan tasavalta",
                        "common": "Ranska"
                    },
                    "fra": {
                        "official": "République française",
                        "common": "France"
                    },
                    "hrv": {
                        "official": "Francuska Republika",
                        "common": "Francuska"
                    },
                    "hun": {
                        "official": "Francia Köztársaság",
                        "common": "Franciaország"
                    },
                    "ita": {
                        "official": "Repubblica francese",
                        "common": "Francia"
                    },
                    "jpn": {
                        "official": "フランス共和国",
                        "common": "フランス"
                    },
                    "kor": {
                        "official": "프랑스 공화국",
                        "common": "프랑스"
                    },
                    "nld": {
                        "official": "Franse Republiek",
                        "common": "Frankrijk"
                    },
                    "per": {
                        "official": "جمهوری فرانسه",
                        "common": "فرانسه"
                    },
                    "pol": {
                        "official": "Republika Francuska",
                        "common": "Francja"
                    },
                    "por": {
                        "official": "República Francesa",
                        "common": "França"
                    },
                    "rus": {
                        "official": "Французская Республика",
                        "common": "Франция"
                    },
                    "slk": {
                        "official": "Francúzska republika",
                        "common": "Francúzsko"
                    },
                    "spa": {
                        "official": "República francés",
                        "common": "Francia"
                    },
                    "swe": {
                        "official": "Republiken Frankrike",
                        "common": "Frankrike"
                    },
                    "urd": {
                        "official": "جمہوریہ فرانس",
                        "common": "فرانس"
                    },
                    "zho": {
                        "official": "法兰西共和国",
                        "common": "法国"
                    }
                },
                "latlng": [
                    46,
                    2
                ],
                "landlocked": false,
                "borders": [
                    "AND",
                    "BEL",
                    "DEU",
                    "ITA",
                    "LUX",
                    "MCO",
                    "ESP",
                    "CHE"
                ],
                "area": 551695,
                "demonyms": {
                    "eng": {
                        "f": "French",
                        "m": "French"
                    },
                    "fra": {
                        "f": "Française",
                        "m": "Français"
                    }
                },
                "flag": "🇫🇷",
                "maps": {
                    "googleMaps": "https://goo.gl/maps/g7QxxSFsWyTPKuzd7",
                    "openStreetMaps": "https://www.openstreetmap.org/relation/1403916"
                },
                "population": 67391582,
                "gini": {
                    "2018": 32.4
                },
                "fifa": "FRA",
                "car": {
                    "signs": [
                        "F"
                    ],
                    "side": "right"
                },
                "timezones": [
                    "UTC-10:00",
                    "UTC-09:30",
                    "UTC-09:00",
                    "UTC-08:00",
                    "UTC-04:00",
                    "UTC-03:00",
                    "UTC+01:00",
                    "UTC+02:00",
                    "UTC+03:00",
                    "UTC+04:00",
                    "UTC+05:00",
                    "UTC+10:00",
                    "UTC+11:00",
                    "UTC+12:00"
                ],
                "continents": [
                    "Europe"
                ],
                "flags": {
                    "png": "https://flagcdn.com/w320/fr.png",
                    "svg": "https://flagcdn.com/fr.svg"
                },
                "coatOfArms": {
                    "png": "https://mainfacts.com/media/images/coats_of_arms/fr.png",
                    "svg": "https://mainfacts.com/media/images/coats_of_arms/fr.svg"
                },
                "startOfWeek": "monday",
                "capitalInfo": {
                    "latlng": [
                        48.87,
                        2.33
                    ]
                },
                "postalCode": {
                    "format": "#####",
                    "regex": "^(\\d{5})$"
                }
            },
            {
                "name": {
                    "common": "Germany",
                    "official": "Federal Republic of Germany",
                    "nativeName": {
                        "deu": {
                            "official": "Bundesrepublik Deutschland",
                            "common": "Deutschland"
                        }
                    }
                },
                "tld": [
                    ".de"
                ],
                "cca2": "DE",
                "ccn3": "276",
                "cca3": "DEU",
                "cioc": "GER",
                "independent": true,
                "status": "officially-assigned",
                "unMember": true,
                "currencies": {
                    "EUR": {
                        "name": "Euro",
                        "symbol": "€"
                    }
                },
                "idd": {
                    "root": "+4",
                    "suffixes": [
                        "9"
                    ]
                },
                "capital": [
                    "Berlin"
                ],
                "altSpellings": [
                    "DE",
                    "Federal Republic of Germany",
                    "Bundesrepublik Deutschland"
                ],
                "region": "Europe",
                "subregion": "Western Europe",
                "languages": {
                    "deu": "German"
                },
                "translations": {
                    "ara": {
                        "official": "جمهورية ألمانيا الاتحادية",
                        "common": "ألمانيا"
                    },
                    "ces": {
                        "official": "Spolková republika Německo",
                        "common": "Německo"
                    },
                    "cym": {
                        "official": "Federal Republic of Germany",
                        "common": "Germany"
                    },
                    "deu": {
                        "official": "Bundesrepublik Deutschland",
                        "common": "Deutschland"
                    },
                    "est": {
                        "official": "Saksamaa Liitvabariik",
                        "common": "Saksamaa"
                    },
                    "fin": {
                        "official": "Saksan liittotasavalta",
                        "common": "Saksa"
                    },
                    "fra": {
                        "official": "République fédérale d'Allemagne",
                        "common": "Allemagne"
                    },
                    "hrv": {
                        "official": "Njemačka Federativna Republika",
                        "common": "Njemačka"
                    },
                    "hun": {
                        "official": "Német Szövetségi Köztársaság",
                        "common": "Németország"
                    },
                    "ita": {
                        "official": "Repubblica federale di Germania",
                        "common": "Germania"
                    },
                    "jpn": {
                        "official": "ドイツ連邦共和国",
                        "common": "ドイツ"
                    },
                    "kor": {
                        "official": "독일 연방 공화국",
                        "common": "독일"
                    },
                    "nld": {
                        "official": "Bondsrepubliek Duitsland",
                        "common": "Duitsland"
                    },
                    "per": {
                        "official": "جمهوری فدرال آلمان",
                        "common": "آلمان"
                    },
                    "pol": {
                        "official": "Republika Federalna Niemiec",
                        "common": "Niemcy"
                    },
                    "por": {
                        "official": "República Federal da Alemanha",
                        "common": "Alemanha"
                    },
                    "rus": {
                        "official": "Федеративная Республика Германия",
                        "common": "Германия"
                    },
                    "slk": {
                        "official": "Nemecká spolková republika",
                        "common": "Nemecko"
                    },
                    "spa": {
                        "official": "República Federal de Alemania",
                        "common": "Alemania"
                    },
                    "swe": {
                        "official": "Förbundsrepubliken Tyskland",
                        "common": "Tyskland"
                    },
                    "urd": {
                        "official": "وفاقی جمہوریہ جرمنی",
                        "common": "جرمنی"
                    },
                    "zho": {
                        "official": "德意志联邦共和国",
                        "common": "德国"
                    }
                },
                "latlng": [
                    51,
                    9
                ],
                "landlocked": false,
                "borders": [
                    "AUT",
                    "BEL",
                    "CZE",
                    "DNK",
                    "FRA",
                    "LUX",
                    "NLD",
                    "POL",
                    "CHE"
                ],
                "area": 357114,
                "demonyms": {
                    "eng": {
                        "f": "German",
                        "m": "German"
                    },
                    "fra": {
                        "f": "Allemande",
                        "m": "Allemand"
                    }
                },
                "flag": "🇩🇪",
                "maps": {
                    "googleMaps": "https://goo.gl/maps/mD9FBMq1nvXUBrkv6",
                    "openStreetMaps": "https://www.openstreetmap.org/relation/51477"
                },
                "population": 83240525,
                "gini": {
                    "2016": 31.9
                },
                "fifa": "GER",
                "car": {
                    "signs": [
                        "DY"
                    ],
                    "side": "right"
                },
                "timezones": [
                    "UTC+01:00"
                ],
                "continents": [
                    "Europe"
                ],
                "flags": {
                    "png": "https://flagcdn.com/w320/de.png",
                    "svg": "https://flagcdn.com/de.svg"
                },
                "coatOfArms": {
                    "png": "https://mainfacts.com/media/images/coats_of_arms/de.png",
                    "svg": "https://mainfacts.com/media/images/coats_of_arms/de.svg"
                },
                "startOfWeek": "monday",
                "capitalInfo": {
                    "latlng": [
                        52.52,
                        13.4
                    ]
                },
                "postalCode": {
                    "format": "#####",
                    "regex": "^(\\d{5})$"
                }
            },
            {
                "name": {
                    "common": "Spain",
                    "official": "Kingdom of Spain",
                    "nativeName": {
                        "spa": {
                            "official": "Reino de España",
                            "common": "España"
                        }
                    }
                },
                "tld": [
                    ".es"
                ],
                "cca2": "ES",
                "ccn3": "724",
                "cca3": "ESP",
                "cioc": "ESP",
                "independent": true,
                "status": "officially-assigned",
                "unMember": true,
                "currencies": {
                    "EUR": {
                        "name": "Euro",
                        "symbol": "€"
                    }
                },
                "idd": {
                    "root": "+3",
                    "suffixes": [
                        "4"
                    ]
                },
                "capital": [
                    "Madrid"
                ],
                "altSpellings": [
                    "ES",
                    "Kingdom of Spain",
                    "Reino de España"
                ],
                "region": "Europe",
                "subregion": "Southern Europe",
                "languages": {
                    "spa": "Spanish"
                },
                "translations": {
                    "ara": {
                        "official": "مملكة إسبانيا",
                        "common": "إسبانيا"
                    },
                    "ces": {
                        "official": "Španělské království",
                        "common": "Španělsko"
                    },
                    "cym": {
                        "official": "Kingdom of Spain",
                        "common": "Spain"
                    },
                    "deu": {
                        "official": "Königreich Spanien",
                        "common": "Spanien"
                    },
                    "est": {
                        "official": "Hispaania Kuningriik",
                        "common": "Hispaania"
                    },
                    "fin": {
                        "official": "Espanjan kuningaskunta",
                        "common": "Espanja"
                    },
                    "fra": {
                        "official": "Royaume d'Espagne",
                        "common": "Espagne"
                    },
                    "hrv": {
                        "official": "Kraljevina Španjolska",
                        "common": "Španjolska"
                    },
                    "hun": {
                        "official": "Spanyol Királyság",
                        "common": "Spanyolország"
                    },
                    "ita": {
                        "official": "Regno di Spagna",
                        "common": "Spagna"
                    },
                    "jpn": {
                        "official": "スペイン王国",
                        "common": "スペイン"
                    },
                    "kor": {
                        "official": "에스파냐 왕국",
                        "common": "스페인"
                    },
                    "nld": {
                        "official": "Koninkrijk Spanje",
                        "common": "Spanje"
                    },
                    "per": {
                        "official": "پادشاهی اسپانیا",
                        "common": "اسپانیا"
                    },
                    "pol": {
                        "official": "Królestwo Hiszpanii ",
                        "common": "Hiszpania"
                    },
                    "por": {
                        "official": "Reino de Espanha",
                        "common": "Espanha"
                    },
                    "rus": {
                        "official": "Королевство Испания",
                        "common": "Испания"
                    },
                    "slk": {
                        "official": "Španielske kráľovstvo",
                        "common": "Španielsko"
                    },
                    "spa": {
                        "official": "Reino de España",
                        "common": "España"
                    },
                    "swe": {
                        "official": "Konungariket Spanien",
                        "common": "Spanien"
                    },
                    "urd": {
                        "official": "مملکتِ ہسپانیہ",
                        "common": "ہسپانیہ"
                    },
                    "zho": {
                        "official": "西班牙王国",
                        "common": "西班牙"
                    }
                },
                "latlng": [
                    40,
                    -4
                ],
                "landlocked": false,
                "borders": [
                    "AND",
                    "FRA",
                    "GIB",
                    "PRT",
                    "MAR"
                ],
                "area": 505992,
                "demonyms": {
                    "eng": {
                        "f": "Spanish",
                        "m": "Spanish"
                    },
                    "fra": {
                        "f": "Espagnole",
                        "m": "Espagnol"
                    }
                },
                "flag": "🇪🇸",
                "maps": {
                    "googleMaps": "https://goo.gl/maps/138JaXW8EZzRVitY9",
                    "openStreetMaps": "https://www.openstreetmap.org/relation/1311341"
                },
                "population": 47351567,
                "gini": {
                    "2018": 34.7
                },
                "fifa": "ESP",
                "car": {
                    "signs": [
                        "E"
                    ],
                    "side": "right"
                },
                "timezones": [
                    "UTC",
                    "UTC+01:00"
                ],
                "continents": [
                    "Europe"
                ],
                "flags": {
                    "png": "https://flagcdn.com/w320/es.png",
                    "svg": "https://flagcdn.com/es.svg"
                },
                "coatOfArms": {
                    "png": "https://mainfacts.com/media/images/coats_of_arms/es.png",
                    "svg": "https://mainfacts.com/media/images/coats_of_arms/es.svg"
                },
                "startOfWeek": "monday",
                "capitalInfo": {
                    "latlng": [
                        40.4,
                        -3.68
                    ]
                },
                "postalCode": {
                    "format": "#####",
                    "regex": "^(\\d{5})$"
                }
            }
        ]
    },
    {
        "name": "Jazz",
        "age": 9,
        "savedCountries": [
            {
                name: {
                    common: "United Kingdom",
                    official: "United Kingdom of Great Britain and Northern Ireland",
                    nativeName: {
                        eng: {
                            official: "United Kingdom of Great Britain and Northern Ireland",
                            common: "United Kingdom"
                        }
                    }
                },
                tld: [
                    ".uk"
                ],
                cca2: "GB",
                ccn3: "826",
                cca3: "GBR",
                cioc: "GBR",
                independent: true,
                status: "officially-assigned",
                unMember: true,
                currencies: {
                    GBP: {
                        name: "British pound",
                        symbol: "£"
                    }
                },
                idd: {
                    root: "+4",
                    suffixes: [
                        "4"
                    ]
                },
                capital: [
                    "London"
                ],
                altSpellings: [
                    "GB",
                    "UK",
                    "Great Britain"
                ],
                region: "Europe",
                subregion: "Northern Europe",
                languages: {
                    eng: "English"
                },
                translations: {
                    ara: {
                        official: "المملكة المتحدة لبريطانيا العظمى وايرلندا الشمالية",
                        common: "المملكة المتحدة"
                    },
                    ces: {
                        official: "Spojené království Velké Británie a Severního Irska",
                        common: "Spojené království"
                    },
                    cym: {
                        official: "United Kingdom of Great Britain and Northern Ireland",
                        common: "United Kingdom"
                    },
                    deu: {
                        official: "Vereinigtes Königreich Großbritannien und Nordirland",
                        common: "Vereinigtes Königreich"
                    },
                    est: {
                        official: "Suurbritannia ja Põhja-Iiri Ühendkuningriik",
                        common: "Suurbritannia"
                    },
                    fin: {
                        official: "Ison-Britannian ja Pohjois-Irlannin yhdistynyt kuningaskunta",
                        common: "Yhdistynyt kuningaskunta"
                    },
                    fra: {
                        official: "Royaume-Uni de Grande-Bretagne et d'Irlande du Nord",
                        common: "Royaume-Uni"
                    },
                    hrv: {
                        official: "Ujedinjeno Kraljevstvo Velike Britanije i Sjeverne Irske",
                        common: "Ujedinjeno Kraljevstvo"
                    },
                    hun: {
                        official: "Nagy-Britannia és Észak-Írország Egyesült Királysága",
                        common: "Egyesült Királyság"
                    },
                    ita: {
                        official: "Regno Unito di Gran Bretagna e Irlanda del Nord",
                        common: "Regno Unito"
                    },
                    jpn: {
                        official: "グレート·ブリテンおよび北アイルランド連合王国",
                        common: "イギリス"
                    },
                    kor: {
                        official: "그레이트브리튼 북아일랜드 연합 왕국",
                        common: "영국"
                    },
                    nld: {
                        official: "Verenigd Koninkrijk van Groot-Brittannië en Noord-Ierland",
                        common: "Verenigd Koninkrijk"
                    },
                    per: {
                        official: "پادشاهی متحد بریتانیای کبیر و ایرلند شمالی",
                        common: "انگلیس"
                    },
                    pol: {
                        official: "Zjednoczone Królestwo Wielkiej Brytanii i Irlandii Północnej",
                        common: "Zjednoczone Krłlestwo"
                    },
                    por: {
                        official: "Reino Unido da Grã-Bretanha e Irlanda do Norte",
                        common: "Reino Unido"
                    },
                    rus: {
                        official: "Соединенное Королевство Великобритании и Северной Ирландии",
                        common: "Великобритания"
                    },
                    slk: {
                        official: "Spojené kráľovstvo Veľkej Británie a SevernéhoÌrska",
                        common: "Veľká Británia (Spojené kráľovstvo)"
                    },
                    spa: {
                        official: "Reino Unido de Gran Bretaña e Irlanda del Norte",
                        common: "Reino Unido"
                    },
                    swe: {
                        official: "Förenade konungariket Storbritannien och Nordirland",
                        common: "Storbritannien"
                    },
                    urd: {
                        official: "مملکتِ متحدہ برطانیہ عظمی و شمالی آئرلینڈ",
                        common: "مملکتِ متحدہ"
                    },
                    zho: {
                        official: "大不列颠及北爱尔兰联合王国",
                        common: "英国"
                    }
                },
                latlng: [
                    54,
                    -2
                ],
                landlocked: false,
                borders: [
                    "IRL"
                ],
                area: 242900,
                demonyms: {
                    eng: {
                        f: "British",
                        m: "British"
                    },
                    fra: {
                        f: "Britannique",
                        m: "Britannique"
                    }
                },
                flag: "🇬🇧",
                maps: {
                    googleMaps: "https://goo.gl/maps/FoDtc3UKMkFsXAjHA",
                    openStreetMaps: "https://www.openstreetmap.org/relation/62149"
                },
                population: 67215293,
                gini: {
                    2017: 35.1
                },
                car: {
                    signs: [
                        "GB"
                    ],
                    side: "left"
                },
                timezones: [
                    "UTC-08:00",
                    "UTC-05:00",
                    "UTC-04:00",
                    "UTC-03:00",
                    "UTC-02:00",
                    "UTC",
                    "UTC+01:00",
                    "UTC+02:00",
                    "UTC+06:00"
                ],
                continents: [
                    "Europe"
                ],
                flags: {
                    png: "https://flagcdn.com/w320/gb.png",
                    svg: "https://flagcdn.com/gb.svg"
                },
                coatOfArms: {
                    png: "https://mainfacts.com/media/images/coats_of_arms/gb.png",
                    svg: "https://mainfacts.com/media/images/coats_of_arms/gb.svg"
                },
                startOfWeek: "monday",
                capitalInfo: {
                    latlng: [
                        51.5,
                        -0.08
                    ]
                },
                postalCode: {
                    format: "@# #@@|@## #@@|@@# #@@|@@## #@@|@#@ #@@|@@#@ #@@|GIR0AA",
                    regex: "^(([A-Z]\d{2}[A-Z]{2})|([A-Z]\d{3}[A-Z]{2})|([A-Z]{2}\d{2}[A-Z]{2})|([A-Z]{2}\d{3}[A-Z]{2})|([A-Z]\d[A-Z]\d[A-Z]{2})|([A-Z]{2}\d[A-Z]\d[A-Z]{2})|(GIR0AA))$"
                }
            },
            {
                name: {
                    common: "Poland",
                    official: "Republic of Poland",
                    nativeName: {
                        pol: {
                            official: "Rzeczpospolita Polska",
                            common: "Polska"
                        }
                    }
                },
                tld: [
                    ".pl"
                ],
                cca2: "PL",
                ccn3: "616",
                cca3: "POL",
                cioc: "POL",
                independent: true,
                status: "officially-assigned",
                unMember: true,
                currencies: {
                    PLN: {
                        name: "Polish złoty",
                        symbol: "zł"
                    }
                },
                idd: {
                    root: "+4",
                    suffixes: [
                        "8"
                    ]
                },
                capital: [
                    "Warsaw"
                ],
                altSpellings: [
                    "PL",
                    "Republic of Poland",
                    "Rzeczpospolita Polska"
                ],
                region: "Europe",
                subregion: "Central Europe",
                languages: {
                    pol: "Polish"
                },
                translations: {
                    ara: {
                        official: "الجمهورية البولندية",
                        common: "بولندا"
                    },
                    ces: {
                        official: "Polská republika",
                        common: "Polsko"
                    },
                    cym: {
                        official: "Republic of Poland",
                        common: "Poland"
                    },
                    deu: {
                        official: "Republik Polen",
                        common: "Polen"
                    },
                    est: {
                        official: "Poola Vabariik",
                        common: "Poola"
                    },
                    fin: {
                        official: "Puolan tasavalta",
                        common: "Puola"
                    },
                    fra: {
                        official: "République de Pologne",
                        common: "Pologne"
                    },
                    hrv: {
                        official: "Republika Poljska",
                        common: "Poljska"
                    },
                    hun: {
                        official: "Lengyel Köztársaság",
                        common: "Lengyelország"
                    },
                    ita: {
                        official: "Repubblica di Polonia",
                        common: "Polonia"
                    },
                    jpn: {
                        official: "ポーランド共和国",
                        common: "ポーランド"
                    },
                    kor: {
                        official: "폴란드 공화국",
                        common: "폴란드"
                    },
                    nld: {
                        official: "Republiek Polen",
                        common: "Polen"
                    },
                    per: {
                        official: "جمهوری لهستان",
                        common: "لهستان"
                    },
                    pol: {
                        official: "Rzeczpospolita Polska",
                        common: "Polska"
                    },
                    por: {
                        official: "República da Polónia",
                        common: "Polónia"
                    },
                    rus: {
                        official: "Республика Польша",
                        common: "Польша"
                    },
                    slk: {
                        official: "Poľská republika",
                        common: "Poľsko"
                    },
                    spa: {
                        official: "República de Polonia",
                        common: "Polonia"
                    },
                    swe: {
                        official: "Republiken Polen",
                        common: "Polen"
                    },
                    urd: {
                        official: "جمہوریہ پولینڈ",
                        common: "پولینڈ"
                    },
                    zho: {
                        official: "波兰共和国",
                        common: "波兰"
                    }
                },
                latlng: [
                    52,
                    20
                ],
                landlocked: false,
                borders: [
                    "BLR",
                    "CZE",
                    "DEU",
                    "LTU",
                    "RUS",
                    "SVK",
                    "UKR"
                ],
                area: 312679,
                demonyms: {
                    eng: {
                        f: "Polish",
                        m: "Polish"
                    },
                    fra: {
                        f: "Polonaise",
                        m: "Polonais"
                    }
                },
                flag: "🇵🇱",
                maps: {
                    googleMaps: "https://goo.gl/maps/gY9Xw4Sf4415P4949",
                    openStreetMaps: "https://www.openstreetmap.org/relation/49715"
                },
                population: 37950802,
                gini: {
                    2018: 30.2
                },
                fifa: "POL",
                car: {
                    signs: [
                        "PL"
                    ],
                    side: "right"
                },
                timezones: [
                    "UTC+01:00"
                ],
                continents: [
                    "Europe"
                ],
                flags: {
                    png: "https://flagcdn.com/w320/pl.png",
                    svg: "https://flagcdn.com/pl.svg"
                },
                coatOfArms: {
                    png: "https://mainfacts.com/media/images/coats_of_arms/pl.png",
                    svg: "https://mainfacts.com/media/images/coats_of_arms/pl.svg"
                },
                startOfWeek: "monday",
                capitalInfo: {
                    latlng: [
                        52.25,
                        21
                    ]
                },
                postalCode: {
                    format: "##-###",
                    regex: "^(\d{5})$"
                }
            },
            {
                name: {
                    common: "Malta",
                    official: "Republic of Malta",
                    nativeName: {
                        eng: {
                            official: "Republic of Malta",
                            common: "Malta"
                        },
                        mlt: {
                            official: "Repubblika ta ' Malta",
                            common: "Malta"
                        }
                    }
                },
                tld: [
                    ".mt"
                ],
                cca2: "MT",
                ccn3: "470",
                cca3: "MLT",
                cioc: "MLT",
                independent: true,
                status: "officially-assigned",
                unMember: true,
                currencies: {
                    EUR: {
                        name: "Euro",
                        symbol: "€"
                    }
                },
                idd: {
                    root: "+3",
                    suffixes: [
                        "56"
                    ]
                },
                capital: [
                    "Valletta"
                ],
                altSpellings: [
                    "MT",
                    "Republic of Malta",
                    "Repubblika ta' Malta"
                ],
                region: "Europe",
                subregion: "Southern Europe",
                languages: {
                    eng: "English",
                    mlt: "Maltese"
                },
                translations: {
                    ara: {
                        official: "جمهورية مالطا",
                        common: "مالطا"
                    },
                    ces: {
                        official: "Maltská republika",
                        common: "Malta"
                    },
                    cym: {
                        official: "Republic of Malta",
                        common: "Malta"
                    },
                    deu: {
                        official: "Republik Malta",
                        common: "Malta"
                    },
                    est: {
                        official: "Malta Vabariik",
                        common: "Malta"
                    },
                    fin: {
                        official: "Maltan tasavalta",
                        common: "Malta"
                    },
                    fra: {
                        official: "République de Malte",
                        common: "Malte"
                    },
                    hrv: {
                        official: "Republika Malta",
                        common: "Malta"
                    },
                    hun: {
                        official: "Máltai Köztársaság",
                        common: "Málta"
                    },
                    ita: {
                        official: "Repubblica di Malta",
                        common: "Malta"
                    },
                    jpn: {
                        official: "マルタ共和国",
                        common: "マルタ"
                    },
                    kor: {
                        official: "몰타 공화국",
                        common: "몰타"
                    },
                    nld: {
                        official: "Republiek Malta",
                        common: "Malta"
                    },
                    per: {
                        official: "جمهوری مالت",
                        common: "مالت"
                    },
                    pol: {
                        official: "Republika Malty",
                        common: "Malta"
                    },
                    por: {
                        official: "República de Malta",
                        common: "Malta"
                    },
                    rus: {
                        official: "Республика Мальта",
                        common: "Мальта"
                    },
                    slk: {
                        official: "Maltská republika",
                        common: "Malta"
                    },
                    spa: {
                        official: "República de Malta",
                        common: "Malta"
                    },
                    swe: {
                        official: "Republiken Malta",
                        common: "Malta"
                    },
                    urd: {
                        official: "جمہوریہ مالٹا",
                        common: "مالٹا"
                    },
                    zho: {
                        official: "马耳他共和国",
                        common: "马耳他"
                    }
                },
                latlng: [
                    35.83333333,
                    14.58333333
                ],
                landlocked: false,
                area: 316,
                demonyms: {
                    eng: {
                        f: "Maltese",
                        m: "Maltese"
                    },
                    fra: {
                        f: "Maltaise",
                        m: "Maltais"
                    }
                },
                flag: "🇲🇹",
                maps: {
                    googleMaps: "https://goo.gl/maps/skXCqguxDxxEKVk47",
                    openStreetMaps: "https://www.openstreetmap.org/relation/365307"
                },
                population: 525285,
                gini: {
                    2018: 28.7
                },
                fifa: "MLT",
                car: {
                    signs: [
                        "M"
                    ],
                    side: "left"
                },
                timezones: [
                    "UTC+01:00"
                ],
                continents: [
                    "Europe"
                ],
                flags: {
                    png: "https://flagcdn.com/w320/mt.png",
                    svg: "https://flagcdn.com/mt.svg"
                },
                coatOfArms: {
                    png: "https://mainfacts.com/media/images/coats_of_arms/mt.png",
                    svg: "https://mainfacts.com/media/images/coats_of_arms/mt.svg"
                },
                startOfWeek: "monday",
                capitalInfo: {
                    latlng: [
                        35.88,
                        14.5
                    ]
                },
                postalCode: {
                    format: "@@@ ###|@@@ ##",
                    regex: "^([A-Z]{3}\d{2}\d?)$"
                }
            },
            {
                name: {
                    common: "Italy",
                    official: "Italian Republic",
                    nativeName: {
                        ita: {
                            official: "Repubblica italiana",
                            common: "Italia"
                        }
                    }
                },
                tld: [
                    ".it"
                ],
                cca2: "IT",
                ccn3: "380",
                cca3: "ITA",
                cioc: "ITA",
                independent: true,
                status: "officially-assigned",
                unMember: true,
                currencies: {
                    EUR: {
                        name: "Euro",
                        symbol: "€"
                    }
                },
                idd: {
                    root: "+3",
                    suffixes: [
                        "9"
                    ]
                },
                capital: [
                    "Rome"
                ],
                altSpellings: [
                    "IT",
                    "Italian Republic",
                    "Repubblica italiana"
                ],
                region: "Europe",
                subregion: "Southern Europe",
                languages: {
                    ita: "Italian"
                },
                translations: {
                    ara: {
                        official: "الجمهورية الإيطالية",
                        common: "إيطاليا"
                    },
                    ces: {
                        official: "Italská republika",
                        common: "Itálie"
                    },
                    cym: {
                        official: "Italian Republic",
                        common: "Italy"
                    },
                    deu: {
                        official: "Italienische Republik",
                        common: "Italien"
                    },
                    est: {
                        official: "Itaalia Vabariik",
                        common: "Itaalia"
                    },
                    fin: {
                        official: "Italian tasavalta",
                        common: "Italia"
                    },
                    fra: {
                        official: "République italienne",
                        common: "Italie"
                    },
                    hrv: {
                        official: "talijanska Republika",
                        common: "Italija"
                    },
                    hun: {
                        official: "Olasz Köztársaság",
                        common: "Olaszország"
                    },
                    ita: {
                        official: "Repubblica italiana",
                        common: "Italia"
                    },
                    jpn: {
                        official: "イタリア共和国",
                        common: "イタリア"
                    },
                    kor: {
                        official: "이탈리아 공화국",
                        common: "이탈리아"
                    },
                    nld: {
                        official: "Italiaanse Republiek",
                        common: "Italië"
                    },
                    per: {
                        official: "جمهوری ایتالیا",
                        common: "ایتالیا"
                    },
                    pol: {
                        official: "Republika Włoska",
                        common: "Włochy"
                    },
                    por: {
                        official: "República Italiana",
                        common: "Itália"
                    },
                    rus: {
                        official: "итальянская Республика",
                        common: "Италия"
                    },
                    slk: {
                        official: "Talianska republika",
                        common: "Taliansko"
                    },
                    spa: {
                        official: "República Italiana",
                        common: "Italia"
                    },
                    swe: {
                        official: "Republiken Italien",
                        common: "Italien"
                    },
                    urd: {
                        official: "جمہوریہ اطالیہ",
                        common: "اطالیہ"
                    },
                    zho: {
                        official: "意大利共和国",
                        common: "意大利"
                    }
                },
                latlng: [
                    42.83333333,
                    12.83333333
                ],
                landlocked: false,
                borders: [
                    "AUT",
                    "FRA",
                    "SMR",
                    "SVN",
                    "CHE",
                    "VAT"
                ],
                area: 301336,
                demonyms: {
                    eng: {
                        f: "Italian",
                        m: "Italian"
                    },
                    fra: {
                        f: "Italienne",
                        m: "Italien"
                    }
                },
                flag: "🇮🇹",
                maps: {
                    googleMaps: "https://goo.gl/maps/8M1K27TDj7StTRTq8",
                    openStreetMaps: "https://www.openstreetmap.org/relation/365331"
                },
                population: 59554023,
                gini: {
                    2017: 35.9
                },
                fifa: "ITA",
                car: {
                    signs: [
                        "I"
                    ],
                    side: "right"
                },
                timezones: [
                    "UTC+01:00"
                ],
                continents: [
                    "Europe"
                ],
                flags: {
                    png: "https://flagcdn.com/w320/it.png",
                    svg: "https://flagcdn.com/it.svg"
                },
                coatOfArms: {
                    png: "https://mainfacts.com/media/images/coats_of_arms/it.png",
                    svg: "https://mainfacts.com/media/images/coats_of_arms/it.svg"
                },
                startOfWeek: "monday",
                capitalInfo: {
                    latlng: [
                        41.9,
                        12.48
                    ]
                },
                postalCode: {
                    format: "#####",
                    regex: "^(\d{5})$"
                }
            },
        ]
    },
    {
        "name": "Matt",
        "age": 11,
        "savedCountries": [
            {
                name: {
                    common: "Portugal",
                    official: "Portuguese Republic",
                    nativeName: {
                        por: {
                            official: "República português",
                            common: "Portugal"
                        }
                    }
                },
                tld: [
                    ".pt"
                ],
                cca2: "PT",
                ccn3: "620",
                cca3: "PRT",
                cioc: "POR",
                independent: true,
                status: "officially-assigned",
                unMember: true,
                currencies: {
                    EUR: {
                        name: "Euro",
                        symbol: "€"
                    }
                },
                idd: {
                    root: "+3",
                    suffixes: [
                        "51"
                    ]
                },
                capital: [
                    "Lisbon"
                ],
                altSpellings: [
                    "PT",
                    "Portuguesa",
                    "Portuguese Republic",
                    "República Portuguesa"
                ],
                region: "Europe",
                subregion: "Southern Europe",
                languages: {
                    por: "Portuguese"
                },
                translations: {
                    ara: {
                        official: "الجمهورية البرتغالية",
                        common: "البرتغال"
                    },
                    ces: {
                        official: "Portugalská republika",
                        common: "Portugalsko"
                    },
                    cym: {
                        official: "Portuguese Republic",
                        common: "Portugal"
                    },
                    deu: {
                        official: "Portugiesische Republik",
                        common: "Portugal"
                    },
                    est: {
                        official: "Portugali Vabariik",
                        common: "Portugal"
                    },
                    fin: {
                        official: "Portugalin tasavalta",
                        common: "Portugali"
                    },
                    fra: {
                        official: "République portugaise",
                        common: "Portugal"
                    },
                    hrv: {
                        official: "Portugalska Republika",
                        common: "Portugal"
                    },
                    hun: {
                        official: "Portugál Köztársaság",
                        common: "Portugália"
                    },
                    ita: {
                        official: "Repubblica portoghese",
                        common: "Portogallo"
                    },
                    jpn: {
                        official: "ポルトガル共和国",
                        common: "ポルトガル"
                    },
                    kor: {
                        official: "포르투갈 공화국",
                        common: "포르투갈"
                    },
                    nld: {
                        official: "Portugese Republiek",
                        common: "Portugal"
                    },
                    per: {
                        official: "جمهوری پرتغال",
                        common: "پرتغال"
                    },
                    pol: {
                        official: "Republika Portugalska",
                        common: "Portugalia"
                    },
                    por: {
                        official: "República português",
                        common: "Portugal"
                    },
                    rus: {
                        official: "Португальская Республика",
                        common: "Португалия"
                    },
                    slk: {
                        official: "Portugalská republika",
                        common: "Portugalsko"
                    },
                    spa: {
                        official: "República Portuguesa",
                        common: "Portugal"
                    },
                    swe: {
                        official: "Republiken Portugal",
                        common: "Portugal"
                    },
                    urd: {
                        official: "جمہوریہ پرتگال",
                        common: "پرتگال"
                    },
                    zho: {
                        official: "葡萄牙共和国",
                        common: "葡萄牙"
                    }
                },
                latlng: [
                    39.5,
                    -8
                ],
                landlocked: false,
                borders: [
                    "ESP"
                ],
                area: 92090,
                demonyms: {
                    eng: {
                        f: "Portuguese",
                        m: "Portuguese"
                    },
                    fra: {
                        f: "Portugaise",
                        m: "Portugais"
                    }
                },
                flag: "🇵🇹",
                maps: {
                    googleMaps: "https://goo.gl/maps/BaTBSyc4GWMmbAKB8",
                    openStreetMaps: "https://www.openstreetmap.org/relation/295480"
                },
                population: 10305564,
                gini: {
                    2018: 33.5
                },
                fifa: "POR",
                car: {
                    signs: [
                        "P"
                    ],
                    side: "right"
                },
                timezones: [
                    "UTC-01:00",
                    "UTC"
                ],
                continents: [
                    "Europe"
                ],
                flags: {
                    png: "https://flagcdn.com/w320/pt.png",
                    svg: "https://flagcdn.com/pt.svg"
                },
                coatOfArms: {
                    png: "https://mainfacts.com/media/images/coats_of_arms/pt.png",
                    svg: "https://mainfacts.com/media/images/coats_of_arms/pt.svg"
                },
                startOfWeek: "monday",
                capitalInfo: {
                    latlng: [
                        38.72,
                        -9.13
                    ]
                },
                postalCode: {
                    format: "####-###",
                    regex: "^(\d{7})$"
                }
            },
            {
                name: {
                    common: "Iceland",
                    official: "Iceland",
                    nativeName: {
                        isl: {
                            official: "Ísland",
                            common: "Ísland"
                        }
                    }
                },
                tld: [
                    ".is"
                ],
                cca2: "IS",
                ccn3: "352",
                cca3: "ISL",
                cioc: "ISL",
                independent: true,
                status: "officially-assigned",
                unMember: true,
                currencies: {
                    ISK: {
                        name: "Icelandic króna",
                        symbol: "kr"
                    }
                },
                idd: {
                    root: "+3",
                    suffixes: [
                        "54"
                    ]
                },
                capital: [
                    "Reykjavik"
                ],
                altSpellings: [
                    "IS",
                    "Island",
                    "Republic of Iceland",
                    "Lýðveldið Ísland"
                ],
                region: "Europe",
                subregion: "Northern Europe",
                languages: {
                    isl: "Icelandic"
                },
                translations: {
                    ara: {
                        official: "آيسلندا",
                        common: "آيسلندا"
                    },
                    ces: {
                        official: "Island",
                        common: "Island"
                    },
                    cym: {
                        official: "Iceland",
                        common: "Iceland"
                    },
                    deu: {
                        official: "Island",
                        common: "Island"
                    },
                    est: {
                        official: "Islandi Vabariik",
                        common: "Island"
                    },
                    fin: {
                        official: "Islanti",
                        common: "Islanti"
                    },
                    fra: {
                        official: "République d'Islande",
                        common: "Islande"
                    },
                    hrv: {
                        official: "Island",
                        common: "Island"
                    },
                    hun: {
                        official: "Izland",
                        common: "Izland"
                    },
                    ita: {
                        official: "Islanda",
                        common: "Islanda"
                    },
                    jpn: {
                        official: "アイスランド",
                        common: "アイスランド"
                    },
                    kor: {
                        official: "아이슬란드 공화국",
                        common: "아이슬란드"
                    },
                    nld: {
                        official: "IJsland",
                        common: "IJsland"
                    },
                    per: {
                        official: "جمهوری ایسلند",
                        common: "ایسلند"
                    },
                    pol: {
                        official: "Republika Islandii",
                        common: "Islandia"
                    },
                    por: {
                        official: "Islândia",
                        common: "Islândia"
                    },
                    rus: {
                        official: "Исландия",
                        common: "Исландия"
                    },
                    slk: {
                        official: "Islandská republika",
                        common: "Island"
                    },
                    spa: {
                        official: "Islandia",
                        common: "Islandia"
                    },
                    swe: {
                        official: "Island",
                        common: "Island"
                    },
                    urd: {
                        official: "آئس لینڈ",
                        common: "آئس لینڈ"
                    },
                    zho: {
                        official: "冰岛",
                        common: "冰岛"
                    }
                },
                latlng: [
                    65,
                    -18
                ],
                landlocked: false,
                area: 103000,
                demonyms: {
                    eng: {
                        f: "Icelander",
                        m: "Icelander"
                    },
                    fra: {
                        f: "Islandaise",
                        m: "Islandais"
                    }
                },
                flag: "🇮🇸",
                maps: {
                    googleMaps: "https://goo.gl/maps/WxFWSQuc3oamNxoE6",
                    openStreetMaps: "https://www.openstreetmap.org/relation/299133"
                },
                population: 366425,
                gini: {
                    2017: 26.1
                },
                fifa: "ISL",
                car: {
                    signs: [
                        "IS"
                    ],
                    side: "right"
                },
                timezones: [
                    "UTC"
                ],
                continents: [
                    "Europe"
                ],
                flags: {
                    png: "https://flagcdn.com/w320/is.png",
                    svg: "https://flagcdn.com/is.svg"
                },
                coatOfArms: {
                    png: "https://mainfacts.com/media/images/coats_of_arms/is.png",
                    svg: "https://mainfacts.com/media/images/coats_of_arms/is.svg"
                },
                startOfWeek: "monday",
                capitalInfo: {
                    latlng: [
                        64.15,
                        -21.95
                    ]
                },
                postalCode: {
                    format: "###",
                    regex: "^(\d{3})$"
                }
            },
            {
                name: {
                    common: "Finland",
                    official: "Republic of Finland",
                    nativeName: {
                        fin: {
                            official: "Suomen tasavalta",
                            common: "Suomi"
                        },
                        swe: {
                            official: "Republiken Finland",
                            common: "Finland"
                        }
                    }
                },
                tld: [
                    ".fi"
                ],
                cca2: "FI",
                ccn3: "246",
                cca3: "FIN",
                cioc: "FIN",
                independent: true,
                status: "officially-assigned",
                unMember: true,
                currencies: {
                    EUR: {
                        name: "Euro",
                        symbol: "€"
                    }
                },
                idd: {
                    root: "+3",
                    suffixes: [
                        "58"
                    ]
                },
                capital: [
                    "Helsinki"
                ],
                altSpellings: [
                    "FI",
                    "Suomi",
                    "Republic of Finland",
                    "Suomen tasavalta",
                    "Republiken Finland"
                ],
                region: "Europe",
                subregion: "Northern Europe",
                languages: {
                    fin: "Finnish",
                    swe: "Swedish"
                },
                translations: {
                    ara: {
                        official: "جمهورية فنلندا",
                        common: "فنلندا"
                    },
                    ces: {
                        official: "Finská republika",
                        common: "Finsko"
                    },
                    cym: {
                        official: "Republic of Finland",
                        common: "Finland"
                    },
                    deu: {
                        official: "Republik Finnland",
                        common: "Finnland"
                    },
                    est: {
                        official: "Soome Vabariik",
                        common: "Soome"
                    },
                    fin: {
                        official: "Suomen tasavalta",
                        common: "Suomi"
                    },
                    fra: {
                        official: "République de Finlande",
                        common: "Finlande"
                    },
                    hrv: {
                        official: "Republika Finska",
                        common: "Finska"
                    },
                    hun: {
                        official: "Finn Köztársaság",
                        common: "Finnország"
                    },
                    ita: {
                        official: "Repubblica di Finlandia",
                        common: "Finlandia"
                    },
                    jpn: {
                        official: "フィンランド共和国",
                        common: "フィンランド"
                    },
                    kor: {
                        official: "핀란드 공화국",
                        common: "핀란드"
                    },
                    nld: {
                        official: "Republiek Finland",
                        common: "Finland"
                    },
                    per: {
                        official: "جمهوری فنلاند",
                        common: "فنلاند"
                    },
                    pol: {
                        official: "Republika Finlandii",
                        common: "Finlandia"
                    },
                    por: {
                        official: "República da Finlândia",
                        common: "Finlândia"
                    },
                    rus: {
                        official: "Финляндская Республика",
                        common: "Финляндия"
                    },
                    slk: {
                        official: "Fínska republika",
                        common: "Fínsko"
                    },
                    spa: {
                        official: "República de Finlandia",
                        common: "Finlandia"
                    },
                    swe: {
                        official: "Republiken Finland",
                        common: "Finland"
                    },
                    urd: {
                        official: "جمہوریہ فن لینڈ",
                        common: "فن لینڈ"
                    },
                    zho: {
                        official: "芬兰共和国",
                        common: "芬兰"
                    }
                },
                latlng: [
                    64,
                    26
                ],
                landlocked: false,
                borders: [
                    "NOR",
                    "SWE",
                    "RUS"
                ],
                area: 338424,
                demonyms: {
                    eng: {
                        f: "Finnish",
                        m: "Finnish"
                    },
                    fra: {
                        f: "Finlandaise",
                        m: "Finlandais"
                    }
                },
                flag: "🇫🇮",
                maps: {
                    googleMaps: "https://goo.gl/maps/HjgWDCNKRAYHrkMn8",
                    openStreetMaps: "openstreetmap.org/relation/54224"
                },
                population: 5530719,
                gini: {
                    2018: 27.3
                },
                fifa: "FIN",
                car: {
                    signs: [
                        "FIN"
                    ],
                    side: "right"
                },
                timezones: [
                    "UTC+02:00"
                ],
                continents: [
                    "Europe"
                ],
                flags: {
                    png: "https://flagcdn.com/w320/fi.png",
                    svg: "https://flagcdn.com/fi.svg"
                },
                coatOfArms: {
                    png: "https://mainfacts.com/media/images/coats_of_arms/fi.png",
                    svg: "https://mainfacts.com/media/images/coats_of_arms/fi.svg"
                },
                startOfWeek: "monday",
                capitalInfo: {
                    latlng: [
                        60.17,
                        24.93
                    ]
                },
                postalCode: {
                    format: "#####",
                    regex: "^(?:FI)*(\d{5})$"
                }
            },
            {
                name: {
                    common: "United Kingdom",
                    official: "United Kingdom of Great Britain and Northern Ireland",
                    nativeName: {
                        eng: {
                            official: "United Kingdom of Great Britain and Northern Ireland",
                            common: "United Kingdom"
                        }
                    }
                },
                tld: [
                    ".uk"
                ],
                cca2: "GB",
                ccn3: "826",
                cca3: "GBR",
                cioc: "GBR",
                independent: true,
                status: "officially-assigned",
                unMember: true,
                currencies: {
                    GBP: {
                        name: "British pound",
                        symbol: "£"
                    }
                },
                idd: {
                    root: "+4",
                    suffixes: [
                        "4"
                    ]
                },
                capital: [
                    "London"
                ],
                altSpellings: [
                    "GB",
                    "UK",
                    "Great Britain"
                ],
                region: "Europe",
                subregion: "Northern Europe",
                languages: {
                    eng: "English"
                },
                translations: {
                    ara: {
                        official: "المملكة المتحدة لبريطانيا العظمى وايرلندا الشمالية",
                        common: "المملكة المتحدة"
                    },
                    ces: {
                        official: "Spojené království Velké Británie a Severního Irska",
                        common: "Spojené království"
                    },
                    cym: {
                        official: "United Kingdom of Great Britain and Northern Ireland",
                        common: "United Kingdom"
                    },
                    deu: {
                        official: "Vereinigtes Königreich Großbritannien und Nordirland",
                        common: "Vereinigtes Königreich"
                    },
                    est: {
                        official: "Suurbritannia ja Põhja-Iiri Ühendkuningriik",
                        common: "Suurbritannia"
                    },
                    fin: {
                        official: "Ison-Britannian ja Pohjois-Irlannin yhdistynyt kuningaskunta",
                        common: "Yhdistynyt kuningaskunta"
                    },
                    fra: {
                        official: "Royaume-Uni de Grande-Bretagne et d'Irlande du Nord",
                        common: "Royaume-Uni"
                    },
                    hrv: {
                        official: "Ujedinjeno Kraljevstvo Velike Britanije i Sjeverne Irske",
                        common: "Ujedinjeno Kraljevstvo"
                    },
                    hun: {
                        official: "Nagy-Britannia és Észak-Írország Egyesült Királysága",
                        common: "Egyesült Királyság"
                    },
                    ita: {
                        official: "Regno Unito di Gran Bretagna e Irlanda del Nord",
                        common: "Regno Unito"
                    },
                    jpn: {
                        official: "グレート·ブリテンおよび北アイルランド連合王国",
                        common: "イギリス"
                    },
                    kor: {
                        official: "그레이트브리튼 북아일랜드 연합 왕국",
                        common: "영국"
                    },
                    nld: {
                        official: "Verenigd Koninkrijk van Groot-Brittannië en Noord-Ierland",
                        common: "Verenigd Koninkrijk"
                    },
                    per: {
                        official: "پادشاهی متحد بریتانیای کبیر و ایرلند شمالی",
                        common: "انگلیس"
                    },
                    pol: {
                        official: "Zjednoczone Królestwo Wielkiej Brytanii i Irlandii Północnej",
                        common: "Zjednoczone Krłlestwo"
                    },
                    por: {
                        official: "Reino Unido da Grã-Bretanha e Irlanda do Norte",
                        common: "Reino Unido"
                    },
                    rus: {
                        official: "Соединенное Королевство Великобритании и Северной Ирландии",
                        common: "Великобритания"
                    },
                    slk: {
                        official: "Spojené kráľovstvo Veľkej Británie a SevernéhoÌrska",
                        common: "Veľká Británia (Spojené kráľovstvo)"
                    },
                    spa: {
                        official: "Reino Unido de Gran Bretaña e Irlanda del Norte",
                        common: "Reino Unido"
                    },
                    swe: {
                        official: "Förenade konungariket Storbritannien och Nordirland",
                        common: "Storbritannien"
                    },
                    urd: {
                        official: "مملکتِ متحدہ برطانیہ عظمی و شمالی آئرلینڈ",
                        common: "مملکتِ متحدہ"
                    },
                    zho: {
                        official: "大不列颠及北爱尔兰联合王国",
                        common: "英国"
                    }
                },
                latlng: [
                    54,
                    -2
                ],
                landlocked: false,
                borders: [
                    "IRL"
                ],
                area: 242900,
                demonyms: {
                    eng: {
                        f: "British",
                        m: "British"
                    },
                    fra: {
                        f: "Britannique",
                        m: "Britannique"
                    }
                },
                flag: "🇬🇧",
                maps: {
                    googleMaps: "https://goo.gl/maps/FoDtc3UKMkFsXAjHA",
                    openStreetMaps: "https://www.openstreetmap.org/relation/62149"
                },
                population: 67215293,
                gini: {
                    2017: 35.1
                },
                car: {
                    signs: [
                        "GB"
                    ],
                    side: "left"
                },
                timezones: [
                    "UTC-08:00",
                    "UTC-05:00",
                    "UTC-04:00",
                    "UTC-03:00",
                    "UTC-02:00",
                    "UTC",
                    "UTC+01:00",
                    "UTC+02:00",
                    "UTC+06:00"
                ],
                continents: [
                    "Europe"
                ],
                flags: {
                    png: "https://flagcdn.com/w320/gb.png",
                    svg: "https://flagcdn.com/gb.svg"
                },
                coatOfArms: {
                    png: "https://mainfacts.com/media/images/coats_of_arms/gb.png",
                    svg: "https://mainfacts.com/media/images/coats_of_arms/gb.svg"
                },
                startOfWeek: "monday",
                capitalInfo: {
                    latlng: [
                        51.5,
                        -0.08
                    ]
                },
                postalCode: {
                    format: "@# #@@|@## #@@|@@# #@@|@@## #@@|@#@ #@@|@@#@ #@@|GIR0AA",
                    regex: "^(([A-Z]\d{2}[A-Z]{2})|([A-Z]\d{3}[A-Z]{2})|([A-Z]{2}\d{2}[A-Z]{2})|([A-Z]{2}\d{3}[A-Z]{2})|([A-Z]\d[A-Z]\d[A-Z]{2})|([A-Z]{2}\d[A-Z]\d[A-Z]{2})|(GIR0AA))$"
                }
            },
        ]
    }
])