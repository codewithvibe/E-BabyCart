


import React, { useRef,useContext } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  
} from 'mdb-react-ui-kit';
import "../styles/registraton.css"
import { Link } from 'react-router-dom';
import { context } from '../Store/Context';
import { useNavigate } from 'react-router-dom';






function RRegistration() {


  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const PasswordRef = useRef(null);
  const data=useContext(context)
  const {signin,setsignin}=data;
  const navigate=useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phonenumber = phoneRef.current.value;
    const password = PasswordRef.current.value;
    setsignin([...signin, { name, email, phonenumber, password }]);
    console.log(signin);
    navigate("/login")

    // console.log(name, email, password, repeatPassword);

    

   
  };

  return (
    <MDBContainer
      fluid
      className='d-flex align-items-center justify-content-center bg-image'
      style={{
        backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'
      }}
    >
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
        <MDBCardBody className='px-5'>
        <svg className='svg1' width="150" height="90" viewBox="0 0 106 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M13.528 14.024C14.9573 14.2587 15.9067 14.76 16.376 15.528C16.8667 16.2747 17.112 17.16 17.112 18.184C17.112 18.3973 17.1013 18.5573 17.08 18.664C16.6747 21.2667 15.5867 23.1227 13.816 24.232C12.0453 25.32 9.95467 25.864 7.544 25.864C6.92533 25.864 6.25333 25.7893 5.528 25.64C4.824 25.512 4.248 25.32 3.8 25.064C3.48 25.2987 2.88267 25.416 2.008 25.416C1.432 25.416 1.02667 25.192 0.792 24.744C0.557333 24.2747 0.44 23.7093 0.44 23.048C0.44 22.8133 0.472 22.5893 0.536 22.376L4.12 8.04C2.60533 8.552 1.66667 9.08533 1.304 9.64C0.642667 8.936 0.312 8.28533 0.312 7.688C0.312 7.21867 0.493333 6.73867 0.856 6.248C1.70933 5.69333 3.096 5.17067 5.016 4.68C5.18667 4.232 5.4 3.92267 5.656 3.752C5.93333 3.58133 6.33867 3.496 6.872 3.496C7.32 3.496 7.736 3.53867 8.12 3.624C8.52533 3.70933 8.81333 3.83733 8.984 4.008C10.008 3.88 11.0427 3.816 12.088 3.816C14.264 3.816 15.864 4.25333 16.888 5.128C17.912 5.98133 18.424 7.176 18.424 8.712C18.424 10.0133 17.9653 11.1333 17.048 12.072C16.1307 12.9893 14.9573 13.64 13.528 14.024ZM7.032 13.192C11.704 12.808 14.04 11.4427 14.04 9.096C14.04 8.43467 13.8373 7.92267 13.432 7.56C13.0267 7.176 12.3333 6.984 11.352 6.984C10.4773 6.984 9.50667 7.03733 8.44 7.144L7.032 13.192ZM7.128 22.76C8.088 22.76 9.016 22.5893 9.912 22.248C10.8293 21.8853 11.576 21.384 12.152 20.744C12.728 20.0827 13.016 19.3147 13.016 18.44C13.016 17.7147 12.76 17.096 12.248 16.584C11.7573 16.0507 11.064 15.784 10.168 15.784C8.48267 15.784 7.26667 15.848 6.52 15.976C6.17867 17.128 5.61333 19.2613 4.824 22.376C5.50667 22.632 6.27467 22.76 7.128 22.76ZM32.0515 23.336C32.0942 23.8907 32.1688 24.392 32.2755 24.84C32.2328 24.968 32.0408 25.096 31.6995 25.224C31.3795 25.352 31.1022 25.416 30.8675 25.416C30.0995 25.416 29.5448 25.2987 29.2035 25.064C28.8835 24.8507 28.7235 24.52 28.7235 24.072C28.7235 23.6453 28.7662 23.2187 28.8515 22.792C28.3822 23.432 27.6888 23.9653 26.7715 24.392C25.8755 24.7973 25.1502 25 24.5955 25C23.1662 25 21.9715 24.584 21.0115 23.752C20.0728 22.92 19.6035 21.5867 19.6035 19.752C19.6035 18.024 20.0088 16.4027 20.8195 14.888C21.6515 13.352 22.7928 12.1253 24.2435 11.208C25.6942 10.2693 27.3048 9.8 29.0755 9.8C29.4168 9.8 29.8648 9.896 30.4195 10.088C30.9742 10.2587 31.5288 10.568 32.0835 11.016C32.6595 11.4427 33.1395 11.9973 33.5235 12.68C33.6942 12.68 33.8968 12.7653 34.1315 12.936C34.3662 13.1067 34.4835 13.2773 34.4835 13.448C34.4835 13.64 34.4515 13.832 34.3875 14.024L32.0515 23.336ZM30.6115 14.376C30.4835 13.9067 30.2275 13.512 29.8435 13.192C29.4808 12.872 29.1502 12.712 28.8515 12.712C27.8702 12.712 26.9422 13.064 26.0675 13.768C25.2142 14.4507 24.5208 15.304 23.9875 16.328C23.4542 17.352 23.1875 18.3227 23.1875 19.24C23.1875 20.136 23.2942 20.872 23.5075 21.448C23.7208 22.024 24.1368 22.312 24.7555 22.312C25.2888 22.312 25.8968 22.152 26.5795 21.832C27.2835 21.512 27.9022 21.0853 28.4355 20.552C28.9902 19.9973 29.3528 19.4213 29.5235 18.824L30.6115 14.376ZM39.474 23.528C39.346 23.8267 39.25 24.0933 39.186 24.328C38.994 24.8187 38.8233 25.1707 38.674 25.384C38.5247 25.6187 38.29 25.736 37.97 25.736L37.074 25.768C36.5407 25.768 36.114 25.6507 35.794 25.416C35.474 25.2027 35.2927 24.7547 35.25 24.072C35.2713 24.0507 35.378 23.816 35.57 23.368C35.762 22.8987 35.954 22.2693 36.146 21.48C36.402 20.4347 36.658 19.4 36.914 18.376C37.17 17.352 37.4153 16.36 37.65 15.4C37.97 14.1413 38.4393 12.264 39.058 9.768C39.6767 7.25067 40.1567 5.256 40.498 3.784C40.4767 3.464 40.4553 3.02667 40.434 2.472C40.4127 1.896 40.402 1.448 40.402 1.128C40.466 0.850665 40.7007 0.626665 41.106 0.455999C41.5327 0.285332 41.9167 0.199999 42.258 0.199999C42.7913 0.199999 43.346 0.381332 43.922 0.743999C44.498 1.10667 44.7967 1.544 44.818 2.056L42.418 11.528C42.994 10.8667 43.6873 10.408 44.498 10.152C45.33 9.87467 46.098 9.736 46.802 9.736C47.8047 9.736 48.7007 10.024 49.49 10.6C50.3007 11.176 50.93 11.944 51.378 12.904C51.8473 13.8427 52.082 14.8347 52.082 15.88C52.082 17.416 51.7193 18.9307 50.994 20.424C50.2687 21.896 49.2127 23.112 47.826 24.072C46.4393 25.0107 44.818 25.48 42.962 25.48C42.4287 25.48 41.7673 25.288 40.978 24.904C40.21 24.52 39.7087 24.0613 39.474 23.528ZM40.242 20.872C40.5193 21.3627 40.9353 21.8 41.49 22.184C42.0447 22.568 42.546 22.76 42.994 22.76C43.9967 22.76 44.914 22.3227 45.746 21.448C46.578 20.552 47.2393 19.496 47.73 18.28C48.2207 17.0427 48.466 15.9333 48.466 14.952C48.466 14.2693 48.2847 13.704 47.922 13.256C47.5593 12.808 47.026 12.584 46.322 12.584C45.7033 12.584 45.042 12.7227 44.338 13C43.634 13.2773 43.0047 13.6827 42.45 14.216C41.9167 14.728 41.554 15.3253 41.362 16.008L40.242 20.872ZM57.5485 20.456C57.4845 20.712 57.4525 20.968 57.4525 21.224C57.4525 21.672 57.5698 22.0347 57.8045 22.312C58.0392 22.5893 58.4125 22.728 58.9245 22.728C59.5858 22.728 60.3005 22.536 61.0685 22.152C61.8365 21.768 62.4872 21.2987 63.0205 20.744L63.6285 18.216C64.0338 16.5093 64.5032 14.664 65.0365 12.68C65.2712 11.8267 65.5698 11.1333 65.9325 10.6C66.3165 10.0453 66.9138 9.768 67.7245 9.768C68.8552 9.768 69.4205 10.1093 69.4205 10.792C69.4205 10.8987 69.3885 11.0373 69.3245 11.208C69.2818 11.3573 69.2498 11.4853 69.2285 11.592C68.4818 14.7493 68.0658 16.5093 67.9805 16.872C66.9778 21.352 66.2205 24.4667 65.7085 26.216C64.9618 28.7973 63.8952 30.632 62.5085 31.72C61.1218 32.808 59.1912 33.352 56.7165 33.352C55.2232 33.352 54.2205 33.128 53.7085 32.68C53.1965 32.2533 52.9405 31.72 52.9405 31.08C52.9405 30.696 53.0898 30.3653 53.3885 30.088C53.7085 29.8107 54.0605 29.672 54.4445 29.672C54.7645 29.672 55.0098 29.704 55.1805 29.768C55.3725 29.8533 55.5752 29.9707 55.7885 30.12C56.0445 30.312 56.3005 30.4507 56.5565 30.536C56.8125 30.6427 57.1858 30.696 57.6765 30.696C58.0392 30.696 58.4765 30.5467 58.9885 30.248C59.5005 29.9493 59.9912 29.4693 60.4605 28.808C60.9512 28.168 61.3352 27.3787 61.6125 26.44L62.4125 23.656C61.6872 24.3387 60.9832 24.84 60.3005 25.16C59.6178 25.5013 58.8498 25.672 57.9965 25.672C56.5885 25.672 55.5005 25.2347 54.7325 24.36C53.9858 23.4853 53.6125 22.3227 53.6125 20.872C53.6125 20.4453 53.6765 19.976 53.8045 19.464L55.8525 11.336L55.0205 10.376C54.9565 10.312 54.9245 10.2373 54.9245 10.152C54.9245 9.93867 55.1592 9.768 55.6285 9.64C56.0978 9.49067 56.7485 9.416 57.5805 9.416C58.9458 9.416 59.6925 10.0667 59.8205 11.368L57.5485 20.456Z" fill="#3E1F55"/>
                 <path d="M89.6943 4.68C90.0569 5.40533 90.2383 5.96 90.2383 6.344C90.2383 6.55733 90.1956 6.70667 90.1103 6.792C89.9823 6.94133 89.6303 7.15467 89.0543 7.432C88.4783 7.70933 88.0943 7.89067 87.9023 7.976C87.2836 8.25333 86.3556 8.88267 85.1183 9.864C83.9023 10.824 82.7503 11.8267 81.6623 12.872C80.5956 13.896 79.9556 14.6107 79.7423 15.016C79.9343 15.6773 80.4463 16.584 81.2783 17.736C82.1103 18.8667 82.9529 19.8907 83.8063 20.808C84.6809 21.7253 85.2463 22.184 85.5023 22.184L85.8223 22.216C86.0783 22.2587 86.3769 22.4933 86.7183 22.92C87.0596 23.3467 87.2303 23.7413 87.2303 24.104C87.2303 24.4027 87.0489 24.584 86.6863 24.648C86.4516 24.6907 86.1103 24.7973 85.6623 24.968C85.2569 25.1173 84.8623 25.192 84.4783 25.192C84.0303 25.192 83.6889 25.1387 83.4543 25.032C82.7929 24.7547 81.9183 24.0827 80.8303 23.016C79.7636 21.928 78.7716 20.712 77.8542 19.368C76.9369 18.024 76.3396 16.84 76.0623 15.816L74.0463 23.848C73.8969 24.4667 73.6623 24.8827 73.3423 25.096C73.0436 25.3093 72.4676 25.416 71.6143 25.416C70.9529 25.416 70.4623 25.2987 70.1423 25.064C69.8436 24.8507 69.6943 24.4773 69.6943 23.944C69.6943 23.7093 69.7263 23.4853 69.7903 23.272L73.6623 8.36L73.5663 4.968C73.6516 4.60533 73.9183 4.31733 74.3663 4.104C74.8356 3.89067 75.2623 3.784 75.6463 3.784C76.2223 3.784 76.7876 4.01867 77.3423 4.488C77.9183 4.936 78.2169 5.49067 78.2383 6.152C78.2383 6.62133 77.7049 9.05333 76.6383 13.448C77.3849 12.424 78.4943 11.1867 79.9663 9.736C81.4596 8.28533 82.9529 6.99467 84.4463 5.864C85.9396 4.73333 87.1129 4.09333 87.9663 3.944C88.1796 3.944 88.4889 3.99733 88.8943 4.104C89.2996 4.18933 89.5663 4.38133 89.6943 4.68ZM102.283 24.904C102.198 25.2667 102.006 25.512 101.707 25.64C101.408 25.7893 101.014 25.864 100.523 25.864C99.051 25.864 98.315 25.5333 98.315 24.872L98.507 23.656C97.9097 24.104 97.2057 24.552 96.395 25C95.5843 25.448 94.9123 25.672 94.379 25.672C91.2217 25.672 89.643 24.6373 89.643 22.568C89.643 19.048 90.699 15.2293 92.811 11.112C93.067 10.6213 93.3337 10.2693 93.611 10.056C93.9097 9.84267 94.411 9.736 95.115 9.736C95.8617 9.736 96.4163 9.84267 96.779 10.056C97.163 10.248 97.355 10.4827 97.355 10.76C97.355 10.824 97.2377 11.016 97.003 11.336C96.7683 11.6133 96.5657 11.8907 96.395 12.168C94.3897 15.5173 93.387 18.7813 93.387 21.96C93.387 22.2373 93.4937 22.4827 93.707 22.696C93.9203 22.9093 94.1123 23.016 94.283 23.016C94.7523 23.016 95.5417 22.792 96.651 22.344C97.7817 21.896 98.6457 21.4373 99.243 20.968L99.883 18.376C100.651 15.2827 101.131 13.384 101.323 12.68C101.558 11.8267 101.856 11.1333 102.219 10.6C102.603 10.0453 103.2 9.768 104.011 9.768C105.142 9.768 105.707 10.1093 105.707 10.792C105.707 10.8987 105.675 11.0373 105.611 11.208C105.568 11.3573 105.536 11.4853 105.515 11.592L104.235 16.776C103.211 20.8933 102.56 23.6027 102.283 24.904Z" fill="#F47C7C"/>
                </svg>
          <h3 className='text-uppercase text-center mb-5'>Create an account</h3>
          <MDBInput
            ref={nameRef}
            wrapperClass='mb-4'
            label='Your Name'
            size='sm'
            id='form1'
            type='text'
            required
          />
          <MDBInput
            ref={emailRef}
            wrapperClass='mb-4'
            label='Your Email'
            size='sm'
            id='form2'
            type='email'
            required
          />
          <MDBInput
            ref={phoneRef}
            wrapperClass='mb-4'
            label='Phonenumber'
            size='sm'
            id='form3'
            type='text'
            required
          />
          <MDBInput
            ref={PasswordRef}
            wrapperClass='mb-4'
            label=' password'
            size='sm'
            id='form4'
            type='password'
            required
          />
          <div className='d-flex flex-row justify-content-center mb-4'>
          <h6 className="text-uppercase text-center mb-2"> Already  Register   <Link to={"/login"}>LOGIN</Link></h6>
          </div>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={handleSubmit}>
            Register
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default RRegistration;
