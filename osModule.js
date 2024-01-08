
function mostrarDatos(){
    const os = require('node:os')

    
    let MlibreB = os.freemem(); 
    let MlibreMB = bytesToMB(MlibreB);
    let MTotalB = os.totalmem();
    let MTotalMB = bytesToMB(MTotalB);
    
    console.log( ` 
    Nombre: ${os.platform()} , 
    Tipo: ${os.type()}, 
    Versión:${os.version()}, 
    Arquitectura: ${process.arch}, 
    CPUs:${os.cpus().length}, 
    Memoria total:${MTotalMB} MB, 
    Memoria libre: ${MlibreMB} MB
    `)
}
function bytesToMB(bytes) {
    return (bytes / (1024 * 1024)).toFixed(2);
  }
//mostrarDatos()


module.exports = {mostrarDatos, bytesToMB}