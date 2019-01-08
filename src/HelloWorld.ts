export class HelloWorld {
    public message: string;

    constructor(message?: string) {
        this.message = message || "Hello World!";
    }

    public logMessage = (): void => {
        console.log(this.message);
    }
}
