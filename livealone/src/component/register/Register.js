export default function SendEmailAuth(){

    function sendEmail(email){
        alert("이메일 전송했습니다.");
    }

    function verifyEmail(email, emailAuth){
        alert("이메일 인증입니다.");
    }

    function register() {
        alert("회원가입입니다.")
    }

    return (
        <div>
            <h1>회원가입</h1>
            <input type="text"></input>
            <button onClick={sendEmail}>이메일 전송</button>
            <button onClick={verifyEmail}>이메일 인증</button>
            <button onClick={register}>회원가입</button>
        </div>
    )
}