import { Link } from 'react-router-dom';

const Button = ({ btntext, link }) => {
  return (
    <div className="btn-wrapper"> 
      <Link to={link || "#"}>
        <button className="btn btn-primary">
            {btntext}
        </button>
      </Link>
    </div>
  )
}

export default Button;