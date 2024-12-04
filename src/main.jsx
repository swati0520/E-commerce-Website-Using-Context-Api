import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CartState from './context/CartState.jsx'
import UserContext from './context/UserContext.jsx'
import UserState from './context/userState.jsx'

createRoot(document.getElementById('root')).render(

   <UserState>

<CartState>
<App />
</CartState>

</UserState>

   

)
