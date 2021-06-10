const Presupuesto = require("../db/presupuesto");
const FlujoDeEfectivo = require("../db/flujo.de.efectivo");
const Ingreso = require("../db/ingreso");
const IngresoValor = require("../db/ingreso.valor");
const CostoDirecto = require("../db/costo.directo");
const CostoDirectoValor = require("../db/costo.directo.valor");
const CostoAdministrativo = require("../db/costo.administrativo");
const CostoAdministrativoValor = require("../db/costo.administrativo.valor");
const Recurso = require("../db/recurso");
const RecursoPorcentaje = require("../db/recurso.porcentaje");

module.exports = class PresupuestoModel {
    constructor(proyecto, nuevaVersion, mes, año, datos) { 
        this.proyecto = proyecto;
        this.nuevaVersion = nuevaVersion;
        this.mes = mes;
        this.año = año;
        this.datos = datos;        
    }
    //C
    registrarPresupuesto = async (idUsuario) => {
        try {
            let presupuesto = await Presupuesto.create({
                proyecto: this.proyecto,
                version: 1, //Me tira error si uso defaultValue, no encontre solucion
                mes: this.mes,
                año: this.año,
                eliminado: false, //Me tira error si uso defaultValue, no encontre solucion
                id_usuario: idUsuario
            });
            //VALORES DE PRESUPUESTO
            //Flujo de efectivo
            this.datos.flujoDeEfectivo.forEach(async ingresoFE => {
                await FlujoDeEfectivo.create({
                    ingreso: ingresoFE,
                    id_presupuesto: presupuesto.id
                });
            });
            //Ingresos
            this.datos.ingresos.forEach(async ingreso => {
                let nuevoIngreso = await Ingreso.create({
                    concepto: ingreso.concepto,
                    id_presupuesto: presupuesto.id
                });
                ingreso.valores.forEach(async valor => {
                    await IngresoValor.create({
                        valor: valor,
                        id_ingreso: nuevoIngreso.id
                    });
                });
            });
            //Costos directos
            this.datos.costosDirectos.forEach(async costoDirecto => {
                let nuevoCostoDirecto = await CostoDirecto.create({
                    concepto: costoDirecto.concepto,
                    opcion: costoDirecto.opcion,
                    id_presupuesto: presupuesto.id
                });
                costoDirecto.valores.forEach(async valor => {
                    await CostoDirectoValor.create({
                        valor: valor,
                        id_costo_directo: nuevoCostoDirecto.id
                    });
                });
            });
            //Costos administrativos
            this.datos.costosAdministrativos.forEach(async costoAdministrativo => {
                let nuevoCostoAdministrativo = await CostoAdministrativo.create({
                    concepto: costoAdministrativo.concepto,
                    opcion: costoAdministrativo.opcion,
                    id_presupuesto: presupuesto.id
                });
                costoAdministrativo.valores.forEach(async valor => {
                    await CostoAdministrativoValor.create({
                        valor: valor,
                        id_costo_administrativo: nuevoCostoAdministrativo.id
                    });
                });
            });            
            //Recursos
            this.datos.recursos.forEach(async recurso => {
                let nuevoRecurso = await Recurso.create({
                    concepto: recurso.concepto,
                    costo_mensual: recurso.costoMensual,
                    id_presupuesto: presupuesto.id
                });
                Recurso.porcentajes.forEach(async porcentaje => {
                    await RecursoPorcentaje.create({
                        porcentaje: porcentaje,
                        id_recurso: nuevoRecurso.id
                    });
                });
            });
            return 'Presupuesto creado';
        } catch (error) {
            throw new Error('Error al crear presupuesto');
        }
    }
    //R
    //U
    //D
}
