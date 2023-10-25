import { useRouteError } from "react-router-dom"

const Error =()=>{
    const error= useRouteError()
    console.log(useRouteError)
    return(
      <div>
      <h1>{error.status}: {error.statusText}</h1>
      </div>
    )
}

export default Error;