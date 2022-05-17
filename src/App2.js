import CustomerFilter from "./components/CustomerFilter";
import CustomersContext from "./components/store/customers-context";

const DUMMY_CUSTOMERS = [
  { id: "c1", name: "Дмитрий" },
  { id: "c2", name: "Михаил" },
  { id: "c3", name: "Ирина" },
];

function App2() {
  const customersContext = {
    customers: DUMMY_CUSTOMERS,
  };

  return (
    <CustomersContext.Provider value={customersContext}>
      <CustomerFilter />
    </CustomersContext.Provider>
  );
}

export default App2;
