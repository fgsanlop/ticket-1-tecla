let presupuesto1 ={
    "proyecto": "Tecla",
    "nuevaVersion": false,
    "mes": 1,
    "año": 2018,
    "datos": {
        "flujoDeEfectivo": [1809, 6000, 9000, 4605],
        "ingresos": [
            {
                "concepto": "I1",
                "valores": [1124, 2523, 3444, 4222]
            },
            {
                "concepto": "Prueba 2",
                "valores": [5, 6, 7, 8]
            },
            {
                "concepto": "Prueba 3",
                "valores": [9, 10, 11, 12]
            }
        ],
        "costosDirectos": [
            {
                "concepto": "CD 1",
                "opcion": 1,
                "valores": [1, 2, 3, 4]
            },
            {
                "concepto": "CD 2",
                "opcion": 2,
                "valores": [5, 6, 7, 8]
            },
            {
                "concepto": "",
                "opcion": 3,
                "valores": [9, 10, 11, 12]
            }
        ],
        "costosAdministrativos": [
            {
                "concepto": "CA1",
                "opcion": 1,
                "valores": [1, 2, 3, 4]
            },
            {
                "concepto": "",
                "opcion": 2,
                "valores": [5, 6, 7, 8]
            }
        ],
        "recursos": [
            {
                "concepto": "R1",
                "costoMensual": 182.00,
                "porcentajes": [33, 33, 14, 9]
            },
            {
                "concepto": "R2",
                "costoMensual": 99.90,
                "porcentajes": [10, 25, 94, 48]
            }
        ]
    }   
}

let presupuesto2 = {
    "proyecto": "Tecla",
    "nuevaVersion": false,
    "mes": 1,
    "año": 2018,
    "datos": {
        "flujoDeEfectivo": [1809, 6000],
        "ingresos": [
            {
                "concepto": "I1",
                "valores": [1124.44, 2523.69]
            },
            {
                "concepto": "I2",
                "valores": [5342.99, 64234.12]
            },
            {
                "concepto": "I3",
                "valores": [9999.90, 10001.10]
            }
        ],
        "costosDirectos": [
            {
                "concepto": "",
                "opcion": 1,
                "valores": [10, 20]
            },
            {
                "concepto": "Costo 2",
                "opcion": 1,
                "valores": [555, 6666]
            },
            {
                "concepto": "",
                "opcion": 3,
                "valores": [0, 0]
            }
        ],
        "costosAdministrativos": [
            {
                "concepto": "Costo AD",
                "opcion": 1,
                "valores": [88, 77]
            }
        ],
        "recursos": [
            {
                "concepto": "Recurso xd",
                "costoMensual": 170000.78,
                "porcentajes": [90, 14]
            },
            {
                "concepto": "R2",
                "costoMensual": 182000,
                "porcentajes": [100, 100]
            }
        ]
    }   
}

let presupuesto3 = {
    "proyecto": "Tecla",
    "nuevaVersion": false,
    "mes": 1,
    "año": 2018,
    "datos": {
        "flujoDeEfectivo": [1],
        "ingresos": [
            {
                "concepto": "I1",
                "valores": [1]
            }
        ],
        "costosDirectos": [
            {
                "concepto": "",
                "opcion": 3,
                "valores": [1]
            },
            {
                "concepto": "Costo 2",
                "opcion": 3,
                "valores": [1]
            },
            {
                "concepto": "",
                "opcion": 2,
                "valores": [1]
            },
            {
                "concepto": "TEST +",
                "opcion": 1,
                "valores": [1]
            }
        ],
        "costosAdministrativos": [
            {
                "concepto": "Costo AD",
                "opcion": 1,
                "valores": [1]
            }
        ],
        "recursos": [            
            {
                "concepto": "R2",
                "costoMensual": 2000,
                "porcentajes": [1]
            }
        ]
    }   
}