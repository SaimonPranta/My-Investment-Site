import React, { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { table_collaps } from '../../../Functions/table_collaps';

const AdminInvestment = () => {
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
                <h3 className='main-title'>Investment Request</h3>
            </div>
            <div class=" genaration ">
                <div>
                    <h4>Total Request Summary</h4>
                </div>
                <div className='d-flex'>
                    <p>Total Pending Request :</p>
                    <p className='ps-3'>20</p>
                </div>
                <div className='d-flex'>
                    <p>Total Approved Request :</p>
                    <p className='ps-3'>20</p>
                </div>
                <div className='d-flex'>
                    <p>Total Pending Balance Request :</p>
                    <p className='ps-3'>5</p>
                </div>
                <div className='d-flex'>
                    <p>Total Pending  Balance:</p>
                    <p className='ps-3'>20 tk</p>
                </div>
                <div className='d-flex'>
                    <p>Total Approved Balance :</p>
                    <p className='ps-3'>200 tk</p>
                </div>
            </div>
            <div className='common-table-style'>
                <div className='d-flex align-items-center'>
                    <h4>Investment Request History</h4>
                    <IoIosArrowUp className='table-collaps-icon' id='collaps-icon' onClick={table_collaps} />
                </div>
                <div className='active-common-table-container common-table-container' id='table-container'>
                    <div className='scroll-text'><p>scroll it</p></div>
                    <div>
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

            </div>
        </section>
    );
};

export default AdminInvestment;