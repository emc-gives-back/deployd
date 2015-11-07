var deployd = require('deployd');
var options = {
		port: 80,
		db: {
			connectionString: provess.env.MONGO_URL
		    }
		}
var dpd = deployd(options);
dpd.listen()

