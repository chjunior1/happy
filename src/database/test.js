const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage.js');

Database.then(async (db) => {
    // inserir dados na tabela
    // await saveOrphanage (db, {
    //     lat: "-27.222633",
    //     lng: "-49.6555874",
    //     name: "Lar dos Meninos",
    //     about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    //     whatsapp: "97714135146",
    //     images: ["https://source.unsplash.com/random?id=1","https://source.unsplash.com/random?id=2","https://source.unsplash.com/random?id=3"].toString(),
    //     instructions: "Venha como se sentir a vontade e traga muito amor e paciência pra dar.",
    //     opening_hours: "Horário de visitas das 18h at'e as 8h",
    //     open_on_weekends: "0"
    // })

    // consultar dados da tabela
    
    // const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    // console.log(selectedOrphanages)

    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    //console.log(orphanage)

    // deletar dados da tabela
    //console.log (await db.run('DELETE FROM orphanages WHERE id = "1"'))
    //console.log (await db.run('DELETE FROM orphanages'))
    console.log (await db.run('UPDATE orphanages SET open_on_weekends=0 WHERE id = "5"'))
})