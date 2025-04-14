import React from 'react'


function Awards() {
    return ( 
        <div className='container   mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestbroker.svg'></img>
                </div>
                <div className='col-6 p-5'>
                    <h1 className='text-muted'>Trust with confidence</h1>
                    <p className='mb-5'>
                    That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                    </p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li><p>Futures and Options</p></li>

                                <li><p>Futures and Options</p></li>
                                <li><p>Futures and Options</p></li>
                            </ul>

                        </div>
                        <div className='col-6'>
                        <ul>
                        <li><p>Futures and Options</p></li>
                        <li><p>Financial Advices</p></li>
                        <li><p>Bonds and Government Securities</p></li>
                            </ul>

                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' style={{width:"90%"}}/>
                </div>
            </div>
        </div>
     );
}

export default Awards;