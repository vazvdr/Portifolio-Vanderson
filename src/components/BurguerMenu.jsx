import { Tooltip } from '@mui/material';
import './BurguerMenu.css';
const BurguerMenu = (props) => {
  return (
    <Tooltip title="Menu">
      <button
        className={
          'plate cursor-pointer text-secondary-01 select-none ' +
          props.className
        }
        onClick={props.onClick}
      >
        <svg className="burger" version="1.1" viewBox="0 0 100 100">
          <path className="line line1" d="M 50,35 H 30" />
          <path className="line line2" d="M 50,35 H 70" />
          <path className="line line3" d="M 50,50 H 30" />
          <path className="line line4" d="M 50,50 H 70" />
          <path className="line line5" d="M 50,65 H 30" />
          <path className="line line6" d="M 50,65 H 70" />
        </svg>
        <svg className="x" version="1.1" viewBox="0 0 100 100">
          <path className="line" d="M 34,32 L 66,68" />
          <path className="line" d="M 66,32 L 34,68" />
        </svg>
      </button>
    </Tooltip>
  );
};

export default BurguerMenu;
