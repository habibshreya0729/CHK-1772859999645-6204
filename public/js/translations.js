// Multi-language translations for Urban Governance Portal
const translations = {
    en: {
        // Navigation
        navHome: "Home",
        navDashboard: "Dashboard",
        navComplaint: "File Complaint",
        navTrack: "Track Complaint",
        navAdmin: "Admin",
        navLanguage: "Language",
        
        // Home Page
        homeTitle: "Urban Governance Portal",
        homeSubtitle: "Empowering Citizens, Building Better Cities",
        homeWelcome: "Welcome to the Smart Civic Engagement Platform",
        homeDescription: "Report issues, track complaints, and help improve urban services in your community.",
        homeFileComplaint: "File a Complaint",
        homeTrackComplaint: "Track Complaint",
        homeViewDashboard: "View Dashboard",
        homeFeature1Title: "Easy Reporting",
        homeFeature1Desc: "Submit complaints with photos, location, and detailed descriptions",
        homeFeature2Title: "Real-time Tracking",
        homeFeature2Desc: "Track your complaint status with unique ticket IDs",
        homeFeature3Title: "Transparent Process",
        homeFeature3Desc: "Monitor resolution progress and download PDF reports",
        homeFeature4Title: "Smart AI Assistant",
        homeFeature4Desc: "Get instant help with property tax queries using our chatbot",
        
        // Complaint Form
        complaintTitle: "File a Complaint",
        complaintSubtitle: "Report civic issues in your area",
        complaintName: "Your Name",
        complaintNamePlaceholder: "Enter your full name",
        complaintDepartment: "Department",
        complaintDeptSelect: "Select Department",
        complaintDeptRoads: "Roads and Transport",
        complaintDeptWater: "Water Supply",
        complaintDeptElectricity: "Electricity",
        complaintDeptSanitation: "Sanitation",
        complaintDeptOther: "Other",
        complaintDescription: "Complaint Description",
        complaintDescPlaceholder: "Describe the issue in detail...",
        complaintLocation: "Location",
        complaintLocationLabel: "Location/Address",
        complaintLocationPlaceholder: "Enter location or use map",
        complaintUseLocation: "Use Current Location",
        complaintLatitude: "Latitude",
        complaintLongitude: "Longitude",
        complaintMapInstruction: "Click on the map to select location",
        complaintEvidence: "Upload Evidence Photo",
        complaintEvidenceNote: "Maximum file size: 5MB (JPEG, PNG, JPG only)",
        complaintRemoveImage: "Remove Image",
        complaintSubmit: "Submit Complaint",
        complaintSubmitting: "Submitting...",
        complaintSuccess: "Complaint submitted successfully!",
        complaintTicketId: "Your Ticket ID",
        complaintError: "Error submitting complaint",
        
        // Dashboard
        dashboardTitle: "Admin Complaints Dashboard",
        dashboardSubtitle: "Monitor and manage all citizen complaints",
        dashboardRefresh: "Refresh",
        dashboardTotal: "Total Complaints",
        dashboardPending: "Pending",
        dashboardInProgress: "In Progress",
        dashboardResolved: "Resolved",
        dashboardPriorityTitle: "By Priority",
        dashboardCritical: "Critical",
        dashboardHigh: "High",
        dashboardMedium: "Medium",
        dashboardLow: "Low",
        dashboardAllComplaints: "All Complaints",
        dashboardSearchPlaceholder: "Search complaints...",
        dashboardSearchTicket: "Search Ticket",
        dashboardExportPDF: "Export PDF",
        dashboardAllStatus: "All Status",
        dashboardTableSr: "#",
        dashboardTableTicket: "Ticket ID",
        dashboardTableName: "Name",
        dashboardTableDept: "Department",
        dashboardTableDesc: "Description",
        dashboardTablePriority: "Priority",
        dashboardTableStatus: "Status",
        dashboardTableActions: "Actions",
        dashboardNoComplaints: "No complaints found",
        dashboardLoading: "Loading complaints...",
        dashboardView: "View Details",
        dashboardDownloadPDF: "Download PDF",
        dashboardUpdate: "Update Status",
        dashboardDelete: "Delete",
        dashboardChartTitle: "Complaints by Department",
        
        // Tracking
        trackTitle: "Track Your Complaint",
        trackSubtitle: "Enter your ticket ID to check complaint status",
        trackTicketId: "Ticket ID",
        trackTicketPlaceholder: "Enter Ticket ID (e.g., CMP-20260310-0001)",
        trackSearchBtn: "Track Complaint",
        trackSearching: "Searching...",
        trackFound: "Complaint Found!",
        trackNotFound: "Complaint not found with Ticket ID",
        trackName: "Name",
        trackDepartment: "Department",
        trackDescription: "Description",
        trackLocation: "Location",
        trackCoordinates: "Coordinates",
        trackViewMap: "View Map",
        trackEvidence: "Evidence Photo",
        trackClickImage: "Click image to view full size",
        trackPriority: "Priority",
        trackStatus: "Status",
        trackDate: "Submitted Date",
        trackDownloadPDF: "Download PDF Report",
        
        // Status & Priority
        statusPending: "Pending",
        statusInProgress: "In Progress",
        statusResolved: "Resolved",
        statusRejected: "Rejected",
        priorityCritical: "Critical",
        priorityHigh: "High",
        priorityMedium: "Medium",
        priorityLow: "Low",
        
        // Common
        submit: "Submit",
        cancel: "Cancel",
        confirm: "Confirm",
        yes: "Yes",
        no: "No",
        loading: "Loading...",
        error: "Error",
        success: "Success",
        close: "Close",
        save: "Save",
        delete: "Delete",
        edit: "Edit",
        view: "View",
        download: "Download",
        
        // Alerts & Messages
        confirmDelete: "Are you sure you want to delete this complaint? This action cannot be undone.",
        confirmDownload: "Download PDF report for this complaint?",
        confirmExport: "Generate and download PDF summary of all complaints?",
        enterTicketId: "Enter Ticket ID (e.g., CMP-20260310-0001):",
        enterName: "Please enter your name",
        selectDepartment: "Please select a department",
        enterDescription: "Please enter complaint description",
        enterLocation: "Please enter location or select on map",
        fillAllFields: "Please fill all required fields",
        photoUploaded: "Photo uploaded successfully",
        photoRemoved: "Photo removed",
        statusUpdated: "Status updated successfully to",
        deleteSuccess: "Complaint deleted successfully!",
        updateError: "Error updating status",
        deleteError: "Error deleting complaint",
        locationError: "Unable to get your location. Please enter manually.",
        imageError: "Invalid image file. Please upload JPEG, PNG, or JPG only.",
        imageSizeError: "File size exceeds 5MB limit.",
        selectStatus: "Select status"
    },
    
    hi: {
        // Navigation
        navHome: "मुख्य पृष्ठ",
        navDashboard: "डैशबोर्ड",
        navComplaint: "शिकायत दर्ज करें",
        navTrack: "शिकायत ट्रैक करें",
        navAdmin: "व्यवस्थापक",
        navLanguage: "भाषा",
        
        // Home Page
        homeTitle: "शहरी शासन पोर्टल",
        homeSubtitle: "नागरिकों को सशक्त बनाना, बेहतर शहर बनाना",
        homeWelcome: "स्मार्ट नागरिक जुड़ाव मंच में आपका स्वागत है",
        homeDescription: "मुद्दों की रिपोर्ट करें, शिकायतों को ट्रैक करें, और अपने समुदाय में शहरी सेवाओं को बेहतर बनाने में मदद करें।",
        homeFileComplaint: "शिकायत दर्ज करें",
        homeTrackComplaint: "शिकायत ट्रैक करें",
        homeViewDashboard: "डैशबोर्ड देखें",
        homeFeature1Title: "आसान रिपोर्टिंग",
        homeFeature1Desc: "फोटो, स्थान और विस्तृत विवरण के साथ शिकायतें जमा करें",
        homeFeature2Title: "रीयल-टाइम ट्रैकिंग",
        homeFeature2Desc: "विशिष्ट टिकट आईडी के साथ अपनी शिकायत की स्थिति ट्रैक करें",
        homeFeature3Title: "पारदर्शी प्रक्रिया",
        homeFeature3Desc: "समाधान प्रगति की निगरानी करें और पीडीएफ रिपोर्ट डाउनलोड करें",
        homeFeature4Title: "स्मार्ट एआई सहायक",
        homeFeature4Desc: "हमारे चैटबॉट का उपयोग करके संपत्ति कर प्रश्नों में तुरंत सहायता प्राप्त करें",
        
        // Complaint Form
        complaintTitle: "शिकायत दर्ज करें",
        complaintSubtitle: "अपने क्षेत्र में नागरिक मुद्दों की रिपोर्ट करें",
        complaintName: "आपका नाम",
        complaintNamePlaceholder: "अपना पूरा नाम दर्ज करें",
        complaintDepartment: "विभाग",
        complaintDeptSelect: "विभाग चुनें",
        complaintDeptRoads: "सड़क और परिवहन",
        complaintDeptWater: "जल आपूर्ति",
        complaintDeptElectricity: "बिजली",
        complaintDeptSanitation: "स्वच्छता",
        complaintDeptOther: "अन्य",
        complaintDescription: "शिकायत विवरण",
        complaintDescPlaceholder: "समस्या का विस्तार से वर्णन करें...",
        complaintLocation: "स्थान",
        complaintLocationLabel: "स्थान/पता",
        complaintLocationPlaceholder: "स्थान दर्ज करें या मानचित्र का उपयोग करें",
        complaintUseLocation: "वर्तमान स्थान उपयोग करें",
        complaintLatitude: "अक्षांश",
        complaintLongitude: "देशांतर",
        complaintMapInstruction: "स्थान चुनने के लिए मानचित्र पर क्लिक करें",
        complaintEvidence: "सबूत फोटो अपलोड करें",
        complaintEvidenceNote: "अधिकतम फ़ाइल आकार: 5MB (केवल JPEG, PNG, JPG)",
        complaintRemoveImage: "छवि हटाएं",
        complaintSubmit: "शिकायत जमा करें",
        complaintSubmitting: "जमा हो रहा है...",
        complaintSuccess: "शिकायत सफलतापूर्वक जमा की गई!",
        complaintTicketId: "आपकी टिकट आईडी",
        complaintError: "शिकायत जमा करने में त्रुटि",
        
        // Dashboard
        dashboardTitle: "व्यवस्थापक शिकायत डैशबोर्ड",
        dashboardSubtitle: "सभी नागरिक शिकायतों की निगरानी और प्रबंधन करें",
        dashboardRefresh: "रिफ्रेश करें",
        dashboardTotal: "कुल शिकायतें",
        dashboardPending: "लंबित",
        dashboardInProgress: "प्रगति में",
        dashboardResolved: "हल हुई",
        dashboardPriorityTitle: "प्राथमिकता के अनुसार",
        dashboardCritical: "गंभीर",
        dashboardHigh: "उच्च",
        dashboardMedium: "मध्यम",
        dashboardLow: "कम",
        dashboardAllComplaints: "सभी शिकायतें",
        dashboardSearchPlaceholder: "शिकायतें खोजें...",
        dashboardSearchTicket: "टिकट खोजें",
        dashboardExportPDF: "पीडीएफ निर्यात करें",
        dashboardAllStatus: "सभी स्थिति",
        dashboardTableSr: "क्र.सं.",
        dashboardTableTicket: "टिकट आईडी",
        dashboardTableName: "नाम",
        dashboardTableDept: "विभाग",
        dashboardTableDesc: "विवरण",
        dashboardTablePriority: "प्राथमिकता",
        dashboardTableStatus: "स्थिति",
        dashboardTableActions: "क्रियाएं",
        dashboardNoComplaints: "कोई शिकायत नहीं मिली",
        dashboardLoading: "शिकायतें लोड हो रही हैं...",
        dashboardView: "विवरण देखें",
        dashboardDownloadPDF: "पीडीएफ डाउनलोड करें",
        dashboardUpdate: "स्थिति अपडेट करें",
        dashboardDelete: "हटाएं",
        dashboardChartTitle: "विभाग के अनुसार शिकायतें",
        
        // Tracking
        trackTitle: "अपनी शिकायत ट्रैक करें",
        trackSubtitle: "शिकायत की स्थिति जांचने के लिए अपनी टिकट आईडी दर्ज करें",
        trackTicketId: "टिकट आईडी",
        trackTicketPlaceholder: "टिकट आईडी दर्ज करें (उदा. CMP-20260310-0001)",
        trackSearchBtn: "शिकायत ट्रैक करें",
        trackSearching: "खोज रहे हैं...",
        trackFound: "शिकायत मिल गई!",
        trackNotFound: "टिकट आईडी के साथ शिकायत नहीं मिली",
        trackName: "नाम",
        trackDepartment: "विभाग",
        trackDescription: "विवरण",
        trackLocation: "स्थान",
        trackCoordinates: "निर्देशांक",
        trackViewMap: "मानचित्र देखें",
        trackEvidence: "सबूत फोटो",
        trackClickImage: "पूर्ण आकार देखने के लिए छवि पर क्लिक करें",
        trackPriority: "प्राथमिकता",
        trackStatus: "स्थिति",
        trackDate: "जमा तिथि",
        trackDownloadPDF: "पीडीएफ रिपोर्ट डाउनलोड करें",
        
        // Status & Priority
        statusPending: "लंबित",
        statusInProgress: "प्रगति में",
        statusResolved: "हल हुई",
        statusRejected: "अस्वीकृत",
        priorityCritical: "गंभीर",
        priorityHigh: "उच्च",
        priorityMedium: "मध्यम",
        priorityLow: "कम",
        
        // Common
        submit: "जमा करें",
        cancel: "रद्द करें",
        confirm: "पुष्टि करें",
        yes: "हां",
        no: "नहीं",
        loading: "लोड हो रहा है...",
        error: "त्रुटि",
        success: "सफलता",
        close: "बंद करें",
        save: "सहेजें",
        delete: "हटाएं",
        edit: "संपादित करें",
        view: "देखें",
        download: "डाउनलोड करें",
        
        // Alerts & Messages
        confirmDelete: "क्या आप वाकई इस शिकायत को हटाना चाहते हैं? यह क्रिया पूर्ववत नहीं की जा सकती।",
        confirmDownload: "इस शिकायत के लिए पीडीएफ रिपोर्ट डाउनलोड करें?",
        confirmExport: "सभी शिकायतों की पीडीएफ सारांश उत्पन्न और डाउनलोड करें?",
        enterTicketId: "टिकट आईडी दर्ज करें (उदा. CMP-20260310-0001):",
        enterName: "कृपया अपना नाम दर्ज करें",
        selectDepartment: "कृपया एक विभाग चुनें",
        enterDescription: "कृपया शिकायत विवरण दर्ज करें",
        enterLocation: "कृपया स्थान दर्ज करें या मानचित्र पर चुनें",
        fillAllFields: "कृपया सभी आवश्यक फ़ील्ड भरें",
        photoUploaded: "फोटो सफलतापूर्वक अपलोड की गई",
        photoRemoved: "फोटो हटा दी गई",
        statusUpdated: "स्थिति सफलतापूर्वक अपडेट की गई",
        deleteSuccess: "शिकायत सफलतापूर्वक हटाई गई!",
        updateError: "स्थिति अपडेट करने में त्रुटि",
        deleteError: "शिकायत हटाने में त्रुटि",
        locationError: "आपका स्थान प्राप्त करने में असमर्थ। कृपया मैन्युअल रूप से दर्ज करें।",
        imageError: "अमान्य छवि फ़ाइल। कृपया केवल JPEG, PNG, या JPG अपलोड करें।",
        imageSizeError: "फ़ाइल का आकार 5MB की सीमा से अधिक है।",
        selectStatus: "स्थिति चुनें"
    },
    
    mr: {
        // Navigation (Marathi)
        navHome: "मुख्यपृष्ठ",
        navDashboard: "डॅशबोर्ड",
        navComplaint: "तक्रार नोंदवा",
        navTrack: "तक्रार ट्रॅक करा",
        navAdmin: "प्रशासक",
        navLanguage: "भाषा",
        
        // Home Page
        homeTitle: "शहरी शासन पोर्टल",
        homeSubtitle: "नागरिकांना सशक्त करणे, उत्तम शहरे बांधणे",
        homeWelcome: "स्मार्ट नागरी सहभाग मंचावर आपले स्वागत आहे",
        homeDescription: "समस्यांचा अहवाल द्या, तक्रारी ट्रॅक करा आणि आपल्या समुदायातील शहरी सेवा सुधारण्यास मदत करा।",
        homeFileComplaint: "तक्रार नोंदवा",
        homeTrackComplaint: "तक्रार ट्रॅक करा",
        homeViewDashboard: "डॅशबोर्ड पहा",
        homeFeature1Title: "सोपे अहवाल",
        homeFeature1Desc: "फोटो, स्थान आणि तपशीलवार वर्णनासह तक्रार सबमिट करा",
        homeFeature2Title: "रिअल-टाइम ट्रॅकिंग",
        homeFeature2Desc: "अद्वितीय तिकीट आयडीसह आपल्या तक्रारीची स्थिती ट्रॅक करा",
        homeFeature3Title: "पारदर्शक प्रक्रिया",
        homeFeature3Desc: "निराकरण प्रगतीचे निरीक्षण करा आणि पीडीएफ अहवाल डाउनलोड करा",
        homeFeature4Title: "स्मार्ट एआय सहाय्यक",
        homeFeature4Desc: "आमच्या चॅटबॉट वापरून मालमत्ता कर प्रश्नांसाठी त्वरित मदत मिळवा",
        
        // Complaint Form
        complaintTitle: "तक्रार नोंदवा",
        complaintSubtitle: "आपल्या क्षेत्रातील नागरी समस्यांचा अहवाल द्या",
        complaintName: "तुमचे नाव",
        complaintNamePlaceholder: "तुमचे पूर्ण नाव प्रविष्ट करा",
        complaintDepartment: "विभाग",
        complaintDeptSelect: "विभाग निवडा",
        complaintDeptRoads: "रस्ते आणि वाहतूक",
        complaintDeptWater: "पाणीपुरवठा",
        complaintDeptElectricity: "वीज",
        complaintDeptSanitation: "स्वच्छता",
        complaintDeptOther: "इतर",
        complaintDescription: "तक्रार वर्णन",
        complaintDescPlaceholder: "समस्येचे तपशीलवार वर्णन करा...",
        complaintLocation: "स्थान",
        complaintLocationLabel: "स्थान/पत्ता",
        complaintLocationPlaceholder: "स्थान प्रविष्ट करा किंवा नकाशा वापरा",
        complaintUseLocation: "वर्तमान स्थान वापरा",
        complaintLatitude: "अक्षांश",
        complaintLongitude: "रेखांश",
        complaintMapInstruction: "स्थान निवडण्यासाठी नकाशावर क्लिक करा",
        complaintEvidence: "पुरावा फोटो अपलोड करा",
        complaintEvidenceNote: "कमाल फाइल आकार: 5MB (फक्त JPEG, PNG, JPG)",
        complaintRemoveImage: "प्रतिमा काढा",
        complaintSubmit: "तक्रार सबमिट करा",
        complaintSubmitting: "सबमिट करत आहे...",
        complaintSuccess: "तक्रार यशस्वीरित्या सबमिट केली!",
        complaintTicketId: "तुमचा तिकीट आयडी",
        complaintError: "तक्रार सबमिट करताना त्रुटी",
        
        // Dashboard
        dashboardTitle: "प्रशासक तक्रार डॅशबोर्ड",
        dashboardSubtitle: "सर्व नागरिक तक्रारींचे निरीक्षण आणि व्यवस्थापन करा",
        dashboardRefresh: "ताजे करा",
        dashboardTotal: "एकूण तक्रारी",
        dashboardPending: "प्रलंबित",
        dashboardInProgress: "प्रगतीत",
        dashboardResolved: "निराकरण झाले",
        dashboardPriorityTitle: "प्राधान्यानुसार",
        dashboardCritical: "गंभीर",
        dashboardHigh: "उच्च",
        dashboardMedium: "मध्यम",
        dashboardLow: "कमी",
        dashboardAllComplaints: "सर्व तक्रारी",
        dashboardSearchPlaceholder: "तक्रारी शोधा...",
        dashboardSearchTicket: "तिकीट शोधा",
        dashboardExportPDF: "पीडीएफ निर्यात करा",
        dashboardAllStatus: "सर्व स्थिती",
        dashboardTableSr: "अ.क्र.",
        dashboardTableTicket: "तिकीट आयडी",
        dashboardTableName: "नाव",
        dashboardTableDept: "विभाग",
        dashboardTableDesc: "वर्णन",
        dashboardTablePriority: "प्राधान्य",
        dashboardTableStatus: "स्थिती",
        dashboardTableActions: "क्रिया",
        dashboardNoComplaints: "कोणत्याही तक्रारी आढळल्या नाहीत",
        dashboardLoading: "तक्रारी लोड होत आहेत...",
        dashboardView: "तपशील पहा",
        dashboardDownloadPDF: "पीडीएफ डाउनलोड करा",
        dashboardUpdate: "स्थिती अपडेट करा",
        dashboardDelete: "हटवा",
        dashboardChartTitle: "विभागानुसार तक्रारी",
        
        // Tracking
        trackTitle: "तुमची तक्रार ट्रॅक करा",
        trackSubtitle: "तक्रारीची स्थिती तपासण्यासाठी तुमचा तिकीट आयडी प्रविष्ट करा",
        trackTicketId: "तिकीट आयडी",
        trackTicketPlaceholder: "तिकीट आयडी प्रविष्ट करा (उदा. CMP-20260310-0001)",
        trackSearchBtn: "तक्रार ट्रॅक करा",
        trackSearching: "शोधत आहे...",
        trackFound: "तक्रार सापडली!",
        trackNotFound: "तिकीट आयडीसह तक्रार सापडली नाही",
        trackName: "नाव",
        trackDepartment: "विभाग",
        trackDescription: "वर्णन",
        trackLocation: "स्थान",
        trackCoordinates: "निर्देशांक",
        trackViewMap: "नकाशा पहा",
        trackEvidence: "पुरावा फोटो",
        trackClickImage: "पूर्ण आकार पाहण्यासाठी प्रतिमेवर क्लिक करा",
        trackPriority: "प्राधान्य",
        trackStatus: "स्थिती",
        trackDate: "सबमिट तारीख",
        trackDownloadPDF: "पीडीएफ अहवाल डाउनलोड करा",
        
        // Status & Priority
        statusPending: "प्रलंबित",
        statusInProgress: "प्रगतीत",
        statusResolved: "निराकरण झाले",
        statusRejected: "नाकारले",
        priorityCritical: "गंभीर",
        priorityHigh: "उच्च",
        priorityMedium: "मध्यम",
        priorityLow: "कमी",
        
        // Common
        submit: "सबमिट करा",
        cancel: "रद्द करा",
        confirm: "पुष्टी करा",
        yes: "होय",
        no: "नाही",
        loading: "लोड होत आहे...",
        error: "त्रुटी",
        success: "यश",
        close: "बंद करा",
        save: "जतन करा",
        delete: "हटवा",
        edit: "संपादित करा",
        view: "पहा",
        download: "डाउनलोड करा",
        
        // Alerts & Messages
        confirmDelete: "तुम्हाला खात्री आहे की तुम्ही ही तक्रार हटवू इच्छिता? ही क्रिया पूर्ववत करता येणार नाही.",
        confirmDownload: "या तक्रारीसाठी पीडीएफ अहवाल डाउनलोड करायचा?",
        confirmExport: "सर्व तक्रारींचा पीडीएफ सारांश तयार करा आणि डाउनलोड करा?",
        enterTicketId: "तिकीट आयडी प्रविष्ट करा (उदा. CMP-20260310-0001):",
        enterName: "कृपया तुमचे नाव प्रविष्ट करा",
        selectDepartment: "कृपया विभाग निवडा",
        enterDescription: "कृपया तक्रार वर्णन प्रविष्ट करा",
        enterLocation: "कृपया स्थान प्रविष्ट करा किंवा नकाशावर निवडा",
        fillAllFields: "कृपया सर्व आवश्यक फील्ड भरा",
        photoUploaded: "फोटो यशस्वीरित्या अपलोड केला",
        photoRemoved: "फोटो काढला",
        statusUpdated: "स्थिती यशस्वीरित्या अपडेट केली",
        deleteSuccess: "तक्रार यशस्वीरित्या हटवली!",
        updateError: "स्थिती अपडेट करताना त्रुटी",
        deleteError: "तक्रार हटवताना त्रुटी",
        locationError: "तुमचे स्थान मिळवू शकलो नाही. कृपया व्यक्तिचलितपणे प्रविष्ट करा.",
        imageError: "अवैध प्रतिमा फाइल. कृपया फक्त JPEG, PNG किंवा JPG अपलोड करा.",
        imageSizeError: "फाइल आकार 5MB मर्यादा ओलांडतो.",
        selectStatus: "स्थिती निवडा"
    }
};

