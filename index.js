const fs = require('fs');
const SwaggerValidator = require('swagger-model-validator');
const path = require('path');

const swaggerJsonFile = fs.readFileSync(path.join(__dirname, './public/swagger.json'));
const swaggerModels = JSON.parse(swaggerJsonFile);
SwaggerValidator(swaggerModels);

function validator(model, body) {
	return swaggerModels.validateModel(model, body);
}

module.exports = { validator };