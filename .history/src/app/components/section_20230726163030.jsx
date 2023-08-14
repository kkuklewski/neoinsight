function NestedSection({ children, className }) {

    const classes = `py-2 lg:py-4 xl:py-8 w-full ${className}`;

    return (
        <div className={`lg:min-h-screen lg:flex lg:flex-col lg:items-center lg:justify-center ${classes}`}>
            <div className="container px-6 py-6 lg:px-8 mx-auto">
                {children}
            </div>
        </div>
    );
}

export default NestedSection;