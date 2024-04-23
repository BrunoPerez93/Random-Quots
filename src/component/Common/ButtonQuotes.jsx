const ButtonQuotes = ({ onClick, title }) => {
  return (
    <button onClick={onClick} 
    className="text-c-blue px-3 py-1 border border-c-blue mx-2 rounded-full hover:bg-c-white xs:my-2">
      {title}
    </button>
  )
}

export default ButtonQuotes;
