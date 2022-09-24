import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import './fileClaim.css';
const FileClaim = () => {
    const history = useNavigate()
    const location = useLocation()
    const { pathname } = location
    const handleEvent = () => {
        history('/IncidentInfo')
    }
    return (<div className="w-75 mx-auto py-4">
        <div className="row g-0 py-4 align-items-center border-bottom">
            <div className="col">
                <h5 className="m-0 p-0">Claim Pre-Qualification</h5>
            </div>
            <div className="col-auto">
                <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-text-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                </svg> Claims History & Status</a>
            </div>
        </div>
        <div className="py-4 border-bottom">
            <p>To get started with the claim process, please answer the following questions.</p>
            <span className="d-block fw-bold mb-3">Do you still have possession of the device?</span>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="possession_device" id="possession_device_y"
                    checked="checked" />
                <label className="form-check-label" for="possession_device_y">
                    Yes, I have the device
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="possession_device" id="possession_device_n" />
                <label className="form-check-label" for="possession_device_n">
                    No, I do not have the device
                </label>
            </div>
        </div>
        <div className="py-4 border-bottom">
            <span className="d-block fw-bold mb-3">Is your device damaged in some way?</span>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="damaged_device" id="damaged_device_y" checked="checked" />
                <label className="form-check-label" for="damaged_device_y">
                    Yes, I have the device
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="damaged_device" id="damaged_device_n" />
                <label className="form-check-label" for="damaged_device_n">
                    No, I do not have the device
                </label>
            </div>
        </div>
        <div className="py-4">
            <span className="d-block fw-bold mb-3">Comfirm the device category, Brand and Model or select this information
                below.</span>
            <div className="mb-3 w-50">
                <label className="form-label">Device Type</label>
                <select className="form-select" name="device_type">
                    <option>Select</option>
                </select>
            </div>
            <div className="mb-3 w-50">
                <label className="form-label">Brand</label>
                <input type="text" className="form-control" />
            </div>
            <div className="mb-3 w-50">
                <label className="form-label">Model</label>
                <input type="text" className="form-control" />
            </div>
            <div className="mb-3 w-50">
                <label className="form-label">Device Nickname</label>
                <input type="text" className="form-control" />
            </div>
            <div className="mb-3 w-50">
                <label className="form-label">Serial Number (Optional)</label>
                <input type="text" className="form-control" />
            </div>
            <div className="mb-3 w-50">
                <label className="form-label">Purchase Price, $</label>
                <input type="text" className="form-control" />
            </div>
            <div className="mb-3 w-50">
                <label className="form-label">Purchase Date</label>
                <input type="text" className="form-control" />
            </div>
            <div className="text-center">
                <p className="text-start py-3">Upon completion you'll be taken to our Assurant claims site.</p>
                <button type="button" className="btn btn-primary py-2" onClick={handleEvent}>Start A Claim</button>
        </div>
        </div>
    </div >)
}

export default FileClaim