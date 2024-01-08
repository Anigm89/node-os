
function datosRed(){
    const os = require('node:os')

    const interfaces = os.networkInterfaces();

    for (const interfaz in interfaces) {
      console.log(`Interfaz: ${interfaz}`);
      let datos = interfaces[interfaz];

        datos.forEach( dato =>{
           console.log(`
                Familia: ${dato.family}
                Dirección: ${dato.address}
                Interno: ${dato.internal}
           `);
        })

    }
}
//datosRed()

module.exports = datosRed;