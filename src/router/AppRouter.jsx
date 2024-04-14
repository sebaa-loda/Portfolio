import {Routes, Route} from 'react-router-dom'
import { Layout,Home } from '../pages'

export const AppRouter = () => {
  return (
    
    <Routes>
      <Route path='/' element={<Layout/>} />
      <Route path='/home' element={<Home/>} />
    </Routes>
  )
}
