const Koa = require('koa');
const path = require('path');
const app = new Koa();
const emitter = require('hotrun')({
	extensions: ['.js'],
	watch: path.resolve(__dirname, './')
});


const index = require('./routes/index');
// const one = require('./routes/one')

app.use(index.routes(), index.allowedMethods());
// app.use(one.routes(), one.allowedMethods());


app.on('error', (err, ctx) => {
	console.error('server error', err, ctx)
});

emitter.on('hot', () => {
	console.log('module hot compiled done!')
});


module.exports = app;