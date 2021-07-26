import BaseService from "./BaseService";

class VehicleService extends BaseService {
  constructor() {
    super('vehicles')
  }
}

export default new VehicleService();
