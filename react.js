// App.js
import React, { useState } from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';

function App() {
    const [data, setData] = useState([]);
    const [accuracy, setAccuracy] = useState(0);

    const handleFileUpload = async(event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);

        // Send file to backend for data extraction
        const response = await axios.post('http://localhost:5000/extract', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        setData(response.data.data);
        setAccuracy(response.data.accuracy);
    };

    const handleFraudCheck = async() => {
        const response = await axios.post('http://localhost:5000/detect-fraud', {
            data,
        });
        setData(response.data);
    };

    const exportCSV = async() => {
        const response = await axios.post('http://localhost:5000/export', { data });
        window.location.href = response.data; // This will download the CSV file
    };

    return ( <
        div >
        <
        h1 > Bank Statement Data Extraction < /h1> <
        input type = "file"
        onChange = { handleFileUpload }
        /> <
        p > Extraction Accuracy: { accuracy } % < /p>

        <
        MaterialTable title = "Extracted Bank Data"
        columns = {
            [
                { title: 'Date', field: 'Date' },
                { title: 'Description', field: 'Description' },
                { title: 'Amount', field: 'Amount' },
                { title: 'Fraud', field: 'Fraud' },
            ]
        }
        data = { data }
        editable = {
            {
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        const updatedData = [...data];
                        const index = oldData.tableData.id;
                        updatedData[index] = newData;
                        setData(updatedData);
                        resolve();
                    }),
            }
        }
        />

        <
        button onClick = { handleFraudCheck } > Check
        for Fraudulent Transactions < /button> <
        button onClick = { exportCSV } > Export to CSV < /button> <
        /div>
    );
}

export default App;