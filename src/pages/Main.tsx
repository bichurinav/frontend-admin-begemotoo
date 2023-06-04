import Form from "../components/Form/Form";

const Main = () => {
  return (
    <>
      <Form type="text" title="Придумайте описание для картинок" />
      <Form type="image" title="Загрузите картинку или картинки" />
    </>
  );
};

export default Main;
