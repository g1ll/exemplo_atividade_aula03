import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { readFile } from 'fs'

export function dbConnect() {
    return new Promise((resolve, reject)=>{
        try {
            readFile("../config/configDB.json", (err, data) => {
                if (err) throw Error('Arquivo de configuração não encontrado!!')
                let firebaseConfig = JSON.parse(data)
                if (typeof firebaseConfig!=='undefined'&& firebaseConfig) {
                    const app = initializeApp(firebaseConfig);
                    const db = getDatabase(app)
                    if (typeof db !== 'undefined' && db) resolve(db);
                    else throw Error('Não foi possível conectar no banco!!')
                } else {
                    throw Error('Erro ao ler configuração!')
                }
            });
        } catch (err) {
            reject(Error(err));
        }
    })
}
