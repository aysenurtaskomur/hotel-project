import React,{ useState } from 'react';
import { Card, Button } from 'antd';
import {CloseCircleFilled} from '@ant-design/icons'
import DefaultIcon from '../assets/icons/hotel-hostel.svg'
import CustomModal from './CustomModal';
import '../styles/hotelCard.scss';

const HotelCard = ({item,setHotelList,setIncDecr}) => {
    const [openVisible, setOpenVisible] = useState(false)

    const editItem = (param) => {
        let hotels = JSON.parse(localStorage.getItem('hotelList'));  
        const index = hotels.findIndex(object => {
            return object.id === item?.id;
          });
        if(param === "increase"){
            if(hotels[index].score !== 10) hotels[index].score += 1;
            setIncDecr(incDecr=>incDecr+1)
        }else if(param === "decrease"){
            if(hotels[index].score !== 0) hotels[index].score-= 1;
            setIncDecr(incDecr=>incDecr+1)
        }
        else if(param === "delete"){
            hotels.splice(index,1);
            setOpenVisible(false)
        }
        localStorage.setItem('hotelList', JSON.stringify(hotels));
        setHotelList(hotels)
    }

    const handleOk = () => {
       editItem("delete")
    }

    const handleCancel = () => {
        setOpenVisible(false)
    }
    return(
        <>
        <Card
        className="card-container"
        style={{ width: 300, marginTop: 16, boxShadow: '0px 4px 7px 0px #64646f33' }}
        >
            <div style={{display:'flex',flexDirection:'row'}}>
                <div style={{width:'30%'}}><img data-testid="default-img" alt="default-img" src={DefaultIcon} style={{width:'100%', height:'100%'}} /> </div>
                <div style={{width:'70%',display:'flex',flexDirection:'column',justifyContent:'space-between'}} >
                    <div>
                        <div style={{fontWeight: '600',fontSize:'17px'}}>{item?.hotelName}</div>
                       <div style={{color:'#4ECAB9', fontWeight: '700'}}>{item?.score +  ' Puan'}</div> 
                    </div>
                       
                    
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}> 
                        <Button data-testid="score-inc" onClick={()=> editItem("increase")}>PUAN ARTTIR</Button>
                        <Button data-testid="score-decr" onClick={()=>editItem("decrease")}>PUAN AZALT</Button>
                    </div>
                   
                    <Button 
                    data-testid="delete-icon"
                    className="cross-icon"
                    onClick={()=>setOpenVisible(true)}
                    >
                        <CloseCircleFilled style={{color:'#DC143C',fontSize:25,borderRadius:'50%'}}/> 
                    </Button>
                </div>
            </div>
        </Card>
        <CustomModal
        title="OTELİ SİL"
        open={openVisible}
        onCancel={()=>setOpenVisible(false)}
        footer={[
                <Button key="back" type="primary"
                aria-label="delete"
                onClick={handleOk}
                >
                    OTELİ SİL
                </Button>,
                <Button key="submit" type="primary" 
                 onClick={handleCancel}
                >
                    VAZGEÇ
                </Button>,
            
        ]}
        >
            <div className="modal-content"> <p>{item?.hotelName}</p> 'i silmek istediğinize emin misiniz?</div>
        </CustomModal>
         </>
    )
}

export default HotelCard;