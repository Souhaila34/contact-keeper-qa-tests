
# Bug Reports - Contact Keeper QA

## ✅ Bug 1: Duplicate Contact Creation Allowed

**Title:** Application allows creation of duplicate contacts with same name, email, and phone number.

**Steps to Reproduce:**
1. Log in to the app.
2. Go to the “Add Contact” page.
3. Create a contact with a name, email, and phone number.
4. Submit the form.
5. Repeat the same steps using the exact same data.

**Expected Behavior:**  
The application should display an error message indicating the contact already exists.

**Actual Behavior:**  
The duplicate contact is created successfully with no validation error.

**Severity:** Medium  
**Priority:** High

**Suggested Fix:**  
Add server-side and client-side validation to prevent duplicates based on unique fields like email and/or phone number.

---

## ✅ Bug 2: No Phone Number Validation

**Title:** No validation on phone number field

**Steps to Reproduce:**
1. Log in to the app.
2. Navigate to “Add Contact.”
3. Enter valid name and email, but enter an invalid phone number (e.g., “abcd1234”).
4. Submit the form.

**Expected Behavior:**  
The form should prevent submission and display a message like “Please enter a valid phone number.”

**Actual Behavior:**  
The form accepts invalid phone numbers and creates the contact.

**Severity:** Low  
**Priority:** Medium

**Suggested Fix:**  
Use a regex pattern or input type validation (`input type="tel"`, or JavaScript/HTML5 validation) to ensure phone numbers are numeric and correctly formatted.

---

## ✅ Bug 3: Backend Server Error on Invalid Contact Data

**Title:** Server returns 400/500 errors when submitting malformed contact data

**Steps to Reproduce:**
1. Attempt to create a contact with empty or invalid fields.
2. Open Developer Tools > Network tab.
3. Submit the form.

**Expected Behavior:**  
The server should respond with a clear validation message (e.g., 400 Bad Request with detailed error).

**Actual Behavior:**  
The console shows `400 (Bad Request)` and sometimes `500 (Internal Server Error)` with no user-friendly feedback.

**Console Errors:**
```
Failed to load resource: the server responded with a status of 400 (Bad Request)
Failed to load resource: the server responded with a status of 500 (Internal Server Error)
```

**Severity:** Medium  
**Priority:** High

**Suggested Fix:**  
Improve backend input validation and return user-friendly error messages. Also, add frontend handling for API response errors.
