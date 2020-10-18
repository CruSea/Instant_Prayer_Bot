// Load Module Dependencies

module.exports = {

  // MongoDB URL

  // HTTP Port
  HTTP_PORT: process.env.PORT || 9100,

  ENV : process.env.NODE_ENV || 'development',

    MONGODB: {
        URL: "mongodb://localhost/buy-and-sell",
        OPTS: {
            autoReconnect:true,
            useNewUrlParser: true
        }
    },

  
};


