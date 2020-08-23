import React, { useState } from "react"


const CovidPositiveModal = (props) => {
    return (
        <div className="modal" role="dialog" id="positiveCovidModal">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">COVID TEST POSITIVE SHARED TRIP ALERT</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>You have shared trip with someone who has had a positive COVID test.</p>
                        <p>Please arrange for a COVID test and isolate yourself until you have the results.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CovidPositiveModal;