import { GoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import { loginGoogleActions } from "../../../../store/slices/loginGoogleSlice";
import jwtDecode from "jwt-decode";
import { Navigate } from "react-router-dom";

export default function LoginGoogleButton() {
  const { isLoggedIn } = useSelector((store) => store.loginGoogle);

  const dispatch = useDispatch();
  const onSuccess = (res) => {
    const decode = jwtDecode(res.credential);
    console.log(decode);
    const newUser = {
      name: decode.name,
      avatar: decode.picture,
    };
    dispatch(loginGoogleActions.login(newUser));
    localStorage.setItem("token", res.credential);
  };

  const onError = () => {
    dispatch(loginGoogleActions.loginFail());
  };

  return (
    <div>
      <GoogleLogin
        text="signin"
        theme="outline"
        onError={onError}
        onSuccess={onSuccess}
      />
      {/* {isLoggedIn && <Navigate to='/'/>} */}
    </div>
  );
}
