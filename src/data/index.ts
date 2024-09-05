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
    title: "Luis Miguel - Tour 2024",
    events: [
      {
        ciudad: "Valle de Guadalupe",
        fecha: "07 sept 2024",
        lugar: "ARENA VALLE DE GUADALUPE",
        urlboton:
          "",
        urlfoto:
          "https://imgcdn.terio.xyz/images/2024/06/30/FunTicket-LMTOUR2024_VG_Prox_VGDLP.jpeg",
        links: [],
      },
      {
        ciudad: "Saltillo",
        fecha: "19 sep 2024",
        lugar: "Estadio Francisco I. Madero",
        urlboton:
          "",
        urlfoto:
          "https://imgcdn.terio.xyz/images/2024/05/05/FunTicket-LMTOUR2024_VG_Prox_Saltillo.md.jpeg",
        links: [],
      },
      {
        ciudad: "Torreón",
        fecha: "21 sep 2024",
        lugar: "Estadio Revolución",
        urlboton:
          "",
        urlfoto:
          "https://imgcdn.terio.xyz/images/2024/05/05/FunTicket-LMTOUR2024_VG_Prox_Torreon.md.jpeg",
        links: [],
      },
      {
        ciudad: "Hermosillo",
        fecha: "24 sep 2024",
        lugar: "Estadio Heroe de Nacozari",
        urlboton:
          "",
        urlfoto:
          "https://imgcdn.terio.xyz/images/2024/05/05/FunTicket-LMTOUR2024_VG_Prox_Hermosillo.md.jpeg",
        links: [],
      }
    ],
  },
];
