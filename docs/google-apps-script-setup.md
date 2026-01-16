# Google Apps Script Deployment Guide

This guide explains how to set up the backend for the Calistic Media Lead Capture system.

> [!IMPORTANT]
> If data is not appearing in your sheet, see [Troubleshooting Guide](troubleshooting.md) for detailed debugging steps.

## 1. Setup Google Sheet

1.  Go to [Google Sheets](https://sheets.google.com) and create a **Blank** spreadsheet.
2.  Name it `Calistic Media Leads`.
3.  In `Sheet1`, set the following headers in the **first row**:
    *   **A1**: First Name
    *   **B1**: Last Name
    *   **C1**: Mobile Number
    *   **D1**: Email Address
    *   **E1**: Date of Contact
    *   **F1**: Contact Time

## 2. Add Backend Code

1.  In the Google Sheet, go to **Extensions > Apps Script**.
2.  Delete any code in the `Code.gs` file.
3.  Copy the **entire** code from the project file `backend/code.gs` and paste it into the editor.
4.  Click **Save Project** (💾 disk icon).
5.  **Run Initial Test**:
    - Select `initialSetup` from the function dropdown
    - Click ▶️ **Run**
    - Authorize when prompted (Review Permissions > Allow)
    - Check **View > Logs** to confirm success

## 3. Deployment

> [!WARNING]
> Incorrect deployment settings are the #1 cause of data not saving!

1.  Click the blue **Deploy** button > **New deployment**.
2.  Click the **Select type** gear icon > **Web app**.
3.  Fill in the details **EXACTLY**:
    *   **Description**: Lead Capture Backend v1
    *   **Execute as**: `Me (your_email@gmail.com)` ✅
    *   **Who has access**: `Anyone` ✅ **CRITICAL: Must be "Anyone", NOT "Anyone with Google account"**
4.  Click **Deploy**.
5.  **Authorize Access**:
    *   Click "Review Permissions"
    *   Choose your account
    *   If you see "Google hasn't verified this app", click **Advanced** > **Go to ... (unsafe)** - since you are the author, it is safe
    *   Click **Allow**
6.  **Copy the Web App URL** (starts with `https://script.google.com/macros/s/...`)
    - This URL is **different from the script editor URL**
    - Keep this URL - you'll need it for the frontend

## 4. Testing

### Test #1: Direct Script Test
In the Apps Script editor:
1. Select `testSubmission` from the function dropdown
2. Click ▶️ **Run**
3. Check your Google Sheet - you should see a new test row
4. **If this fails**, check the Execution log (View > Executions)

### Test #2: Using Curl
Replace `YOUR_WEB_APP_URL` with your actual URL:

```bash
curl -L -X POST "YOUR_WEB_APP_URL" \
     -H "Content-Type: application/json" \
     -d '{"firstName":"Test", "lastName":"User", "mobile":"9999999999", "email":"test@example.com"}'
```

**Expected Output:**
```json
{"status":"success","message":"Data saved successfully","rowNumber":2,"timestamp":"..."}
```

## 5. Update Frontend

1. Open `components/ui/lead-capture.tsx`
2. Find the line with `GOOGLE_SCRIPT_URL` (around line 27)
3. Replace the URL with your **Web App URL** from step 3.6
4. Save and deploy your Next.js app

## 6. Troubleshooting

If data is **not appearing** in your sheet:

1. ✅ Verify Row 1 has the correct headers
2. ✅ Run `testSubmission` in Apps Script - does it work?
3. ✅ Check "Who has access" is set to **"Anyone"** (not "Anyone with Google account")
4. ✅ Check **View > Executions** in Apps Script for error logs
5. ✅ Verify you're using the **Web App URL**, not the editor URL

**See [Troubleshooting Guide](troubleshooting.md) for detailed debugging steps.**

## 7. Updating the Script

If you make changes to the code:
1.  Save the changes in Apps Script editor
2.  Click **Deploy > Manage deployments**
3.  Click the **Edit** (pencil) icon on the active deployment
4.  Under **Version**, select **New version**
5.  Click **Deploy**
6.  **The URL stays the same - no frontend update needed**
