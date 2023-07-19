import React, { createContext, useState } from 'react';

const AccountTypeContext = createContext();

const AccountTypeProvider = ({ children }) => {
  const [accountType, setAccountType] = useState('personal');

  return (
    <AccountTypeContext.Provider value={{ accountType, setAccountType }}>
      {children}
    </AccountTypeContext.Provider>
  );
};

export { AccountTypeContext, AccountTypeProvider };