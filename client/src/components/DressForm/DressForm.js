import React from "react";
import "./DressForm.scss";
import errorIcon from "../../assets/icons/error-24px.svg";

const DressForm = (props) => {

return (
    <>
    <div className="centered">
        <form className="dress-form" onSubmit={(e) => props.handleSubmit(e, props.dress)}>
            <input className="dress-form-input" type="text" name="dressname"
            value={props.dress.dressname} placeholder="Dress Name" onChange={props.handleInputChange}/>
            {props.errors.dressname && (
            <div className="dress-form__error">
              <img src={errorIcon} className="dress-form__error-icon" />
              <p>{props.errors.dressname}</p>
              </div>
          )}
            <input className="dress-form-input" type="text" name="designer" value={props.dress.designer} placeholder="Designer" onChange={props.handleInputChange} />
            <input className="dress-form-input"  type="text" placeholder="Category" onChange={props.handleInputChange} />
            {props.errors.designer && (
            <div className="dress-form__error">
              <img src={errorIcon} className="dress-form__error-icon" />
              <p>{props.errors.designer}</p>
              </div>
          )}
            <select value={props.dress.category} onChange={props.handleInputChange}>
            <option value="A-line">A-line</option>
            <option value="Ballgown">Ballgown</option>
            <option value="Short">Short</option>
            <option value="Mermaid">Mermaid</option>
          </select>
            <input  className="dress-form-input" type="file" value={props.dress.image} placeholder="Choose Dress Image" onChange={props.handleInputChange} />
            <input className="dress-form-input" type="text" name="description" value={props.dress.description} placeholder="Description" onChange={props.handleInputChange} />
            {props.errors.description && (
            <div className="dress-form__error">
              <img src={errorIcon} className="dress-form__error-icon" />
              <p>{props.errors.description}</p>
              </div>
          )}
            <input className="dress-form-input" type="text" name="price" value={props.dress.buyprice} placeholder="Price" onChange={props.handleInputChange} />
            {props.errors.buyprice && (
            <div className="dress-form__error">
              <img src={errorIcon} className="dress-form__error-icon" />
              <p>{props.errors.buyprice}</p>
              </div>
          )}
            <input className="dress-form-button" type="submit" name="button" />
        </form>
    </div>
    </>
);
};
export default DressForm;
