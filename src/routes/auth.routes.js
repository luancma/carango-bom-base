import CreateUpdateBrand from "../pages/Brand/CreateUpdateBrand";
import Brand from "../pages/Brand";
import ListVehicle from "../pages/ListVehicle";
import RegisterUser from "../pages/RegisterUser";
import RegisterVehicle from "../pages/RegisterVehicle";
import UserList from "pages/User";
import CreateUpdateUser from "pages/User/CreateUpdateUser";
import Dashboard from "pages/Dashboard";


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
    component: UserList,
    sidebar: true,
  },
  {
    path: "/user/create",
    title: "Usuário",
    component: CreateUpdateUser,
  },
  {
    path: "/user/:id",
    title: "Usuário",
    component: CreateUpdateUser,
  },
  {
    path: "/dashboard",
    title: "Dashboard",
    component: Dashboard,
    sidebar: true,
  },
]