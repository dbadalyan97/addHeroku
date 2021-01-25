import React from 'react'
import Table from './components/Table'
// import './App.css';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';
import {v4 as uuidv4} from "uuid";
import data from "./components/data";
import Calculator from "./components/Calculator";


function App() {
    const {t} = useTranslation();

    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }

    return (
        <div className="App" style={{textAlign: 'center'}}>
            <nav>
                <button onClick={() => handleClick('en')}>
                    English
                </button>
                <button onClick={() => handleClick('ko')}>
                    Armenian
                </button>
            </nav>

            <table key={uuidv4()}>
                <tbody key={uuidv4()}>
                <tr key={uuidv4()}>
                    <td rowSpan="2" key={uuidv4()}/>
                    <th colSpan="2" scope="colgroup" key={uuidv4()}>{t('USD')}</th>
                    <th colSpan="2" scope="colgroup" key={uuidv4()}>EUR</th>
                    <th colSpan="2" scope="colgroup" key={uuidv4()}>RUR</th>
                    <th colSpan="2" scope="colgroup" key={uuidv4()}>GBP</th>
                </tr>
                <tr key={uuidv4()}>
                    <th scope="col" key={uuidv4()}>Առք</th>
                    <th scope="col" key={uuidv4()}>Վաճ.</th>
                    <th scope="col" key={uuidv4()}>Առք</th>
                    <th scope="col" key={uuidv4()}>Վաճ.</th>
                    <th scope="col" key={uuidv4()}>Առք</th>
                    <th scope="col" key={uuidv4()}>Վաճ.</th>
                    <th scope="col" key={uuidv4()}>Առք</th>
                    <th scope="col" key={uuidv4()}>Վաճ.</th>
                </tr>
                {data.map((val) =>
                    <tr key={uuidv4()}>
                        <th scope="row" key={uuidv4()}>{val.bankName}</th>
                        {Object.keys(val.currency).map((value) =>
                            <>
                                <td key={uuidv4()}>{val.currency[value][0]}</td>
                                <td key={uuidv4()}>{val.currency[value][1]}</td>
                            </>
                        )}
                    </tr>
                )}
                </tbody>
            </table>
            <Calculator/>
            <div>{t('Thanks.1')}</div>
            <div>{t('Why.1')}</div>
        </div>
    );
}

export default App;
