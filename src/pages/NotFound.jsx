import { Link, useNavigate } from "react-router"

function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
    <h1>404</h1>
    <p>Page Not Found</p>
      <Link onClick={navigate("/")} >Go Back Home</Link>
    </div>
  )
}

export default NotFound