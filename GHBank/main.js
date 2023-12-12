//api key AIzaSyAsUXkx7GYMapDOVnKU4s_rmvgnYG1-Zgc

const { google } = require('googleapis');
const { JWT } = require('google-auth-library');

const spreadsheetId = '1gor9whs1L1RTkQ_G3snfYJjbK_fR3_Q9FpVd7D4DuLM'; // Remova a parte de edição do URL
const sheetName = 'BD_GHBank';

const auth = new JWT({
    keyFile: 'path/to/your/service-account-key.json', // Substitua pelo caminho real do seu arquivo de chave
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

auth.authorize().then(() => {
    const sheets = google.sheets({ version: 'v4', auth });

    sheets.spreadsheets.values.get({
        spreadsheetId,
        range: sheetName,
    }).then((response) => {
        const values = response.data.values;

        // Adiciona um novo registro
        values.push(['1234.56', 'Recebimento', '2023-12-12']);

        sheets.spreadsheets.values.update({
            spreadsheetId,
            range: sheetName,
            valueInputOption: 'RAW',
            resource: {
                values,
            },
        }).then(() => {
            console.log('Registro adicionado com sucesso!');
        }).catch((err) => {
            console.error('Erro ao adicionar registro:', err);
        });
    }).catch((err) => {
        console.error('Erro ao obter valores da planilha:', err);
    });
});




