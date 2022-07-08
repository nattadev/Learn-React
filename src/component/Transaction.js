import Item from "./Item";
import './Transaction.css'
import { v4 as uuidv4 } from 'uuid';

const Transaction = () => {
  const data = [
    {title :"ค่าหมอ" ,amount :"2000"},
    {title :"ค่าน้ำมัน" ,amount :"2000"},
    {title :"ค่าาเช่า" ,amount :"2000"},
    {title :"ค่ายา" ,amount :"2000"},
  ]
  return (
    <ul className="item-list">
        {data.map((element)=>{
            return <Item {...element} key = {uuidv4()}/>
        })}
    </ul>
  );
  }
  export default Transaction