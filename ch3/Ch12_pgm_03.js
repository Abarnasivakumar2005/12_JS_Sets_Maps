const countriesAPI = 'https://restcountries.com/v2/all';

// Function to get the most spoken languages
const mostSpokenLanguages = async (countries, topN) => {
  try {
    const response = await fetch(countriesAPI);
    const data = await response.json();

    const languageCount = {};

    // Count the number of speakers for each language
    data.forEach(country => {
      country.languages.forEach(language => {
        languageCount[language.name] = (languageCount[language.name] || 0) + country.population;
      });
    });

    // Convert the languageCount object to an array and sort it
    const sortedLanguages = Object.entries(languageCount)
      .map(([language, speakers]) => ({ [language]: speakers }))
      .sort((a, b) => {
        const langA = Object.values(a)[0];
        const langB = Object.values(b)[0];
        return langB - langA; // Sort in descending order
      })
      .slice(0, topN); // Get the top N languages

    return sortedLanguages;
  } catch (err) {
    console.error(err);
  }
};

// Example usage
mostSpokenLanguages(countriesAPI, 10).then(result => console.log(result));
mostSpokenLanguages(countriesAPI, 3).then(result => console.log(result));
