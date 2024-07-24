import './App.css';

export default function Buttons(props) {
   
   let { rung } = props;

  return(
   <button className="btn" style={{backgroundColor: rung}} onClick={()=> {
      document.querySelector(".main").style.backgroundColor = rung;
   }}>{rung}</button>
  );
}