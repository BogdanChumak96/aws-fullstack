import {
    Button,
    Flex,
    Heading,
    Image,
    TextField,
    View,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const LoginForm = () => {
    return (
        <View>
            <Image src="/logo.png" />
            <Heading>Login</Heading>
            <Flex>
                <TextField placeholder="Username" />
                <TextField placeholder="Password" type="password" />
            </Flex>
            <Button>Log in</Button>
        </View>
    );
};

export default LoginForm;