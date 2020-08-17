import React, { Component } from 'react';

export class InsertTicket extends Component {


  render () {
    return (
        <div className="box-body">
            <div className="row">
                <div className="container col-md-12">
                    <form action="api/Tickets/Insert" method="post" enctype="multipart/form-data" >
                        <div className="form-group row">
                            <label >Subject</label>
                            <input className="form-control" name="TicketTopic" />                   
                        </div>
                        <div className="form-group row">
                            <label>TicketId</label>
                            <input className="form-control"name="Id"/>
                        </div>
                        <div className="form-group row">
                            <label>Section</label>
                            <input className="form-control" name="RelevantSector"/>
                        </div>
                        <button className="btn btn-success">+AddTicket</button>
                    </form>
                </div>
            </div>
            </div>
    );
  }
}
