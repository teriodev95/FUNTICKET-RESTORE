interface Event { 
  title: string;
  events: {
    ciudad: string;
    fecha: string;
    lugar: string;
    urlboton: string;
    urlfoto: string;
    links: {
      label: string;
      url: string;
    }[];
  }[];

}

export const footer = {
  whatsapp: "+52 56 1200 8914",
  telefono: "+52 55 9262 8926",
  email: "atc@funticket.mx",
  urlInstagram: "https://www.instagram.com/funticketmx/",
  urlTwitter: "https://twitter.com/Funticketmx",
  urlFacebook: "https://www.facebook.com/FunTicketMx"
}



export const mainEvents: Event[] = [
  {
    title: "Travis Scott - Circus Maximus Tour 2024",
    events: [
      {
        ciudad: "CDMX",
        fecha: "21 sep 2024",
        lugar: "EXPLANADA DEL ESTADIO AZTECA",
        urlboton: "https://boletos.funticket.mx/boletos48/public/janto/main.php?Nivel=Evento&idEvento=TRAVISCOTT",
        urlfoto: "https://imgcdn.terio.xyz/images/2024/07/29/FunTicket-TravisScott_Proximos_SoldOut.md.jpeg",
        links: [
          {
            label: "Conecta ride",
            url: "https://boletos.funticket.mx/boletos48/public/janto/main.php?Nivel=Evento&idEvento=CRIDETRAVIS21"
          }
        ]
      }
    ]
  },
  {
    title: "Luis Miguel - Tour 2024",
    events: [
      {
        ciudad: "Monterrey",
        fecha: "22 ago 2024",
        lugar: "Estadio Banorte - Monterrey",
        urlboton: "https://boletos.funticket.mx/boletos19/public/janto/main.php?Nivel=Evento&idEvento=LM24MTY",
        urlfoto: "https://imgcdn.terio.xyz/images/2024/05/05/FunTicket-LMTOUR2024_VG_Prox_Monterrey22.md.jpeg",
        links: []
      },
      {
        ciudad: "Monterrey",
        fecha: "24 ago 2024",
        lugar: "Estadio Banorte - Monterrey",
        urlboton: "https://boletos.funticket.mx/boletos25/public/janto/main.php?Nivel=Evento&idEvento=24MTYLM",
        urlfoto: "https://imgcdn.terio.xyz/images/2023/12/18/FunTicket-LMTOUR2024_VG_Prox_Monterrey24.jpeg",
        links: []
      },
      {
        ciudad: "Valle de Guadalupe",
        fecha: "07 sept 2024",
        lugar: "ARENA VALLE DE GUADALUPE",
        urlboton: "https://boletos.funticket.mx/boletos26/public/janto/main.php?Nivel=Evento&idEvento=LMENSE",
        urlfoto: "https://imgcdn.terio.xyz/images/2024/06/30/FunTicket-LMTOUR2024_VG_Prox_VGDLP.jpeg",
        links: []
      },
      {
        ciudad: "Chihuahua",
        fecha: "28 ago 2024",
        lugar: "Estadio Olímpico Universitario - Chihuahua",
        urlboton: "https://boletos.funticket.mx/boletos12/public/janto/main.php?Nivel=Evento&idEvento=LMCHI",
        urlfoto: "https://imgcdn.terio.xyz/images/2024/05/05/FunTicket-LMTOUR2024_VG_Prox_Chihuahua.jpeg",
        links: []
      },
      {
        ciudad: "Mexicali",
        fecha: "2 sept 2024",
        lugar: "Estadio Nido de Los Águilas - Mexicali",
        urlboton: "https://boletos.funticket.mx/boletos23/public/janto/main.php?Nivel=Evento&idEvento=LMMEXI",
        urlfoto: "https://imgcdn.terio.xyz/images/2024/05/05/FunTicket-LMTOUR2024_VG_Prox_Mexicali.md.jpeg",
        links: []
      },
      {
        ciudad: "Tijuana",
        fecha: "4 sep 2024",
        lugar: "Estadio Caliente - Tijuana",
        urlboton: "https://boletos.funticket.mx/boletos20/public/janto/main.php?Nivel=Evento&idEvento=LMTIJU24",
        urlfoto: "https://imgcdn.terio.xyz/images/2024/05/05/FunTicket-LMTOUR2024_VG_Prox_Tijuana.md.jpeg",
        links: []
      },
      {
        ciudad: "Saltillo",
        fecha: "19 sep 2024",
        lugar: "Estadio Francisco I. Madero - Saltillo",
        urlboton: "https://boletos.funticket.mx/boletos10/public/janto/main.php?Nivel=Evento&idEvento=LM24SAL",
        urlfoto: "https://imgcdn.terio.xyz/images/2024/05/05/FunTicket-LMTOUR2024_VG_Prox_Saltillo.md.jpeg",
        links: []
      },
      {
        ciudad: "Torreón",
        fecha: "21 sep 2024",
        lugar: "Estadio Revolución - Torreón",
        urlboton: "https://boletos.funticket.mx/boletos13/public/janto/main.php?Nivel=Evento&idEvento=LM24TOR",
        urlfoto: "https://imgcdn.terio.xyz/images/2024/05/05/FunTicket-LMTOUR2024_VG_Prox_Torreon.md.jpeg",
        links: []
      },
      {
        ciudad: "Hermosillo",
        fecha: "24 sep 2024",
        lugar: "Estadio Heroe de Nacozari - Hermosillo",
        urlboton: "https://boletos.funticket.mx/boletos15/public/janto/main.php?Nivel=Evento&idEvento=LMHERMOSILLO",
        urlfoto: "https://imgcdn.terio.xyz/images/2024/05/05/FunTicket-LMTOUR2024_VG_Prox_Hermosillo.md.jpeg",
        links: []
      },
      {
        ciudad: "Guadalajara",
        fecha: "1 oct 2024",
        lugar: "Estadio Jalisco - Guadalajara",
        urlboton: "https://boletos.funticket.mx/boletos27/public/janto/main.php?Nivel=Evento&idEvento=LM24GDL",
        urlfoto: "https://imgcdn.terio.xyz/images/2024/05/05/FunTicket-LMTOUR2024_VG_Prox_Guadalajara.jpeg",
        links: []
      },
      {
        ciudad: "Pachuca",
        fecha: "27 oct 2024",
        lugar: "Estadio Hidalgo - Pachuca",
        urlboton:  "https://boletos.funticket.mx/boletos18/public/janto/main.php?Nivel=Evento&idEvento=LMPACHUCA",
        urlfoto: "https://imgcdn.terio.xyz/images/2024/05/05/FunTicket-LMTOUR2024_VG_Prox_Pachuca.md.jpeg",
        links: []
      },
      {
        ciudad: "Irapuato",
        fecha: "31 oct 2024",
        lugar: "Estadio Sergio León Chávez - Irapuato",
        urlboton: "https://boletos.funticket.mx/boletos22/public/janto/main.php?Nivel=Evento&idEvento=LM24IRAP",
        urlfoto: "https://imgcdn.terio.xyz/images/2024/03/01/lm-irapuato.jpeg",
        links: []
      },
      {
        ciudad: "Puebla",
        fecha: "2 nov 2024",
        lugar: "Estadio Hermanos Serdán - Puebla",
        urlboton: "https://boletos.funticket.mx/boletos3/public/janto/main.php?Nivel=Evento&idEvento=LM24PUE",
        urlfoto: "https://imgcdn.terio.xyz/images/2024/05/05/FunTicket-LMTOUR2024_VG_Prox_Puebla.md.jpeg",
        links: []
      },
      {
        ciudad: "Tuxtla",
        fecha: "5 nov 2024",
        lugar: "Estadio Víctor Manuel Reyna - Tuxtla",
        urlboton: "https://boletos.funticket.mx/boletos16/public/janto/main.php?Nivel=Evento&idEvento=LMTUXTLA24",
        urlfoto: "https://imgcdn.terio.xyz/images/2024/05/05/FunTicket-LMTOUR2024_VG_Prox_Tuxtla.md.jpeg",
        links: []
      },
      {
        ciudad: "Mérida",
        fecha: "8 nov 2024",
        lugar: "Estadio Carlos Iturralde - Mérida",
        urlboton: "https://boletos.funticket.mx/boletos21/public/janto/main.php?Nivel=Evento&idEvento=LM24MERI",
        urlfoto: "https://imgcdn.terio.xyz/images/2024/05/05/FunTicket-LMTOUR2024_VG_Prox_Merida.jpeg",
        links: []
      },
      {
        ciudad: "Cancún",
        fecha: "11 nov 2024",
        lugar: "Estadio Andres Quintana Roo - Cancún",
        urlboton: "https://boletos.funticket.mx/boletos24/public/janto/main.php?Nivel=Evento&idEvento=LMCANCUN",
        urlfoto: "https://imgcdn.terio.xyz/images/2024/05/05/FunTicket-LMTOUR2024_VG_Prox_Cancun.jpeg",
        links: []
      },
      {
        ciudad: "Toluca",
        fecha: "25 nov 2024",
        lugar: "Estadio Universitario \"Chivo\" Córdoba - Toluca",
        urlboton: "https://boletos.funticket.mx/boletos4/public/janto/main.php?Nivel=Evento&idEvento=LMTOLU24",
        urlfoto: "https://imgcdn.terio.xyz/images/2024/05/05/FunTicket-LMTOUR2024_VG_Prox_Toluca.jpeg",
        links: []
      }
    ]
  },
  {
    title: "Zucchero - Tour 2024",
    events: [
      {
        ciudad: "Guadalajara",
        fecha: "20 sep 2024",
        lugar: "PALCCO (Palacio De La Cultura Y Los Congresos)",
        urlboton: "https://boletos.funticket.mx/boletos11/public/janto/main.php?Nivel=Evento&idEvento=ZUCGDL",
        urlfoto: "https://imgcdn.terio.xyz/images/2024/05/04/zucchero-prox.md.jpeg",
        links: []
      }
    ]
  },
  {
    title: "Slipknot - MÉXICO 2024",
    events: [
      {
        ciudad: "Guadalajara",
        fecha: "8 nov 2024",
        lugar: "Calle 2 - Guadalajara",
        urlboton: "https://boletos.funticket.mx/boletos14/public/janto/main.php?Nivel=Evento&idEvento=SLIPKGDL",
        urlfoto: "https://imgcdn.terio.xyz/images/2024/04/30/slipknot-prox.jpeg",
        links: [
          {
            label: "Conecta ride",
            url: "https://boletos.funticket.mx/boletos7/public/janto/main.php?Nivel=Evento&idEvento=CRIDESLIPK"
          }
        ]
      }
    ]
  },
  {
    title: "México Metal Fest - 2024",
    events: [
      {
        ciudad: "Monterrey",
        fecha: "12 oct 2024",
        lugar: "Expo Guadalupe - Monterrey",
        urlboton: "https://boletos.funticket.mx/boletos2/public/janto/main.php?Nivel=Evento&idEvento=MEXMETALFEST24",
        urlfoto: "https://imgcdn.terio.xyz/images/2024/05/26/photo_2_2024-05-26_21-32-32.md.jpeg",
        links: [
          {
            label: "Solo valhalla",
            url: "https://boletos.funticket.mx/boletos2/public/janto/main.php?Nivel=Evento&idEvento=MEXMETALFESTVA24"
          }
        ]
      }
    ]
  },
  {
    title: "Bring Me The Horizon - Diciembre 2024",
    events: [
      {
        ciudad: "CDMX",
        fecha: "14 dic 2024",
        lugar: "EXPLANADA DEL ESTADIO AZTECA",
        urlboton: "https://boletos.funticket.mx/boletos5/public/janto/main.php?Nivel=Evento&idEvento=BMTH24",
        urlfoto: "https://imgcdn.terio.xyz/images/2024/06/17/FunTicket-BMTH_Proximos.jpeg",
        links: [
          {
            label: "Conecta rida",
            url: "https://boletos.funticket.mx/boletos7/public/janto/main.php?Nivel=Evento&idEvento=CRIDEBMTH"
          }
        ]
      }
    ]
  }
];
