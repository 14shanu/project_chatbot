import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function RadioButtons (props) {
  const { label, name, options, ...rest } = props
  return (
    <div>
      <label className="block   tracking-wide text-gray-700   text-sm lg:text-base  font-medium mb-0" >{label}</label>
      <Field name={name} >
        {({ field }) => {
          return options.map(option => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type='radio'
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label className= "mr-4 text-sm ml-1" htmlFor={option.value}>{option.key}</label>
                
              </React.Fragment>
            )
          })
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default RadioButtons