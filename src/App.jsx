import { useSelector } from 'react-redux';
import AccountOperations from './features/accounts/AccountOperations';
import BalanceDisplay from './features/accounts/BalanceDisplay';
import CreateCustomer from './features/customers/CreateCustomer';
import Customer from './features/customers/Customer';

function App() {
  const customerName = useSelector((state) => state.customer.fullName);

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {customerName ? (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />{' '}
        </>
      ) : (
        <CreateCustomer />
      )}
    </div>
  );
}

export default App;
