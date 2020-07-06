export class ScreenLog {
  log = '';
  add = (msg: string) => {
    this.log += msg + '\n';
  };
  show = () => {
    alert(this.log);
    this.log = '';
  };
}
