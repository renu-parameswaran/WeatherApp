import ErrorIcon from "@material-ui/icons/Error";
import Typography from "@material-ui/core/Typography";

export default function ErrorMessage({ apiError }) {
    if (!apiError) return null;

    return (
        <>
            <ErrorIcon color="error" />
            <Typography color="error" variant="h6">
                {apiError}
            </Typography>
        </>
    );
}
