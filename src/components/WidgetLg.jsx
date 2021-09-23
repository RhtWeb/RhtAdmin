import "./styleFolder/widget.css";

const WidgetLg = () => {

  const Button = ({ type }) => {
    return <button className={`widgetLgButton ${type}`}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetTitle">Latest Transactions</h3>
      <div className="txnTable">
        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="customerDetails">
                <div className="imgContainer">
                  <img src="" alt="" />
                </div> Rohit Singh
              </td>
              <td className="lightText">2 Jun 2021</td>
              <td className="lightText">$122.00</td>
              <td>
                <Button type="Approved" />
              </td>
            </tr>
            <tr>
              <td className="customerDetails">
                  <div className="imgContainer">
                    <img src="" alt="" />
                  </div> Pratap Verma
                </td>
                <td className="lightText">5 May 2021</td>
                <td className="lightText">$212.00</td>
                <td>
                  <Button type="Declined" />
                </td>
            </tr>
            <tr>
              <td className="customerDetails">
                <div className="imgContainer">
                  <img src="" alt="" />
                </div> Ravi Sharma
              </td>
              <td className="lightText">5 Feb 2021</td>
              <td className="lightText">$012.00</td>
              <td>
                <Button type="Pending" />
              </td>
            </tr>
            <tr>
              <td className="customerDetails">
                <div className="imgContainer">
                  <img src="" alt="" />
                </div> Rajveer Singh
              </td>
              <td className="lightText">1 Feb 2021</td>
              <td className="lightText">$112.00</td>
              <td>
                <Button type="Approved" />
              </td>
            </tr>
            <tr>
              <td className="customerDetails">
                <div className="imgContainer">
                  <img src="" alt="" />
                </div> Aman Sen
              </td>
              <td className="lightText">25 Jan 2021</td>
              <td className="lightText">$142.00</td>
              <td>
                <Button type="Pending" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default WidgetLg
