import React, { useState } from 'react'
import img1 from '../images/IMG-4.jpg'
import img2 from '../images/IMG-5.jpg'
import img3 from '../images/IMG-6.jpg'
import img4 from '../images/IMG-7.jpg'
import img5 from '../images/IMG-8.jpg'
import img6 from '../images/IMG-9.jpg'
import img7 from '../images/IMG-10.jpg'

const Shop = () => {
    const cards = [
        [{
            title: 'Seveston_Shirt',
            text: '$38.99',
            imgSrc: img7,
          },
          {
            title: 'Seveston_Shirt',
            text: '$34.88',
            imgSrc: img7,
          },
          {
            title: 'Seveston_Shirt',
            text: '$100.88',
            imgSrc: img7,
          },
          {
              title: 'Seveston_Shirt',
              text: '$38.99',
              imgSrc: img7,
            },
            {
              title: 'Seveston_Shirt',
              text: '$34.88',
              imgSrc: img7,
            },
            {
              title: 'Seveston_Shirt',
              text: '$84.88',
              imgSrc: img7,
            },
            {
              title: 'Seveston_Shirt',
              text: '$84.88',
              imgSrc: img7,
            },
            {
              title: 'Seveston_Shirt',
              text: '$38.99',
              imgSrc: img7,
            },
            {
              title: 'Seveston-Shirt',
              text: '$38.99',
              imgSrc: img7,
            },
            {
              title: 'Seveston_Shirt',
              text: '$84.88',
              imgSrc: img7,
            },
            {
              title: 'Seveston_Shirt',
              text: '$38.99',
              imgSrc: img7,
            },
            {
              title: 'Seveston-Shirt',
              text: '$38.99',
              imgSrc: img7,
            }],[{
                title: 'Seveston_Shirt',
                text: '$38.99',
                imgSrc: img1,
              },
              {
                title: 'Seveston_Shirt',
                text: '$34.88',
                imgSrc: img7,
              },
              {
                title: 'Seveston_Shirt',
                text: '$100.88',
                imgSrc: img2,
              },
              {
                  title: 'Seveston_Shirt',
                  text: '$38.99',
                  imgSrc: img6,
                },
                {
                  title: 'Seveston_Shirt',
                  text: '$34.88',
                  imgSrc: img5,
                },
                {
                  title: 'Seveston_Shirt',
                  text: '$84.88',
                  imgSrc: img4,
                },
                {
                  title: 'Seveston_Shirt',
                  text: '$84.88',
                  imgSrc: img3,
                },
                {
                  title: 'Seveston_Shirt',
                  text: '$38.99',
                  imgSrc: img1,
                },
                {
                  title: 'Seveston-Shirt',
                  text: '$38.99',
                  imgSrc: img6,
                },
                {
                  title: 'Seveston_Shirt',
                  text: '$84.88',
                  imgSrc: img7,
                },
                {
                  title: 'Seveston_Shirt',
                  text: '$38.99',
                  imgSrc: img7,
                },
                {
                  title: 'Seveston-Shirt',
                  text: '$38.99',
                  imgSrc: img7,
                }],[{
                    title: 'Seveston_Shirt',
                    text: '$38.99',
                    imgSrc: img2,
                  },
                  {
                    title: 'Seveston_Shirt',
                    text: '$34.88',
                    imgSrc: img7,
                  },
                  {
                    title: 'Seveston_Shirt',
                    text: '$100.88',
                    imgSrc: img2,
                  },
                  {
                      title: 'Seveston_Shirt',
                      text: '$38.99',
                      imgSrc: img3,
                    },
                    {
                      title: 'Seveston_Shirt',
                      text: '$34.88',
                      imgSrc: img1,
                    },
                    {
                      title: 'Seveston_Shirt',
                      text: '$84.88',
                      imgSrc: img3,
                    },
                    {
                      title: 'Seveston_Shirt',
                      text: '$84.88',
                      imgSrc: img7,
                    },
                    {
                      title: 'Seveston_Shirt',
                      text: '$38.99',
                      imgSrc: img5,
                    },
                    {
                      title: 'Seveston-Shirt',
                      text: '$38.99',
                      imgSrc: img4,
                    },
                    {
                      title: 'Seveston_Shirt',
                      text: '$84.88',
                      imgSrc: img3,
                    },
                    {
                      title: 'Seveston_Shirt',
                      text: '$38.99',
                      imgSrc: img2,
                    },
                    {
                      title: 'Seveston-Shirt',
                      text: '$38.99',
                      imgSrc: img1,
                    }]
    ];
    const [isExpand,setExpand]=useState(false)
    const readMore=()=>{
        setExpand(!isExpand);
    }
    const [lrangeValue,setLRange]=useState('0')
    const [rrangeValue,setRRange]=useState('300')
    const handleLRange=(e)=>{
        setLRange(e.target.value)
    }
    const handleRRange=(e)=>{
        setRRange(e.target.value)
    }
    const [selectedValue, setSelectedValue] = useState(null);
    const [selectedValue1, setSelectedValue1] = useState(null);
    const [selectedValue2, setSelectedValue2] = useState(null);
    const [selectedValue3, setSelectedValue3] = useState(null);

    const handleChange = (event) => {
      setSelectedValue(event.target.checked ? event.target.value : null);
    };
    const handleChange1 = (event) => {
        setSelectedValue1(event.target.checked ? event.target.value : null);
      };
      const handleChange2 = (event) => {
        setSelectedValue2(event.target.checked ? event.target.value : null);
      };
      const handleChange3 = (event) => {
        setSelectedValue3(event.target.checked ? event.target.value : null);
      };
        const [currentPage, setCurrentPage] = useState(1);
      
        const handlePageChange = (page) => {
          setCurrentPage(page);
        };
  return (
    <section id='shop'>
      <div className="container" style={{backgroundColor:'#6F6A42'}}>
        <h5 className='text-white'>Ladies top</h5>
        <div className='d-flex flex-column align-items-start'>
        <p className='text-white'>Slash Sales begins in August. Get up to 80% Discount on all products {
            isExpand && <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus sit nemo consequuntur quis doloremque reiciendis dolorum architecto vitae omnis repudiandae!</span>
        }</p>
        <span><a onClick={readMore} className='text-decoration-none text-white fw-bold' style={{cursor:'pointer'}}>
            {isExpand ?"ReadLess":"ReadMore"}</a></span>
        </div>
      </div>
      <div className="container d-sm-flex p-0 mt-md-5 mt-3 mb-md-5 mb-3">
        <span className='lead fs-6'>Showing 1 - 20 out of 2,356 Products</span>
        <span className=' ms-auto d-flex'><h6 className='text-nowrap' style={{padding:'10px 35px 0px 0px'}}>Sort By:</h6>
        <select className="form-select" defaultValue="NewArrival">
        <option value="NewArrival">NewArrival</option>
        <option value="1">SummerSale</option>
        <option value="2">Hot</option>
        <option value="3">NewEdition</option></select>
        </span>
      </div>
      <div className="container p-0">
        <div className="row">
            <div className="container col-md-3" style={{backgroundColor:'#F8F8F8'}}>
                <div className="row d-flex flex-column align-items-md-start mt-md-5 mt-3">
                    <div className="col ms-md-5 ms-3 mt-md-3 mt-2">
                        <h6 className='fw-bold'>Prices</h6>
                       <div className='d-flex'> <h6>Range</h6>
                       <span>${lrangeValue}-${rrangeValue}</span></div>
                       <div className="range-container">
                       <input type="range" className="form-range left-range" min="0" max="500" value={lrangeValue} onChange={handleLRange}/>
                       <input type="range" className="form-range right-range" min="0" max="500" value={rrangeValue} onChange={handleRRange}/></div>
                    </div>
                    <div className="col ms-md-5 ms-3 mt-md-3 mt-2">
                        <h6 className='fw-bold'>Filters</h6>
                        <label><input type="checkbox" value="Value1" checked={selectedValue === 'Value1'} onChange={handleChange}/>Men</label><br/>
                      <label>
                      <input  type="checkbox" value="Value2" checked={selectedValue === 'Value2'} onChange={handleChange}/>Women</label><br/>
                      <label>
                       <input type="checkbox" value="Value3" checked={selectedValue === 'Value3'} onChange={handleChange}/>Girls</label><br/>
                       <label>
                       <input type="checkbox" value="Value4" checked={selectedValue === 'Value4'} onChange={handleChange}/>Babies</label>
                    </div>
                    <div className="col ms-md-5 ms-3 mt-md-3 mt-2">
                        <h6 className='fw-bold'>Brands</h6>
                        <label><input type="checkbox" value="Value5" checked={selectedValue1 === 'Value5'} onChange={handleChange1}/>Victoria Sorscat</label><br/>
                      <label>
                      <input  type="checkbox" value="Value6" checked={selectedValue1 === 'Value6'} onChange={handleChange1}/>Gucci</label><br/>
                      <label>
                       <input type="checkbox" value="Value7" checked={selectedValue1 === 'Value7'} onChange={handleChange1}/>Doir</label><br/>
                       <label>
                       <input type="checkbox" value="Value8" checked={selectedValue1 === 'Value8'} onChange={handleChange1}/>Fendi</label><br/>
                       <label>
                       <input type="checkbox" value="Value9" checked={selectedValue1 === 'Value9'} onChange={handleChange1}/>Prada</label><br/>
                       <label>
                       <input type="checkbox" value="Value10" checked={selectedValue1 === 'Value10'} onChange={handleChange1}/>Zara</label><br/>
                       <label>
                       <input type="checkbox" value="Value11" checked={selectedValue1 === 'Value11'} onChange={handleChange1}/>Versace</label><br/>
                       <label>
                       <input type="checkbox" value="Value12" checked={selectedValue1 === 'Value12'} onChange={handleChange1}/>Chanel</label><br/>
                       <label>
                       <input type="checkbox" value="Value13" checked={selectedValue1 === 'Value13'} onChange={handleChange1}/>Dolce & Gabbana</label><br/>
                    </div>
                    <div className="col ms-md-5 ms-3 mt-md-3 mt-2">
                        <h6 className='fw-bold'>Categories</h6>
                        <label><input type="checkbox" value="Value1" checked={selectedValue2 === 'Value1'} onChange={handleChange2}/>Dresses</label><br/>
                      <label>
                      <input  type="checkbox" value="Value2" checked={selectedValue2 === 'Value2'} onChange={handleChange2}/>Tops</label><br/>
                      <label>
                       <input type="checkbox" value="Value3" checked={selectedValue2 === 'Value3'} onChange={handleChange2}/>Vintage</label><br/>
                       <label>
                       <input type="checkbox" value="Value4" checked={selectedValue2 === 'Value4'} onChange={handleChange2}/>Blouse</label><br/>
                       <label>
                       <input type="checkbox" value="Value5" checked={selectedValue2 === 'Value5'} onChange={handleChange2}/>Lingeria & LoungeWear</label>
                    </div>
                    <div className="col ms-md-5 ms-3 mt-md-3 mt-2">
                        <h6 className='fw-bold'>Sizes</h6>
                        <label><input type="checkbox" value="Value1" checked={selectedValue3 === 'Value1'} onChange={handleChange3}/>Medium</label><br/>
                      <label>
                      <input  type="checkbox" value="Value2" checked={selectedValue3 === 'Value2'} onChange={handleChange3}/>Large</label><br/>
                      <label>
                       <input type="checkbox" value="Value3" checked={selectedValue3 === 'Value3'} onChange={handleChange3}/>Plus_Size</label><br/>
                       <label>
                       <input type="checkbox" value="Value4" checked={selectedValue3 === 'Value4'} onChange={handleChange3}/>Sexy Plus_Size</label><br/>
                    </div>
                </div>
            </div>
            <div className="container col-md-9">
            <div className="d-flex flex-wrap">
              {cards[currentPage-1].map((card, cardIndex) => (
                <div key={cardIndex}  className="card mt-md-0 my-2 mx-2 col-12 col-md-6 col-lg-3 rounded-0 border-0" 
                style={{ width: '15rem' }}>
                  <img src={card.imgSrc} className="card-img-top rounded-0" alt={card.title} />
                  <div className="card-body">
                    <h5 className="card-title text-center">{card.title}</h5>
                    <div className='d-flex'> <p className="card-text text-start">{card.text}</p>
                    <p className="card-text ms-auto">22 orders</p></div>
                    <button className=' d-flex btn rounded-0 text-white bg-black ms-sm-auto' style={{fontSize:'0.5rem'}}>NewArrival</button>
                  </div>
                </div>
              ))}
            </div>
            </div>
            </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-end">
        <div className="col">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-sm-end me-5 mt-2">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <a className="page-link" href="#" aria-label="Previous" onClick={() => handlePageChange(currentPage - 1)}>
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className={`page-item ${currentPage === 1 ? 'active' : ''}`}>
                <a className="page-link" href="#" onClick={() => handlePageChange(1)}>1</a>
              </li>
              <li className={`page-item ${currentPage === 2 ? 'active' : ''}`}>
                <a className="page-link" href="#" onClick={() => handlePageChange(2)}>2</a>
              </li>
              <li className={`page-item ${currentPage === 3 ? 'active' : ''}`}>
                <a className="page-link" href="#" onClick={() => handlePageChange(3)}>3</a>
              </li>
              <li className={`page-item ${currentPage === 3 ? 'disabled' : ''}`}>
                <a className="page-link" href="#" aria-label="Next" onClick={() => handlePageChange(currentPage + 1)}>
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Shop
