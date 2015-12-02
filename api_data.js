define({ "api": [
  {
    "type": "get",
    "url": "/cities",
    "title": "GET",
    "group": "Cities",
    "description": "<p>Providing a simple listing of cities within the platform.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "country",
            "description": "<p>Limit results by a certain country.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "country",
            "description": "<p>2 digit ISO country code containing measurement</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "locations",
            "description": "<p>Number of locations in this city</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "count",
            "description": "<p>Number of measurements for this city</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "city",
            "description": "<p>Name of the city</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "[\n  {\n    \"locations\": 14,\n    \"count\": 21301,\n    \"country\": \"NL\",\n    \"city\": \"Amsterdam\"\n  },\n  {\n    \"locations\": 1,\n    \"count\": 2326,\n    \"country\": \"NL\",\n    \"city\": \"Badhoevedorp\"\n  },\n  ...\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "statusCode",
            "description": "<p>The error code</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error name</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"statusCode\": 400,\n \"error\": \"Bad Request\",\n \"message\": \"Oops!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/cities.js",
    "groupTitle": "Cities",
    "name": "GetCities"
  },
  {
    "type": "get",
    "url": "/countries",
    "title": "GET",
    "group": "Countries",
    "description": "<p>Providing a simple listing of countries within the platform.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "code",
            "description": "<p>2 digit ISO country code containing measurement</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Nicer country name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "count",
            "description": "<p>Number of measurements for the country</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "[\n  {\n    \"count\": 40638,\n    \"code\": \"AU\",\n    \"name\": \"Australia\"\n  },\n  {\n    \"count\": 78681,\n    \"code\": \"BR\",\n    \"name\": \"Brazil\"\n  },\n  ...\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "statusCode",
            "description": "<p>The error code</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error name</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"statusCode\": 400,\n \"error\": \"Bad Request\",\n \"message\": \"Oops!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/countries.js",
    "groupTitle": "Countries",
    "name": "GetCountries"
  },
  {
    "type": "get",
    "url": "/latest",
    "title": "GET",
    "group": "Latest",
    "description": "<p>Provides the latest value of each available parameter for every location in the system.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "city",
            "description": "<p>Limit results by a certain city.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "country",
            "description": "<p>Limit results by a certain country.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "location",
            "description": "<p>Limit results by a certain location.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "parameter",
            "description": "<p>Limit to only a certain parameter (valid values are pm25, pm10, so2, no2, o3, co and bc).</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>boolean</p> ",
            "optional": true,
            "field": "has_geo",
            "description": "<p>Filter out items that have or do not have geographic information.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>number</p> ",
            "optional": true,
            "field": "value_from",
            "description": "<p>Show results above value threshold, useful in combination with <code>parameter</code>.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>number</p> ",
            "optional": true,
            "field": "value_to",
            "description": "<p>Show results below value threshold, useful in combination with <code>parameter</code>.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "location",
            "description": "<p>Location description for measurement</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "country",
            "description": "<p>2 digit country code containing measurement</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "city",
            "description": "<p>City containing measurement</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>array</p> ",
            "optional": false,
            "field": "measurements",
            "description": "<p>An array of the latest measurements for each parameter for this location.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": " HTTP/1.1 200 OK\n \"results\": [\n  {\n    \"location\": \"Punjabi Bagh\",\n    \"city\": \"Delhi\",\n    \"country\": \"IN\",\n    \"measurements\": [\n      {\n        \"parameter\": \"so2\",\n        \"value\": \"7.8\",\n        \"lastUpdated\": \"2015-07-24T11:30:00.000Z\",\n         \"unit\": \"µg/m3\"\n       },\n       {\n         \"parameter\": \"co\",\n         \"value\": 1.3,\n         \"lastUpdated\": \"2015-08-18T23:30:00.000Z\",\n         \"unit\": \"mg/m3\"\n       },\n       {\n         \"parameter\": \"pm25\",\n         \"value\": 79,\n         \"lastUpdated\": \"2015-10-02T21:45:00.000Z\",\n         \"unit\": \"µg/m3\"\n       }\n     ]\n       ...\n   }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "statusCode",
            "description": "<p>The error code</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error name</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"statusCode\": 400,\n \"error\": \"Bad Request\",\n \"message\": \"Oops!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/latest.js",
    "groupTitle": "Latest",
    "name": "GetLatest"
  },
  {
    "type": "get",
    "url": "/locations",
    "title": "GET",
    "group": "Locations",
    "description": "<p>Providing data about distinct measurement locations, this is a list containing metadata about the location..</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "city",
            "description": "<p>Limit results by a certain city.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "country",
            "description": "<p>Limit results by a certain country.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "location",
            "description": "<p>Limit results by a certain location.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "parameter",
            "description": "<p>Limit to only a certain parameter (valid values are pm25, pm10, so2, no2, o3, co and bc).</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>boolean</p> ",
            "optional": true,
            "field": "has_geo",
            "description": "<p>Filter out items that have or do not have geographic information.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>number</p> ",
            "optional": true,
            "field": "value_from",
            "description": "<p>Show results above value threshold, useful in combination with <code>parameter</code>.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>number</p> ",
            "optional": true,
            "field": "value_to",
            "description": "<p>Show results below value threshold, useful in combination with <code>parameter</code>.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>date</p> ",
            "optional": true,
            "field": "date_from",
            "description": "<p>Show results after a certain date. (ex. <code>2015-12-20</code>)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>date</p> ",
            "optional": true,
            "field": "date_to",
            "description": "<p>Show results before a certain date. (ex. <code>2015-12-20</code>)</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "location",
            "description": "<p>Location description for measurement</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "country",
            "description": "<p>2 digit country code containing measurement</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "city",
            "description": "<p>City containing measurement</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>number</p> ",
            "optional": false,
            "field": "count",
            "description": "<p>Number of measurements, cumulative by specificity level</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "sourceName",
            "description": "<p>Can follow this to determine which adapter is used for this location</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>date</p> ",
            "optional": false,
            "field": "firstUpdated",
            "description": "<p>When was data first grabbed for this location (in UTC)?</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>date</p> ",
            "optional": false,
            "field": "lastUpdated",
            "description": "<p>When was data last grabbed for this location (in UTC)?</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>array</p> ",
            "optional": false,
            "field": "parameters",
            "description": "<p>List of parameters present for this location</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique ID</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "[\n  {\n    \"count\": 4242,\n    \"sourceName\": \"Australia - New South Wales\",\n    \"firstUpdated\": \"2015-10-13T01:00:00.000Z\",\n    \"lastUpdated\": \"2015-11-14T03:00:00.000Z\",\n    \"parameters\": [\n      \"pm25\",\n      \"pm10\",\n      \"so2\",\n      \"co\",\n      \"no2\",\n      \"o3\"\n    ],\n    \"country\": \"AU\",\n    \"city\": \"Central Coast\",\n    \"location\": \"Wyong\"\n  },\n  {\n    \"count\": 728,\n    \"sourceName\": \"Australia - New South Wales\",\n    \"firstUpdated\": \"2015-10-13T01:00:00.000Z\",\n    \"lastUpdated\": \"2015-11-14T03:00:00.000Z\",\n    \"parameters\": [\n      \"pm10\"\n    ],\n    \"country\": \"AU\",\n    \"city\": \"Central Tablelands\",\n    \"location\": \"Bathurst\"\n  },\n  ...\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "statusCode",
            "description": "<p>The error code</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error name</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"statusCode\": 400,\n \"error\": \"Bad Request\",\n \"message\": \"Oops!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/locations.js",
    "groupTitle": "Locations",
    "name": "GetLocations"
  },
  {
    "type": "get",
    "url": "/measurements",
    "title": "GET",
    "group": "Measurements",
    "description": "<p>Providing data about individual measurements</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "country",
            "description": "<p>Limit results by a certain country.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "city",
            "description": "<p>Limit results by a certain city.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "location",
            "description": "<p>Limit results by a certain location.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "parameter",
            "description": "<p>Limit to only a certain parameter (valid values are pm25, pm10, so2, no2, o3, co and bc).</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>boolean</p> ",
            "optional": true,
            "field": "has_geo",
            "description": "<p>Filter out items that have or do not have geographic information.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>number</p> ",
            "optional": true,
            "field": "value_from",
            "description": "<p>Show results above value threshold, useful in combination with <code>parameter</code>.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>number</p> ",
            "optional": true,
            "field": "value_to",
            "description": "<p>Show results below value threshold, useful in combination with <code>parameter</code>.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "date_from",
            "description": "<p>Show results after a certain date. (ex. <code>2015-12-20</code>)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "date_to",
            "description": "<p>Show results before a certain date. (ex. <code>2015-12-20</code>)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "sort",
            "defaultValue": "desc",
            "description": "<p>The sort order, asc or desc. Must be used with <code>order_by</code>.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "order_by",
            "defaultValue": "date",
            "description": "<p>Field to sort by. Must be used with <code>sort</code>.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>array</p> ",
            "optional": true,
            "field": "include_fields",
            "defaultValue": "location,parameter,date,value,unit,coordinates,country,city",
            "description": "<p>Include extra fields in the output in addition to default values.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>number</p> ",
            "optional": true,
            "field": "limit",
            "defaultValue": "100",
            "description": "<p>Change the number of results returned, max is 100.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>number</p> ",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Paginate through results.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>number</p> ",
            "optional": true,
            "field": "skip",
            "description": "<p>Number of records to skip.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Format for data return, can be <code>csv</code> or <code>json</code>.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique ID <code>default</code></p> "
          },
          {
            "group": "Success 200",
            "type": "<p>date</p> ",
            "optional": false,
            "field": "date",
            "description": "<p>Date and time of measurement (UTC) <code>default</code></p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "parameter",
            "description": "<p>Property being measured <code>default</code></p> "
          },
          {
            "group": "Success 200",
            "type": "<p>number</p> ",
            "optional": false,
            "field": "value",
            "description": "<p>Value of measurement <code>default</code></p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "unit",
            "description": "<p>Unit of measurement <code>default</code></p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "location",
            "description": "<p>Location description for measurement <code>default</code></p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "country",
            "description": "<p>2 digit country code containing measurement <code>default</code></p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "city",
            "description": "<p>City containing measurement <code>default</code></p> "
          },
          {
            "group": "Success 200",
            "type": "<p>object</p> ",
            "optional": false,
            "field": "coordinates",
            "description": "<p>Latitude and longitude measurement was taken at <code>default</code></p> "
          },
          {
            "group": "Success 200",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "sourceName",
            "description": "<p>Name of source matching to sources table for reference</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>array</p> ",
            "optional": false,
            "field": "attribution",
            "description": "<p>Attribution information for the measurement (name and url), in priority order.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>object</p> ",
            "optional": false,
            "field": "averagingPeriod",
            "description": "<p>Period over which measurement is averaged.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": " HTTP/1.1 200 OK\n {\n  \"_id\": \"55a823fc3fe18309498d6ce2\",\n  \"parameter\": \"Ammonia\",\n  \"date\": \"2015-07-16T20:30:00.000Z\",\n  \"value\": \"72.9\",\n  \"unit\": \"µg/m3\",\n  \"location\": \"Anand Vihar\",\n  \"country\": \"IN\",\n  \"city\": \"Delhi\",\n  \"sourceName\": \"Anand Vihar\",\n  \"averagingPeriod\": {\n     \"value\": 1,\n     \"unit\": \"hours\"\n  },\n  \"coordinates\": {\n     \"latitude\": 43.34,\n     \"longitude\": 23.04\n  },\n  \"attribution\": [\n    {\n      \"name\" : \"SINCA\",\n      \"url\" : \"http://sinca.mma.gob.cl/\"\n    },\n    {\n      \"name\" : \"Ministerio del Medio Ambiente\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "statusCode",
            "description": "<p>The error code</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error name</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"statusCode\": 400,\n \"error\": \"Bad Request\",\n \"message\": \"Oops!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/measurements.js",
    "groupTitle": "Measurements",
    "name": "GetMeasurements"
  }
] });