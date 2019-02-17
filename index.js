const fs = require('fs');
const SwaggerValidator = require('swagger-model-validator');
const path = require('path');

const swaggerJsonFile = fs.readFileSync(path.join(__dirname, './docs/swagger.json'));
const swaggerModels = JSON.parse(swaggerJsonFile);
SwaggerValidator(swaggerModels);

function validator(model, body) {
	if (!(body instanceof Array)) body = [ body ]
	console.log(body)
	return swaggerModels.validateModel('base', body);
}

module.exports = { validator };