
import Logo from '../../assets/logoautomat.jpg'


function ContainerInsideExample() {
  return (

    <div className='container-fluid navbarctn'>
      <div className='row justify-content-center'>
        <img src={Logo} className='col-md-2 navbarctn__img'></img>
      </div>
    </div>

  );
}

export default ContainerInsideExample;