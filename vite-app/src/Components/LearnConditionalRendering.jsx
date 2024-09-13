import { useState } from "react"

export const LearnConditionalRendering = () => {
  const status = false
  const [isLogin, setIsLogin] = useState(true)
  return (
    <>
      {status && <h1>GeekyShows</h1>}
      {isLogin ?          //Ternary Operator
      ( <> 
      <h1>Dashboard Page</h1> 
      <button onClick={()=>setIsLogin(false)}>Logout</button>
      </>) :
       (<>
       <h1>Login Page</h1>
       <button onClick={()=>setIsLogin(true)}>Login</button>
      </>)}
    </>
  )
}
