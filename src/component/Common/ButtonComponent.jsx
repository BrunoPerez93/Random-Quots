const ButtonComponent = ({ onClick, title }) => {
  return (
    <button onClick={onClick} className="inline-block rounded bg-c-gray px-6 pb-2 pt-2.5 text-xs font-medium uppercase mx-1 text-c-white">
      {title}
    </button>
  )
}

export default ButtonComponent;
