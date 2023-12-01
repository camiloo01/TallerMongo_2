use('Supermercado_2');
//insercion
// db.Productos.insertMany([
//   {
//               Nombre: "Salmón",
//               Descripcion: "Filete de salmón fresco, 200g.",
//               Categoria: "Pescados",
//               Precio: 7.99,
//               CodificacionProducto: {
//                 Lote: 567,
//                 Vencimiento: "2023-10-26"
//                 },
//                 peso: [
//                   {kilo: 10},
//                   {kilo: 6},
//                 ] 
//             }
// ])

// db.Productos.insertMany([
//   {
//               Nombre: "Filete",
//               Descripcion: "Filete de carne, 200g.",
//               Categoria: "Pescados",
//               Precio: 7.99,
//               CodificacionProducto: {
//                 Lote: 567,
//                 Vencimiento: "2024-12-26"
//                 },
//                 peso: [
//                   {kilo: 10},
//                   {kilo: 6},
//                 ] 
//             }
// ])

//subdocumentos 
// db.Productos.find();

// db.Productos.find({ "CodificacionProducto.Vencimiento":"2023-10-26" });

// db.Productos.find({ "CodificacionProducto.Lote":567 });

// db.Productos.find({ "CodificacionProducto.Lote":567, Precio: { $gte: 7.99} });

// db.Productos.remove({ "CodificacionProducto.Vencimiento": "2024-12-26"});

// db.Productos.updateOne(
//   { Nombre: "Salmón" },
//   { $set: { "CodificacionProducto.Lote": 569 } }
// );

//indices
// db.Productos.createIndex({ Nombre: 1 });

// db.Productos.find({}, { Nombre: 1 }).sort({ Nombre: 1 });

// db.Productos.createIndex({ Nombre: 1, CodificacionProducto: 1 });

// db.Productos.find({ Nombre: "Salmón","peso.kilo": 10});

// db.Productos
//   .find({ Nombre: "Salmón", "peso.kilo": 10})
//   .explain("executionStats");

//Agregaciones
// db.Productos.aggregate([
//   { $match: { Nombre: "Salmón", Precio: 7.99 } },
// ]);

// db.Productos.aggregate([
//   { $project: { _id: 0, Nombre: 1, Descripcion: 1, Categoria: 1 } },
// ]);

// db.Productos.aggregate([
//   { $group: { _id: "$Nombre", totaldocs: { $sum: 1 } } },
// ]);

// db.Productos.aggregate([
//   { $group: { _id: "$Nombre", totaldocs: { $sum: 1 } } },
//   { $out: "aggResults" },
// ]);
// db.aggResults.find();

// db.Productos.aggregate([
//   {
//     $match: { Nombre: "Salmón" },
//   },
//   { $unwind: "$peso" },
// ]);

// db.Productos.aggregate([
//   { $match: { Nombre: "Salmón" } },
//   { $unwind: "$peso" },
//   { $project: { _id: 0, "peso.kilo": 1, "peso.kilo": 1 } },
//   { $sort: { "peso.kilo": -1 } },
// ]);

// db.Productos.aggregate([
//     { $match: { Nombre: "Salmón" } },
//     { $unwind: "$peso" },
//     { $project: { _id: 0, "peso.kilo": 1, "peso.kilo": 1 } },
//     { $sort: { "peso.kilo": -1 } },
//     { $limit: 2 },
//   ]);

// db.Productos.updateMany(
//   { Nombre: "Salmón" },
//   { $set: { foundation_year: 1218 } }
// );

// db.Productos.aggregate([
//   { $unwind: "$peso" },
//   { $count: "total_documents" },
// ]);

// db.Productos.aggregate([
//   { $match: { Nombre: "Salmón" } },
//   { $project: { _id: 1, Nombre: 1 } },
//   {
//       $lookup: {
//           from: 'Clientes',
//           localField: 'CodificacionProducto',
//           foreignField: 'Lote',
//           as: 'Clientes'
//       }
//   }
// ]);

// db.Productos.aggregate([{ $sortByCount: "$peso" }]);

// db.Productos.aggregate([
//   { $unwind: "$peso" },
//   { $group: { _id: "$Nombre", totalalumni: { $sum: "$peso.kilo" } } },
// ]);
