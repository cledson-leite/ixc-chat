export class User {
  private id?: string;
  private name: string;
  private username: string;
  private password: string;

  getId(): string {
    return this.id;
  }

  setId(value: string): void {
    this.id = value;
  }

  getName(): string {
    return this.name;
  }

  setName(value: string): void {
    this.name = value;
  }

  getUsername(): string {
    return this.username;
  }

  setUsername(value: string): void {
    this.username = value;
  }

  getPassword(): string {
    return this.password;
  }

  setPassword(value: string): void {
    this.password = value;
  }
}
