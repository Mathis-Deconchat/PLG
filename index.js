'use strict'
const winston = require('winston');
const fs = require('fs');
const path = require('path');

const express = require('express')
const app = express()
const port = 6969

// 🔔 Les deux fichiers doivent être dans le dossier log du projet
const errorFile = 'log/ynov-error.log';
const infoFile = 'log/ynov-info.log'


// Créer un transport winston qui écrit dans le fichier définit dans la var infoFile si c'est une info
// Dans le même logger créer un trasnports qui écrit dans le fichier définit dans errorFile si c'est en erreur
// C'est dans le doc ;) https://github.com/winstonjs/winston
const logInfo = winston.createLogger({

})


// Exemple d'écriture de log avec un niveau info
logInfo.info({
    message: 'message',
    label: 'label'

})



// Créer 2 endpoints express, un '/info' et un '/error' qui loggerons chacun dans le bon fichier


app.listen(port, () => {
    console.log(`🚀🚀 ${port}`)
})

