# Google Apps Script Deployment Guide

This guide explains how to set up the backend for the Calistic Media Lead Capture system.

## 1. Setup Google Sheet

1.  Go to [Google Sheets](https://sheets.google.com) and create a **Blank** spreadsheet.
2.  Name it `Calistic Media Leads`.
3.  In `Sheet1`, set the following headers in the first row:
    *   **A1**: First Name
    *   **B1**: Last Name
    *   **C1**: Mobile Number
    *   **D1**: Email Address
    *   **E1**: Date of Contact
    *   **F1**: Contact Time

## 2. Add Backend Code

1.  In the Google Sheet, go to **Extensions > Apps Script**.
2.  Delete any code in the `Code.gs` file.
3.  Copy the code from the project file `backend/code.gs` and paste it into the editor.
4.  Hit **Save** (Floppy disk icon).

## 3. Deployment

1.  Click the blue **Deploy** button > **New deployment**.
2.  Click the **Select type** gear icon > **Web app**.
3.  Fill in the details:
    *   **Description**: Lead Capture Backend v1
    *   **Execute as**: `Me (your_email@gmail.com)`
    *   **Who has access**: `Anyone` **(Important: Must be 'Anyone', not 'Anyone with Google account')**
4.  Click **Deploy**.
5.  **Authorize Access**: You will be asked to authorize the script.
    *   Click "Review Permissions".
    *   Choose your account.
    *   (If you see "Google hasn't verified this app", click **Advanced** > **Go to ... (unsafe)** - since you are the author, it is safe).
    *   Click **Allow**.
6.  Copy the **Web App URL** (starts with `https://script.google.com/macros/s/...`).

## 4. Testing

### Using Curl
Run this command in your terminal (replace `YOUR_WEB_APP_URL` with the one you just got):

```bash
curl -L -X POST "YOUR_WEB_APP_URL" \
     -H "Content-Type: application/json" \
     -d '{"firstName":"Test", "lastName":"User", "mobile":"9999999999", "email":"test@example.com"}'
```

**Expected Output:**
```json
{"status":"success","message":"Data saved successfully","timestamp":"..."}
```

## 5. Troubleshooting checklist

-   **Error 403 Forbidden**: Likely "Who has access" was not set to "Anyone". Redeploy and update settings.
-   **CORS Error / Failed to fetch**: If testing from browser console, ensures you are sending standard JSON. Note that `mode: 'no-cors'` in the frontend will hide the response content, which is normal behavior for this setup.
-   **Data not appearing**: Check the Execution log in Apps Script editor (**View > Executions**) to see if the script ran and if any errors occurred.

## 6. Updating the Script
If you make changes to the code:
1.  Save the changes.
2.  Click **Deploy > Manage deployments**.
3.  Click the **Edit** (pencil) icon on the active deployment.
4.  Under **Version**, select **New version**.
5.  Click **Deploy**.
