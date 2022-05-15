import { useContext } from "react"
import MyContext from "../context/MyContext"
import Form from "./Form"

const Header = () => {
  const {data, handleNext} = useContext(MyContext)
  return (
    <header>
      <Form />
      {data.next !== undefined && (
      <button 
      className="next-button" 
      onClick={handleNext}
      >Next Page</button>)}
    </header>
  )
}

export default Header