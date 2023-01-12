import React from 'react';
import style from './portfolio.module.css';

function Portfolio() {
    return (
        <>
            <div className={style.port}>
            <div className={'container'}>
                <div className={style.grid}>
                    <div className={style.item+" "+style.item1}>
                        {/* <img src={port} alt="" className={style.rasmm}/> */}
                    </div>
                    <div className={style.item+" "+style.item2}>
                    {/* <img src={port} alt="" className={style.rasmm}/> */}
                    </div>
                    <div className={style.item+" "+style.item3}>
                    {/* <img src={port} alt="" className={style.rasmm}/> */}
                    </div>
                    <div className={style.item+" "+style.item4}>
                    {/* <img src={port} alt="" className={style.rasmm}/> */}
                    </div>
                    <div className={style.item+" "+style.item5}>
                    {/* <img src={port} alt="" className={style.rasmm}/> */}
                    </div>
                    <div className={style.item+" "+style.item6}>
                    {/* <img src={port} alt="" className={style.rasmm}/> */}
                    </div>
                    <div className={style.item+" "+style.item7}>
                    {/* <img src={port} alt="" className={style.rasmm}/> */}
                    </div>
                    <div className={style.item+" "+style.item8}>
                    {/* <img src={port} alt="" className={style.rasmm}/> */}
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default Portfolio;