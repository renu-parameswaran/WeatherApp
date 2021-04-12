import CircularProgress from "@material-ui/core/CircularProgress";

export default function LoadingIndicator({ isLoading }) {
    return isLoading ? "" : <CircularProgress />;
}
