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
    title: "Aventura - Cerrando Ciclos",
    events: [
      {
        ciudad: "Guadalajara",
        fecha: "14 ago 2024",
        lugar: "Estadio Akron",
        urlboton: "https://boletos.funticket.mx/boletos28/public/janto/main.php?Nivel=Evento&idEvento=AVENTGDL",
        urlfoto: "https://imgcdn.terio.xyz/images/2024/07/08/FunTicket-Aventura_GDL_Proximos.md.jpeg",
        links: []
      },
      {
        ciudad: "Mérida",
        fecha: "25 ago 2024",
        lugar: "ESTADIO CARLOS ITURRALDE",
        urlboton: "https://boletos.funticket.mx/boletos33/public/janto/main.php?Nivel=Evento&idEvento=AVENTURAMER",
        urlfoto: "https://imgcdn.terio.xyz/images/2024/07/08/FunTicket-Aventura_MER_Proximos.md.jpeg",
        links: []
      },
      {
        ciudad: "Monterrey",
        fecha: "20 ago 2024",
        lugar: "Estadio Banorte",
        urlboton: "https://boletos.funticket.mx/boletos31/public/janto/main.php?Nivel=Evento&idEvento=AVMTY",
        urlfoto: "https://imgcdn.terio.xyz/images/2024/07/08/FunTicket-Aventura_MTY_Proximos.md.jpeg",
        links: []
      },
      {
        ciudad: "Puebla",
        fecha: "23 ago 2024",
        lugar: "CENTRO EXPOSITOR LOS FUERTES",
        urlboton: "https://boletos.funticket.mx/boletos32/public/janto/main.php?Nivel=Evento&idEvento=AVPUEBLA",
        urlfoto: "https://imgcdn.terio.xyz/images/2024/07/08/FunTicket-Aventura_PUE_Proximos.md.jpeg",
        links: []
      },
      {
        ciudad: "Querétaro",
        fecha: "16 ago 2024",
        lugar: "ESTADIO CORREGIDORA",
        urlboton: "https://boletos.funticket.mx/boletos29/public/janto/main.php?Nivel=Evento&idEvento=AVEQRO",
        urlfoto: "https://imgcdn.terio.xyz/images/2024/07/08/FunTicket-Aventura_QRO_Proximos.md.jpeg",
        links: []
      }
    ]
  },
];
