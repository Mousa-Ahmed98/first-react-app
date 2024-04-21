import antibird from '../Assets/Images/nature.jpg'

import "bootstrap/dist/css/bootstrap.min.css"
function Header(){
   return( <>
        <div className='align-content-center p-5 ' style={{backgroundImage:`url(${antibird})`,width: ``, height: `400px`, backgroundSize: `cover`, }}>
            <h1 className='mx-5'>Mousa Abdelnaby</h1>
            <h3 className='mx-5'>Web developer</h3>
            <button className='m-5 btn btn-success'>Contact me</button>
        </div>
    </>)
}

export default Header;