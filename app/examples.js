'use strict'

exports.one = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: 'hello',
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origins': '*'
    }
  })
}


exports.findByTwo = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: 'two',
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origins': '*'
    }
  })
}