import React, { useEffect, useState } from 'react';
import './BalanceTransfer.css';

const BalanceTransfer = () => {
    const [condition, setConditon] = useState({
        loadUser: false
    })
    // const [user, setUser] = useContext(userContext);
    const [user, setUser] = useState({});

    const [balanceInfo, setBalanceInfo] = useState({});
    const [message, setMessage] = useState({});
    const cooki = document.cookie.split("=")[1];
    let count = 0

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                const currentCondition = {
                    loadUser: true
                }
                setConditon(currentCondition)
            }, 2000);
        }
    }, []);

    const handleUpdateInput = (e) => {
        const currentInput = { ...balanceInfo }
        const inputFildName = e.target.name;
        const inputFildValue = e.target.value;
        if (inputFildName === "amount") {
            const floorValue = Math.floor(inputFildValue)
            currentInput[inputFildName] = floorValue
            setBalanceInfo(currentInput)
        } else if (inputFildName === "selectUser") {
            currentInput[inputFildName] = inputFildValue
            setBalanceInfo(currentInput)
        }

        setBalanceInfo(currentInput);
        if (user.balance <= currentInput.amount) {
            setMessage({ failed: "The provided ammount are higher than your balance." });
        } else {
            setMessage({});
        }
    };


    const balanceTransferHandle = (e) => {
        e.preventDefault();
        const requestInput = { ...balanceInfo }
        if (balanceInfo.selectUser && balanceInfo.amount) {
            if (Math.floor(balanceInfo.selectUser) && Math.floor(balanceInfo.amount)) {
                if (balanceInfo.amount >= 20) {
                    // if (user.balance >= balanceInfo.amount) {
                    setMessage({})
                    fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/balance_transfer`, {
                        method: "POST",
                        body: JSON.stringify(balanceInfo),
                        headers: {
                            'content-type': 'application/json; charset=UTF-8',
                            authorization: `Bearer ${cooki}`
                        }
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.data) {
                                setBalanceInfo({})
                                const updatedUser = { ...data.data }
                                setUser(updatedUser);
                            }
                            if (data.sucess) {
                                setBalanceInfo({})
                                setMessage({ sucess: data.sucess });
                                setTimeout(() => {
                                    setMessage({})
                                }, 7000);
                            }
                            if (data.failed) {
                                setBalanceInfo(requestInput)
                                setMessage({ failed: data.failed });
                                setTimeout(() => {
                                    setMessage({})
                                }, 7000);
                            }
                        })
                    setBalanceInfo({})
                } else {
                    setMessage({ failed: "Sorry, you can to tranfer lass then 20tk." })
                }
            } else {
                setMessage({ failed: "Phone Number & Amount must be number." })
            }
        } else {
            setMessage({ failed: "Please fill the form & try again" })
        }
    };



    return (
        <section className='balance-transfer text-white'>
            <div>
                <h3 className='main-title'>Balance Transfer</h3>
            </div>
            <div className='common-form-styles'>
                <form autocomplete="off" class="card" onSubmit={balanceTransferHandle} >

                    <label class="input">
                        <input class="input__field" type="text" name='selectUser' value={balanceInfo.selectUser ? balanceInfo.selectUser : ""} onChange={handleUpdateInput} id="select-user" placeholder=" " />
                        <span class="input__label">User Phone Number</span>
                    </label>
                    <label class="input">
                        <input class="input__field" type="text" name="amount" value={balanceInfo.amount ? balanceInfo.amount : ""} onChange={handleUpdateInput} placeholder=" " />
                        <span class="input__label"> Amount </span>
                    </label>

                    <input type="submit" value="Submit" />

                </form>
            </div>
            <div className='common-table-style'>
                <div>
                    <h4>Balance Transfer History</h4>
                </div>
                <div className='common-table-container'>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>User Name</th>
                                <th>Receiver Number	</th>
                                <th>Transfer Ammount</th>
                                <th>Transfer Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Saimon Pranta</td>
                                <td>01881476432</td>
                                <td>100 tk</td>
                                <td>10 janu 2020</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Saimon Pranta</td>
                                <td>01881476432</td>
                                <td>100 tk</td>
                                <td>10 janu 2020</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Saimon Pranta</td>
                                <td>01881476432</td>
                                <td>100 tk</td>
                                <td>10 janu 2020</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Saimon Pranta</td>
                                <td>01881476432</td>
                                <td>100 tk</td>
                                <td>10 janu 2020</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Saimon Pranta</td>
                                <td>01881476432</td>
                                <td>100 tk</td>
                                <td>10 janu 2020</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Saimon Pranta</td>
                                <td>01881476432</td>
                                <td>100 tk</td>
                                <td>10 janu 2020</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Saimon Pranta</td>
                                <td>01881476432</td>
                                <td>100 tk</td>
                                <td>10 janu 2020</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Saimon Pranta</td>
                                <td>01881476432</td>
                                <td>100 tk</td>
                                <td>10 janu 2020</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Saimon Pranta</td>
                                <td>01881476432</td>
                                <td>100 tk</td>
                                <td>10 janu 2020</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Saimon Pranta</td>
                                <td>01881476432</td>
                                <td>100 tk</td>
                                <td>10 janu 2020</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Saimon Pranta</td>
                                <td>01881476432</td>
                                <td>100 tk</td>
                                <td>10 janu 2020</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Saimon Pranta</td>
                                <td>01881476432</td>
                                <td>100 tk</td>
                                <td>10 janu 2020</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Saimon Pranta</td>
                                <td>01881476432</td>
                                <td>100 tk</td>
                                <td>10 janu 2020</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Saimon Pranta</td>
                                <td>01881476432</td>
                                <td>100 tk</td>
                                <td>10 janu 2020</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Saimon Pranta</td>
                                <td>01881476432</td>
                                <td>100 tk</td>
                                <td>10 janu 2020</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Saimon Pranta</td>
                                <td>01881476432</td>
                                <td>100 tk</td>
                                <td>10 janu 2020</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>
            
        </section>
    );
};

export default BalanceTransfer;