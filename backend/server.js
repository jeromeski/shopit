const app = require('./app');
const connectDatabase = require('./config/database');

const dotenv = require('dotenv');

//  Setup config file path
dotenv.config({ path: 'backend/config/config.env' })

//  Connect to database
connectDatabase()

app.listen(process.env.PORT, () => {
  console.log(`Server started on PORT: ${process.env.PORT}
   ### ${process.env.NODE_ENV} mode. ###`);
});