import Transaction from './component/Transaction';
import FormComponent from './component/FormComponent';
import './App.css'
import { useState,useEffect} from 'react'
import DataContext from './data/DataContext';
import ReportComponent from './component/ReportComponent';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"


function App() {
  const desige = {color : "red",textAlign:"center",fontSize:'1.5rem'}



  const [items, setItems] = useState([]);
  const [reportIncome,setreportIncome] = useState(0);
  const [reportExpense,setreportExpense] = useState(0);


  const onAddNewItem = (newItem) => {

   setItems((prevItem)=>{
    return [newItem,...prevItem]
   })
  }
  useEffect(() => {
     const amounts = items.map(items=>items.amount)
     const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
     const expense = (amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1
     setreportIncome(income)
     setreportExpense(expense)


  }, [items,reportIncome,reportExpense]);

  return (
 <DataContext.Provider value={
  {
    income : reportIncome,
    expense:reportExpense
  }
 }>
  <div className= "container">
<h1 style={desige}>โปรแกรมบัญชีรายรับ-รายจ่าย</h1>
<Router>
<div>
  <ul className='horizontal-menu'>
    <li>
      <Link to="/">ข้อมูลบัญชี</Link>
    </li>
    <li>
    <Link to="/insert">บันทึกข้อมูล</Link>
    </li>
  </ul>
   <Switch>
    <Route path="/" exact>
      <ReportComponent/>
    </Route>
    <Route path="/insert">
  <FormComponent onAddItem={onAddNewItem}/>
  <Transaction items = {items}/>
    </Route>
   </Switch>
</div>
</Router>
</div>

 </DataContext.Provider>

  );

}

export default App;
