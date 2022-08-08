var express = require('express');
var app = express();
var http = require('http');
var path = require('path');

var port = 3000;
app.use('/', express.static(path.join(__dirname, './client')));

app.get('/data', (req, res, next) => {
	let data = { 
		"Denver": {
			"lat": 39.7392,
			"lon": -104.9847,
			"timezone": "America/Denver",
			"timezone_offset": -21600,
			"current": {
				"dt": 1659721706,
				"sunrise": 1659700961,
				"sunset": 1659751748,
				"temp": 92.66,
				"feels_like": 90.64,
				"pressure": 1010,
				"humidity": 28,
				"dew_point": 54.81,
				"uvi": 9.25,
				"clouds": 71,
				"visibility": 10000,
				"wind_speed": 3,
				"wind_deg": 114,
				"wind_gust": 5.99,
				"weather": [{
					"id": 803,
					"main": "Clouds",
					"description": "broken clouds",
					"icon": "04d"
				}]
			},
			"daily": [{
				"dt": 1659726000,
				"sunrise": 1659700961,
				"sunset": 1659751748,
				"moonrise": 1659729960,
				"moonset": 0,
				"moon_phase": 0.25,
				"temp": {
					"day": 93.27,
					"min": 74.32,
					"max": 98.31,
					"night": 81.99,
					"eve": 91.45,
					"morn": 75.45
				},
				"feels_like": {
					"day": 90.63,
					"night": 80.92,
					"eve": 87.87,
					"morn": 74.53
				},
				"pressure": 1009,
				"humidity": 25,
				"dew_point": 52.23,
				"wind_speed": 9.04,
				"wind_deg": 188,
				"wind_gust": 14.63,
				"weather": [{
					"id": 803,
					"main": "Clouds",
					"description": "broken clouds",
					"icon": "04d"
				}],
				"clouds": 65,
				"pop": 0.23,
				"uvi": 10.16
			}, {
				"dt": 1659812400,
				"sunrise": 1659787418,
				"sunset": 1659838080,
				"moonrise": 1659820740,
				"moonset": 1659766680,
				"moon_phase": 0.3,
				"temp": {
					"day": 90.34,
					"min": 73.04,
					"max": 94.57,
					"night": 74.48,
					"eve": 76.44,
					"morn": 73.04
				},
				"feels_like": {
					"day": 87.51,
					"night": 74.17,
					"eve": 76.19,
					"morn": 72.39
				},
				"pressure": 1010,
				"humidity": 26,
				"dew_point": 50.7,
				"wind_speed": 18.92,
				"wind_deg": 186,
				"wind_gust": 27.98,
				"weather": [{
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10d"
				}],
				"clouds": 0,
				"pop": 0.69,
				"rain": 1.74,
				"uvi": 10
			}, {
				"dt": 1659898800,
				"sunrise": 1659873875,
				"sunset": 1659924411,
				"moonrise": 1659911640,
				"moonset": 1659855420,
				"moon_phase": 0.33,
				"temp": {
					"day": 87.3,
					"min": 65.8,
					"max": 89.85,
					"night": 65.8,
					"eve": 73.04,
					"morn": 70.97
				},
				"feels_like": {
					"day": 85.33,
					"night": 65.7,
					"eve": 72.54,
					"morn": 70.54
				},
				"pressure": 1012,
				"humidity": 32,
				"dew_point": 54.32,
				"wind_speed": 16.62,
				"wind_deg": 189,
				"wind_gust": 23.85,
				"weather": [{
					"id": 501,
					"main": "Rain",
					"description": "moderate rain",
					"icon": "10d"
				}],
				"clouds": 86,
				"pop": 0.96,
				"rain": 3.69,
				"uvi": 10.18
			}, {
				"dt": 1659985200,
				"sunrise": 1659960332,
				"sunset": 1660010740,
				"moonrise": 1660002300,
				"moonset": 1659944760,
				"moon_phase": 0.37,
				"temp": {
					"day": 82.51,
					"min": 65.35,
					"max": 89.96,
					"night": 78.53,
					"eve": 82.51,
					"morn": 65.89
				},
				"feels_like": {
					"day": 81.43,
					"night": 78.01,
					"eve": 81.21,
					"morn": 65.37
				},
				"pressure": 1016,
				"humidity": 36,
				"dew_point": 52.56,
				"wind_speed": 13.22,
				"wind_deg": 177,
				"wind_gust": 14.9,
				"weather": [{
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10d"
				}],
				"clouds": 11,
				"pop": 0.76,
				"rain": 0.13,
				"uvi": 10.22
			}, {
				"dt": 1660071600,
				"sunrise": 1660046789,
				"sunset": 1660097068,
				"moonrise": 1660092480,
				"moonset": 1660034820,
				"moon_phase": 0.41,
				"temp": {
					"day": 88.68,
					"min": 71.31,
					"max": 94.53,
					"night": 84.13,
					"eve": 90.48,
					"morn": 71.31
				},
				"feels_like": {
					"day": 85.66,
					"night": 81.82,
					"eve": 86.59,
					"morn": 70.3
				},
				"pressure": 1014,
				"humidity": 25,
				"dew_point": 48.76,
				"wind_speed": 12.06,
				"wind_deg": 69,
				"wind_gust": 16.44,
				"weather": [{
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01d"
				}],
				"clouds": 1,
				"pop": 0.04,
				"uvi": 9.8
			}, {
				"dt": 1660158000,
				"sunrise": 1660133246,
				"sunset": 1660183395,
				"moonrise": 1660182060,
				"moonset": 1660125480,
				"moon_phase": 0.45,
				"temp": {
					"day": 89.29,
					"min": 74.01,
					"max": 92.5,
					"night": 83.64,
					"eve": 90.34,
					"morn": 74.01
				},
				"feels_like": {
					"day": 85.51,
					"night": 81.18,
					"eve": 86.27,
					"morn": 72.99
				},
				"pressure": 1017,
				"humidity": 18,
				"dew_point": 39.52,
				"wind_speed": 12.62,
				"wind_deg": 104,
				"wind_gust": 15.75,
				"weather": [{
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01d"
				}],
				"clouds": 0,
				"pop": 0,
				"uvi": 10
			}, {
				"dt": 1660244400,
				"sunrise": 1660219703,
				"sunset": 1660269721,
				"moonrise": 1660270980,
				"moonset": 1660216620,
				"moon_phase": 0.5,
				"temp": {
					"day": 90.3,
					"min": 74.17,
					"max": 90.43,
					"night": 82,
					"eve": 86.77,
					"morn": 74.17
				},
				"feels_like": {
					"day": 86.74,
					"night": 80.83,
					"eve": 84.09,
					"morn": 72.93
				},
				"pressure": 1014,
				"humidity": 21,
				"dew_point": 45.81,
				"wind_speed": 15.88,
				"wind_deg": 189,
				"wind_gust": 15.43,
				"weather": [{
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01d"
				}],
				"clouds": 2,
				"pop": 0.21,
				"uvi": 10
			}, {
				"dt": 1660330800,
				"sunrise": 1660306160,
				"sunset": 1660356045,
				"moonrise": 1660359420,
				"moonset": 1660307700,
				"moon_phase": 0.53,
				"temp": {
					"day": 90.05,
					"min": 73.85,
					"max": 94.6,
					"night": 78.82,
					"eve": 81.03,
					"morn": 73.85
				},
				"feels_like": {
					"day": 86.74,
					"night": 78.82,
					"eve": 80.58,
					"morn": 72.86
				},
				"pressure": 1012,
				"humidity": 23,
				"dew_point": 47.3,
				"wind_speed": 11.3,
				"wind_deg": 237,
				"wind_gust": 16.44,
				"weather": [{
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10d"
				}],
				"clouds": 40,
				"pop": 0.63,
				"rain": 0.87,
				"uvi": 10
			}]
	},
	"Los Angeles": {
		"lat": 34.0522,
		"lon": -118.2437,
		"timezone": "America/Los_Angeles",
		"timezone_offset": -25200,
		"current": {
			"dt": 1659722568,
			"sunrise": 1659704836,
			"sunset": 1659754237,
			"temp": 81.64,
			"feels_like": 82.67,
			"pressure": 1017,
			"humidity": 52,
			"dew_point": 62.33,
			"uvi": 7.96,
			"clouds": 0,
			"visibility": 10000,
			"wind_speed": 9.22,
			"wind_deg": 240,
			"weather": [{
				"id": 800,
				"main": "Clear",
				"description": "clear sky",
				"icon": "01d"
			}]
		},
		"daily": [{
			"dt": 1659726000,
			"sunrise": 1659704836,
			"sunset": 1659754237,
			"moonrise": 1659732540,
			"moonset": 0,
			"moon_phase": 0.25,
			"temp": {
				"day": 82.24,
				"min": 71.58,
				"max": 84.87,
				"night": 75.99,
				"eve": 82.13,
				"morn": 71.58
			},
			"feels_like": {
				"day": 82.87,
				"night": 76.12,
				"eve": 82.18,
				"morn": 71.69
			},
			"pressure": 1016,
			"humidity": 49,
			"dew_point": 61.18,
			"wind_speed": 11.23,
			"wind_deg": 234,
			"wind_gust": 9.6,
			"weather": [{
				"id": 800,
				"main": "Clear",
				"description": "clear sky",
				"icon": "01d"
			}],
			"clouds": 2,
			"pop": 0.2,
			"uvi": 10.52
		}, {
			"dt": 1659812400,
			"sunrise": 1659791281,
			"sunset": 1659840581,
			"moonrise": 1659823140,
			"moonset": 1659770760,
			"moon_phase": 0.3,
			"temp": {
				"day": 88.21,
				"min": 73.76,
				"max": 89.24,
				"night": 81.37,
				"eve": 88.83,
				"morn": 73.76
			},
			"feels_like": {
				"day": 87.4,
				"night": 80.74,
				"eve": 86.43,
				"morn": 73.89
			},
			"pressure": 1012,
			"humidity": 37,
			"dew_point": 57.54,
			"wind_speed": 11.81,
			"wind_deg": 237,
			"wind_gust": 12.1,
			"weather": [{
				"id": 800,
				"main": "Clear",
				"description": "clear sky",
				"icon": "01d"
			}],
			"clouds": 0,
			"pop": 0,
			"uvi": 10.92
		}, {
			"dt": 1659898800,
			"sunrise": 1659877725,
			"sunset": 1659926924,
			"moonrise": 1659913800,
			"moonset": 1659859740,
			"moon_phase": 0.33,
			"temp": {
				"day": 91.8,
				"min": 77.45,
				"max": 93.34,
				"night": 82.71,
				"eve": 90.95,
				"morn": 77.45
			},
			"feels_like": {
				"day": 89.58,
				"night": 82.06,
				"eve": 88,
				"morn": 77.14
			},
			"pressure": 1011,
			"humidity": 28,
			"dew_point": 53.02,
			"wind_speed": 10.63,
			"wind_deg": 234,
			"wind_gust": 11.12,
			"weather": [{
				"id": 800,
				"main": "Clear",
				"description": "clear sky",
				"icon": "01d"
			}],
			"clouds": 0,
			"pop": 0,
			"uvi": 10.82
		}, {
			"dt": 1659985200,
			"sunrise": 1659964170,
			"sunset": 1660013266,
			"moonrise": 1660004400,
			"moonset": 1659949260,
			"moon_phase": 0.37,
			"temp": {
				"day": 88.34,
				"min": 78.12,
				"max": 94.51,
				"night": 81.25,
				"eve": 92.1,
				"morn": 78.12
			},
			"feels_like": {
				"day": 86.45,
				"night": 81.27,
				"eve": 89.47,
				"morn": 77.97
			},
			"pressure": 1011,
			"humidity": 32,
			"dew_point": 53.94,
			"wind_speed": 9.44,
			"wind_deg": 194,
			"wind_gust": 6.98,
			"weather": [{
				"id": 804,
				"main": "Clouds",
				"description": "overcast clouds",
				"icon": "04d"
			}],
			"clouds": 91,
			"pop": 0,
			"uvi": 10.55
		}, {
			"dt": 1660071600,
			"sunrise": 1660050614,
			"sunset": 1660099607,
			"moonrise": 1660094640,
			"moonset": 1660039380,
			"moon_phase": 0.41,
			"temp": {
				"day": 86.94,
				"min": 78.28,
				"max": 91.49,
				"night": 82,
				"eve": 88.99,
				"morn": 78.28
			},
			"feels_like": {
				"day": 85.89,
				"night": 82.78,
				"eve": 88.66,
				"morn": 78.24
			},
			"pressure": 1011,
			"humidity": 37,
			"dew_point": 56.48,
			"wind_speed": 8.5,
			"wind_deg": 226,
			"wind_gust": 6.85,
			"weather": [{
				"id": 500,
				"main": "Rain",
				"description": "light rain",
				"icon": "10d"
			}],
			"clouds": 93,
			"pop": 0.41,
			"rain": 0.99,
			"uvi": 6.46
		}, {
			"dt": 1660158000,
			"sunrise": 1660137058,
			"sunset": 1660185946,
			"moonrise": 1660184340,
			"moonset": 1660129980,
			"moon_phase": 0.45,
			"temp": {
				"day": 88.75,
				"min": 79.84,
				"max": 94.08,
				"night": 82,
				"eve": 92.08,
				"morn": 79.84
			},
			"feels_like": {
				"day": 89.83,
				"night": 82.49,
				"eve": 92.35,
				"morn": 79.84
			},
			"pressure": 1013,
			"humidity": 43,
			"dew_point": 62.4,
			"wind_speed": 9.4,
			"wind_deg": 226,
			"wind_gust": 8.01,
			"weather": [{
				"id": 801,
				"main": "Clouds",
				"description": "few clouds",
				"icon": "02d"
			}],
			"clouds": 22,
			"pop": 0.12,
			"uvi": 7
		}, {
			"dt": 1660244400,
			"sunrise": 1660223503,
			"sunset": 1660272285,
			"moonrise": 1660273440,
			"moonset": 1660220940,
			"moon_phase": 0.5,
			"temp": {
				"day": 91.17,
				"min": 79.57,
				"max": 93.87,
				"night": 82,
				"eve": 90.7,
				"morn": 79.57
			},
			"feels_like": {
				"day": 89.31,
				"night": 81.34,
				"eve": 87.91,
				"morn": 79.57
			},
			"pressure": 1014,
			"humidity": 30,
			"dew_point": 54.82,
			"wind_speed": 10.6,
			"wind_deg": 227,
			"wind_gust": 8.68,
			"weather": [{
				"id": 802,
				"main": "Clouds",
				"description": "scattered clouds",
				"icon": "03d"
			}],
			"clouds": 38,
			"pop": 0,
			"uvi": 7
		}, {
			"dt": 1660330800,
			"sunrise": 1660309947,
			"sunset": 1660358622,
			"moonrise": 1660362120,
			"moonset": 1660311780,
			"moon_phase": 0.53,
			"temp": {
				"day": 89.02,
				"min": 78.51,
				"max": 93.47,
				"night": 80.49,
				"eve": 90.01,
				"morn": 78.51
			},
			"feels_like": {
				"day": 86.83,
				"night": 80.55,
				"eve": 87.73,
				"morn": 78.31
			},
			"pressure": 1013,
			"humidity": 30,
			"dew_point": 52.77,
			"wind_speed": 10.25,
			"wind_deg": 235,
			"wind_gust": 9.24,
			"weather": [{
				"id": 800,
				"main": "Clear",
				"description": "clear sky",
				"icon": "01d"
			}],
			"clouds": 2,
			"pop": 0,
			"uvi": 7
		}]
	}
};
    
	res.json({"data": data});
});

app.listen(port, () => {
    console.log('Server running on port ' + port);    
});

process.on('uncaughtException', (err) => {
	if(err.errno === 'EADDRINUSE')
		console.log("uncaughtException EADDRINUSE");
	else {
		console.log(err);
	}
	
	process.exit(1);
});