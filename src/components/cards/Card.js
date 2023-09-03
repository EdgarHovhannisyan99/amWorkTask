import React from 'react';
import Checkbox from "@mui/material/Checkbox";
import './card.scss'
function Card(props) {
    return (
        <div>
            <div className="card_title_div">
                <div className='done_checkbox'>
                    <Checkbox  defaultChecked />
                </div>
               <h2 className='card_title'> For the sacke of example we are a building company and we have just closed and we have just close and we have just close</h2>
            </div>
        </div>
    );
}

export default Card;