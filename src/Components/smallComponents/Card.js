import React from "react";
import { Card} from "react-bootstrap";
const MyCard= (props) => {
  return (

<Card style={{ width: '30rem',marginTop:'20px',color:'#0a0a23' }}>
  <Card.Body>
    <Card.Title>The Image Contains..</Card.Title>
   {props.userData ? props.userData.map((x,i)=>{
       return (
        <Card.Text key={i}>
            <b>{x.class}</b> with the likelihood of <b>{Math.round((x.score)*100)} %</b> 
        </Card.Text>
       )
   }):null}
    
  </Card.Body>
</Card>
  )
}
export default MyCard;