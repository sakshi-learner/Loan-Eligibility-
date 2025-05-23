import React, { useState } from 'react';
import axios from 'axios';
import   './LoanForm.css';

const LoanForm = () => {
  const [formData, setFormData] = useState({
    Gender: '',
    Married: '',
    Dependents: '',
    Education: '',
    Self_Employed: '',
    ApplicantIncome: '',
    CoapplicantIncome: '',
    LoanAmount: '',
    Loan_Amount_Term: '',
    Credit_History: '',
    Property_Area: ''
  });

  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/predict', formData);
      setResult(response.data.result);
    } catch (error) {
      console.error(error);
      setResult('Error predicting eligibility');
    }
  };

  return (
    <div className="form-container" id='form'>
      <h2>Loan Eligibility Predictor</h2>
      <form onSubmit={handleSubmit}>

        <label>Gender:</label>
        <select name="Gender" value={formData.Gender} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label>Married:</label>
        <select name="Married" value={formData.Married} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <label>Dependents:</label>
        <select name="Dependents" value={formData.Dependents} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3+">3+</option>
        </select>

        <label>Education:</label>
        <select name="Education" value={formData.Education} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="graduate">Graduate</option>
          <option value="not graduate">Not Graduate</option>
        </select>

        <label>Self Employed:</label>
        <select name="Self_Employed" value={formData.Self_Employed} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <label>Applicant Income:</label>
        <input
          type="number"
          name="ApplicantIncome"
          value={formData.ApplicantIncome}
          onChange={handleChange}
          required
          min="0"
        />

        <label>Co-applicant Income:</label>
        <input
          type="number"
          name="CoapplicantIncome"
          value={formData.CoapplicantIncome}
          onChange={handleChange}
          required
          min="0"
        />

        <label>Loan Amount (in thousands):</label>
        <input
          type="number"
          name="LoanAmount"
          value={formData.LoanAmount}
          onChange={handleChange}
          required
          min="0"
        />

        <label>Loan Amount Term (in months):</label>
        <input
          type="number"
          name="Loan_Amount_Term"
          value={formData.Loan_Amount_Term}
          onChange={handleChange}
          required
          min="1"
        />

        <label>Credit History ( Yes/No):</label>
        <select name="Credit_History" value={formData.Credit_History} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>

        <label>Property Area:</label>
        <select name="Property_Area" value={formData.Property_Area} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="urban">Urban</option>
          <option value="semiurban">Semiurban</option>
          <option value="rural">Rural</option>
        </select>

        <button type="submit">Check Eligibility</button>
      </form>

      {result && <h3>Result: {result}</h3>}
    </div>
  );
};

export default LoanForm;

