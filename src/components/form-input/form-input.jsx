import React from 'react';
import './form-input.scss';

const FormInput = ({ label, ...otherProps }) => {
  return(
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  )
}

// const FormInput = ({ handleChange, label, ...otherProps }) => (
//   <div className='group'>
//     <input className='form-input' onChange={handleChange} {...otherProps} />
//     {label ? (
//       <label
//         className={`${
//           otherProps.value.length ? 'shrink' : ''
//         } form-input-label`}
//       >
//         {label}
//       </label>
//     ) : null}
//   </div>
// )

export default FormInput;