const Button = ({ onClick, disabled, children }) => {
  console.log(disabled)
  return (
    <div
      className={`cursor-pointer w-full text-2xl font-medium leading-[29px] text-center py-4 ${
        disabled ? 'bg-dark-purple text-gray ' : 'bg-white text-black'
      }`}
      onClick={() => {
        !disabled && onClick()
      }}
    >
      {children}
    </div>
  )
}

export default Button
