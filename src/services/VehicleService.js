const API_URL = process.env.REACT_APP_CARANGO_API;

class VehicleService {
  static getVehicles(page, size) {
    return fetch(`${API_URL}/vehicles?page=${page}&size=${size}`).then(r =>
      r.json(),
    );
  }
  static deleteVehicleById(id) {
    return fetch(`${API_URL}/vehicles/${id}`, { method: "DELETE" }).then(r =>
      r.json(),
    );
  }
}

export default VehicleService;
