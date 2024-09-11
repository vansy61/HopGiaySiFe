export default function Submit({classes, isLoading, children}) {
    return (
        <button type="submit" className={classes}>
            {
                isLoading ?
                <span className="spinner-border spinner-border-sm" aria-hidden="true"></span> :
                children
            }
        </button>
    )
}