import React, { useEffect, useState } from "react";
import "./DressForm.scss";
import errorIcon from "../../assets/icons/error-24px.svg";

const DressForm = (props) => {
  useEffect(() => {

  }, [])

  const [imagePath, setImagePath] = useState(props.dress.image)

  return (
    <>
      <div className="centered">
        <form className="dress-form" onSubmit={(e) => props.handleSubmit(e, props.dress)}>
          <input className="dress-form-input" type="text" name="dressname"
            value={props.dress.dressname} placeholder="Dress Name" onChange={props.handleInputChange} />
          {props.errors.dressname && (
            <div className="dress-form__error">
              <img src={errorIcon} alt="error-icon" className="dress-form__error-icon" />
              <p>{props.errors.dressname}</p>
            </div>
          )}
          <input className="dress-form-input" type="text" name="designer" value={props.dress.designer} placeholder="Designer" onChange={props.handleInputChange} />
          {props.errors.designer && (
            <div className="dress-form__error">
              <img src={errorIcon} alt="error-icon" className="dress-form__error-icon" />
              <p>{props.errors.designer}</p>
            </div>
          )}
          <select className="dress-form-input" value={props.dress.category} name="category_id" onChange={props.handleInputChange}>
            <option value={1}>A-line</option>
            <option value={2}>Ballgown</option>
            <option value={3}>Short</option>
            <option value={4}>Mermaid</option>
          </select>

          <input className="dress-form-input" type="text" name="size"
            value={props.dress.size} placeholder="Size" onChange={props.handleInputChange} />
          {props.errors.size && (
            <div className="dress-form__error">
              <img src={errorIcon} alt="error-icon" className="dress-form__error-icon" />
              <p>{props.errors.size}</p>
            </div>
          )}
          <input className="dress-form-input" type="text" name="condition"
            value={props.dress.condition} placeholder="Condition" onChange={props.handleInputChange} />
          {props.errors.condition && (
            <div className="dress-form__error">
              <img src={errorIcon} alt="error-icon" className="dress-form__error-icon" />
              <p>{props.errors.condition}</p>
            </div>
          )}
          {!props.dress.image && <input className="dress-form-input" type="file" name="image" value={props.dress.image} placeholder="Choose Dress Image" onChange={props.handleInputChange} />}
          <input className="dress-form-input" type="text" name="description" value={props.dress.description} placeholder="Description" onChange={props.handleInputChange} />
          {props.errors.description && (
            <div className="dress-form__error">
              <img src={errorIcon} alt="error-icon" className="dress-form__error-icon" />
              <p>{props.errors.description}</p>
            </div>
          )}
          <input className="dress-form-input" type="text" name="originalprice"
            value={props.dress.originalprice} placeholder="Original Price" onChange={props.handleInputChange} />
          {props.errors.originalprice && (
            <div className="dress-form__error">
              <img src={errorIcon} alt="error-icon" className="dress-form__error-icon" />
              <p>{props.errors.originalprice}</p>
            </div>
          )}
          <input className="dress-form-input" type="text" name="buyprice" value={props.dress.buyprice} placeholder="Sale Price" onChange={props.handleInputChange} />
          {props.errors.buyprice && (
            <div className="dress-form__error">
              <img src={errorIcon} alt="error-icon" className="dress-form__error-icon" />
              <p>{props.errors.buyprice}</p>
            </div>
          )}
          <input className="dress-form-input" type="text" name="rentprice"
            value={props.dress.rentprice} placeholder="Rent Price" onChange={props.handleInputChange} />
          {props.errors.rentprice && (
            <div className="dress-form__error">
              <img src={errorIcon} alt="error-icon" className="dress-form__error-icon" />
              <p>{props.errors.rentprice}</p>
            </div>
          )}
          <input className="dress-form-button" type="Submit" name="button" />
        </form>
      </div>
    </>
  );
};
export default DressForm;
