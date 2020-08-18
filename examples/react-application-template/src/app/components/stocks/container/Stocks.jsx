import React, { Component } from 'react';
import stocksServiceObject from '../services/stocks-sercice';

export default class Stocks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appleStockValue = 0,
      googleStockValue = 0,
      microsoftStockValue = 0,

    }
  }

  componentDidMount() {
    stocksServiceObject.getAppleStockValues().subscribe(
      appleStock => {
        this.setState({ appleStockValue: appleStock });
      }
    );

    stocksServiceObject.getGoogleStockValues().subscribe(
      googleStock => {
        this.setState({ googleStockValue: googleStock });
      }
    );

    stocksServiceObject.getMicrosoftStockValues().subscribe(
      msStock => {
        this.setState({ microsoftStockValue: msStock });
      }
    );
  }

  render() {
    const title = "Live Stocks values of Apple, Google and Microsoft";
    return (
      <div>
        <h1>{title}</h1>
        <br/>
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>Apple Stocks</th>
              <th>Google Stocks</th>
              <th>Microsoft Stocks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span>{this.state.appleStockValue}</span></td>
              <td><span>{this.state.googleStockValue}</span></td>
              <td><span>{this.state.microsoftStockValue}</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
