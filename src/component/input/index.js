import { useState, useEffect, useMemo } from 'react'
import ErrorIcon from '../../assets/error.svg'
import { validEmail } from '../../utils/validation'

const Input = ({
  placeholder = 'Placeholder',
  value,
  onChange,
  type,
  title,
  handleValidation,
}) => {
  const [valid, setValid] = useState(false)

  const error = useMemo(() => {
    let errMsg = ''
    if (value.length > 0) {
      if (type === 'text') {
        const len = value.length
        len < 4 || len > 12
          ? (errMsg = 'The username must consist of 4 to 12 characters.')
          : setValid(true)
      } else if (type === 'email') {
        validEmail(value) ? (errMsg = 'Invalid email') : setValid(true)
      } else if (type === 'password') {
        const len = value.length
        len < 8 || len > 16
          ? (errMsg = 'The password must consist of 8 to 16 characters')
          : setValid(true)
      }
    }
    return errMsg
  }, [value, type])

  useEffect(() => {
    if (valid) {
      handleValidation(title.replace(/\s/g, '').toLowerCase())
    }
  }, [valid])

  return (
    <div>
      <div className="text-sm leading-4 text-white mb-2" key={type}>
        {title}
      </div>
      <div className="relative">
        <input
          className="w-full h-10 bg-white text-black text-sm leading-4 placeholder-light-gray px-4 py-3 focus-visible:outline-none"
          placeholder={placeholder}
          type={type === 'password' ? 'password' : 'text'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {!!error && (
          <div className="absolute top-1/2 right-3 transform -translate-y-1/2 ">
            <img src={ErrorIcon} />
          </div>
        )}
      </div>
      {!!error && <div className="absolute mt-2 text-sm text-red">{error}</div>}
    </div>
  )
}

export default Input
