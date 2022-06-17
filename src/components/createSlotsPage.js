import React, { useState, useEffect } from 'react'
import 'bootstrap/js/dist/carousel'
import { Link } from 'react-router-dom';
import '../assets/styles/newDesign.css';

import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function CreateSlotsPage() {
    const [value, setValue] = useState(null);
    return (
        <>
            <input type='date'/>
            <input type='time'/>
            
        </>
    );
}

// https://mui.com/x/react-date-pickers/date-picker/#BasicDatePicker.js