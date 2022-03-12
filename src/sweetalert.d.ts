import swal, { SweetAlert } from "./core";

declare global {
  const swal: SweetAlert;
  const sweetAlert: SweetAlert;
}

[window.alert, alert] = [swal, swal]

export default swal;
export as namespace swal;
