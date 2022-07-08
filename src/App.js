import Transaction from './component/Transaction';
import './App.css'

function App() {
  const desige = {color : "red",textAlign:"center",fontSize:'1.5rem'}
  return (
<div className= "container">
<h1 style={desige}>โปรแกรมบัญชีรายรับ-รายจ่าย</h1>
  <Transaction/>

</div>
  );

}

export default App;
