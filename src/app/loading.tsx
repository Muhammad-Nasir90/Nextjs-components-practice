export default function LoadingPage() {
    return (
        <div className="background flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat bg-opacity-50 text-6xl">
            <h1 className="font-serif font-semibold text-2xl text-center">
                
            </h1>
            <img 
                src="/image/loading.png" // Update with the path to your loading logo
                alt="Loading..."
                className="mt-4 w-32 h-32 animate-spin" // Add your desired width and height
            />
        </div>
    );
}
