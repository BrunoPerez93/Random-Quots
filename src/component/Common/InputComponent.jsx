const InputComponent = ({type, name, placeholder, value, onChange}) => {
  return (
    <input 
     type={type}
     name={name}
     placeholder={placeholder}
     value={value}
     onChange={onChange}
     className="p-2 rounded-[15px] border-2 border-c-blue bg-transparent"
    />
  )
}

export default InputComponent;