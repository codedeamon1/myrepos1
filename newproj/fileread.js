const textract = require('textract')
const path ='/infoapto/public/80826LalitVats 9.12.17.att (1).doc'
const text=textract.fromFileWithPath(path, function( error, text ) {})
console.log(text)