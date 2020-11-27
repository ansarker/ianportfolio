import React, { Component } from 'react'
import Sidebar from './Sidebar'


export default class Portfolio extends Component {
    render() {
        return (
            <div className="row">
              <div className="col-md-3 bg-light pt-3 pb-3">
                {/* Sidebar */}
                <Sidebar />
              </div>
              <div className="col-md-9 bg-light pt-3 pb-3">
                <div className="section_">
                    <h2 className="header_">Portfolio</h2>
                    <h3 className="text-danger">Coming Soon...</h3>
                </div>
              </div>
            </div>
        )
    }
}
