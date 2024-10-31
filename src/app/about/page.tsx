export default async function About() {
    await new Promise((resolve) => {
        setTimeout(resolve, 5000);
    });

    return (
        <div className="background flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat bg-opacity-50 text-gray-800">
            <h1 className="p-10 font-semibold font-serif text-3xl underline">
                
            </h1>
            <p className="text-center p-4 text-lg mb-6">
                Welcome to my website! Here’s a brief summary of what you can find:
            </p>
            <ul className="text-center p-4 list-disc list-inside space-y-2">
                <li>✅ **Component Architecture:** Built with a modular approach for easy maintenance.</li>
                <li>✅ **Loading State Management:** Enhances user experience during data fetching.</li>
                <li>✅ **Error Handling:** Informative mechanisms to address any issues.</li>
                <li>✅ **404 Not Found Statement:** Custom page for non-existent routes.</li>
                <li>✅ **User-Friendly Design:** Focused on usability and accessibility.</li>
            </ul>
            <p className="text-center p-4 text-lg mt-6">
                Thank you for visiting! I hope you find the content valuable.
            </p>
        </div>
    );
}
