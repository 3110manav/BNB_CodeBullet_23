import React, { useState, useContext } from 'react'
import Register from '../register/Register';
// import Profile from './Profile';

function CustomButton() {

    // const { account, setAccount, setToken } = useContext(DataContext)
    const account = '';
    const [open, setOpen] = useState(false);
    const [login, setLogin] = useState(true)
    const openDialog = (e) => {
        e.preventDefault();
        setLogin(true)
        setOpen(true);
    }

  return (
    <div className="flex items-center lg:order-2">
        {
            account === '' &&
            <div>
                <button
                    onClick={(e) => openDialog(e)}
                    className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                    Log in
                </button>
            </div>
            // :
            // <Profile account={account}/>
            // <Profile account={account} setAccount={setAccount} setToken={setToken}/>
        }
        
        
        {open && <Register open={open} setOpen={setOpen} login={login}/>}
    </div>
  )
}

export default CustomButton