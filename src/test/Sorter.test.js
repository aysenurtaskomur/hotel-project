import React from 'react';
import {render, screen} from '@testing-library/react';
import Sorter from '../components/Sorter'

describe('Sorter component', ()=>{

    test('check sorter title', async()=>{
        render(<Sorter/>)
        await expect(screen.getByText(/Sıralama/i)).toBeInTheDocument();
    })
    test('check sorter button in dropdown', async() => {
        render(<Sorter />)
        await expect(screen.getByRole('button', { name: /sorter-button/i })).toBeInTheDocument();
      })
      test('check sorted img', async()=> {
        render(<Sorter />)
        await expect(screen.getByTestId('sort-icon')).toBeInTheDocument();
      })
})