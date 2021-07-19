import http from 'http';

const server = http.createServer((req, res) => {
    res.end(createObject())
});

const randomEntreEnteros = (abajo, arriba) => {
    return Math.floor(Math.random()*(arriba - abajo + 1) + abajo)
}

const randomEntreFloats = (abajo, arriba, decimales = 2) => {
    return (Math.random()*(arriba - abajo + 1) + abajo).toFixed(decimales)
}

const createObject = () => {
    return JSON.stringify({
        id: randomEntreEnteros(1,10),
        title: `Producto ${randomEntreEnteros(1,10)}`,
        price: randomEntreFloats(0.0,9999.99),
        thumbnail: `Foto ${randomEntreEnteros(1,10)}`
    })
}

server.listen(3000, () => {
    console.log('servidor en 3000')
}) 