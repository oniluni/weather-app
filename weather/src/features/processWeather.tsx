import { useState, useEffect, useCallback } from "react";

export const processWeather = () => {
    const [city, setCity] = useState<string>("");
    const [degrees, setDegrees] = useState<string | null>(null);
    const [conditions, setConditions] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
        setError(null);
    };

    const capitalizeFirstLetter = (text: string): string => {
        return text ? text.charAt(0).toUpperCase() + text.slice(1) : "";
    };

    const validateInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.ctrlKey || event.altKey || event.metaKey || event.key.length > 1) return;
        
        if (!/^[a-zA-Zа-яА-ЯёЁ\s-]$/.test(event.key)) {
            event.preventDefault();
        }
    };

    const fetchWeather = useCallback(async (city: string) => {
        if (!city.trim()) {
            setDegrees(null);
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(
                `http://api.weatherapi.com/v1/current.json?key=1f171c6044cc4437af0210607250405&q=${city}&aqi=no`
            );

            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }

            const data = await response.json();
            setDegrees(data.current.temp_c.toString());
            setConditions(data.current.condition.text);
        } catch (err) {
            console.error("Ошибка при запросе:", err);
            setError("Не удалось получить данные о погоде");
            setDegrees(null);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchWeather(city);
        }, 500);

        return () => clearTimeout(timer);
    }, [city, fetchWeather]);

    return {
        city,
        degrees,
        conditions,
        error,
        loading,
        handleCityChange,
        validateInput,
        capitalizeFirstLetter
    };
};