
const http = require('http');

const server = http.createServer((req, res) => {
    const path = new URL(req.url, 'http://localhost').pathname;

    res.writeHead(
        path === '/' || path === '/sobre' || path === '/contato' ? 200 : 404,
        { 'Content-Type': 'text/html; charset=utf-8' }
    );

    if (path === '/') {
        res.end(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Projeto Cloud</title>
</head>
<body>
    <h1>Projeto Cloud</h1>
    <p>Página inicial</p>

    <nav>
        <a href="/sobre">Sobre</a> |
        <a href="/contato">Contato</a>
    </nav>
</body>
</html>`);
    } else if (path === '/sobre') {
        res.end(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Sobre</title>
</head>
<body>
    <h1>Sobre</h1>
    <p>Aplicação Node.js do projeto de nuvem.</p>

    <a href="/">Início</a> |
    <a href="/contato">Contato</a>
</body>
</html>`);
    } else if (path === '/contato') {
        res.end(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Contato</title>
</head>
<body>
    <h1>Contato</h1>
    <p>Entre em contato com a equipe do projeto.</p>

    <a href="/">Início</a> |
    <a href="/sobre">Sobre</a>
</body>
</html>`);
    } else {
        res.end(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Erro 404</title>
</head>
<body>
    <h1>404 - Página não encontrada</h1>
    <a href="/">Voltar ao início</a>
</body>
</html>`);
    }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
