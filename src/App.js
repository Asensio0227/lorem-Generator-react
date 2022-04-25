import React, {useState }from 'react';
import Navbar from './Navbar';
import { text } from './data';

const App = () => {
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count < 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setInfo(text.slice(0, amount));
  }

  return (
    <>
      <Navbar />
        <section className="section-center">
          <div className="title">
            <h2>tired of lorem ipsum text</h2>
            <div className="underline"></div>
        </div>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="amount">paragraph : </label>
            <input 
              type="number"
              name="amount"
              id="amount"
              placeholder="5"
              value={count}
              onChange={(e)=>setCount(e.target.value)}
            />
            <button className="submit-btn" type='submit'>
              generate
            </button>
          </div>
        </form>
        <article className="lorem-text">
          {info.map((item, index) => {
            return (
              <p className="result" key={index}>{item}</p>
            )
          })}
        </article>
        </section>
    </>
  )
}

export default App