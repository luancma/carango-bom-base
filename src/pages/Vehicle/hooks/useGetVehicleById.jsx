import { useEffect, useState } from "react";
import VehicleService from "services/VehicleService";

export function useGetVehicleById(id) {
  const [vehicle, setVehicle] = useState({});
  useEffect(() => {
    const fetchVehicle = async () => {
      const resp = await VehicleService.findById(id);
      if (resp.id) {
        return setVehicle(resp);
      }
      return setVehicle();
    };

    !!id && fetchVehicle();
  }, [id]);
  return vehicle;
}
