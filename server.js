class Server {
  constructor() {
    this.isConnected = false;
  }

  connect() {
    this.isConnected = true;
  }

  disconnect() {
    this.isConnected = false;
  }
}
