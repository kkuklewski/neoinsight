export default function HeadingComponent({ text }) {
    return (
        <div data-aos="fade-up">
            <h2 className="text-base font-semibold leading-7 text-black-pearl-400">Section description</h2>
            <h2 className='text-4xl mb-6 tracking-tight sm:text-6xl'>
                {text}
            </h2>
        </div>
    );
} 