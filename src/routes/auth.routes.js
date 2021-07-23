import CreateUpdateBrand from "../pages/Brand/CreateUpdateBrand";
import Brand from "../pages/Brand";
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
    component: Brand,
    sidebar: true,
  },
  {
    path: "/brand/create",
    title: "Marcas",
    component: CreateUpdateBrand,
  },
  {
    path: "/brand/:id",
    title: "Marcas",
    component: CreateUpdateBrand,
  },
  {
    path: "/user",
    title: "Usuário",
    component: RegisterUser,
  },
]