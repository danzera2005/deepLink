const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// Define o diretório onde o arquivo assetlinks.json está localizado
const assetlinksPath = path.join(__dirname, 'assetlinks.json');

// Rota para servir o arquivo assetlinks.json
app.get('/.well-known/assetlinks.json', (req, res) => {
    res.sendFile(assetlinksPath); 
});

// Inicia o servidor na porta 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
