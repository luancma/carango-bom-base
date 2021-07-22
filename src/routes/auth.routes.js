import CadastroMarca from "../pages/CadastroMarca";
import ListagemMarcas from "../pages/ListagemMarcas";
import ListVehicle from "../pages/ListVehicle";
import RegisterUser from "../pages/RegisterUser";
import RegisterVehicle from "../pages/RegisterVehicle";

export const authRoutes = [
  {
    path: "/vehicle",
    title: "Listagem de Veículos",
    component: ListVehicle,
    sidebar: true,
  },
  {
    path: "/vehicle/create",
    title: "Cadastrar Veículo",
    component: RegisterVehicle,
  },
  {
    path: "/vehicle/:id",
    title: "Editar Veículo",
    component: RegisterVehicle,
  },
  {
    path: "/brand",
    title: "Listagem de Marcas",
    component: ListagemMarcas,
    sidebar: true,
  },
  {
    path: "/brand/create",
    title: "Cadastro de Marcas",
    component: CadastroMarca,
  },
  {
    path: "/brand/:id",
    title: "Editar de Marcas",
    component: CadastroMarca,
  },
  {
    path: "/user",
    title: "Cadastro de Usuário",
    component: RegisterUser,
  },
]