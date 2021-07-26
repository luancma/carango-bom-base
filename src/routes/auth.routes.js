import CreateUpdateBrand from "../pages/Brand/CreateUpdateBrand";
import Brand from "../pages/Brand";
import Vehicle from "../pages/Vehicle";
import CreateUpdateVehicle from "../pages/Vehicle/CreateUpdateVehicle";
import UserList from "pages/User";
import CreateUpdateUser from "pages/User/CreateUpdateUser";

export const authRoutes = [
  {
    path: "/vehicle",
    title: "Veículos",
    component: Vehicle,
    sidebar: true,
  },
  {
    path: "/vehicle/create",
    title: "Veículos",
    component: CreateUpdateVehicle,
  },
  {
    path: "/vehicle/:id",
    title: "Veículos",
    component: CreateUpdateVehicle,
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
    title: "Usuários",
    component: UserList,
    sidebar: true,
  },
  {
    path: "/user/create",
    title: "Usuários",
    component: CreateUpdateUser,
  },
];
