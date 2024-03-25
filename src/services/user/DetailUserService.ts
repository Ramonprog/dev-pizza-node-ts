import { DetailUserRepository } from "../../repository/user/DetailUserRepository";

class DetailUserService {
  private readonly _DetailUserRepository: DetailUserRepository;
  constructor() {
    this._DetailUserRepository = new DetailUserRepository();
  }

  async execute() {
    const userDetail = await this._DetailUserRepository.userDetail();

    return userDetail;
  }
}

export { DetailUserService };
