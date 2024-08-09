const jsonServer = require('json-server')
const cors = require('cors')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const port = 5000

server.use(cors())
server.use(middlewares)

server.use((req, res, next) => {
	req.db = router.db
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE')
	res.header('Access-Control-Allow-Headers', 'origin, authorization')
	res.header('Access-Control-Allow-Credentials', true)
	next()
})

server.use(router)

server.listen(port, () => {
	console.log(`JSON Server is running on PORT ${port}`)
})
