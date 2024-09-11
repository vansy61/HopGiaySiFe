import PasswordStrengthBar from "react-password-strength-bar";

export default function CustomPasswordStrengthBar({password}) {
    return (
        <PasswordStrengthBar
            password={password}
            scoreWordStyle={{display: "none"}}
            className="custom-strength-bar"
            barColors={['#ddd', '#17c653', '#17c653', '#17c653', '#17c653']}
        />
    )
}