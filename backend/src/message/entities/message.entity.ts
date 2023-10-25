export class Message {
  private id?: string;
  private author: string;
  private text: string;
  getId(): string {
    return this.id;
  }

  setId(value: string): void {
    this.id = value;
  }

  getAuthor(): string {
    return this.author;
  }

  setAuthor(value: string): void {
    this.author = value;
  }

  getText(): string {
    return this.text;
  }

  setText(value: string): void {
    this.text = value;
  }
}
