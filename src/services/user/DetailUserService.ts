import { DetailUserRepository } from "../../repository/user/DetailUserRepository";

interface IProps {
  user_id: string;
}
class DetailUserService {
  private readonly _DetailUserRepository: DetailUserRepository;
  constructor() {
    this._DetailUserRepository = new DetailUserRepository();
  }

  async execute({ user_id }: IProps) {
    const userDetail = await this._DetailUserRepository.userDetail({ user_id });

    return userDetail;
  }
}

export { DetailUserService };
