import React from 'react';
import {render, fireEvent} from "@testing-library/react"
import BoxList from './BoxList';


it('renders without crashing', ()=>{
    render(<BoxList />)
})

it('matches snapshot', ()=>{
    const {asFragment} = render(<BoxList />)
    expect(asFragment()).toMatchSnapshot();
})

it('should add new Box', ()=>{
    const{queryByText, getByLabelText, getByText } = render(<BoxList />)
    const widthInput = getByLabelText('width')
    const heightInput = getByLabelText('height')
    const colorInput = getByLabelText('color')
    const btn = queryByText('Add a box!');
    // Fill out form inputs
    fireEvent.change(widthInput, { target: { value: '5' } });
    fireEvent.change(heightInput, { target: { value: '5' } });
    fireEvent.change(colorInput, { target: { value: 'blue' } });

    // Submit form
    fireEvent.click(btn);

    const removeBtn = queryByText("Remove");
    expect(removeBtn).toBeInTheDocument();
    expect(removeBtn.previousSibling).toHaveStyle(`
        width: 5em;
        height: 5em;
        background-color: blue
    `)
})

it('should delete a Box', ()=>{
    const{queryByText, getByLabelText, getByText } = render(<BoxList />)
    const widthInput = getByLabelText('width')
    const heightInput = getByLabelText('height')
    const colorInput = getByLabelText('color')
    const btn = queryByText('Add a box!');
    // Fill out form inputs
    fireEvent.change(widthInput, { target: { value: '5' } });
    fireEvent.change(heightInput, { target: { value: '5' } });
    fireEvent.change(colorInput, { target: { value: 'blue' } });

    // Submit form
    fireEvent.click(btn);

    const removeBtn = queryByText("Remove");
    fireEvent.click(removeBtn);
    
    expect(removeBtn).not.toBeInTheDocument();
})