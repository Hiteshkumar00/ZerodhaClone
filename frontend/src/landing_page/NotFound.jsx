import {Link} from "react-router-dom";

function NotFound() {
  let style = {color: "red"};
  return (  
    <div style={style} className="row text-center mb-5 p-5">
      <h1 className="mb-3">404 Not Found!</h1>
      <p className="mb-5">Sorry, the page you are looking for does not exist.</p>
      <Link className="mb-5" to="/">
        <button style={{width: "auto", margin: "auto"}} className="btn btn-sm btn-outline-primary">Go Home ?</button>
      </Link>
    </div>
  );
}

export default NotFound;