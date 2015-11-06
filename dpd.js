var deployd = require('deployd');
var options = {
		port: 80,
		db: {
			connectionString: provess.env.mongoUrl
		    }
		}
var dpd = deployd(options);
dpd.listen()

