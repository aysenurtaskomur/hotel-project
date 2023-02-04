import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import HotelCard from '../components/HotelCard';

describe('HotelCard component', ()=> {
    test('hotel img check', async()=>{
        render(<HotelCard />)
        await expect(screen.getByTestId('default-img')).toBeInTheDocument();
        
    })
    test('delete button open modal test ', async()=>{
        render(<HotelCard />)
        const deleteButton = screen.getByTestId('delete-icon');
        fireEvent.click(deleteButton)
        await expect(screen.getByText(/emin misiniz/i)).toBeInTheDocument();
    })
})