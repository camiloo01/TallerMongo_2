use('Supermercado_2');
//insercion
// db.Ventas.insertMany([
//   {
// nombre: "María",
//   total_pagar: 150.25,
//   tipo_pago: "QR",
//   estado_venta: "realizado",

//     detalle_venta: "Compra de frutas y verduras",
//     fecha_hora: {
//   primer_fecha: 2022-02-16,
//     segunda_fecha: 2023-05-14,
//       },
// horario: [
//     { hora: "10:00:00" },
//     { hora: "09:30:00" },
//   ],
//   },
// ])

// db.Ventas.insertMany([
//   {
//     detalle_venta: "Compra de frutas y verduras",
//     fecha_hora: {
//       primer_fecha: 2024-12-28,
//       segunda_fecha: 2023-10-13,
//     },
//     nombre: 'María',
//      total_pagar: 150.25,
//     tipo_pago: "QR",
//     estado_venta: "realizado",
  
//   horario: [
//     { hora: "10:00:00" },
//     { hora: "09:30:00" },
//   ],
//   },
// ])

//subdocumentos 
// db.Ventas.find();

// db.Ventas.find({"fecha_hora.primer_fecha": 2004});

// db.Ventas.find({"fecha_hora.segunda_fecha": 2004});

// db.Ventas.find({ "fecha_hora.primer_fecha": 2004, total_pagar: { $gte: 150.25} });

// db.Ventas.remove({ "fecha_hora.primer_fecha": 1984});

// db.Ventas.updateMany(
//   { nombre: "María" },
//   { $set: { "fecha_hora.segunda_fecha": 2023-05-14 } }
// ); 

//indices
// db.Ventas.createIndex({ nombre: 1 });

// db.Ventas.find({}, { nombre: 1 }).sort({ nombre: 1 });

// db.Ventas.createIndex({ nombre: 1, fecha_hora: 1 });

// db.Ventas.find({ nombre: "María","fecha_hora.primer_fecha": 2022-02-16});

// db.Ventas
//   .find({ nombre: "María", "fecha_hora.primer_fecha": 2022-02-16})
//   .explain("executionStats");

//Agregaciones 
// db.Ventas.aggregate([
//   { $match: { nombre: "María", total_pagar: 150.25} },
// ]);

// db.Ventas.aggregate([
//   { $project: { _id: 0, nombre: 1, total_pagar: 1, tipo_pago: 1 } },
// ]);

// db.Ventas.aggregate([
//   { $group: { _id: "$nombre", totaldocs: { $sum: 1 } } },
// ]);

// db.Ventas.aggregate([
//   { $group: { _id: "$nombre", totaldocs: { $sum: 1 } } },
//   { $out: "aggResults" },
// ]);
// db.aggResults.find();

// db.Ventas.aggregate([
//   {
//     $match: { nombre: "María" },
//   },
//   { $unwind: "$horario" },
// ]);

// db.Ventas.aggregate([
//   { $match: { nombre: "María" } },
//   { $unwind: "$horario" },
//   { $project: { _id: 0, "horario.hora": 1, "horario.hora": 1 } },
//   { $sort: { "horario.hora": -1 } },
// ]);

// db.Ventas.aggregate([
//   { $match: { nombre: "María" } },
//   { $unwind: "$horario" },
//   { $project: { _id: 0, "horario.hora": 1, "horario.hora": 1 } },
//   { $sort: { "horario.hora": -1 } },
//   { $limit: 2 },
// ]);

// db.Ventas.updateMany(
//   { nombre: "María" },
//   { $set: { foundation_year: 1218 } }
// );

// db.Ventas.aggregate([
//   { $unwind: "$horario" },
//   { $count: "total_documents" },
// ]);

// db.Ventas.aggregate([
//   { $match: { nombre: 'María' } },
//   { $project: { _id: 0, nombre: 1 } },
//     {
//         $lookup: {
//             from: 'Clientes',
//             localField: 'fecha_hora',
//             foreignField: 'primer_fecha',
//             as: 'Clietes'
//         }
//     }
// ]);

// db.Ventas.aggregate([{ $sortByCount: "$horario" }]);

// db.Ventas.aggregate([
//   { $unwind: "$horario" },
//   { $group: { _id: "$nombre", totalalumni: 
//   { $sum: "$horario.hora" } } },
// ]);
