import sys
import json
import joblib
import numpy as np

# Load the model and scaler
model = joblib.load("model.pkl")
scaler = joblib.load("scaler.pkl")

# Get the data from Node backend
input_data = json.loads(sys.argv[1])

# Mappings for categorical variables
gender_map = {"male": 1, "female": 0}
married_map = {"yes": 1, "no": 0}
education_map = {"graduate": 1, "not_graduate": 0}
self_employed_map = {"yes": 1, "no": 0}
property_area_map = {"urban": 2, "semiurban": 1, "rural": 0}

# Convert and encode input values
Gender = gender_map[input_data["Gender"].lower()]
Married = married_map[input_data["Married"].lower()]
Dependents = int(input_data["Dependents"]) if input_data["Dependents"].isdigit() else 0
Education = education_map[input_data["Education"].lower()]
Self_Employed = self_employed_map[input_data["Self_Employed"].lower()]
ApplicantIncome = float(input_data["ApplicantIncome"])
CoapplicantIncome = float(input_data["CoapplicantIncome"])
LoanAmount = float(input_data["LoanAmount"])
Loan_Amount_Term = float(input_data["Loan_Amount_Term"])
Credit_History = float(input_data["Credit_History"])
Property_Area = property_area_map[input_data["Property_Area"].lower()]

# Final input vector
X = np.array([[Gender, Married, Dependents, Education, Self_Employed,
               ApplicantIncome, CoapplicantIncome, LoanAmount,
               Loan_Amount_Term, Credit_History, Property_Area]])

# Scale the input
X_scaled = scaler.transform(X)

import json

# Predict
prediction = model.predict(X_scaled)[0]



# Output result
result = "Eligible" if prediction == 1 else "Not Eligible"

print(json.dumps({"result": result}))



