import React from "react";

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
  text: string;
  image: ImageSrc[];
  private: boolean;
}

export interface StatusForm {
  status: "success" | "failed";
  message: string;
  show: boolean;
}

export interface CheckboxForm {
  label: string;
  value: boolean | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ImageLoaderProps {
  text?: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}
