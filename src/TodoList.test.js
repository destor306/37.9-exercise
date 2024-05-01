import React from 'react';
import {render, fireEvent} from "@testing-library/react"
import TodoList from './TodoList';


it('renders without crashing', ()=>{
    render(<TodoList />)
})

it('matches snapshot', ()=>{
    const {asFragment} = render(<TodoList />)
    expect(asFragment()).toMatchSnapshot();
})

it('should add new Todo', ()=>{
    const{queryByText, getByLabelText, getByText } = render(<TodoList />)
    const taskInput = getByLabelText('Task')
    const btn = queryByText('Add Task');
    // Fill out form inputs
    fireEvent.change(taskInput, { target: { value: 'Walk Ace' } });

    // Submit form
    fireEvent.click(btn);

    const removeBtn = queryByText("Remove");
    expect(removeBtn).toBeInTheDocument();
    expect(queryByText('Walk Ace')).toBeInTheDocument();
})

it('should delete a Todo', ()=>{
    const{queryByText, getByLabelText } = render(<TodoList />)

    const taskInput = getByLabelText('Task')
    const btn = queryByText('Add Task');
    // Fill out form inputs
    fireEvent.change(taskInput, { target: { value: 'Walk Ace' } });

    // Submit form
    fireEvent.click(btn);

    const removeBtn = queryByText("Remove");
    expect(removeBtn).toBeInTheDocument();
    fireEvent.click(removeBtn);
    expect(removeBtn).not.toBeInTheDocument();
})