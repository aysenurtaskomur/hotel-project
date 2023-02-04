import React, { useEffect, useState } from 'react';
import HotelCard from '../../components/HotelCard';
import { Button, Pagination } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Sorter from '../../components/Sorter';
import { useHistory } from 'react-router-dom';
import '../../styles/hotelList.scss'

const HotelList = () => {
    const [hotelList, setHotelList] = useState([]);
    const [sortMode, setSortMode] = useState()
    const [paginationProps, setPaginationProps] = useState({
        data: [],
        totalPage: 0,
        current: 1,
        minIndex: 0,
        maxIndex: 0
    })
    const [incDecr, setIncDecr] = useState(0)

    const pageSize = 5;
    const history = useHistory();

    useEffect(() => {
        let property = {
            data: hotelList,
            totalPage: hotelList.length / pageSize,
            minIndex: 0,
            maxIndex: pageSize
        }
        setPaginationProps(property)
    }, [hotelList])

    useEffect(() => {
        let hotels = localStorage.getItem('hotelList') !== null ? JSON.parse(localStorage.getItem('hotelList')) : [];
        
        if (hotels.length > 0) {
            hotels.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate))
            setHotelList(hotels)
        } else {
            localStorage.setItem('hotelList', JSON.stringify(hotelList));
        }
    }, [])

    const sortData = () => {
        let hotels = localStorage.getItem('hotelList') !== null ? JSON.parse(localStorage.getItem('hotelList')) : [];
        if (sortMode) {
            if (sortMode === 'asc') {
                hotels.sort((a, b) => a.score - b.score)
            } else if (sortMode === 'desc') {
                hotels.sort((a, b) => b.score - a.score)
            }
        } else {
            hotels.sort((a, b) => b.score - a.score || new Date(b.createdDate) - new Date(a.createdDate))
        }

        localStorage.setItem('hotelList', JSON.stringify(hotels));
        setHotelList(hotels)
    }

    useEffect(() => {
       incDecr !==0 && sortData()
    }, [incDecr])

    useEffect(() => {
        sortMode && sortData()
    }, [sortMode])


    const handleClick = () => {
        history.push('/add')
    }

    const handleChange = (page) => {
        setPaginationProps(oldObj => ({
            ...oldObj,
            current: page,
            minIndex: (page - 1) * pageSize,
            maxIndex: page * pageSize
        }))
    }

    return (
        <>
            <div className="list-container">
                <div className="add-hotel">
                    <Button onClick={handleClick}>
                        <PlusOutlined />
                    </Button>
                    <p>OTEL EKLE</p>
                </div>

                <Sorter sortMode={sortMode} setSortMode={setSortMode} />

                {
                    paginationProps.data.length > 0
                        ? hotelList
                            .map((item, index) => (
                                index >= paginationProps.minIndex &&
                                index < paginationProps.maxIndex &&
                                <HotelCard className="card" key={index} item={item} setHotelList={setHotelList} incDecr={incDecr} setIncDecr={setIncDecr} />
                            ))
                        : <div className="no-data"> Listede henüz otel bulunmuyor. Otel Ekle butonundan ekleyebilirsiniz.</div>

                }
            </div>
            <Pagination
                defaultPageSize={pageSize}
                defaultCurrent={1}
                total={hotelList.length}
                onChange={handleChange}
                className="pagination"
            />
        </>

    )
}

export default HotelList;