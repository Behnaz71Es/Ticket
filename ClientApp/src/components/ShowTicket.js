import React, { Component } from 'react';

export class ShowTicket extends Component {


  constructor(props) {
    super(props);
    this.state = { ticket:[] };
    //this.incrementCounter = this.incrementCounter.bind(this);
  }



  render() {
    return (
      <div>
        <table className="table table-borderd">
                
                <thead bgcolor="#C2C2C2">
                    <td>تاریخ ایجاد شده</td>
                    <td>وضعیت</td>
                    <td>بخش</td>
                    <td>شناسه تیکت</td>
                    <td>موضوع</td>
                    <td>خوانده نشده</td>
                       
                       
                       
                        
                       
                    </thead>
                {
                    this.state.ticket.map((t, index) =>
                        <tbody>
                            <tr>
                                <td>{t.TicketTopic}</td>
                                <td>{t.Id}</td>
                                <td>{t.RelevantSector}</td>

                                <td>(@CustomizeCalendar.GregorianToPersianDateTime(item.RegisteredDateTime))</td>
                            </tr>
                        </tbody>
                        )
                        
                }

            </table>
        </div>
    );
  }
}
