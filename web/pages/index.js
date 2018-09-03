import FacebookLogin from 'react-facebook-login';
 
const responseFacebook = (response) => {
    console.log(response);
  }
 
const componentClicked = () => ({})

export default () => <div>
    
    <h1>JUAN REP MAX</h1>

    <div>
    <FacebookLogin
    appId="273325693280388"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />
    </div>
</div>;

