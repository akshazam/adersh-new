

import { RiWhatsappLine } from "react-icons/ri";
import Form from '../component/Form'
import logo1 from '../image/logo1.png'


const header = () => {
  return (
    <>
      <section className='main-con'>
        <div className='container'>
          <header>
            <a href="" className='logo'><img src={logo1} alt="" /></a>
            <ul>
              <li><a href="#" className='active'>Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </header>
          <div className='content'>
            <h1>Adersh Park Height</h1>
            <p>Luxurius 2 and 3 BHK Apartments by Adersh Group @ Gunjur,varthur East Bangalore</p>
            <a href="">Reade more</a>
          </div>
          <div className='header-form'>
            <Form />
          </div>
          {/* <div className='imgbx'>
          <img src={image1 } alt="" />
          </div> */}
          <ul className='sci'>
            <li><a href=""><RiWhatsappLine /></a></li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default header