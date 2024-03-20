interface IUserRequestDTO {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: IUserRequestDTO) {
    console.log("🚀 ~ CreateUserService ~ execute ~ name:", name);
    return { ok: true };
  }
}

export { CreateUserService };
