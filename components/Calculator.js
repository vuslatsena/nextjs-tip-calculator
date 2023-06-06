/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';

const Calculator = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    calculateTipAmount();
    calculateTotalPrice();
  }, [billAmount, tipPercentage, numberOfPeople]);

  const handleBillChange = (event) => {
    setBillAmount(Number(event.target.value));
  };

  const handleTipPercentageChange = (event) => {
    setTipPercentage(Number(event.target.value));
  };

  const handleNumberOfPeopleChange = (event) => {
    setNumberOfPeople(Number(event.target.value));
  };

  const handleReset = () => {
    setBillAmount(0);
    setTipPercentage(0);
    setNumberOfPeople(0);
    setTipAmount(0);
    setTotalPrice(0);
  };

  const calculateTipAmount = () => {
    const tip = (billAmount * tipPercentage) / 100;
    const tipPerPerson = tip / numberOfPeople;
    setTipAmount(tipPerPerson || 0);
  };

  const calculateTotalPrice= () => {
    if (numberOfPeople !== 0) {
      const total = (billAmount + (billAmount * tipPercentage) / 100) / numberOfPeople;
      setTotalPrice(total || 0);
  } else {
      setTotalPrice(0);
  }
  };

  return (
    <main>
      <img
        src="./icons/logo.svg"
        className="logo"
        alt="Splitter logo. 'SPLI' on one line and 'TTER' on another to indicate splitting."
      />
      <section className="card">
        <div className="card-left">
          <div className="input-group" id="totalBillGroup">
            <div className="input-label-container">
              <label className="body-text input-label" htmlFor="totalBill">
                Bill
              </label>
              <small className="body-text input-error" id="totalBillError">
                Input field is valid
              </small>
            </div>
            <input
              type="number"
              className="body-l-text input-field"
              placeholder="0"
              name="Total bill value"
              id="totalBill"
              value={billAmount}
              onChange={handleBillChange}
            />
          </div>

          <div className="input-group" id="totalTipPercentageGroup">
            <div className="input-label-container">
              <label className="body-text input-label">Select Tip %</label>
              <small className="body-text input-error" id="totalTipPercentageError">
                Input field is valid
              </small>
            </div>
            <div className="input-tips-container">
              <button className="body-l-text input-tip" id="tip5" onClick={() => setTipPercentage(5)}>
                5%
              </button>
              <button className="body-l-text input-tip" id="tip10" onClick={() => setTipPercentage(10)}>
                10%
              </button>
              <button className="body-l-text input-tip" id="tip15" onClick={() => setTipPercentage(15)}>
                15%
              </button>
              <button className="body-l-text input-tip" id="tip25" onClick={() => setTipPercentage(25)}>
                25%
              </button>
              <button className="body-l-text input-tip" id="tip50" onClick={() => setTipPercentage(50)}>
                50%
              </button>
              <input
                type="number"
                className="body-l-text input-field"
                placeholder="Custom"
                id="totalTipPercentage"
                value={tipPercentage}
                onChange={handleTipPercentageChange}
              />
            </div>
          </div>

          <div className="input-group" id="numberOfPeopleGroup">
            <div className="input-label-container">
              <label className="body-text input-label" htmlFor="numberOfPeople">
                Number of People
              </label>
              <small className="body-text input-error" id="numberOfPeopleError">
                Input field is valid
              </small>
            </div>
            <input
              type="number"
              className="body-l-text input-field"
              placeholder="0"
              name="Number of people"
              id="numberOfPeople"
              value={numberOfPeople}
              onChange={handleNumberOfPeopleChange}
            />
          </div>
        </div>
        <div className="card-right">
          <section className="card-price-container">
            <div>
              <b className="body-text card-price-title">Tip Amount</b>
              <p className="body-s-text card-price-subtitle">/ person</p>
            </div>
            <strong className="strong-text card-price-value" id="tipAmount">
              ${tipAmount.toFixed(2)}
            </strong>
          </section>
          <section className="card-price-container">
            <div>
              <b className="body-text card-price-title">Total</b>
              <p className="body-s-text card-price-subtitle">/ person</p>
            </div>
            <strong className="strong-text card-price-value" id="totalPrice">
              ${totalPrice.toFixed(2)}
            </strong>
          </section>
          <button className="btn btn-primary btn-reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </section>
    </main>
  );
};

export default Calculator;
