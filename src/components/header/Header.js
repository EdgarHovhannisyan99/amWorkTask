import React from 'react';
import './header.scss'

function Header({count}) {
    return (
        <div className='header'>
            <div className="header_content">
                <h3 className='header_title'>Today</h3>
                <div className='add_task'>
                    <div className='add_button_div'>+</div>
                    <div className='task_count'>{count}</div>
                </div>
            </div>
        </div>
    );
}

export default Header;