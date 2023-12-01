use('Supermercado_2');
//insercion
// db.Clientes.insertOne(
//     {
//         Nombre: 'María',
//         Apellido: 'García',
//         Edad: 35,
//         Telefono: 3015551234,
//         Direccion: 'Calle 24 #45-67',
//         Productos_Comprados: {
//             primer_producto: 'leche',
//             segundo_producto: 'manzanas',
//             tercer_producto: 'pan',
//         },
//         inventario: [
//             { cantidad: 2 },
//             { cantidad: 4 },
//             { cantidad: 1 }
//         ]
//     }
// )

// db.Clientes.insertOne(
//     {
//         Nombre: 'Mario',
//         Apellido: 'Moreno',
//         Edad: 31,
//         Telefono: 3125441234,
//         Direccion: 'Calle 30 #44-69',
//         Productos_Comprados: {
//             primer_producto: 'arroz',
//             segundo_producto: 'leche',
//             tercer_producto: 'pan',
//         },
//         inventario: [
//             { cantidad: 1 },
//             { cantidad: 2 },
//             { cantidad: 3 }
//         ]
//     }
// )

//subdocumentos 
// db.Clientes.find();

// db.Clientes.find({ "Productos_Comprados.segundo_producto":"manzanas" });

// db.Clientes.find({ "Productos_Comprados.tercer_producto":"pan" });

// db.Clientes.find({ "Productos_Comprados.segundo_producto": "manzanas", Edad: { $gte: 35} });

// db.Clientes.remove({ "Productos_Comprados.segundo_producto":"leche" });

// db.Clientes.updateOne(
//   { Nombre: "María" },
//   { $set: { "Productos_Comprados.primer_producto": "chocolate" } }
// );

//indices
// db.Clientes.createIndex({ Nombre: 1 });

// db.Clientes.find({}, { Nombre: 1 }).sort({ Nombre: 1 });

// db.Clientes.createIndex({ Nombre: 1, Productos_Comprados: 1 });

// db.Clientes.find({ Nombre: "María","inventario.cantidad": 2 });

// db.Clientes
//   .find({ Nombre: "María", "Productos_Comprados.primer_producto": "leche"})
//   .explain("executionStats");

//Agregaciones
// db.Clientes.aggregate([
//        { $match: { Nombre: "María", Edad: 35 } },
//      ]);

// db.Clientes.aggregate([
//       { $project: { _id: 0, Nombre: 1, Apellido: 1, Direccion: 1 } },
//     ]);

// db.Clientes.aggregate([
//       { $group: { _id: "$Nombre", totaldocs: { $sum: 1 } } },
//     ]);

// db.Clientes.aggregate([
//       { $group: { _id: "$Nombre", totaldocs: { $sum: 1 } } },
//       { $out: "aggResults" },
//     ]);
//     db.aggResults.find();

// db.Clientes.aggregate([
//       {
//         $match: { Nombre: "María" },
//       },
//       { $unwind: "$inventario" },
//     ]);

// db.Clientes.aggregate([
//   { $match: { Nombre: "María" } },
//   { $unwind: "$inventario" },
//   { $project: { _id: 0, "inventario.cantidad": 1, "inventario.cantidad": 1 } },
//   { $sort: { "inventario.cantidad": -1 } },
// ]);

// db.Clientes.aggregate([
//   { $match: { Nombre: "María" } },
//   { $unwind: "$inventario" },
//   { $project: { _id: 0, "inventario.cantidad": 1, "inventario.cantidad": 1 } },
//   { $sort: { "inventario.cantidad": -1 } },
//   { $limit: 2 },
// ]);

// db.Clientes.updateMany(
//   { Nombre: "María" },
//   { $set: { foundation_year: 1218 } }
// );

// db.Clientes.aggregate([
//   { $unwind: "$inventario" },
//   { $count: "total_documents" },
// ]);

// db.Clientes.aggregate([
//     { $match: { Nombre: "María" } },
//     { $project: { _id: 1, Nombre: 1 } },
//     {
//         $lookup: {
//             from: 'Ventas',
//             localField: 'Productos_Comprados',
//             foreignField: 'primer_producto',
//             as: 'Ventas'
//         }
//     }
// ]);

// db.Clientes.aggregate([{ $sortByCount: "$inventario" }]);

// db.Clientes.aggregate([
//   { $unwind: "$inventario" },
//   { $group: { _id: "$Nombre", totalalumni: { $sum: "$inventario.cantidad" } } },
// ]);
