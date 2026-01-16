/**
 * Lead Capture Backend for Calistic Media - ENHANCED VERSION
 * 
 * Handles POST requests from the website, validates data, and appends to Google Sheet.
 * Includes comprehensive error handling and logging for debugging.
 * 
 * DEPLOYMENT CHECKLIST:
 * 1. Create Google Sheet with headers in Row 1:
 *    A1: First Name | B1: Last Name | C1: Mobile Number | D1: Email Address | E1: Date of Contact | F1: Contact Time
 * 2. Open Extensions > Apps Script
 * 3. Paste this code
 * 4. Click "Save Project" (disk icon)
 * 5. Run "initialSetup" function once (select it from dropdown, click Run)
 * 6. Authorize the script when prompted
 * 7. Deploy: Deploy > New deployment > Web app
 *    - Execute as: Me
 *    - Who has access: Anyone (NOT "Anyone with Google account")
 * 8. Copy the Web App URL
 */

// Configuration - automatically uses first sheet
var TZONE = "Asia/Kolkata"; // IST Timezone

/**
 * Handles POST requests from the frontend
 */
function doPost(e) {
  // Detailed logging for debugging
  Logger.log("=== NEW REQUEST ===");
  Logger.log("Request received at: " + new Date().toISOString());
  
  try {
    // Log raw request
    if (e && e.postData) {
      Logger.log("Request content type: " + e.postData.type);
      Logger.log("Request contents: " + e.postData.contents);
    }
    
    // 1. Validate Request
    if (!e || !e.postData || !e.postData.contents) {
      Logger.log("ERROR: Invalid request - missing postData");
      return createResponse("error", "Invalid request body");
    }
    
    // 2. Parse JSON Data
    var data;
    try {
      data = JSON.parse(e.postData.contents);
      Logger.log("Parsed data: " + JSON.stringify(data));
    } catch (parseErr) {
      Logger.log("ERROR: JSON parse failed - " + parseErr.toString());
      return createResponse("error", "Malformed JSON: " + parseErr.toString());
    }
    
    // 3. Validate Required Fields
    var requiredFields = ["firstName", "lastName", "mobile", "email"];
    var missingFields = [];
    
    for (var i = 0; i < requiredFields.length; i++) {
      var field = requiredFields[i];
      if (!data[field] || data[field].toString().trim() === "") {
        missingFields.push(field);
      }
    }
    
    if (missingFields.length > 0) {
      Logger.log("ERROR: Missing fields - " + missingFields.join(", "));
      return createResponse("error", "Missing required fields: " + missingFields.join(", "));
    }
    
    // 4. Get Spreadsheet and Sheet
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    if (!spreadsheet) {
      Logger.log("ERROR: Could not access spreadsheet");
      return createResponse("error", "Could not access spreadsheet");
    }
    
    // Use the first sheet automatically
    var sheet = spreadsheet.getSheets()[0];
    Logger.log("Using sheet: " + sheet.getName());
    
    // 5. Prepare Timestamp Data
    var now = new Date();
    var dateString = Utilities.formatDate(now, TZONE, "dd/MM/yyyy");
    var timeString = Utilities.formatDate(now, TZONE, "HH:mm:ss");
    
    Logger.log("Date: " + dateString + ", Time: " + timeString);
    
    // 6. Prepare Row Data
    var rowData = [
      data.firstName.toString().trim(),
      data.lastName.toString().trim(),
      data.mobile.toString().trim(),
      data.email.toString().trim(),
      dateString,
      timeString
    ];
    
    Logger.log("Row data prepared: " + JSON.stringify(rowData));
    
    // 7. Append to Sheet
    sheet.appendRow(rowData);
    Logger.log("SUCCESS: Data appended to row " + sheet.getLastRow());
    
    // 8. Return Success Response
    return createResponse("success", "Data saved successfully", {
      rowNumber: sheet.getLastRow(),
      timestamp: now.toISOString()
    });
    
  } catch (err) {
    // Log detailed error
    Logger.log("CRITICAL ERROR: " + err.toString());
    Logger.log("Error stack: " + err.stack);
    return createResponse("error", "Server error: " + err.toString());
  }
}

/**
 * Handles GET requests - for testing endpoint availability
 */
function doGet(e) {
  Logger.log("GET request received");
  
  try {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheets()[0];
    
    return createResponse("success", "Lead Capture Backend is Running", {
      sheetName: sheet.getName(),
      totalRows: sheet.getLastRow(),
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    return createResponse("error", "Backend error: " + err.toString());
  }
}

/**
 * Helper function to create consistent JSON responses
 */
function createResponse(status, message, extraData) {
  var response = {
    status: status,
    message: message,
    timestamp: new Date().toISOString()
  };
  
  // Add extra data if provided
  if (extraData) {
    for (var key in extraData) {
      response[key] = extraData[key];
    }
  }
  
  Logger.log("Response: " + JSON.stringify(response));
  
  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Test function - Run this to verify setup
 */
function initialSetup() {
  try {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    Logger.log("✓ Spreadsheet access: OK");
    Logger.log("  Spreadsheet name: " + spreadsheet.getName());
    
    var sheet = spreadsheet.getSheets()[0];
    Logger.log("✓ Sheet access: OK");
    Logger.log("  Sheet name: " + sheet.getName());
    Logger.log("  Current rows: " + sheet.getLastRow());
    
    // Check if headers exist
    if (sheet.getLastRow() >= 1) {
      var headers = sheet.getRange(1, 1, 1, 6).getValues()[0];
      Logger.log("  Headers found: " + headers.join(" | "));
    } else {
      Logger.log("⚠ Warning: No headers found. Please add headers in Row 1:");
      Logger.log("  A1: First Name | B1: Last Name | C1: Mobile Number | D1: Email Address | E1: Date of Contact | F1: Contact Time");
    }
    
    Logger.log("\n✓✓✓ Setup verification complete!");
    Logger.log("You can now deploy this script as a Web App.");
    
  } catch (err) {
    Logger.log("✗ ERROR during setup: " + err.toString());
    Logger.log("Make sure you have access to the spreadsheet.");
  }
}

/**
 * Test function - Simulate a form submission
 */
function testSubmission() {
  var testData = {
    postData: {
      type: "application/json",
      contents: JSON.stringify({
        firstName: "Test",
        lastName: "User",
        mobile: "9876543210",
        email: "test@example.com"
      })
    }
  };
  
  Logger.log("Running test submission...");
  var result = doPost(testData);
  Logger.log("Test complete. Check the sheet for a new row.");
  
  return result;
}
