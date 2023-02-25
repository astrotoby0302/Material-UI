import * as React from 'react'
import {
    Container,
    Paper,
    Typography,
    Stepper,
    Step,
    Box,
    Button,
    StepLabel
} from '@mui/material'
import HeaderComp from '../../components/HeaderComp';
import AddressFormComp from '../../components/AddressFormComp';
import PaymentFormComp from '../../components/PaymentFormComp';
import ReviewComp from '../../components/ReviewComp';
import CopyrightComp from '../../components/CopyrightComp';
import { steps } from '../../constants/Variables';

function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <AddressFormComp />;
      case 1:
        return <PaymentFormComp />;
      case 2:
        return <ReviewComp />;
      default:
        throw new Error('Unknown step');
    }
}

const CheckOut = () => {
    const [activeStep, setActiveStep] = React.useState<number>(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <>
            <HeaderComp />
            <Container component="main" maxWidth="sm">
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <React.Fragment>
                        <Typography variant="h5" gutterBottom>
                            Thank you for your order.
                        </Typography>
                        <Typography variant="subtitle1">
                            Your order number is #2001539. We have emailed your order
                            confirmation, and will send you an update when your order has
                            shipped.
                        </Typography>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                        {getStepContent(activeStep)}
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            {activeStep !== 0 && (
                            <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                Back
                            </Button>
                            )}
                            <Button
                            variant="contained"
                            onClick={handleNext}
                            sx={{ mt: 3, ml: 1 }}
                            >
                            {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                            </Button>
                        </Box>
                        </React.Fragment>
                    )}
                </Paper>
                <CopyrightComp />
            </Container>
        </>
    )
}

export default CheckOut;