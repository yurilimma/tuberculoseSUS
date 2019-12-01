import {GodfatherPage} from "../../pages/godfather/godfather";
import { ComunityPage } from "../../pages/comunity/comunity";
import { ClinicPage } from "../../pages/clinic/clinic";



export let MENU = [
  {
    id: 1,
    name: "MEU DIÁRIO",
    icon: "partly-sunny",
    color: "bg-green-active",
    line: 1
  },
  {
    id: 5,
    name: "COMUNIDADE",
    icon: "contacts",
    color: "bg-green-active",
    line: 1,
    component: ComunityPage
  },
  {
    id: 3,
    name: "Conquistas",
    icon: "trophy",
    color: "bg-blue-active",
    line: 2
  },
  {
    id: 4,
    name: "Clínica",
    icon: "medkit",
    color: "bg-blue-active",
    line: 2,
    component: ClinicPage
  },
  {
    id: 2,
    name: "Agendamento",
    icon: "alarm",
    color: "bg-blue-active",
    line: 2
  },  
  {
    id: 6,
    name: "Padrinho",
    icon: "people",
    color: "bg-blue-active",
    line: 3,
    component: GodfatherPage
  },
  {
    id: 7,
    name: "Cartão",
    icon: "finger-print",
    color: "bg-blue-active",
    line: 3
  },
  {
    id: 8,
    name: "Médico",
    icon: "git-network",
    color: "bg-blue-active",
    line: 3
  }
]
