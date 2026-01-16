/**
 * Lead Capture Backend for Calistic Media
 * 
 * Handles POST requests from the website, validates data, and appends to Google Sheet.
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Sheet
 * 2. Set header row (Row 1):
 *    A1: First Name | B1: Last Name | C1: Mobile Number | D1: Email Address | E1: Date of Contact | F1: Contact Time
 * 3. Open Extensions > Apps Script
 * 4. Paste this code
 * 5. Run 'initialSetup' function once to verify permissions
 * 6. Deploy as Web App (Execute as: Me, Who has access: Anyone)
 */

// Configuration
var SHEET_NAME = "Sheet1"; // Change if your sheet name is different
var TZONE = "Asia/Kolkata"; // IST Timezone

// Main function to handle POST requests
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // Wait up to 10s for other processes
  
  try {
    // 1. Validate Request
    if (!e || !e.postData || !e.postData.contents) {
      return errorResponse("Invalid request body");
    }
    
    // 2. Parse Data
    var data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (err) {
      return errorResponse("Malformed JSON");
    }
    
    // 3. Validate Fields
    var requiredFields = ["firstName", "lastName", "mobile", "email"];
    var missingFields = [];
    
    for (var i = 0; i < requiredFields.length; i++) {
        if (!data[requiredFields[i]] || data[requiredFields[i]].toString().trim() === "") {
            missingFields.push(requiredFields[i]);
        }
    }
    
    if (missingFields.length > 0) {
      return errorResponse("Missing required fields: " + missingFields.join(", "));
    }
    
    // 4. Prepare Data for Sheet
    var now = new Date();
    var dateString = Utilities.formatDate(now, TZONE, "dd/MM/yyyy");
    var timeString = Utilities.formatDate(now, TZONE, "HH:mm:ss");
    
    var rowData = [
      data.firstName,
      data.lastName,
      "'" + data.mobile, // Prefix with apostrophe to force string format for numbers
      data.email,
      dateString,
      timeString
    ];
    
    // 5. Append to Sheet
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      // Fallback: try to get the first sheet if specific name not found
      sheet = doc.getSheets()[0];
    }
    
    sheet.appendRow(rowData);
    
    // 6. Return Success
    return successResponse("Data saved successfully");
    
  } catch (err) {
    Logger.log("Error: " + err.toString());
    return errorResponse("Server error: " + err.toString());
  } finally {
    lock.releaseLock();
  }
}

// Handle GET requests (Health Check)
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "success",
    message: "Lead Capture Backend is Request Ready",
    timestamp: new Date().toISOString()
  })).setMimeType(ContentService.MimeType.JSON);
}


// Helper: Success Response
function successResponse(message) {
  var output = {
    status: "success",
    message: message,
    timestamp: new Date().toISOString()
  };
  
  return ContentService.createTextOutput(JSON.stringify(output))
    .setMimeType(ContentService.MimeType.JSON);
}

// Helper: Error Response
function errorResponse(message) {
  var output = {
    status: "error",
    message: message,
    error: message
  };
  
  return ContentService.createTextOutput(JSON.stringify(output))
    .setMimeType(ContentService.MimeType.JSON);
}

// Test function - Run this in script editor to check permissions
function initialSetup() {
  var doc = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = doc.getSheetByName(SHEET_NAME) || doc.getSheets()[0];
  
  Logger.log("Accessing sheet: " + sheet.getName());
  Logger.log("Current rows: " + sheet.getLastRow());
  Logger.log("Setup verification complete. You can now deploy.");
}
