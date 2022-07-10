const http = require('http');

const server = http.createServer((req, res) => {
console.log(req.url)

res.write('<h1>Hello from</h1>')
res.write('<h2>Hello from</h2>')
res.write('<h3>Hello from</h3>')
res.end(`
    <div style="background: red; width: 200px; height: 200px;">
    <h1>Test 1</h1>
    </div>
    `) //закрыть ответ
});

//запускаем сервер
server.listen(3000, () => {
    console.log('Server is running')
});
