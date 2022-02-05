export interface Application {
  listen(port: string, callback: () => void): void;
}
