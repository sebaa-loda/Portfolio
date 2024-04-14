import { useNavigate } from 'react-router-dom';


export const Layout = () => {

  const navigate = useNavigate()

  setTimeout(() => {
    navigate('/home')
  }, 5000);


  return (
    <h1>Hola, estan por ver mi portfolio</h1>
  )
}
