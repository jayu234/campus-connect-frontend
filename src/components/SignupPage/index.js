import { Box, Container } from '@mui/material';
import SignupForm from './SignupForm';
import styles from './styles';


export default function SignupPage() {
    return (
        <Box sx={styles.root} >
            <div style={styles.formContainer} >
                <Container component={'div'} sx={styles.form} >
                    <SignupForm />
                </Container>
            </div>
        </Box>
    )
};
