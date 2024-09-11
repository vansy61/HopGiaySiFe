export default function FormikInput({formik, name, type, placeholder}) {
    return (
        <>
            <input
                className="form-control bg-transparent mb-3"
                id={name}
                name={name}
                type={type}
                autoComplete="off"
                placeholder={placeholder}
                onChange={formik.handleChange}
                value={formik.values[name]}
            />
            {formik.touched[name] && formik.errors[name] && (
                <div className="text-danger">{formik.errors[name]}</div>
            )}
        </>
    )
}