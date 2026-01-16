# Troubleshooting Guide: Data Not Saving to Google Sheets

## Quick Diagnostic Steps

Follow these steps in order to identify and fix the issue:

### Step 1: Verify Google Apps Script Deployment

1. Open your Google Sheet
2. Go to **Extensions > Apps Script**
3. Make sure the NEW enhanced code from `backend/code.gs` is pasted
4. Click **Save Project** (💾 icon)

### Step 2: Run Initial Setup Test

In the Apps Script editor:
1. Select **`initialSetup`** from the function dropdown (top toolbar)
2. Click **Run** (▶️ button)
3. If prompted, click **Review Permissions** > Choose your account > **Allow**
4. Check the **Execution log** (View > Logs or Ctrl+Enter)
   - You should see: `✓ Spreadsheet access: OK` and `✓ Sheet access: OK`
   - If you see errors, check that headers exist in Row 1

### Step 3: Test Direct Submission

In the Apps Script editor:
1. Select **`testSubmission`** from the function dropdown
2. Click **Run**
3. Check your Google Sheet - you should see a new row with test data
4. **If this works but the website doesn't**, the issue is with deployment or the frontend URL

### Step 4: Verify Deployment Settings

1. Click **Deploy > Manage deployments**
2. Check the active deployment settings:
   - **Execute as**: Must be **Me (your email)**
   - **Who has access**: Must be **Anyone** (NOT "Anyone with Google account")
3. If settings are wrong:
   - Click **Edit** (pencil icon)
   - Fix the settings
   - Click **Deploy**
   - **Copy the NEW Web App URL** (it will change!)

### Step 5: Update Frontend with Correct URL

> [!IMPORTANT]
> Each time you create a NEW deployment, the URL changes. You must update the frontend.

1. Copy your Web App URL from the deployment
2. Open `components/ui/lead-capture.tsx`
3. Find line ~27 with `GOOGLE_SCRIPT_URL`
4. Replace the URL with your new one
5. Save the file

### Step 6: Check Execution Logs

After submitting the form on your website:
1. Go back to Apps Script editor
2. Click **View > Executions** (or **Executions** in left sidebar)
3. Look for recent executions
4. Click on any execution to see detailed logs
5. Look for errors or the "SUCCESS: Data appended" message

## Common Issues & Solutions

### Issue: "Authorization required" or "Script not authorized"
**Solution**: Run `initialSetup` function and authorize the script

### Issue: Deployment URL returns HTML instead of JSON
**Solution**: You're using the wrong URL. Use the **Web App URL**, not the script editor URL

### Issue: Form submits but no data appears
**Solutions**:
- Check that you're using the **latest** deployment URL
- Verify "Who has access" is set to **Anyone**
- Check Execution logs (View > Executions) for errors
- Make sure Row 1 has the correct headers

### Issue: Headers are wrong or missing
**Expected headers in Row 1:**
- A1: `First Name`
- B1: `Last Name`
- C1: `Mobile Number`
- D1: `Email Address`
- E1: `Date of Contact`
- F1: `Contact Time`

### Issue: Mobile numbers showing in scientific notation
**Solution**: The enhanced script now saves mobile as plain text. If you have old data with this issue, format the column as "Plain Text"

### Issue: Getting CORS errors in browser console
**This is NORMAL** when using `mode: 'no-cors'`. The data is still being sent and saved, you just can't read the response. Check your Google Sheet to confirm.

## Testing with Browser Console

To verify the endpoint is working, open your browser console and run:

```javascript
fetch("YOUR_WEB_APP_URL", {
  method: "POST",
  mode: "no-cors",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    firstName: "Console",
    lastName: "Test",
    mobile: "1234567890",
    email: "console@test.com"
  })
}).then(() => console.log("Sent!"))
```

Then check your Google Sheet for the new entry.

## Still Not Working?

1. **Create a completely NEW deployment**:
   - Delete the old deployment (Deploy > Manage deployments > Archive)
   - Create new: Deploy > New deployment > Web app
   - Copy the new URL
   - Update `lead-capture.tsx` with the new URL

2. **Check browser Network tab**:
   - Open DevTools > Network
   - Submit the form
   - Look for the POST request to your Apps Script URL
   - Check if it's being sent at all

3. **Verify the payload**:
   - In Network tab, click the request
   - Check the "Payload" or "Request" tab
   - Confirm the JSON has all required fields: `firstName`, `lastName`, `mobile`, `email`
