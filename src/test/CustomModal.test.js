import React from 'react';
import {render, screen} from '@testing-library/react';
import CustomModal from '../components/CustomModal'
import { Button } from 'antd';

describe('CustomModal component', ()=> {
    test('check content', async()=>{
        render(<CustomModal open={true}>Silmek istediginize emin misiniz?</CustomModal>)
        await expect(screen.getByText(/Silmek istediginize emin misiniz?/i)).toBeInTheDocument();
        
    })
    test('check vazgeç button',async()=>{
        render(<CustomModal
                open={true}
                footer={[
                    <Button key="back" aria-label="hotel-delete">OTELİ SİL</Button>,
                    <Button key="submit" aria-label="delete-giveup">VAZGEÇ</Button>,
                ]}
                />)
        
        await expect(screen.getByRole('button', {name: /hotel-delete/i})).toBeInTheDocument()
        await expect(screen.getByRole('button', {name: /delete-giveup/i})).toBeInTheDocument()
    })
   
})