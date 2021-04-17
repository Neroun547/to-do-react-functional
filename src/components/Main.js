import React, { useState } from 'react';
import { useInput } from '../hooks/useInput';
import './Style-main/style.css';
export const  Main = () => {
    const [valueInput, methodInput, resetInput] = useInput('');
    let [list, setList] = useState({
        text: []
    });

    const handleForm = (e) => {
        e.preventDefault();
        if (!valueInput) {
            alert('No...');
            return;
        }
        let obj = {
            check: false,
            id: list.text.length,
            text: valueInput
        }
        setList((prev) => list = {
            text: [...prev.text, obj]
        });
        console.log(list);
        resetInput();
    }

    const checkItem = (id) => {
        list.text.map((el) => {
            if (el.id === id) {
                el.check = !el.check;
                console.log(el);
                return el;
            }
            return el;
        })
        setList(list={text:[...list.text]});
    }

    const deleteItem = (id) => {
        console.log(true);
        setList(() => list = {
            text: list.text.filter((el) => {
                return el.id !== id;
            })
        });
        console.log(list);
    }
    return (
        <div className='wrapper'>
             <h2>To do app</h2>
            <form onSubmit={handleForm} className="form-main">
                <input
                    {...methodInput}
                    placeholder='Item ...'
                />
                <button type='submit'>Submit</button>
            </form>
            <div className="wrapper-list">
                <div className="check-item" >
                    <h2>Check item</h2>
                    <ul>
                        {
                        list.text.map((el) => {
                            if (el.check) {
                                return <div className="item-check" key={el.id}>
                                    <li onClick={() => checkItem(el.id)}>
                                        {el.text}
                                    </li>
                                    <span onClick={() => deleteItem(el.id)}>X</span>
                                </div>
                                }
                            })
                        }
                    </ul>
                </div>
                <div className="nocheck-item">
                <h2>Check item</h2>
                <ul>
                    {
                        list.text.map((el) => {
                            if (!el.check) {
                                return <div className="item-todo" key={el.id}>
                                    <li onClick={() => checkItem(el.id)}>
                                        {el.text}
                                    </li>
                                    <span onClick={() => deleteItem(el.id)}>X</span>
                                    </div>
                            }
                        })
                    }
                </ul>
                </div>
            </div>
        </div>  
    );
}
