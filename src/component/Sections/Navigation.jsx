import { Link } from "react-router-dom";

const Navigation = () => {

  return (
    <nav className="flex m-5 justify-end items-center">

      <Link className="text-c-blue border-2 border-c-blue p-2 rounded-[10px]" to='/'>Logout</Link>

    </nav>
  )
}

export default Navigation;