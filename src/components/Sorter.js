import React,{ useState } from 'react';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import SortIcon from '../assets/icons/sort.svg'
import '../styles/sorter.scss'


const Sorter = ({setSortMode}) => {
    
    const items = [
        {
          label: 'Puan (Artan)',
          key: 'asc',
        },
        {
          label: 'Puan (Azalan)',
          key: 'desc',
        },
    ]
    
    const handleMenuClick = (e) => {
        setSortMode(e.key)
    };

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };
    return(
        <Dropdown 
        menu={menuProps}
        className="dropdown-content"
        trigger={['click']}
        // onOpenChange={(e)=>console.log(e)}
        >
        <Button
        style={{border: 'none'}}>
            <div className="dropdown-btn">
                <img src={SortIcon} style={{width:'15px',height:'15px'}}/>
                <Space>
                Sıralama
                <DownOutlined className="down-outlined" style={{width:'10px',height:'10px'}}/>
                </Space>
            </div>
            
        </Button>
        </Dropdown>
    )
}

export default Sorter