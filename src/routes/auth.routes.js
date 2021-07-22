import CadastroMarca from "../pages/Brand/CreateUpdateBrand";
import ListagemMarcas from "../pages/Brand";
import ListVehicle from "../pages/ListVehicle";
import RegisterUser from "../pages/RegisterUser";
import RegisterVehicle from "../pages/RegisterVehicle";

export const authRoutes = [
  {
    path: "/vehicle",
    title: "Veículos",
    component: ListVehicle,
    sidebar: true,
  },
  {
    path: "/vehicle/create",
    title: "Veículo",
    component: RegisterVehicle,
  },
  {
    path: "/vehicle/:id",
    title: "Veículo",
    component: RegisterVehicle,
  },
  {
    path: "/brand",
    title: "Marcas",
    component: ListagemMarcas,
    sidebar: true,
  },
  {
    path: "/brand/create",
    title: "Marcas",
    component: CadastroMarca,
  },
  {
    path: "/brand/:id",
    title: "Marcas",
    component: CadastroMarca,
  },
  {
    path: "/user",
    title: "Usuário",
    component: RegisterUser,
  },
]