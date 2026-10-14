import * as ctrl from "./src/controllers/producto.controller.js"
import * as model from "./src/models/producto.model.js"

console.log("------- productos arrancar -----------");
console.log(model.listar().map((p) => p.nombre));

console.log("---------- creando uno nuevo -----------");
const nombre = "Sincronizada" + Date.now();
const creado = ctrl.crearProducto({nombre, precio:32, categoria:"comida"});

//el controlador devuelve {ok: data} o {ok:false, error}.
//hay que revisar siempre

if(creado.ok){
    console.log("creado:", creado.data.nombre);
} else {
    console.log("no se pudo crear:", creado.error.mensaje);
}

console.log("-------productos---------");
console.log(model.listar().map((p) => p.nombre));

console.log("");
console.log("Abre src/data/productos.json y combruebalo");
console.log("Vuelve a ejecutar:  el productos anteriores sigue aqui");