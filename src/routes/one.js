const router = require('koa-router')()

router.prefix('/one')

router.get('/', async (ctx, next) => {
	ctx.body = 'this is route one'
})

module.exports = router