class DocumentHandler {
  constructor() {
    this.config = {
      default: 'pdf'
    };
  }

  getDefaultFormat() {
    return this.config.default;
  }
}

// Example usage:
const handler = new DocumentHandler();
console.log(handler.getDefaultFormat()); // Output: 'pdf'
