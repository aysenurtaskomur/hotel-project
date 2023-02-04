import React,{ useState } from 'react';
import { Card, Input, Button } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import '../../styles/hotelAdd.scss'

const HotelAdd = () => {
    const [hotelName, setHotelName] = useState("")
    const [isComplete, setIsComplete] = useState(false)

    const handleAddClick = () => {
        if(hotelName.length>0){

            let hotelInfo = {
                id: uuidv4(),
                hotelName: hotelName,
                score: 0,
                createdDate: new Date()
            }
            let hotels = JSON.parse(localStorage.getItem('hotelList'));  

            hotels.push(hotelInfo)

            localStorage.setItem('hotelList', JSON.stringify(hotels));
            setIsComplete(true)
        }
    }

    return(
        <div className="container">
            <Card
            title="Otel Ekle"
            headStyle={{display:'flex',justifyContent:'center',alignItems:'flex-start',width:'100%',fontSize:'18px'}}
            className="add-container"
            >
                <div><Input  onChange={(e)=>setHotelName(e.target.value)} className="add-input"/></div>
                
                <div className="add-btn-container">
                {
                    isComplete ? (
                        <Button
                        size={"large"}
                        className="add-complete-btn"
                        >
                            <CheckOutlined />
                            EKLENDİ
                        </Button>           
                    ) : (
                        <Button 
                        type="primary" 
                        size={"large"} 
                        className="add-btn"
                        onClick={handleAddClick}
                        >
                            EKLE
                        </Button>
                    )
                }
                </div>  
            </Card>
        </div>
    )
}

export default HotelAdd;