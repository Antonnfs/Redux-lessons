import { useSelector, useDispatch } from 'react-redux';
import { addCashAction, getCashAction, asyncAddCashAction, asyncGetCashAction } from './store/cash/cashActions';
import { addCustomerAction, removeCustomerAction } from './store/customers/customerActions';
import { fetchCustomers } from './asyncActions/customers';
import { fetchUsers } from './store/customers/customerActions';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customer.customers)

  function addCash() {
    dispatch(addCashAction())
  }
  function getCash() {
    dispatch(getCashAction())
  }
  function addCustomer(name) {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  }
  function removeCustomer(customer) {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <div className='flex min-h-screen flex-col  justify-center items-center'>
        <h2 className=' text-4xl'>Balance: {cash}$</h2>
        <div className='flex my-3'>
          <button onClick={() => dispatch(asyncAddCashAction())} className='border rounded px-3 py-2 bg-teal-400 mx-2 cursor-pointer'>top up the account</button>
          <button onClick={() => dispatch(asyncGetCashAction())} className='border rounded px-3 py-2 bg-teal-400 mx-2 cursor-pointer'>withdraw from the account</button>
          <button onClick={() => addCustomer(prompt())} className='border rounded px-3 py-2 bg-teal-400 mx-2 cursor-pointer'>Add customer</button>
          <button onClick={() => dispatch(fetchUsers())} className='border rounded px-3 py-2 bg-teal-400 mx-2 cursor-pointer'>Get customers from database</button>
        </div>
        {customers.length > 0 ? 
          <div>
            {customers.map(customer => (
              <div 
              className='border border-black rounded-md mb-2  gap-5 flex justify-between py-1 px-3 text-2xl' 
              key={customer.id}
              >
                <span>{customer.name}</span>
                <button onClick={() => removeCustomer(customer)} className=''>X</button>
              </div>
            ))}
          </div>
          :
          <div>
            Have not customers!
          </div>
        }
      </div>
      
    </div>
  );
}

export default App;
