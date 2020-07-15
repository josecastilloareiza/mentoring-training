export class ScreenLog {
    log = '';

    add = (msg: string): void => {
        this.log += msg + '\n';
    };

    show = (): void => {
        alert(this.log);
        this.log = '';
    };
}
