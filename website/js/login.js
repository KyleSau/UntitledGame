var enableLoginFunctionsGlobal = true;
var loginRememberMeButtonGlobal = true;

function hideAllLoginScreens() {
    document["getElementById"]("login-panel-2-buttons")["style"]["display"] = "none";
    document["getElementById"]("login-panel-login")["style"]["display"] = "none";
    document["getElementById"]("back-login-arrow")["style"]["display"] = "none";
    document["getElementById"]("newaccount-panel-login")["style"]["display"] = "none";
}

function showLoginScreen() {
    hideAllLoginScreens();
    hideGame();
    document["getElementById"]("login-message")["style"]["display"] = "none"
    document["getElementById"]("login-screen")["style"]["display"] = "";
    document["getElementById"]("login-panel-login")["style"]["display"] = "";
    document["getElementById"]("back-login-arrow")["style"]["display"] = ""
}

function clicksBackLoginArrow() {
    hideAllLoginScreens();
    document["getElementById"]("login-panel-2-buttons")["style"]["display"] = ""
}

function showNewAccountScreen(_0x257E4) {
    hideAllLoginScreens();
    document["getElementById"]("newaccount-panel-login")["style"]["display"] = "";
    document["getElementById"]("back-login-arrow")["style"]["display"] = "";
    if (_0x257E4 > 0) {
        document["getElementById"]("login-form-referal-area")["style"]["display"] = "";
        document["getElementById"]("login-form-referal-area")["innerHTML"] = "<b>Referral ID:</b> " + _0x257E4
    } else {
        document["getElementById"]("login-form-referal-area")["style"]["display"] = "none"
    }
}

function clicksConfirmCreateAccountButton() {
        showLoginMessageAsConnecting();
        var _0x1A1BC = 0;
        var user = document["getElementById"]("newaccount-username-text-box")["value"];
        var pass1 = document["getElementById"]("newaccount-password-text-box")["value"];
        var pass2 = document["getElementById"]("newaccount-confirm-password-text-box")["value"];
	console.log("pass1: ", pass1);
        console.log("pass2: ", pass2);
	console.log("equals operand: ", pass1 == pass2);
	console.log("localeCompare: ", pass1.localeCompare(pass2));
	console.log("ocaleCompare Boolean: ", pass1.localeCompare(pass2) == 0);
	if(pass1.localeCompare(pass2) == 0) {
		let loginPkt = {packet:"register", username:user, password:pass1};
		webSocket.send(JSON.stringify(loginPkt));	
	} else {
		document["getElementById"]("login-message")["innerHTML"] = "Passwords do not match!";
	}
}

function clicksConfirmLoginButtonToPlay() {
//might need to put this back who knows
    //if (enableLoginFunctionsGlobal) {
        showLoginMessageAsConnecting();
        var _0x1A2C1 = 1;
        if (!loginRememberMeButtonGlobal) {
            _0x1A2C1 = 0
        };
        var user = document["getElementById"]("login-username-text-box")["value"];
        var pass = document["getElementById"]("login-password-text-box")["value"];
	let loginPkt = {packet:"login", username:user, password:pass};
        sendBytes(JSON.stringify(loginPkt));
    //}
}

function showLoginMessageAsConnecting() {
    enableLoginFunctionsGlobal = false;
    document["getElementById"]("login-message")["style"]["display"] = ""
    document["getElementById"]("login-message")["innerHTML"] = "Connecting..."
}

function showLoginMessageAsFailed() {
    enableLoginFunctionsGlobal = true;
    document["getElementById"]("login-message")["style"]["display"] = "";
    document["getElementById"]("login-message")["innerHTML"] = "Server Offline.<br />Please try again.";
    document["getElementById"]("login-server-offline-panel")["style"]["display"] = "";
    document["getElementById"]("main-login-panel-box-containing-all")["style"]["display"] = "none"
}

function clicksRememberMeButton() {
    if (loginRememberMeButtonGlobal) {
        loginRememberMeButtonGlobal = false
    } else {
        loginRememberMeButtonGlobal = true
    };
    if (loginRememberMeButtonGlobal) {
        document["getElementById"]("rememberMeIcon")["src"] = "images/rememberMeIconOn.png"
    } else {
        document["getElementById"]("rememberMeIcon")["src"] = "images/rememberMeIconOff.png"
    }
}

function displayGame() {
	hideAllLoginScreens();
	//added
    	document["getElementById"]("login-screen")["style"]["display"] = "none";
	document["getElementById"]("game-screen")["style"]["display"] = "";
	document["getElementById"]("top-status-bar")["style"]["display"] = "";	
}

function hideGame() {
	document["getElementById"]("game-screen")["style"]["display"] = "none";
	document["getElementById"]("top-status-bar")["style"]["display"] = "none";
}
