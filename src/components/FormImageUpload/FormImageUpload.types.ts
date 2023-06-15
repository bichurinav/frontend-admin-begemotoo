export interface FormProps {
  type: string;
  title: string;
}

export interface ImageSrc {
  id: number | string;
  src: string;
  size: string;
  name: string;
}

export interface FormData {
  image: ImageSrc[];
  private: boolean;
}
