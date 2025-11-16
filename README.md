# 🔗 NetSuite Line Item Field Validation  
### Client Script (SuiteScript 2.x)  
**© 2025 Shahmeer Khan**

---

![Banner](https://dummyimage.com/1100x220/0f0f0f/ffffff&text=NetSuite+Line+Item+Field+Validation)

<div align="center">

✨ **SuiteScript 2.x** • 🧪 **Form Validation** • 📦 **Line Item Checks** • ⚠️ **User Prompting**

</div>

---

## 🚀 What This Project Does

This repository contains a **NetSuite Client Script** built using **SuiteScript 2.0** to enforce validation on **line items** within selected transaction forms.

It ensures that specific fields—such as custom bundle fields—are properly filled before a user can proceed with adding or editing a line.

This script demonstrates:

✔ Client-side validation inside item sublists  
✔ How to prevent line submission when fields are missing  
✔ How to show NetSuite dialog alerts  
✔ How to target specific custom forms only  
✔ How to bypass validation for specific user roles  

---

# 🔥 Key Features

### 📝 1. Mandatory Line Item Field Enforcement  
Validates the custom line field:

- **`custcol_1d_bundle`**  
If the field is empty, the script blocks the line and alerts the user.

### 🎯 2. Form-Specific Validation  
Validation runs **only** on selected forms:

- Custom Form IDs (12+ IDs supported)  
- Ensures rules apply only where required  

### 👤 3. Role-Based Skipping  
If a user has a specific role (e.g., admin or integration role), validation is skipped entirely.

### 📑 4. Runs Only on the Item Sublist  
Ensures performance and accuracy by validating:

- Only the **item** sublist  
- Only during line commit events  

### 🔔 5. User-Friendly Error Dialog  
Shows a clear NetSuite UI alert:

> “Bundle field is mandatory please set the bundle field before proceeding.”

---

# 🧠 How It Works

### **1️⃣ Check Form ID**
The script compares the current form against a predefined list.

### **2️⃣ Check User Role**
If the user is allowed to bypass validation, the script exits early.

### **3️⃣ Validate the Item Sublist**
Runs only when modifying the **item** sublist.

### **4️⃣ Validate Required Field**
If `custcol_1d_bundle` is empty → blocks line & alerts user.

---

# 📜 License

MIT License  
Copyright (c) 2025  
**Shahmeer Khan**
