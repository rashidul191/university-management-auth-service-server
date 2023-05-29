import mongoose from 'mongoose'
import app from './app'

import config from './config/index'

mongoose
  .connect(config.database_url as string)
  .then(() => {
    console.log(`🛢 successfully connected database`)
    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`)
    })
  })
  .catch(error => {
    console.log('Failed to connect database: ', error)
  })
