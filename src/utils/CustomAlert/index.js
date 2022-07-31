import Alert from 'react-bootstrap/Alert';

const CustomAlert = (props) => {
    let icon;
    if (props.variant === 'success') {
        icon = <i className='fa fa-check-circle' />;
    } else if (props.variant === 'danger') {
        icon = <i className='fa fa-times-circle' />;
    } else if (props.variant === 'warning') {
        icon = <i className='fa fa-exclamation-circle' />;
    }

    return (
        <>
            <Alert key={props.variant} variant={props.variant}>
                {icon} {props.message}
            </Alert>
        </>
    );
}

export default CustomAlert;