const router = require('koa-router')()

router.get('/', async (ctx, next) => {
	ctx.body = 'hello world!'
	// ctx.body = 'This message works with hot reload!'
})

module.exports = router