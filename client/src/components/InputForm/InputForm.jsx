import React from "react";
import { WrapperInputStyle } from "./style";


const InputForm = (props) => {
    const { placeholder = 'Nhập text',icon, ...rests } = props;
    
    const handleOnChangeInput = (e) => {
        props.onChange(e.target.value);
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{fontSize: '15px', marginRight: '5px', paddingBottom: '6px'}}>{icon}</p>
            <WrapperInputStyle 
                placeholder={placeholder} 
                value={props.value} 
                {...rests} 
                onChange={handleOnChangeInput} 
            />
        </div>
    );
}

export default InputForm;
