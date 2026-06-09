const http = require('http');

const server = http.createServer( (req, res) => {
    const parsedUrl =  new URL(req.url, `http://${req.headers.host}`);
    let x = (parsedUrl.searchParams.get('x') || "").replace(/[{}]/g, "")
    let y = (parsedUrl.searchParams.get('y') || "").replace(/[{}]/g, "")
    if (isNaN((parseInt(x))) || isNaN(parseInt(y))) return res.end("NaN");
    x = BigInt(x);
    y = BigInt(y);
    if (x === 0n || y === 0n) return res.end("0");
    const nod = (a, b) => b === 0n ? a : nod(b, a % b);
    const nok = (a, b) => (a * b)/ nod(a, b)
    const ans = nok(x,y)
    res.end(String(ans))
    console.log(x,y)

});
server.listen(3000, () => {
    console.log("http://localhost:3000/app/zharitonchik_icloud_com?x=-94906297&y=94906299");
});