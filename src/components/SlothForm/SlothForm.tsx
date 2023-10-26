import SlothFormStyled from "./SlothFormStyled";

const SlothForm = (): React.ReactElement => {
  return (
    <SlothFormStyled className="form" autoComplete="off">
      <div className="form__group">
        <label htmlFor="name" className="form__label">
          Nombre:
        </label>
        <input type="text" className="form__control" id="name" />
      </div>
      <div className="form__group">
        <label htmlFor="picture" className="form__label">
          Imagen:
        </label>
        <input type="text" className="form__control" id="picture" />
      </div>
      <div className="form__group">
        <label htmlFor="fingers" className="form__label">
          Numero de dedos:
        </label>
        <input type="number" className="form__control" id="fingers" />
      </div>
    </SlothFormStyled>
  );
};

export default SlothForm;
