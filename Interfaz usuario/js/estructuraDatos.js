var vecAdministradores = [{
    nombre: "Diego",
    email: "diego@admin.com",
    contrasenia: "clave2"
  },
  {
    nombre: "Camila",
    email: "camila@admin.com",
    contrasenia: "clave2"
  },
  {
    nombre: "Adriana",
    email: "adriana@admin.com",
    contrasenia: "clave2"
  }
];
var vecSocios = [];
var vecEquipos = [];
var vecCompetencia = [];

function precargarDatos() {
  vecCompetencia = [{
      nombre: "Competencia1",
      estadoON: false,
      equipos: [{
          nombre: "Delfines",
          socios: ["pedro@gmail.com", "maria@gmail.com", "juan@gmail.com"],
          imgLogo: "f1.png"
        },
        {
          nombre: "Mantarrayas",
          socios: ["lautaro@gmail.com", "carmen@gmail.com", "martin@gmail.com"],
          imgLogo: "f2.png"
        },
        {
          nombre: "Orcas",
          socios: ["belen@gmail.com", "analia@gmail.com", "ana@gmail.com"],
          imgLogo: "f3.png"
        }
      ]
    },
    {
      nombre: "Libre",
      estadoON: true,
      equipos: [{
        nombre: "Orcas",
        socios: ["belen@gmail.com", "analia@gmail.com", "ana@gmail.com"],
        imgLogo: "f3.png"
      }, {
        nombre: "Delfines",
        socios: ["pedro@gmail.com", "maria@gmail.com", "juan@gmail.com"],
        imgLogo: "f1.png"
      }],
    },
    {
      nombre: "Competencia2",
      estadoON: true,
      equipos: [],
    },
    {
      nombre: "Espalda",
      estadoON: false,
      equipos: [{
          nombre: "Calamares",
          socios: ["anthony@gmail.com", "mauro@gmail.com", "sebastian@gmail.com"],
          imgLogo: "f5.png",

        },
        {
          nombre: "Mantarrayas",
          socios: ["lautaro@gmail.com", "carmen@gmail.com", "martin@gmail.com"],
          imgLogo: "f2.png",
        }
      ]
    }
  ]
  vecEquipos = [{
      nombre: "Delfines",
      socios: ["pedro@gmail.com", "maria@gmail.com", "juan@gmail.com"],
      imgLogo: "f1.png",
      competencias: [{
        nombre: "Competencia1",
        metrosTotales: 475
      }]
    },
    {
      nombre: "Tiburones",
      socios: ["ian@"],
      imgLogo: "f4.png",
      competencias: []
    },
    {
      nombre: "Calamares",
      socios: ["anthony@gmail.com", "mauro@gmail.com", "sebastian@gmail.com"],
      imgLogo: "f5.png",
      competencias: [{
        nombre: "Espalda",
        metrosTotales: 1000
      }]
    },
    {
      nombre: "Mantarrayas",
      socios: ["lautaro@gmail.com", "carmen@gmail.com", "martin@gmail.com"],
      imgLogo: "f2.png",
      competencias: [{
          nombre: "Competencia1",
          metrosTotales: 900
        },
        {
          nombre: "Espalda",
          metrosTotales: 775
        }
      ]
    },
    {
      nombre: "Orcas",
      socios: ["belen@gmail.com", "analia@gmail.com", "ana@gmail.com"],
      imgLogo: "f3.png",
      competencias: [{
        nombre: "Competencia1",
        metrosTotales: 750
      }]
    }
  ]

  vecSocios = [{
      nombre: "Pedro Lopez",
      email: "pedro@gmail.com",
      contrasenia: "clave1",
      competencias: [{
        nombre: "Competencia1",
        metros: 100
      }],
      estado: true
    },
    {
      nombre: "Ian",
      email: "ian@",
      contrasenia: "ian123",
      competencias: [],
      estado: true
    },
    {
      nombre: "Juan Casas",
      email: "juan@gmail.com",
      contrasenia: "clave1",
      competencias: [{
        nombre: "Competencia1",
        metros: 75
      }],
      estado: true
    },
    {
      nombre: "Belen Martínez",
      email: "belen@gmail.com",
      contrasenia: "clave1",
      competencias: [{
        nombre: "Competencia1",
        metros: 250
      }],
      estado: true
    },
    {
      nombre: "Analía Pérez",
      email: "analia@gmail.com",
      contrasenia: "clave1",
      competencias: [{
        nombre: "Competencia1",
        metros: 250
      }],
      estado: true
    },
    {
      nombre: "Carlos Penta",
      email: "carlos@gmail.com",
      contrasenia: "clave1",
      competencias: [],
      estado: true
    },
    {
      nombre: "Ana Torrevieja",
      email: "ana@gmail.com",
      contrasenia: "clave1",
      competencias: [{
        nombre: "Competencia1",
        metros: 250
      }],
      estado: true
    },
    {
      nombre: "Lautaro Mazza",
      email: "lautaro@gmail.com",
      contrasenia: "clave1",
      competencias: [{
          nombre: "Competencia1",
          metros: 150
        },
        {
          nombre: "Espalda",
          metros: 250
        }
      ],
      estado: true
    },
    {
      nombre: "Carmen Sandiego",
      email: "carmen@gmail.com",
      contrasenia: "clave1",
      competencias: [{
          nombre: "Competencia1",
          metros: 400
        },
        {
          nombre: "Espalda",
          metros: 300
        }
      ],
      estado: true
    },
    {
      nombre: "Mauro Cardozo",
      email: "mauro@gmail.com",
      contrasenia: "clave1",
      competencias: [{
        nombre: "Espalda",
        metros: 400
      }],
      estado: true
    },
    {
      nombre: "Anthony Garcia",
      email: "anthony@gmail.com",
      contrasenia: "clave1",
      competencias: [{
        nombre: "Espalda",
        metros: 250
      }],
      estado: true
    },
    {
      nombre: "Sebastian Rios",
      email: "sebastian@gmail.com",
      contrasenia: "clave1",
      competencias: [{
        nombre: "Espalda",
        metros: 350
      }],
      estado: true
    },
    {
      nombre: "Martin Ríos",
      email: "martin@gmail.com",
      contrasenia: "clave1",
      competencias: [{
          nombre: "Competencia1",
          metros: 350
        },
        {
          nombre: "Espalda",
          metros: 225
        }
      ],
      estado: true
    },
    {
      nombre: "Maria Flores",
      email: "maria@gmail.com",
      contrasenia: "clave1",
      competencias: [{
        nombre: "Competencia1",
        metros: 300
      }],
      estado: true
    }
  ]
}
