const mongoose = require('mongoose');

const connectDatabase = () => {
	mongoose
		.connect(process.env.DB_LOCAL_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true
		})
		.then((con) => {
			console.log(`MongoDB Database connected with HOST: 
      ### ${con.connection.host} ###`);
		}).catch((err) => {
      console.log(err)
    });
};

mongoose.connection.on('error', (err) => {
	console.log(`DB connection error: ${err.message}`);
});

module.exports = connectDatabase;
