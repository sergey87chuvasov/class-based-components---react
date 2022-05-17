import styles from "./Customer.module.css";
import {Component} from 'react'

class Customer extends Component {

  componentWillUnmount () {
    console.log('Заказчик будет удален');
  }

  render() {
    return <li className={styles.customer}>{this.props.name}</li>;
  }
}
// const Customer = (props) => {
//   return <li className={styles.customer}>{props.name}</li>;
// };

export default Customer;
