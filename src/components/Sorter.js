import React from 'react';
import { Button, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import SortIcon from '../assets/icons/sort.svg'
import '../styles/sorter.scss'


const Sorter = ({sortMode,setSortMode}) => {
    
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

    const dropdownText = () => {
        if(sortMode){
            return sortMode === 'asc' ? 'Artan' :'Azalan'
        }else{
            return 'Sıralama'
        }
    }

    return(
        <Dropdown 
        menu={menuProps}
        className="dropdown-content"
        trigger={['click']}
        >
        <Button
        aria-label="sorter-button"
        style={{border: 'none'}}>
            <div className="dropdown-btn">
                <img data-testid="sort-icon" alt="sort-icon" src={SortIcon} style={{width:'15px',height:'15px'}}/>
                <Space>
                {dropdownText()}
                <DownOutlined className="down-outlined" style={{width:'10px',height:'10px'}}/>
                </Space>
            </div>
            
        </Button>
        </Dropdown>
    )
}

export default Sorter