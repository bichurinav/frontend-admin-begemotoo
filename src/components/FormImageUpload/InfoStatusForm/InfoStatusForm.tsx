import { StatusForm } from "./InfoStatusForm.types";
import "./InfoStatusForm.scss";

const InfoStatusForm = ({ status, message, show }: StatusForm) => {
  return (
    <>
      {show && (
        <div
          className={
            status === "success"
              ? "form-status form-status--success"
              : "form-status form-status--failed"
          }
        >
          {message}
        </div>
      )}
    </>
  );
};

export default InfoStatusForm;
