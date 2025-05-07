import { processWeather } from "./features/processWeather";
import "./App.css";

export function App() {
    const {
        city,
        degrees,
        conditions,
        error,
        loading,
        handleCityChange,
        validateInput,
        capitalizeFirstLetter
    } = processWeather();

    return (
        <main className="items-center fixed inset-0 justify-center bg-white-custom p-4">
            <div className="max-w-xs overflow-hidden bg-pink-light rounded-lg shadow-md p-6 w-full mx-auto">
                <div className="mb-4">
                    <input 
                        spellCheck="false"
                        maxLength={25}
                        onKeyDown={validateInput}
                        value={city} 
                        onChange={handleCityChange}
                        placeholder="Введите город"
                        className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-dark"
                    />
                </div>
                
                <div className="text-center">
                    {loading && <p className="text-pink-dark">Загрузка...</p>}
                    
                    {city && !loading && (
                        <h1 className="break-words text-xl font-semibold text-pink-dark mb-2">
                            Погода в {capitalizeFirstLetter(city)}
                        </h1>
                    )}
                    
                    {degrees && !loading && (
                        <h2 className="text-2xl font-bold text-pink-primary">
                            {degrees}°C
                        </h2>
                    )}

                    {conditions && !loading && (
                        <h3 className="text-lg text-pink-dark mt-2">
                            {conditions}
                        </h3>
                    )}
                    
                    {error && (
                        <p className="text-red-500 mb-2">{error}</p>
                    )}
                </div>
            </div>
        </main>
    );
}