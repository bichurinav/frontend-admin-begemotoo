import { ImageLoaderProps } from "./ImageLoader.types";
import "./Imageloader.scss";

const ImageLoader = ({ onChange, text = "Загрузить" }: ImageLoaderProps) => {
  return (
    <>
      <label className="image-loader">
        <div className="inner">
          <img src="/upload-icon.png" alt="" />
          <span>{text}</span>
        </div>
        <input
          type="file"
          name="image"
          multiple
          onChange={onChange}
          accept="image/png, image/jpeg"
          hidden
        />
      </label>
    </>
  );
};

export default ImageLoader;
