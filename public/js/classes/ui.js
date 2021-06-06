export default class UI {
    constructor() {
        this.btnAgregarTitulo = document.getElementById('btn-agregar-titulo');   
        this.btnAgregarFilaIngresos = document.getElementById('btn-agregar-fila-ingresos');   
        this.btnAgregarFilaCD = document.getElementById('btn-agregar-fila-cd');  
        this.btnAgregarFilaCA = document.getElementById('btn-agregar-fila-ca');
        this.btnAgregarFilaRecursos = document.getElementById('btn-agregar-fila-recursos');
        this.btnEliminarTitulo = document.getElementById('btn-eliminar-titulo');
        this.columnasAgregadas = 0;
        this.mes = 3; //TEST
        this.año = 2020; //TEST
        let valorInicialCamposNoEditables = document.querySelectorAll('input[readonly=""]');
        valorInicialCamposNoEditables.forEach(element => {
            element.value = 0;
        })

        this.btnAgregarFilaIngresos.addEventListener('click', () => {
            this.agregarFilasTablaIngresos();
        });

        this.btnAgregarFilaCD.addEventListener('click', () => {            
            this.agregarFilasTablaCD();                       
        });

        this.btnAgregarFilaCA.addEventListener('click', () => {
            this.agregarFilasTablaCA();            
        });

        this.btnAgregarFilaRecursos.addEventListener('click', () => {
            this.agregarFilasTablaRecursos();
            this.agregarFilasTablaCostos();
            this.agregarFilasTablaRCR();
        });

        this.btnAgregarTitulo.addEventListener('click', async () => {   
            if(this.mes == 0 && this.año == 0) {
                await Swal.fire({
                    title: 'Ingrese año y mes',
                    html:
                        `
                        <div class="row">
                            <div class="col">
                                <p>Año</p>
                                <input id="año" type="number" min="1900" max="2300" step="1" class="form-control">
                            </div>
                            <div class="col">
                                <p>Mes</p>
                                <input id="mes" type="number" min="1" max="12" step="1" class="form-control">
                            </div>
                        </div>
                        `,
                    focusConfirm: false,
                    preConfirm: () => {
                        this.año = document.getElementById('año').value;
                        this.mes = document.getElementById('mes').value;                      
                    },
                })
            } 
            this.columnasAgregadas++;                        
            this.agregarColumnasTablaFE();
            this.agregarColumnasTablaER();
            this.agregarColumnasTablaIngresos();
            this.agregarColumnasTablaCostosDirectos();
            this.agregarColumnasTablaCostosAdministrativos();
            this.agregarColumnasTablaRecursos();
            this.agregarColumnasTablaCostos();
            this.agregarColumnasTablaRCR();
            this.sumarMes();
        });

        this.btnEliminarTitulo.addEventListener('click', () => {
            this.eliminarColumna();
        });
    }

    agregarColumnasTablaFE = () => {
        let filasTablaFE = document.querySelectorAll('#flujo-efectivo tr');                                
        let filaTituloNuevo = filasTablaFE[0].insertCell(filasTablaFE[0].children.length - 1);
        filaTituloNuevo.innerHTML = `${this.mes}/${this.año}`;

        let fila1FENueva = filasTablaFE[1].insertCell(filasTablaFE[1].children.length - 1);
        let ingresos = document.createElement('input');
        ingresos.type = 'number';
        ingresos.min = 0;
        ingresos.step = 0.01;
        ingresos.value = 0;
        ingresos.setAttribute('class', 'form-control');
        fila1FENueva.appendChild(ingresos);

        for (let i = 2; i < 5; i++) {
            let filaNueva = filasTablaFE[i].insertCell(filasTablaFE[i].children.length - 1);
            let celda = document.createElement('input');
            celda.type = 'text';            
            celda.setAttribute('class', 'form-control dinero');
            celda.setAttribute('readonly','');
            celda.value = 0;
            filaNueva.appendChild(celda);            
        }
    }

    agregarColumnasTablaER = () => {
        let filasTablaER = document.querySelectorAll('#estado-de-resultados tr');                                
        let filaTituloNuevo = filasTablaER[0].insertCell(filasTablaER[0].children.length - 1);
        filaTituloNuevo.innerHTML = `${this.mes}/${this.año}`;

        for (let i = 1; i < 5; i++) {
            let filaNueva = filasTablaER[i].insertCell(filasTablaER[i].children.length - 1);
            let celda = document.createElement('input');
            celda.type = 'text';
            celda.setAttribute('class', 'form-control dinero');
            celda.setAttribute('readonly','');
            celda.value = 0;
            filaNueva.appendChild(celda);            
        }        
    }

    agregarColumnasTablaIngresos = () => {
        let filasTablaIngresos = document.querySelectorAll('#ingresos tr'); 
        let filaTituloNuevo = filasTablaIngresos[0].insertCell(filasTablaIngresos[0].children.length - 1);
        filaTituloNuevo.innerHTML = `${this.mes}/${this.año}`;

        for (let i = 1; i < filasTablaIngresos.length - 1; i++) {
            let celdaValorIngreso = filasTablaIngresos[i].insertCell((filasTablaIngresos[i].children.length - 1));
            let valorIngreso = document.createElement('input');
            valorIngreso.type = 'number';
            valorIngreso.step = 0.01;
            valorIngreso.min = 0;
            valorIngreso.value = 0;
            valorIngreso.setAttribute('class', 'form-control');            
            celdaValorIngreso.appendChild(valorIngreso);
        }
        
        let filaTotal = filasTablaIngresos[filasTablaIngresos.length - 1].insertCell(filasTablaIngresos[filasTablaIngresos.length - 1].children.length - 1);
        let total = document.createElement('input');
        total.type = 'text';
        total.setAttribute('class', 'form-control dinero');
        total.setAttribute('readonly','');
        total.value = 0;
        filaTotal.appendChild(total);                 
    }
    
    agregarColumnasTablaCostosDirectos = () => {
        let filasTablaCD = document.querySelectorAll('#costos-directos tr'); 
        let filaTituloNuevo = filasTablaCD[0].insertCell(filasTablaCD[0].children.length - 1);
        filaTituloNuevo.innerHTML = `${this.mes}/${this.año}`;
        
        for (let i = 1; i < filasTablaCD.length - 1; i++) {            
            let celdaValorCD = filasTablaCD[i].insertCell((filasTablaCD[i].children.length - 1));
            let valorCD = document.createElement('input');
            valorCD.type = 'number';
            valorCD.step = 0.01;
            valorCD.min = 0;
            valorCD.value = 0;
            valorCD.setAttribute('class', 'form-control');            
            celdaValorCD.appendChild(valorCD);
        }        

        let filaTotal = filasTablaCD[filasTablaCD.length - 1].insertCell(filasTablaCD[filasTablaCD.length - 1].children.length - 1);
        let total = document.createElement('input');
        total.type = 'text';
        total.setAttribute('class', 'form-control dinero');
        total.setAttribute('readonly','');
        total.value = 0;
        filaTotal.appendChild(total);                 
    }
    
    agregarColumnasTablaCostosAdministrativos = () => {
        let filasTablaCA = document.querySelectorAll('#costos-administrativos tr'); 
        let filaTituloNuevo = filasTablaCA[0].insertCell(filasTablaCA[0].children.length - 1);
        filaTituloNuevo.innerHTML = `${this.mes}/${this.año}`;

        for (let i = 1; i < filasTablaCA.length - 1; i++) {
            let celdaValorCA = filasTablaCA[i].insertCell((filasTablaCA[i].children.length - 1));
            let valorCA = document.createElement('input');
            valorCA.type = 'number';
            valorCA.step = 0.01;
            valorCA.min = 0;
            valorCA.value = 0;
            valorCA.setAttribute('class', 'form-control');            
            celdaValorCA.appendChild(valorCA);
        }  

        let filaTotal = filasTablaCA[filasTablaCA.length - 1].insertCell(filasTablaCA[filasTablaCA.length - 1].children.length - 1);
        let total = document.createElement('input');
        total.type = 'text';
        total.setAttribute('class', 'form-control dinero');
        total.setAttribute('readonly','');
        total.value = 0;
        filaTotal.appendChild(total);                 
    }

    agregarColumnasTablaRecursos = () => {
        let filasTablaRecursos = document.querySelectorAll('#recursos tr'); 
        let filaTituloNuevo = filasTablaRecursos[0].insertCell(filasTablaRecursos[0].children.length - 1);
        filaTituloNuevo.innerHTML = `${this.mes}/${this.año}`;

        for (let i = 1; i < filasTablaRecursos.length - 1; i++) {
            let celda = filasTablaRecursos[i].insertCell((filasTablaRecursos[i].children.length - 1));
            let porcentaje = document.createElement('input');
            porcentaje.type = 'number';
            porcentaje.step = 1;
            porcentaje.min = 1;
            porcentaje.value = 1;
            porcentaje.max = 100;
            porcentaje.setAttribute('class', 'form-control');
            celda.appendChild(porcentaje);
        }
        
        let filaTotal = filasTablaRecursos[filasTablaRecursos.length - 1].insertCell(filasTablaRecursos[filasTablaRecursos.length - 1].children.length - 1);
        let total = document.createElement('input');
        total.type = 'text';
        total.setAttribute('class', 'form-control porcentaje');
        total.setAttribute('readonly','');
        total.value = 0;
        filaTotal.appendChild(total);                 
    }

    agregarColumnasTablaCostos = () => {
        let filasTablaCostos = document.querySelectorAll('#costos tr'); 
        let filaTituloNuevo = filasTablaCostos[0].insertCell(filasTablaCostos[0].children.length - 1);
        filaTituloNuevo.innerHTML = `${this.mes}/${this.año}`;

        for (let i = 1; i < filasTablaCostos.length - 1; i++) {
            let celda = filasTablaCostos[i].insertCell((filasTablaCostos[i].children.length - 1));
            let costo = document.createElement('input');
            costo.type = 'text';            
            costo.value = 0;
            costo.setAttribute('class', 'form-control');
            costo.setAttribute('readonly', '');
            celda.appendChild(costo);
        }
        
        let filaTotal = filasTablaCostos[filasTablaCostos.length - 1].insertCell(filasTablaCostos[filasTablaCostos.length - 1].children.length - 1);
        let total = document.createElement('input');
        total.type = 'text';
        total.setAttribute('class', 'form-control dinero');
        total.setAttribute('readonly','');
        total.value = 0;
        filaTotal.appendChild(total);                 
    }

    agregarColumnasTablaRCR = () => {
        let filasTablaRCR = document.querySelectorAll('#resumen-costos-recursos tr'); 
        let filaTituloNuevo = filasTablaRCR[0].insertCell(filasTablaRCR[0].children.length - 1);
        filaTituloNuevo.innerHTML = `${this.mes}/${this.año}`;

        for (let i = 1; i < filasTablaRCR.length - 1; i++) {
            let celda = filasTablaRCR[i].insertCell((filasTablaRCR[i].children.length - 1));
            let rcr = document.createElement('input');
            rcr.type = 'text';            
            rcr.value = 0;
            rcr.setAttribute('class', 'form-control');
            rcr.setAttribute('readonly', '');
            celda.appendChild(rcr);
        }
        
        let filaTotal = filasTablaRCR[filasTablaRCR.length - 1].insertCell(filasTablaRCR[filasTablaRCR.length - 1].children.length - 1);
        let total = document.createElement('input');
        total.type = 'text';
        total.setAttribute('class', 'form-control dinero');
        total.setAttribute('readonly','');
        total.value = 0;
        filaTotal.appendChild(total);                 
    }

/////////////////////////////////////////////////////////////////////////////////////////////////
    
    agregarFilasTablaIngresos = () => {        
        let tablaIngresos = document.getElementById('ingresos');
          
        let fila = tablaIngresos.insertRow(tablaIngresos.rows.length - 1);

        let celdaConcepto = fila.insertCell(0);
        
        let concepto = document.createElement('input');
        concepto.type = 'text';
        concepto.setAttribute('class', 'form-control d-block');        
        
        let eliminar = document.createElement('button');
        eliminar.setAttribute('class','btn btn-secondary btn-sm d-block');
        eliminar.innerHTML = '<box-icon type="solid" name="trash-alt" color="grey"></box-icon>';

        let divSeparador = document.createElement('div');
        divSeparador.setAttribute('class','d-flex justify-content-center align-items-center');

        divSeparador.appendChild(eliminar);
        divSeparador.appendChild(concepto);
        
        celdaConcepto.appendChild(divSeparador);

        for (let i = 1; i <= this.columnasAgregadas; i++) {
            let celdaValorIngreso = fila.insertCell(i);

            let valorIngreso = document.createElement('input');
            valorIngreso.type = 'number';
            valorIngreso.step = 0.01;
            valorIngreso.min = 0;
            valorIngreso.value = 0;
            valorIngreso.id = `ingresos-valor-${this.columnasAgregadas}`;
            valorIngreso.setAttribute('class', 'form-control');            
            celdaValorIngreso.appendChild(valorIngreso);
        }

        let celdaSumatoria = fila.insertCell(this.columnasAgregadas + 1);

        let sumatoria = document.createElement('input');
        sumatoria.type = 'text';
        sumatoria.setAttribute('class', 'form-control dinero');
        sumatoria.setAttribute('readonly','');
        sumatoria.value = 0;
        celdaSumatoria.appendChild(sumatoria);
    }

    agregarFilasTablaCD = () => {        
        let tablaCD = document.getElementById('costos-directos');
          
        let fila = tablaCD.insertRow(tablaCD.rows.length - 1);

        let celdaConcepto = fila.insertCell(0);
        
        let concepto = document.createElement('input');
        concepto.type = 'text';
        concepto.setAttribute('class', 'form-control');        
        celdaConcepto.appendChild(concepto);

        for (let i = 1; i <= this.columnasAgregadas; i++) {
            let celdaValorCD = fila.insertCell(i);
            let valorCD = document.createElement('input');
            valorCD.type = 'number';
            valorCD.step = 0.01;
            valorCD.min = 0;
            valorCD.value = 0;
            valorCD.setAttribute('class', 'form-control');            
            celdaValorCD.appendChild(valorCD);
        }

        let celdaSumatoria = fila.insertCell(this.columnasAgregadas + 1);

        let sumatoria = document.createElement('input');
        sumatoria.type = 'text';
        sumatoria.setAttribute('class', 'form-control dinero');
        sumatoria.setAttribute('readonly','');
        sumatoria.value = 0;
        celdaSumatoria.appendChild(sumatoria);
    }

    agregarFilasTablaCA = () => {        
        let tablaCA = document.getElementById('costos-administrativos');
          
        let fila = tablaCA.insertRow(tablaCA.rows.length - 1);

        let celdaConcepto = fila.insertCell(0);
        
        let concepto = document.createElement('input');
        concepto.type = 'text';
        concepto.setAttribute('class', 'form-control');        
        celdaConcepto.appendChild(concepto);

        for (let i = 1; i <= this.columnasAgregadas; i++) {
            let celdaValorCA = fila.insertCell(i);
            let valorCA = document.createElement('input');
            valorCA.type = 'number';
            valorCA.step = 0.01;
            valorCA.min = 0;
            valorCA.value = 0;
            valorCA.setAttribute('class', 'form-control');
            valorCA.value = 0;
            celdaValorCA.appendChild(valorCA);
        }

        let celdaSumatoria = fila.insertCell(this.columnasAgregadas + 1);

        let sumatoria = document.createElement('input');
        sumatoria.type = 'text';
        sumatoria.setAttribute('class', 'form-control dinero');
        sumatoria.setAttribute('readonly','');
        sumatoria.value = 0;
        celdaSumatoria.appendChild(sumatoria);
    }

    agregarFilasTablaRecursos = () => {        
        let tablaRecursos = document.getElementById('recursos');
          
        let fila = tablaRecursos.insertRow(tablaRecursos.rows.length - 1);

        let celdaRecurso = fila.insertCell(0);        
        let recurso = document.createElement('input');
        recurso.type = 'text';
        recurso.setAttribute('class', 'form-control');        
        celdaRecurso.appendChild(recurso);

        let celdaCostoMensual = fila.insertCell(1);        
        let costoMensual = document.createElement('input');
        costoMensual.type = 'number';
        costoMensual.step = 0.01;
        costoMensual.min = 0;
        costoMensual.value = 0;
        costoMensual.setAttribute('class', 'form-control');                
        celdaCostoMensual.appendChild(costoMensual);

        for (let i = 2; i < this.columnasAgregadas + 2; i++) {
            let celdaPorcentaje = fila.insertCell(i);
            let porcentaje = document.createElement('input');
            porcentaje.type = 'number';
            porcentaje.step = 1;
            porcentaje.min = 1;
            porcentaje.value = 1;
            porcentaje.max = 100;
            porcentaje.setAttribute('class', 'form-control'); 
            celdaPorcentaje.appendChild(porcentaje);
        }

        let celdaSumatoria = fila.insertCell(this.columnasAgregadas + 2);

        let sumatoria = document.createElement('input');
        sumatoria.type = 'text';
        sumatoria.setAttribute('class', 'form-control dinero');
        sumatoria.setAttribute('readonly','');
        sumatoria.value = 0;
        celdaSumatoria.appendChild(sumatoria);
    }

    agregarFilasTablaCostos = () => {        
        let tablaCostos = document.getElementById('costos');
          
        let fila = tablaCostos.insertRow(tablaCostos.rows.length - 1);

        let celdaRecurso = fila.insertCell(0);        
        let recurso = document.createElement('input');
        recurso.type = 'text';
        recurso.setAttribute('class', 'form-control');  
        recurso.setAttribute('readonly', '');      
        celdaRecurso.appendChild(recurso);

        for (let i = 1; i < this.columnasAgregadas + 1; i++) {
            let celda = fila.insertCell(i)
            let costo = document.createElement('input');
            costo.type = 'text';
            costo.setAttribute('class', 'form-control dinero');
            costo.setAttribute('readonly','');
            costo.value = 0;
            celda.appendChild(costo);
        }

        let celdaSumatoria = fila.insertCell(this.columnasAgregadas + 1);

        let sumatoria = document.createElement('input');
        sumatoria.type = 'text';
        sumatoria.setAttribute('class', 'form-control dinero');
        sumatoria.setAttribute('readonly','');
        sumatoria.value = 0;
        celdaSumatoria.appendChild(sumatoria);
    }

    agregarFilasTablaRCR = () => {        
        let tablaRCR = document.getElementById('resumen-costos-recursos');
          
        let fila = tablaRCR.insertRow(tablaRCR.rows.length - 1);

        let celdaRecurso = fila.insertCell(0);        
        let recurso = document.createElement('input');
        recurso.type = 'text';
        recurso.setAttribute('class', 'form-control');  
        recurso.setAttribute('readonly', '');    
                
        celdaRecurso.appendChild(recurso);

        for (let i = 1; i < this.columnasAgregadas + 1; i++) {
            let celda = fila.insertCell(i)
            let rcr = document.createElement('input');
            rcr.type = 'text';
            rcr.setAttribute('class', 'form-control dinero');
            rcr.setAttribute('readonly','');
            rcr.value = 0;                                    
            celda.appendChild(rcr);            
        }

        let celdaSumatoria = fila.insertCell(this.columnasAgregadas + 1);

        let sumatoria = document.createElement('input');
        sumatoria.type = 'text';
        sumatoria.setAttribute('class', 'form-control dinero');
        sumatoria.setAttribute('readonly','');
        sumatoria.value = 0;
        celdaSumatoria.appendChild(sumatoria);
    }
    //////////////////////////////////////////////////////////////////////////////////

    eliminarColumna = () => {
        if(this.columnasAgregadas != 0) {
            Swal.fire({
                title: '¿Estas seguro de eliminar la última columna agregada?',                
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Si',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    let tablas = document.getElementsByTagName('table');            
                    for (let i = 0; i < tablas.length; i++) {
                        let filas = tablas[i].rows;  
                        const columnas = filas[0].cells.length; 
                        for (let j = 0; j < filas.length; j++)
                            filas[j].deleteCell(columnas-2);           
                    }
                    this.restarMes();              
                    this.columnasAgregadas--;                   
                }                
            })
            
        }     
        else
            Swal.fire({
                title: 'No hay columnas agregadas',
                icon: 'warning'
            })   
    }

    //////////////////////////////////////////////////////////////////////////////////
    sumarMes = () => {
        if(this.mes == 12) {
            this.mes = 1;
            this.año++;
        }
        else
            this.mes++;
    }

    restarMes = () => {
        if(this.mes == 1) {
            this.mes = 12;
            this.año--;
        }
        else
            this.mes--;
    }
    
}