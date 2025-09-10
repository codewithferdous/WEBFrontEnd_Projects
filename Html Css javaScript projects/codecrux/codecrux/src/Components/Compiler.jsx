import axios from 'axios';
import React, { useState } from 'react';

function Compiler() {
  const [language, setLanguage] = useState('');
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  // Mapping languages to their respective JDoodle IDs
  const languageOptions = {
    java: 4,
    'C (gcc)': 6,
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const languageId = languageOptions[language];
    if (!languageId) {
      setOutput('Please select a valid language.');
      return;
    }

    try {
      // Make a POST request to the JDoodle API
      const response = await axios.post(
        'https://api.jdoodle.com/v1/execute',
        {
          script: code, // Your code to compile
          stdin: input, // Input for the program
          language: language.toLowerCase(), // Lowercase language name for JDoodle
          versionIndex: '0', // Version index (0 for the latest version)
          clientId: '43384114e53f468e2c43e6522a8d5063', // Your JDoodle clientId
          clientSecret: '9b710ef98c73fcfe6d0f98f3f91e00d199b85b9b28a1fd99949e97105c31fdd2', // Your JDoodle clientSecret
        }
      );

      // Handle the response
      if (response.data.error) {
        setOutput(`Errors: ${response.data.error}`);
      } else {
        setOutput(`Result: ${response.data.output}`);
      }
    } catch (error) {
      console.error('Error during compilation:', error);
      setOutput('An error occurred during compilation. Please try again.');
    }
  };

  return (
    <div>
      <h1>Online Compiler</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Language:
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="">Select Language</option>
            <option value="java">Java Language</option>
            <option value="C (gcc)">C Language</option>
          </select>
        </label>
        <br />
        <label>
          Code:
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            rows="10"
            cols="50"
            placeholder="Enter your code here..."
          />
        </label>
        <br />
        <label>
          Input:
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows="5"
            cols="50"
            placeholder="Enter any input required by your program..."
          />
        </label>
        <br />
        <button type="submit">Compile</button>
      </form>
      <h2>Output:</h2>
      <pre>{output}</pre>
    </div>
  );
}

export default Compiler;
