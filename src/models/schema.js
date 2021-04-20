export const schema = {
    "models": {
        "Country": {
            "name": "Country",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "createAt": {
                    "name": "createAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "createAtTS": {
                    "name": "createAtTS",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "iso31661a2": {
                    "name": "iso31661a2",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "iso31661a3": {
                    "name": "iso31661a3",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "iso31661n": {
                    "name": "iso31661n",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "coordinates": {
                    "name": "coordinates",
                    "isArray": true,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "continent": {
                    "name": "continent",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "flagIcon": {
                    "name": "flagIcon",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "flagSvg": {
                    "name": "flagSvg",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "domain": {
                    "name": "domain",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "tzName": {
                    "name": "tzName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "geoJson": {
                    "name": "geoJson",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "landlocked": {
                    "name": "landlocked",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "borders": {
                    "name": "borders",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "area": {
                    "name": "area",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "demonyms": {
                    "name": "demonyms",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "dialCode": {
                    "name": "dialCode",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "wikiLink": {
                    "name": "wikiLink",
                    "isArray": false,
                    "type": "AWSURL",
                    "isRequired": false,
                    "attributes": []
                },
                "icaoArpt": {
                    "name": "icaoArpt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "icaoTail": {
                    "name": "icaoTail",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "e164": {
                    "name": "e164",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "ioc": {
                    "name": "ioc",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "e212": {
                    "name": "e212",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "natoa3": {
                    "name": "natoa3",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "natoa2": {
                    "name": "natoa2",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "locMarc": {
                    "name": "locMarc",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "ituMid": {
                    "name": "ituMid",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "itu3a": {
                    "name": "itu3a",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "ituPreffix": {
                    "name": "ituPreffix",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "fips": {
                    "name": "fips",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "plate": {
                    "name": "plate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "gs1": {
                    "name": "gs1",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "undp": {
                    "name": "undp",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "wmo": {
                    "name": "wmo",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "countryWxRH": {
                    "name": "countryWxRH",
                    "isArray": true,
                    "type": {
                        "model": "WxReportHistory"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "countryID"
                    }
                },
                "countryWxR": {
                    "name": "countryWxR",
                    "isArray": true,
                    "type": {
                        "model": "WxReport"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "countryID"
                    }
                },
                "countryArpt": {
                    "name": "countryArpt",
                    "isArray": true,
                    "type": {
                        "model": "Airport"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "countryID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Countries",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "WxReportHistory": {
            "name": "WxReportHistory",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "createAt": {
                    "name": "createAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "createAtTS": {
                    "name": "createAtTS",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": false,
                    "attributes": []
                },
                "isoDate": {
                    "name": "isoDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "tsDate": {
                    "name": "tsDate",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": false,
                    "attributes": []
                },
                "countryIso31661a2": {
                    "name": "countryIso31661a2",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "icao": {
                    "name": "icao",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "faa": {
                    "name": "faa",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "reportType": {
                    "name": "reportType",
                    "isArray": false,
                    "type": {
                        "enum": "ReportType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "raw": {
                    "name": "raw",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "countryID": {
                    "name": "countryID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "airportID": {
                    "name": "airportID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "WxReportHistories",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "bycountry",
                        "fields": [
                            "countryID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byairport",
                        "fields": [
                            "airportID"
                        ]
                    }
                }
            ]
        },
        "WxReport": {
            "name": "WxReport",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "createAt": {
                    "name": "createAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "createAtTS": {
                    "name": "createAtTS",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": false,
                    "attributes": []
                },
                "isoDate": {
                    "name": "isoDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "tsDate": {
                    "name": "tsDate",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": false,
                    "attributes": []
                },
                "ttl": {
                    "name": "ttl",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": false,
                    "attributes": []
                },
                "countryIso31661a2": {
                    "name": "countryIso31661a2",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "arptCode": {
                    "name": "arptCode",
                    "isArray": false,
                    "type": {
                        "enum": "ArptCode"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "reportType": {
                    "name": "reportType",
                    "isArray": false,
                    "type": {
                        "enum": "ReportType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "raw": {
                    "name": "raw",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "countryID": {
                    "name": "countryID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "airportID": {
                    "name": "airportID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "WxReports",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "bycountry",
                        "fields": [
                            "countryID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byairport",
                        "fields": [
                            "airportID"
                        ]
                    }
                }
            ]
        },
        "Airport": {
            "name": "Airport",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "createAt": {
                    "name": "createAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "createAtTS": {
                    "name": "createAtTS",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": false,
                    "attributes": []
                },
                "iso31661a2": {
                    "name": "iso31661a2",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "icao": {
                    "name": "icao",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "iata": {
                    "name": "iata",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "faa": {
                    "name": "faa",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "city": {
                    "name": "city",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "elevation": {
                    "name": "elevation",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "tz_name": {
                    "name": "tz_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "coordinates": {
                    "name": "coordinates",
                    "isArray": true,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "arptWxRH": {
                    "name": "arptWxRH",
                    "isArray": true,
                    "type": {
                        "model": "WxReportHistory"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "airportID"
                    }
                },
                "arptWxR": {
                    "name": "arptWxR",
                    "isArray": true,
                    "type": {
                        "model": "WxReport"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "airportID"
                    }
                },
                "countryID": {
                    "name": "countryID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Airports",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "bycountry",
                        "fields": [
                            "countryID"
                        ]
                    }
                }
            ]
        },
        "PrivateLogbook": {
            "name": "PrivateLogbook",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "createAt": {
                    "name": "createAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "createAtTS": {
                    "name": "createAtTS",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": false,
                    "attributes": []
                },
                "fltDate": {
                    "name": "fltDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "code": {
                    "name": "code",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "nflt": {
                    "name": "nflt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "dep": {
                    "name": "dep",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "arr": {
                    "name": "arr",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "dhd": {
                    "name": "dhd",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "augmented": {
                    "name": "augmented",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "training": {
                    "name": "training",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "dBlockTime": {
                    "name": "dBlockTime",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "hBlockTime": {
                    "name": "hBlockTime",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "fCrew": {
                    "name": "fCrew",
                    "isArray": true,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "cCrew": {
                    "name": "cCrew",
                    "isArray": true,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                }
            },
            "syncable": true,
            "pluralName": "PrivateLogbooks",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "Pilot": {
            "name": "Pilot",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "createAt": {
                    "name": "createAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "createAtTS": {
                    "name": "createAtTS",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": false,
                    "attributes": []
                },
                "fullName": {
                    "name": "fullName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "middleName": {
                    "name": "middleName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "lastName": {
                    "name": "lastName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "dob": {
                    "name": "dob",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Pilots",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "NotamQ23": {
            "name": "NotamQ23",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "category": {
                    "name": "category",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "code": {
                    "name": "code",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "level": {
                    "name": "level",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "icon": {
                    "name": "icon",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "NotamQ23s",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "NotamQ45": {
            "name": "NotamQ45",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "code": {
                    "name": "code",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "NotamQ45s",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "IcaoAbbreviationsCodes": {
            "name": "IcaoAbbreviationsCodes",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "code": {
                    "name": "code",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "IcaoAbbreviationsCodes",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        }
    },
    "enums": {
        "ReportType": {
            "name": "ReportType",
            "values": [
                "METAR",
                "TAF",
                "SIGMET",
                "TC",
                "ICING",
                "WINDS"
            ]
        },
        "ArptCode": {
            "name": "ArptCode",
            "values": [
                "ICAO",
                "IATA",
                "FAA"
            ]
        },
        "Layover": {
            "name": "Layover",
            "values": [
                "FALSE",
                "DOMESTIC",
                "INTERNATIONAL"
            ]
        }
    },
    "nonModels": {},
    "version": "8ccf7f50d37911981fc1d9d7eb737e9d"
};