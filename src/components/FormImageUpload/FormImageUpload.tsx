import * as React from "react";
import InfoStatusForm from "./InfoStatusForm/InfoStatusForm";
import Checkbox from "../UI/Checkbox/Checkbox";
import ImageLoader from "../UI/ImageLoader/ImageLoader";
import type { FormData, ImageSrc } from "./FormImageUpload.types";
import type { StatusForm } from "./InfoStatusForm/InfoStatusForm.types";
import "./FormImageUpload.scss";

const FormImageUpload: React.FC = () => {
  const [dataForm, setDataForm] = React.useState<FormData>({
    image: [],
    private: false,
  });

  const [statusForm, setStatusForm] = React.useState<StatusForm>({
    status: "failed",
    message: "",
    show: false,
  });

  const [textImageLoader, setTextImageLoader] = React.useState("Загрузить");

  const sendData = React.useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(dataForm);
    },
    [dataForm]
  );

  const resetStatusForm = () =>
    setStatusForm({ status: "failed", message: "", show: false });

  const fileInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    resetStatusForm();
    const files = e.currentTarget.files as FileList;
    const getSize = (file: File) => Number((file.size / 1024).toFixed(0));

    if (files.length > 10) {
      setStatusForm({
        status: "failed",
        message: `Лимит 10 картинок для загрузки за раз`,
        show: true,
      });
      setDataForm({ ...dataForm, image: [] });
      return;
    }

    if (files.length > 1 && files.length < 11) {
      setTextImageLoader(
        `Загружено ${files.length} ${
          files.length > 4 ? "картинок" : "картинки"
        }`
      );
    } else {
      setTextImageLoader(`${files[0].name} (${getSize(files[0])} Кб)`);
    }

    (async () => {
      const arrImagesSrc: ImageSrc[] = [];
      let countLoadedImages = 0;

      Array.from(files).forEach(async (file, idx) => {
        const fr = new FileReader();
        const size = getSize(file); // Кб

        if (size > 300) {
          setStatusForm({
            status: "failed",
            message: `Размер файла ${file.name} слишком большой, загрузите другое изображение!`,
            show: true,
          });
          setDataForm({ ...dataForm, image: [] });
          return;
        }

        fr.readAsDataURL(file);

        fr.addEventListener("load", () => {
          countLoadedImages += 1;
          arrImagesSrc.push({
            id: `img-${idx}`,
            src: fr.result as string,
            name: file.name,
            size: `${size} Кб`,
          });
        });
      });
      // Дожидаемся, пока загрузятся все картинки
      await new Promise((resolve, _) => {
        const interval = setInterval(() => {
          if (countLoadedImages === files.length) {
            clearInterval(interval);
            resolve("");
          }
        }, 100);
      });

      setDataForm({ ...dataForm, image: arrImagesSrc });
      setStatusForm({
        status: "success",
        message: ``,
        show: false,
      });
    })();
  };

  const checkboxPrivateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataForm((prev) => {
      return {
        ...prev,
        private: !prev.private,
      };
    });
  };

  const removeImgSrc = (targetIMG: ImageSrc) => {
    const imagesSrcModified = dataForm.image.filter(
      (item) => item.id !== targetIMG.id
    );
    setDataForm({ ...dataForm, image: imagesSrcModified });

    if (imagesSrcModified.length === 0) {
      setTextImageLoader("Загрузить");
      setStatusForm({ ...statusForm, status: "failed" });
      return;
    }

    if (imagesSrcModified.length === 1) {
      setTextImageLoader(
        `${imagesSrcModified[0].name} (${imagesSrcModified[0].size})`
      );
      return;
    }

    setTextImageLoader(
      `Загружено ${imagesSrcModified.length} ${
        imagesSrcModified.length > 4 ? "картинок" : "картинки"
      }`
    );
  };

  return (
    <form onSubmit={sendData} className="form-image-upload">
      <label>
        <h4 className="form-image-upload__title">Загрузиту картинки</h4>

        <ImageLoader onChange={fileInputHandler} text={textImageLoader} />
      </label>
      <Checkbox
        label={"Сделать картинки приватными"}
        value={dataForm.private}
        onChange={checkboxPrivateHandler}
      />
      <InfoStatusForm {...statusForm} />
      <button className="button" disabled={statusForm.status === "failed"}>
        Отправить на сервер
      </button>
      <div className="images-list">
        {dataForm.image.map((item, idx) => {
          return (
            <div key={item.id} className="images-item">
              <img src={item.src} alt="" />
              <img
                onClick={() => removeImgSrc(item)}
                className="remove"
                src="/remove.png"
                alt=""
              />
            </div>
          );
        })}
      </div>
    </form>
  );
};

export default FormImageUpload;
