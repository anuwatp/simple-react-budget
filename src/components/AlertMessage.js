import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as r from 'react-bootstrap';
import { FiRefreshCcw } from 'react-icons/fi';

export const AlertMessage = () => {
    const [show, setShow] = useState(true);

    return (
        <>
            <r.Alert show={show} variant="success">
                <r.Alert.Heading>Hi! In case you didn't know</r.Alert.Heading>
                <p><strong></strong></p>
                <p> All data will be deleted after refreshing or leaving the website.</p>
                <p>After a transaction click <FiRefreshCcw /> to update the chart.</p>
                <div className="d-flex justify-content-end">
                    <r.Button onClick={() => setShow(false)} variant="outline-success">
                        Hide
                </r.Button>
                </div>
            </r.Alert>

            { !show && <r.Button className="btn-info" onClick={() => setShow(true)}>Show</r.Button>}
        </>
    );
}