// Language switcher functionality
class LanguageSwitcher {
    constructor() {
        this.currentLang = localStorage.getItem('selectedLanguage') || 'en';
        this.init();
    }
    
    init() {
        // Apply saved language on page load
        this.applyTranslations();
    }
    
    changeLanguage(lang) {
        if (translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('selectedLanguage', lang);
            this.applyTranslations();
        }
    }
    
    applyTranslations() {
        const t = translations[this.currentLang];
        
        // Find all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (t[key]) {
                // Check if it's an input/textarea placeholder
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    if (element.hasAttribute('placeholder')) {
                        element.setAttribute('placeholder', t[key]);
                    } else {
                        element.value = t[key];
                    }
                } 
                // Check if it's a button
                else if (element.tagName === 'BUTTON') {
                    // Preserve icons if present
                    const icon = element.querySelector('i');
                    if (icon) {
                        element.innerHTML = '';
                        element.appendChild(icon);
                        element.appendChild(document.createTextNode(' ' + t[key]));
                    } else {
                        element.textContent = t[key];
                    }
                }
                // Check if it's a select option
                else if (element.tagName === 'OPTION') {
                    element.textContent = t[key];
                }
                // For other elements
                else {
                    element.textContent = t[key];
                }
            }
        });
        
        // Update language selector dropdown
        const langSelector = document.getElementById('languageSelector');
        if (langSelector) {
            langSelector.value = this.currentLang;
        }
        
        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang;
    }
    
    getText(key) {
        return translations[this.currentLang][key] || key;
    }
}

// Initialize language switcher globally
let langSwitcher;
document.addEventListener('DOMContentLoaded', () => {
    langSwitcher = new LanguageSwitcher();
});

// Helper function to get translated text
function t(key) {
    return langSwitcher ? langSwitcher.getText(key) : key;
}
