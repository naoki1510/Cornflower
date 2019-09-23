import React, { useState, useEffect } from "react";
import TextField, { HelperText, Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";
import { Headline3, Headline6 } from "@material/react-typography";

export default function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    return (
        <div className="login">
            <Headline3>Login</Headline3>
            <Headline6>Username</Headline6>
            <TextField
                label="Username"
                helperText={<HelperText>英数字のみ使用可能です。</HelperText>}
                //onTrailingIconSelect={() => setUsername("")}
                //trailingIcon={<MaterialIcon role="button" icon="delete" />}
            >
                <Input
                    value={username}
                    onChange={e => setUsername(e.currentTarget.value)}
                />
            </TextField>
            <Headline6>Password</Headline6>
            <TextField
                label="Password"
                helperText={<HelperText>8文字以上</HelperText>}
                //onTrailingIconSelect={() => setUsername("")}
                //trailingIcon={<MaterialIcon role="button" icon="delete" />}
            >
                <Input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.currentTarget.value)}
                />
            </TextField>
        </div>
    );
}
